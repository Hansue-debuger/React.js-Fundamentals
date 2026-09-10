const STUDENTS = [
  {
    name: 'Maria Santos',
    program: 'Computer Science',
    yearLevel: '3rd Year',
  },
  {
    name: 'James Cruz',
    program: 'Information Technology',
    yearLevel: '2nd Year',
  },
  {
    name: 'Alyssa Reyes',
    program: 'Software Engineering',
    yearLevel: '4th Year',
  },
  {
    name: 'Daniel Garcia',
    program: 'Information Systems',
    yearLevel: '1st Year',
  },
  {
    name: 'Sofia Mendoza',
    program: 'Computer Engineering',
    yearLevel: '3rd Year',
  },
]

const BLOGS = [
  {
    id: 1,
    category: 'Frontend',
    title: 'Three small ideas that make a page feel better',
    author: 'Hans Santos',
    excerpt: 'Good spacing, clear hierarchy, and useful feedback can turn a simple interface into a calm one.',
    date: 'August 22, 2026',
    readTime: '4 min read',
    likes: 248,
    comments: 18,
    views: 1840,
  },
  {
    id: 2,
    category: 'Learning',
    title: 'What I learned from building with React Router',
    author: 'Hans Santos',
    excerpt: 'A short reflection on organizing pages, sharing layouts, and keeping navigation easy to understand.',
    date: 'August 15, 2026',
    readTime: '3 min read',
    likes: 186,
    comments: 12,
    views: 1290,
  },
  {
    id: 3,
    category: 'Projects',
    title: 'Starting small is still a strategy',
    author: 'Hans Santos',
    excerpt: 'The best way to finish a project is often to give the first version one clear job to do.',
    date: 'August 08, 2026',
    readTime: '2 min read',
    likes: 124,
    comments: 8,
    views: 960,
  },
]

const COMMENTS = [
  {
    id: 1,
    blogId: 1,
    author: 'Mia Torres',
    text: 'The spacing checklist is exactly what I needed for my portfolio refresh.',
    date: 'August 24, 2026',
  },
  {
    id: 2,
    blogId: 1,
    author: 'Ethan Lim',
    text: 'The note about feedback states is a great reminder. Small details really matter.',
    date: 'August 23, 2026',
  },
  {
    id: 3,
    blogId: 2,
    author: 'Ari Mendoza',
    text: 'Router layouts finally make sense after reading this. Thanks for keeping it practical.',
    date: 'August 17, 2026',
  },
  {
    id: 4,
    blogId: 3,
    author: 'Noah Cruz',
    text: 'A focused first version is advice I keep coming back to.',
    date: 'August 10, 2026',
  },
]

const PROFILE = {
  name: 'Hans Curt Austin C. Santos',
  role: 'Computer Science student · 3rd Year',
  email: 'hans.santos@example.com',
  phone: '+63 917 555 0184',
  location: 'Cebu City, Philippines',
  bio: 'Frontend learner and practical builder documenting the ideas, experiments, and lessons behind each project.',
}

const USER_CREDENTIALS = {
  username: 'student',
  password: 'react123',
}

const CONTACT_REQUEST = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export {
  BLOGS,
  CONTACT_REQUEST,
  COMMENTS,
  PROFILE,
  STUDENTS,
  USER_CREDENTIALS,
}