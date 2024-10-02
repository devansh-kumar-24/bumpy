import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
      <button
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat
      </button>
      {isOpen && (
        <div className="w-56 sm:w-64 h-64 sm:h-80 bg-white rounded-lg shadow-lg mt-4 p-4 transition-transform transform ease-in-out duration-300">
          <p className="text-black">Hi! How can I help you today?</p>
          {/* Additional chatbot interactions can be added here */}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
