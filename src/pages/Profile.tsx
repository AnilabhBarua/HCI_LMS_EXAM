import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  User, 
  Mail, 
  Edit, 
  Award, 
  Clock,
  Calendar,
  BookOpen
} from 'lucide-react';
import { currentUser, enrolledCourses } from '../data/mockData';

const Profile: React.FC = () => {
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

  const completedCourses = enrolledCourses.filter(course => course.progress === 100);
  const inProgressCourses = enrolledCourses.filter(course => course.progress > 0 && course.progress < 100);

  const stats = [
    {
      label: 'Enrolled Courses',
      value: enrolledCourses.length,
      icon: <BookOpen size={20} className="text-blue-500" />
    },
    {
      label: 'Completed',
      value: completedCourses.length,
      icon: <Award size={20} className="text-green-500" />
    },
    {
      label: 'In Progress',
      value: inProgressCourses.length,
      icon: <Clock size={20} className="text-amber-500" />
    },
    {
      label: 'Joined',
      value: 'Mar 2025',
      icon: <Calendar size={20} className="text-purple-500" />
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-bold text-gray-800">
        Profile
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="px-6 pb-6">
              <div className="flex justify-center -mt-12">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-semibold text-gray-800">{currentUser.name}</h3>
                <p className="text-gray-600">{currentUser.email}</p>
                <p className="mt-1 inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 capitalize">
                  {currentUser.role}
                </p>
              </div>
              <div className="mt-6">
                <Button variant="outline" fullWidth icon={<Edit size={16} />}>
                  Edit Profile
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Card */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-gray-100 rounded-full">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800">{stat.value}</h4>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Profile Details and Courses */}
        <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                Edit
              </Button>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="py-3 flex">
                <div className="w-1/3 text-gray-500 flex items-center">
                  <User size={16} className="mr-2" /> Full Name
                </div>
                <div className="w-2/3 text-gray-800 font-medium">{currentUser.name}</div>
              </div>
              <div className="py-3 flex">
                <div className="w-1/3 text-gray-500 flex items-center">
                  <Mail size={16} className="mr-2" /> Email
                </div>
                <div className="w-2/3 text-gray-800 font-medium">{currentUser.email}</div>
              </div>
              <div className="py-3 flex">
                <div className="w-1/3 text-gray-500">Role</div>
                <div className="w-2/3 text-gray-800 font-medium capitalize">{currentUser.role}</div>
              </div>
              <div className="py-3 flex">
                <div className="w-1/3 text-gray-500">Language</div>
                <div className="w-2/3 text-gray-800 font-medium">English</div>
              </div>
              <div className="py-3 flex">
                <div className="w-1/3 text-gray-500">Time Zone</div>
                <div className="w-2/3 text-gray-800 font-medium">Pacific Standard Time (PST)</div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array(4).fill(0).map((_, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-2 ${
                    index < 2 ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Award size={32} />
                  </div>
                  <h4 className="font-medium text-gray-800">
                    {index === 0 && 'First Course'}
                    {index === 1 && 'Fast Learner'}
                    {index === 2 && 'Course Master'}
                    {index === 3 && 'Perfect Score'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {index < 2 ? 'Earned' : 'Locked'}
                  </p>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-9 h-9 flex items-start justify-center">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Completed lesson <span className="font-medium">CSS Box Model</span></p>
                  <p className="text-sm text-gray-500">Introduction to Web Development • 2 days ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-9 h-9 flex items-start justify-center">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Started course <span className="font-medium">Data Science with Python</span></p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-9 h-9 flex items-start justify-center">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Earned achievement <span className="font-medium">Fast Learner</span></p>
                  <p className="text-sm text-gray-500">5 days ago</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;