import { User, Course, Announcement, Task } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  role: 'student',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Human-Computer Interaction',
    description: 'Learn the fundamentals of designing user-centered interfaces and creating effective user experiences.',
    instructor: 'Dr. Sarah Miller',
    instructorAvatar: '',
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '12 weeks',
    level: 'Intermediate',
    enrolled: true,
    progress: 45,
    tags: ['Design', 'UX', 'Research', 'Prototyping'],
    modules: [
      {
        id: 'm1',
        title: 'Introduction to HCI',
        lessons: [
          {
            id: 'l1',
            title: 'What is HCI?',
            type: 'pdf',
            duration: '20 min',
            completed: true,
            content: '/path/to/hci-intro.pdf'
          },
          {
            id: 'l2',
            title: 'User Research Methods',
            type: 'pdf',
            duration: '30 min',
            completed: false,
            content: '/path/to/research-methods.pdf'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Artificial Intelligence and Machine Learning',
    description: 'Explore the fundamentals of AI and ML, including neural networks, deep learning, and practical applications.',
    instructor: 'Prof. David Chen',
    instructorAvatar: '',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '16 weeks',
    level: 'Advanced',
    enrolled: false,
    progress: 0,
    tags: ['AI', 'Machine Learning', 'Python', 'Neural Networks'],
    modules: [
      {
        id: 'm1',
        title: 'Foundations of AI',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to AI',
            type: 'pdf',
            duration: '25 min',
            completed: false,
            content: '/path/to/ai-intro.pdf'
          },
          {
            id: 'l2',
            title: 'Machine Learning Basics',
            type: 'pdf',
            duration: '35 min',
            completed: false,
            content: '/path/to/ml-basics.pdf'
          }
        ]
      }
    ]
  }
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'New AI/ML Course Available',
    content: 'We\'re excited to announce our new comprehensive AI and Machine Learning course.',
    date: '2025-03-15',
    read: false
  },
  {
    id: '2',
    title: 'HCI Assignment Update',
    content: 'The deadline for the user research assignment has been extended by one week.',
    date: '2025-03-10',
    read: true
  }
];

export const upcomingTasks: Task[] = [
  {
    id: '1',
    title: 'Submit User Research Report',
    dueDate: '2025-03-20',
    course: 'Human-Computer Interaction',
    completed: false
  },
  {
    id: '2',
    title: 'Complete AI Foundations Quiz',
    dueDate: '2025-03-25',
    course: 'Artificial Intelligence and Machine Learning',
    completed: false
  }
];

export const enrolledCourses = courses.filter(course => course.enrolled);