import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  FileText, 
  CheckCircle, 
  Clock, 
  Award,
  ChevronRight,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import { courses } from '../data/mockData';

const CourseContent: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<any>(null);
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h2>
        <Link to="/courses">
          <Button variant="primary">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  // Set default active module and lesson if not set
  React.useEffect(() => {
    if (course.modules.length > 0 && !activeModuleId) {
      setActiveModuleId(course.modules[0].id);
      
      if (course.modules[0].lessons.length > 0 && !activeLesson) {
        setActiveLesson(course.modules[0].lessons[0]);
      }
    }
  }, [course, activeModuleId, activeLesson]);

  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length, 
    0
  );
  
  const completedLessons = course.modules.reduce(
    (total, module) => total + module.lessons.filter(lesson => lesson.completed).length, 
    0
  );

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

  const renderLessonContent = () => {
    if (!activeLesson) return null;

    switch (activeLesson.type) {
      case 'video':
        return (
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={activeLesson.content}
              title={activeLesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      case 'pdf':
        return (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <FileText size={48} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-medium mb-4">PDF Document</h3>
            <Button variant="primary">Download PDF</Button>
          </div>
        );
      case 'quiz':
        return (
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Quiz: {activeLesson.title}</h3>
            <p className="mb-6 text-gray-600">
              This quiz will test your knowledge of the concepts covered in this lesson.
              You'll have 15 minutes to complete it.
            </p>
            <Button variant="primary">Start Quiz</Button>
          </Card>
        );
      case 'assignment':
        return (
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Assignment: {activeLesson.title}</h3>
            <p className="mb-6 text-gray-600">
              {activeLesson.content}
            </p>
            <div className="flex gap-4">
              <Button variant="primary">Submit Assignment</Button>
              <Button variant="outline">Download Instructions</Button>
            </div>
          </Card>
        );
      default:
        return <div>No content available</div>;
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play size={16} />;
      case 'pdf': return <FileText size={16} />;
      case 'quiz': return <Award size={16} />;
      case 'assignment': return <BookOpen size={16} />;
      default: return <ChevronRight size={16} />;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Course Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
        <Link to="/courses" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
      </motion.div>

      {/* Progress */}
      <motion.div variants={itemVariants} className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Your Progress</span>
          <span className="text-sm text-gray-600">{completedLessons} of {totalLessons} lessons completed</span>
        </div>
        <ProgressBar progress={course.progress} color="bg-blue-500" height={6} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
          {/* Lesson Content */}
          {activeLesson && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">{activeLesson.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    {activeLesson.duration}
                  </div>
                </div>
              </div>
              <div className="p-4">
                {renderLessonContent()}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                <Button variant="outline" size="sm">
                  Previous Lesson
                </Button>
                <Button variant="primary" size="sm">
                  Mark as Complete
                </Button>
                <Button variant="outline" size="sm">
                  Next Lesson
                </Button>
              </div>
            </div>
          )}

          {/* Description and Resources */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-medium mb-2">About this lesson</h3>
            <p className="text-gray-600 mb-4">
              {activeLesson?.content || "This lesson introduces key concepts and provides practical examples."}
            </p>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Resources</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-600 hover:underline">
                  <FileText size={16} className="mr-2" />
                  <a href="#">Lesson slides</a>
                </li>
                <li className="flex items-center text-blue-600 hover:underline">
                  <FileText size={16} className="mr-2" />
                  <a href="#">Additional reading</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Course Modules/Lessons Sidebar */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium">Course Content</h3>
              <p className="text-sm text-gray-500">
                {totalLessons} lessons • {course.duration}
              </p>
            </div>
            <div className="divide-y divide-gray-100">
              {course.modules.map((module) => (
                <div key={module.id}>
                  <button
                    className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveModuleId(activeModuleId === module.id ? null : module.id)}
                  >
                    <span className="font-medium text-gray-800">{module.title}</span>
                    <span className={`transition-transform ${activeModuleId === module.id ? 'rotate-180' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  
                  {activeModuleId === module.id && (
                    <ul className="bg-gray-50 py-2">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <button
                            className={`flex items-center w-full px-4 py-2 text-sm text-left transition-colors ${
                              activeLesson?.id === lesson.id 
                                ? 'bg-blue-50 text-blue-700' 
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveLesson(lesson)}
                          >
                            <span className={`mr-3 ${lesson.completed ? 'text-green-500' : 'text-gray-400'}`}>
                              {lesson.completed 
                                ? <CheckCircle size={16} /> 
                                : getLessonIcon(lesson.type)
                              }
                            </span>
                            <div className="flex-1">
                              <span className={lesson.completed ? 'line-through opacity-70' : ''}>
                                {lesson.title}
                              </span>
                              <div className="text-xs text-gray-500 flex items-center mt-0.5">
                                <Clock size={12} className="mr-1" />
                                {lesson.duration}
                              </div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseContent;