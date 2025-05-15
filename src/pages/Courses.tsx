import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Clock, Search, Filter, CheckCircle, User } from 'lucide-react';
import { courses } from '../data/mockData';
import ProgressBar from '../components/ui/ProgressBar';

const Courses: React.FC = () => {
  const [filterBy, setFilterBy] = useState<'all' | 'enrolled' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesFilter = 
      filterBy === 'all' || 
      (filterBy === 'enrolled' && course.enrolled) || 
      (filterBy === 'completed' && course.enrolled && course.progress === 100);
      
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesFilter && matchesSearch;
  });

  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800'
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Courses</h1>
          <p className="text-gray-600">Browse all available courses</p>
        </div>
        
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 w-full md:w-64 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        <Button 
          variant={filterBy === 'all' ? 'primary' : 'outline'} 
          size="sm"
          onClick={() => setFilterBy('all')}
        >
          All Courses
        </Button>
        <Button 
          variant={filterBy === 'enrolled' ? 'primary' : 'outline'} 
          size="sm"
          onClick={() => setFilterBy('enrolled')}
        >
          My Courses
        </Button>
        <Button 
          variant={filterBy === 'completed' ? 'primary' : 'outline'} 
          size="sm"
          onClick={() => setFilterBy('completed')}
        >
          Completed
        </Button>
        <Button 
          variant="ghost"
          size="sm"
          icon={<Filter size={16} />}
          className="ml-auto"
        >
          More Filters
        </Button>
      </motion.div>

      {/* Course Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.map((course) => (
          <motion.div 
            key={course.id}
            variants={itemVariants}
          >
            <Card className="h-full flex flex-col overflow-hidden" hoverable>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
                {course.enrolled && (
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <ProgressBar 
                      progress={course.progress} 
                      color="bg-blue-500" 
                      height={4} 
                      className="bg-white bg-opacity-50"
                    />
                  </div>
                )}
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <Clock size={14} className="mr-1" />
                  {course.duration}
                  
                  {course.enrolled && (
                    <span className="ml-2 flex items-center text-blue-600">
                      <CheckCircle size={14} className="mr-1" />
                      Enrolled
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={course.instructorAvatar} 
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Instructor</span>
                    <span className="text-sm font-medium text-gray-800">{course.instructor}</span>
                  </div>
                  
                  <Link to={`/courses/${course.id}`} className="ml-auto">
                    <Button variant={course.enrolled ? "primary" : "outline"} size="sm">
                      {course.enrolled ? "Continue" : "View"}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredCourses.length === 0 && (
        <motion.div 
          variants={itemVariants}
          className="text-center py-12"
        >
          <Search size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-800 mb-2">No courses found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Courses;