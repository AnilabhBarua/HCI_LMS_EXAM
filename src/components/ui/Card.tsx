import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  as: Component = motion.div
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm overflow-hidden';
  const hoverableClasses = hoverable 
    ? 'transform transition duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer' 
    : '';
  
  return (
    <Component
      className={`${baseClasses} ${hoverableClasses} ${className}`}
      onClick={onClick}
      whileHover={hoverable ? { y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
};

export default Card;