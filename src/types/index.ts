export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor';
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrolled: boolean;
  progress: number;
  modules: Module[];
  tags: string[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'quiz' | 'assignment';
  duration: string;
  completed: boolean;
  content: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  read: boolean;
}

export interface Task {
  id: string;
  title: string;
  dueDate: string;
  course: string;
  completed: boolean;
}