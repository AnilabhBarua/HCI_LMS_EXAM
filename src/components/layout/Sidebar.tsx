import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Book, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <LayoutDashboard size={30} />
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: <Book size={20} />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <User size={20} />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings size={20} />
  }
];

const Sidebar: React.FC<SidebarProps> = ({ 
  isMobileSidebarOpen, 
  toggleMobileSidebar 
}) => {
  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-30 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 md:static md:w-64 md:min-h-screen`}
        initial={false}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <GraduationCap size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">EduLearn</h1>
          </div>
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMobileSidebar}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center text-sm px-4 py-2.5 rounded-md transition-colors duration-200 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleMobileSidebar();
                    }
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button className="flex items-center text-sm px-4 py-2.5 w-full rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200">
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;