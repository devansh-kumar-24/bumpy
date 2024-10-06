import React, { useState, useEffect, useRef } from 'react';
import { keys, getMany } from 'idb-keyval';  // IndexedDB wrapper
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, XCircle } from 'lucide-react';

export default function DisplayGeotaggedPotholes() {
  const [geotaggedData, setGeotaggedData] = useState([]);
  const mapRef = useRef(null);

  // Function to retrieve all geotagged data from IndexedDB
  useEffect(() => {
    // Retrieve all keys and fetch associated data
    keys()
      .then((allKeys) => {
        // Fetch all the entries corresponding to the keys
        getMany(allKeys).then((allData) => {
          const validData = allData.filter(data => data && data.location); // Filter valid data
          setGeotaggedData(validData);
        });
      })
      .catch((err) => console.error('Error retrieving data from IndexedDB:', err));
  }, []);

  // Initialize the Google Map and show all potholes as markers
  useEffect(() => {
    if (geotaggedData.length > 0 && mapRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7-op1-7632UrDIlcNcGYnHuXHGkataLU&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = () => {
        // Create a map centered on the first pothole location
        const map = new window.google.maps.Map(mapRef.current, {
          center: geotaggedData[0].location,
          zoom: 15,
        });

        // Loop through all the geotagged data to place markers
        geotaggedData.forEach((pothole, index) => {
          // Custom image icon as marker
          const imageIcon = {
            url: pothole.capturedImage, // Use the captured image as the marker
            scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
          };

          // Add a marker for each pothole
          new window.google.maps.Marker({
            position: pothole.location,
            map: map,
            title: `Pothole ${index + 1}`,
            icon: imageIcon,
            label: {
              text: 'Pothole',
              color: 'red',
              fontWeight: 'bold',
            },
          });
        });
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [geotaggedData]);

  if (geotaggedData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        No geotagged potholes available
      </div>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Pothole Locations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="text-lg font-semibold">Map View</div>
          <div
            ref={mapRef}
            className="bg-gray-100 rounded-lg"
            style={{ height: '400px' }}
          />
          {geotaggedData.map((pothole, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>
                Pothole {index + 1} - Lat: {pothole.location.lat.toFixed(6)}, Lng: {pothole.location.lng.toFixed(6)}, Accuracy: {pothole.location.accuracy} meters
              </span>
            </div>
          ))}
        </div>
        <Button
          variant="destructive"
          onClick={() => setGeotaggedData([])}
          className="w-full"
        >
          <XCircle className="mr-2 h-4 w-4" />
          Clear Data
        </Button>
      </CardContent>
    </Card>
  );
}
