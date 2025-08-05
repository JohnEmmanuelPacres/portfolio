import { Blog } from '../types';

export const blogs: Blog[] = [
    {
        title: 'Understanding TypeScript Generics',
        excerpt: 'A deep dive into TypeScript generics, exploring their benefits and use cases in building flexible and reusable components.',
        date: '2023-10-01',
        readTime: '5 min read',
        slug: 'typescript-generics'
    },
    {
        title: 'Building Scalable Applications with Next.js',
        excerpt: 'An overview of how Next.js can be used to build scalable web applications with server-side rendering and static site generation.',
        date: '2023-09-15',
        readTime: '7 min read',
        slug: 'nextjs-scalability'
    },
    {
        title: 'Optimizing Performance in React Applications',
        excerpt: 'Tips and techniques for optimizing the performance of React applications, including memoization and lazy loading.',
        date: '2023-08-20',
        readTime: '6 min read',
        slug: 'react-performance'
    }
]
