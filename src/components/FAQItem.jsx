import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-black">{question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
