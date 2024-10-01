import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat
      </button>
      {isOpen && (
        <div className="w-64 h-80 bg-white rounded-lg shadow-lg mt-4 p-4">
          <p className="text-black">Hi! How can I help you today?</p>
          {/* Add more chatbot interactions here */}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
