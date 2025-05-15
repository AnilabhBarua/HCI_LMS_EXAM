import { User, Course, Announcement, Task } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Anilabh Barua',
  email: 'anilabh.barua@gmail.com',
  role: 'student',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Human Computer Interface',
    description: '"""""""',
    instructor: 'Manwinder Singh',
    instructorAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    thumbnail: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 months',
    level: 'Intermediate',
    enrolled: true,
    progress: 75,
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    modules: [
      {
        id: 'm1',
        title: 'HTML Basics',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to HTML',
            type: 'video',
            duration: '15 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l2',
            title: 'HTML Elements & Structure',
            type: 'video',
            duration: '20 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l3',
            title: 'HTML Forms',
            type: 'pdf',
            duration: '10 min',
            completed: true,
            content: '/path/to/pdf.pdf'
          },
          {
            id: 'l4',
            title: 'HTML Quiz',
            type: 'quiz',
            duration: '15 min',
            completed: false,
            content: 'Quiz content here'
          }
        ]
      },
      {
        id: 'm2',
        title: 'CSS Fundamentals',
        lessons: [
          {
            id: 'l5',
            title: 'CSS Selectors',
            type: 'video',
            duration: '18 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l6',
            title: 'CSS Box Model',
            type: 'video',
            duration: '22 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l7',
            title: 'CSS Layouts',
            type: 'assignment',
            duration: '45 min',
            completed: false,
            content: 'Assignment description here'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'React for Beginners',
    description: 'Master React.js fundamentals and build interactive web applications with the most popular JavaScript library.',
    instructor: 'David Chen',
    instructorAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    thumbnail: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolled: true,
    progress: 30,
    tags: ['Web Development', 'React', 'JavaScript', 'Frontend'],
    modules: [
      {
        id: 'm1',
        title: 'React Basics',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to React',
            type: 'video',
            duration: '20 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l2',
            title: 'Components and Props',
            type: 'video',
            duration: '25 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l3',
            title: 'State and Lifecycle',
            type: 'video',
            duration: '30 min',
            completed: false,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Advanced Python Programming',
    description: 'Take your Python skills to the next level with advanced concepts, data structures, and algorithms.',
    instructor: 'Maria Rodriguez',
    instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12 weeks',
    level: 'Advanced',
    enrolled: false,
    progress: 0,
    tags: ['Programming', 'Python', 'Data Structures', 'Algorithms'],
    modules: []
  },
  {
    id: '4',
    title: 'UX/UI Design Fundamentals',
    description: 'Learn the principles of user experience and interface design to create beautiful, functional digital products.',
    instructor: 'James Wilson',
    instructorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    thumbnail: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8 weeks',
    level: 'Beginner',
    enrolled: false,
    progress: 0,
    tags: ['Design', 'UX', 'UI', 'User Research'],
    modules: []
  },
  {
    id: '5',
    title: 'Data Science with Python',
    description: 'Explore data analysis, visualization, and machine learning techniques using Python and its powerful libraries.',
    instructor: 'Emily Chang',
    instructorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '14 weeks',
    level: 'Intermediate',
    enrolled: true,
    progress: 5,
    tags: ['Data Science', 'Python', 'Machine Learning', 'Data Analysis'],
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Data Science',
        lessons: [
          {
            id: 'l1',
            title: 'What is Data Science?',
            type: 'video',
            duration: '15 min',
            completed: true,
            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
          },
          {
            id: 'l2',
            title: 'Setting Up Your Environment',
            type: 'pdf',
            duration: '10 min',
            completed: false,
            content: '/path/to/pdf.pdf'
          }
        ]
      }
    ]
  }
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'New Course: Machine Learning Fundamentals',
    content: 'We\'re excited to announce a new course on Machine Learning Fundamentals starting next month.',
    date: '2025-03-15',
    read: false
  },
  {
    id: '2',
    title: 'Platform Maintenance',
    content: 'We will be performing scheduled maintenance on March 20th from 2AM to 5AM EST.',
    date: '2025-03-10',
    read: true
  },
  {
    id: '3',
    title: 'Updated Course Materials',
    content: 'The React for Beginners course materials have been updated with the latest React 18 features.',
    date: '2025-03-05',
    read: false
  }
];

export const upcomingTasks: Task[] = [
  {
    id: '1',
    title: 'Submit HTML Assignment',
    dueDate: '2025-03-18',
    course: 'Introduction to Web Development',
    completed: false
  },
  {
    id: '2',
    title: 'Complete React Quiz',
    dueDate: '2025-03-20',
    course: 'React for Beginners',
    completed: false
  },
  {
    id: '3',
    title: 'Read Python Data Structures',
    dueDate: '2025-03-25',
    course: 'Data Science with Python',
    completed: false
  }
];

export const enrolledCourses = courses.filter(course => course.enrolled);