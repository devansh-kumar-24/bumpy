import React, { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Camera, MapPin, X, ChevronUp, ChevronDown, Send } from 'lucide-react';
import { set, get, keys } from 'idb-keyval';  // IndexedDB wrapper

export default function GeotaggedImageCapture() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [mapHeight, setMapHeight] = useState(300);
  const [potholeData, setPotholeData] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  const dragStartY = useRef(null);

  // Function to start the camera stream
  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error("Error accessing the camera: ", err));
  };

  useEffect(() => {
    startCamera(); // Initialize camera stream on mount

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7-op1-7632UrDIlcNcGYnHuXHGkataLU&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15
        });
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Captured Location'
        });
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [location]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL('image/png');
        setCapturedImage(imageDataUrl);
      }
    }

    // Enhanced geolocation accuracy
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        error => console.error("Error retrieving location:", error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setLocation(null);
    startCamera();  // Restart the camera after reset
  };

  const handleSubmit = async () => {
    if (!capturedImage || !location) return;

    // Retrieve all keys from IndexedDB to check for duplicate geotagging
    const allKeys = await keys();
    const potholeExists = await checkForDuplicateGeotag(location, allKeys);

    if (potholeExists) {
      console.log("Duplicate geotagging found. Pothole not saved.");
      return; // Do not save the duplicate entry
    }

    const uniqueKey = `${location.lat}-${location.lng}-${Date.now()}`;  // Generate unique key based on location and timestamp

    const newPotholeData = {
      capturedImage,
      location,
    };

    // Save the new pothole entry in IndexedDB
    set(uniqueKey, newPotholeData).then(() => {
      console.log('New pothole stored in IndexedDB:', newPotholeData);
      setPotholeData([...potholeData, newPotholeData]);
    });
  };

  // Function to check for duplicate geotagging
  const checkForDuplicateGeotag = async (newLocation, allKeys) => {
    for (let key of allKeys) {
      const storedData = await get(key);
      const distance = getDistanceBetweenCoords(newLocation, storedData.location);
      if (distance < 5) { // Distance threshold to consider it a duplicate (5 meters)
        return true;
      }
    }
    return false;
  };

  // Calculate distance between two geotagged locations
  const getDistanceBetweenCoords = (loc1, loc2) => {
    const R = 6371e3; // Earth radius in meters
    const lat1 = loc1.lat * (Math.PI / 180);
    const lat2 = loc2.lat * (Math.PI / 180);
    const deltaLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
    const deltaLng = (loc2.lng - loc1.lng) * (Math.PI / 180);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters

    return distance;
  };

  const toggleMapExpansion = () => {
    setIsMapExpanded(!isMapExpanded);
    setMapHeight(isMapExpanded ? 300 : window.innerHeight - 100);  // Adjust as needed
  };

  const handleDragStart = (e) => {
    dragStartY.current = e.clientY;
  };

  const handleDrag = (e) => {
    if (dragStartY.current !== null) {
      const deltaY = dragStartY.current - e.clientY;
      setMapHeight(prevHeight => Math.max(100, Math.min(window.innerHeight - 100, prevHeight + deltaY)));
      dragStartY.current = e.clientY;
    }
  };

  const handleDragEnd = () => {
    dragStartY.current = null;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Geotagged Image Capture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {!capturedImage ? (
            <>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <Button onClick={capturePhoto} className="w-full">
                <Camera className="mr-2 h-4 w-4" /> Capture Photo
              </Button>
            </>
          ) : (
            <>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={resetCapture} variant="destructive" className="flex-1">
                  <X className="mr-2 h-4 w-4" /> Reset Capture
                </Button>
                <Button onClick={handleSubmit} className="flex-1">
                  <Send className="mr-2 h-4 w-4" /> Submit
                </Button>
              </div>
            </>
          )}
          <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Location</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMapExpansion}
              className="p-1"
            >
              {isMapExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            </Button>
          </div>
          {location ? (
            <>
              <div
                ref={mapRef}
                className="bg-gray-100 rounded-lg"
                style={{ height: `${mapHeight}px`, transition: 'height 0.3s ease-in-out' }}
              />
              <div
                className="h-2 bg-gray-200 rounded-full cursor-ns-resize"
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              />
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>
                  Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}, Accuracy: {location.accuracy} meters
                </span>
              </div>
            </>
          ) : (
            <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Capture an image to see the location
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
