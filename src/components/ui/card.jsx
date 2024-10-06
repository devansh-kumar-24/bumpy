import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`border-b pb-2 mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
};
