import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bell, Calendar, Clock } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { Link } from 'react-router-dom';
import { enrolledCourses, announcements, upcomingTasks, currentUser } from '../data/mockData';

const Dashboard: React.FC = () => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Welcome Section */}
      <motion.section variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {currentUser.name}!</h1>
        <p className="text-blue-100 mb-4">Pick up where you left off with your learning journey.</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button 
            variant="primary" 
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Continue Learning
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-blue-700"
          >
            Browse Courses
          </Button>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Courses */}
        <motion.section variants={itemVariants} className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
            <Link to="/courses" className="text-blue-600 text-sm font-medium hover:underline flex items-center">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrolledCourses.slice(0, 4).map((course) => (
              <Card 
                key={course.id} 
                className="overflow-hidden" 
                hoverable
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <Clock size={14} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex-1 mr-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <ProgressBar progress={course.progress} color="bg-blue-500" height={4} />
                    </div>
                    <Link to={`/courses/${course.id}`}>
                      <Button variant="outline" size="sm">
                        Continue
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Announcements & Tasks */}
        <motion.section variants={itemVariants} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Announcements</h2>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="p-4 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <Bell size={18} className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{announcement.title}</h3>
                      <p className="text-gray-600 text-xs mt-1">{announcement.content}</p>
                      <p className="text-gray-400 text-xs mt-2">{new Date(announcement.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <Card key={task.id} className="p-4">
                  <div className="flex items-start">
                    <Calendar size={18} className="text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{task.title}</h3>
                      <p className="text-purple-600 text-xs font-medium mt-1">{task.course}</p>
                      <p className="text-gray-400 text-xs mt-1">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Dashboard;