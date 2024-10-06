import React from 'react';

export const Button = ({ children, className = '', onClick, variant = 'default', ...props }) => {
  const baseStyles = `px-4 py-2 rounded-lg font-medium transition-all focus:outline-none ${className}`;
  const variantStyles = {
    default: 'bg-yellow-400 text-white hover:bg-yellow-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-200',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
