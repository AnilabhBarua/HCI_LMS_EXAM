import React from 'react';
import { motion } from 'framer-motion';
import { FileQuestion, Home } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="text-center">
        <FileQuestion size={80} className="mx-auto text-gray-400 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" icon={<Home size={18} />}>
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;