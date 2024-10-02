import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-3 sm:py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-base sm:text-lg text-black">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
      {isOpen && (
        <div className="pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
