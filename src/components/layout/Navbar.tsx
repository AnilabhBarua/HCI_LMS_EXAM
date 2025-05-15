import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { currentUser } from '../../data/mockData';

interface NavbarProps {
  toggleMobileSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMobileSidebar }) => {
  return (
    <motion.header 
      className="bg-white border-b border-gray-200 sticky top-0 z-10"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMobileSidebar}
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-grow max-w-md mx-4 relative">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, lessons..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center space-x-4">
          {/* Notification */}
          <button className="text-gray-500 hover:text-gray-700 relative focus:outline-none">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              3
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
              <p className="text-xs text-gray-500">{currentUser.role}</p>
            </div>
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;