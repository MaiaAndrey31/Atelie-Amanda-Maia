// LoadingSpinner component
import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary', 
  text = '', 
  fullScreen = false,
  overlay = false 
}) => {
  // Tamanhos disponíveis
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Cores disponíveis
  const colors = {
    primary: 'border-pink-custom',
    secondary: 'border-purple-custom',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  // Classes base do spinner