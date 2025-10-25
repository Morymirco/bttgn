import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '', 
  disabled = false 
}: ButtonProps) {
  const baseClasses = "font-medium hover:opacity-90 transition-opacity rounded-full";
  
  const variantClasses = {
    primary: "text-white",
    secondary: "text-white", 
    outline: "text-orange-500 border-2 border-orange-500 bg-transparent"
  };

  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const colorStyles = {
    primary: { backgroundColor: '#F4A301' },
    secondary: { backgroundColor: '#4473c5' },
    outline: {}
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const buttonStyles = {
    ...colorStyles[variant],
    borderRadius: '30px'
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        style={buttonStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={buttonStyles}
    >
      {children}
    </button>
  );
}
