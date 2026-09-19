import React, { ReactNode } from 'react';
import './src/styles/css/export.css';
import  './src/styles/js/dist/export.js';

export interface MessageProps {
  type: 'error' | 'warn' | 'info' | 'success' | 'inline';
  className?: string;
  children: ReactNode;
}

export const Message: React.FC<MessageProps> = ({ type, className = '', children }) => {
  return (
    <p className={`msg-${type} ${className}`.trim()}>
      {children}
    </p>
  );
};
