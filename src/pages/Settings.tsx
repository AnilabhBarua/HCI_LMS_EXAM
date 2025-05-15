import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Bell, Moon, Sun, Globe, Lock, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: darkMode ? <Moon size={18} /> : <Sun size={18} /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <Lock size={18} /> }
  ];
  
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-bold text-gray-800">
        Settings
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Tabs */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center w-full px-4 py-3 transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Settings Content */}
        <motion.div variants={itemVariants} className="md:col-span-3">
          {activeTab === 'account' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        defaultValue="Alex Johnson"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="anilabh.barua@gmail.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Language & Region</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="language" className="block text-sm text-gray-600 mb-1">Language</label>
                      <select
                        id="language"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timezone" className="block text-sm text-gray-600 mb-1">Timezone</label>
                      <select
                        id="timezone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="pst">Pacific Standard Time (PST)</option>
                        <option value="est">Eastern Standard Time (EST)</option>
                        <option value="utc">Coordinated Universal Time (UTC)</option>
                        <option value="ist">India Standard Time (IST)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary">Save Changes</Button>
                </div>
              </div>
            </Card>
          )}
          
          {activeTab === 'notifications' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Course updates</p>
                        <p className="text-xs text-gray-500">Receive updates for enrolled courses</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={emailNotifications} 
                          onChange={() => setEmailNotifications(!emailNotifications)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Announcements</p>
                        <p className="text-xs text-gray-500">Receive platform announcements</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Reminders</p>
                        <p className="text-xs text-gray-500">Receive reminders for upcoming deadlines</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Enable push notifications</p>
                        <p className="text-xs text-gray-500">Receive notifications in your browser</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={pushNotifications} 
                          onChange={() => setPushNotifications(!pushNotifications)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary">Save Preferences</Button>
                </div>
              </div>
            </Card>
          )}
          
          {activeTab === 'appearance' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Theme</h3>
                  <div className="flex space-x-4">
                    <Card 
                      className={`p-4 cursor-pointer ${!darkMode ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => setDarkMode(false)}
                    >
                      <div className="flex items-center justify-center h-16 bg-white border border-gray-200 rounded mb-2">
                        <Sun size={24} className="text-amber-500" />
                      </div>
                      <p className="text-center text-sm font-medium">Light</p>
                    </Card>
                    
                    <Card 
                      className={`p-4 cursor-pointer ${darkMode ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => setDarkMode(true)}
                    >
                      <div className="flex items-center justify-center h-16 bg-gray-800 border border-gray-700 rounded mb-2">
                        <Moon size={24} className="text-gray-100" />
                      </div>
                      <p className="text-center text-sm font-medium">Dark</p>
                    </Card>
                    
                    <Card className="p-4 cursor-pointer">
                      <div className="flex items-center justify-center h-16 bg-gradient-to-r from-gray-100 to-gray-800 border border-gray-200 rounded mb-2">
                        <div className="flex">
                          <Sun size={24} className="text-amber-500" />
                          <Moon size={24} className="text-gray-100" />
                        </div>
                      </div>
                      <p className="text-center text-sm font-medium">System</p>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Text Size</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">A</span>
                    <input 
                      type="range" 
                      min="1" 
                      max="3" 
                      defaultValue="2"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg">A</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary">Save Preferences</Button>
                </div>
              </div>
            </Card>
          )}
          
          {activeTab === 'privacy' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Privacy & Security</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm text-gray-600 mb-1">Current Password</label>
                      <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm text-gray-600 mb-1">New Password</label>
                      <input
                        type="password"
                        id="newPassword"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <Button variant="primary">Update Password</Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Account Privacy</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Show profile to other students</p>
                        <p className="text-xs text-gray-500">Allow others to see your profile and progress</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800">Allow data collection for personalization</p>
                        <p className="text-xs text-gray-500">Improve your learning experience with personalized recommendations</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary">Save Privacy Settings</Button>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-red-600 mb-2">Danger Zone</h3>
                  <Button variant="danger">Delete Account</Button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Settings;

// Add missing User component
import { User } from 'lucide-react';