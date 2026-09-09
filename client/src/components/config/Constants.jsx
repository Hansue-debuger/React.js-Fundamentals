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
  },
  {
    id: 2,
    category: 'Learning',
    title: 'What I learned from building with React Router',
    author: 'Hans Santos',
    excerpt: 'A short reflection on organizing pages, sharing layouts, and keeping navigation easy to understand.',
    date: 'August 15, 2026',
    readTime: '3 min read',
  },
  {
    id: 3,
    category: 'Projects',
    title: 'Starting small is still a strategy',
    author: 'Hans Santos',
    excerpt: 'The best way to finish a project is often to give the first version one clear job to do.',
    date: 'August 08, 2026',
    readTime: '2 min read',
  },
]

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
  STUDENTS,
  USER_CREDENTIALS,
}