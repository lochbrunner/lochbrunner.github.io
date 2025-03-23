import { Project } from '../types';

// In a real implementation, you would replace these with actual images
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with user authentication, product management, shopping cart, and payment processing integration. Built with a microservices architecture for scalability.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Stripe', 'Redis'],
    images: ['/images/ecommerce-1.jpg', '/images/ecommerce-2.jpg'],
    videoUrl: 'https://example.com/videos/ecommerce-demo.mp4',
    liveUrl: 'https://ecommerce-project.example.com',
    githubUrl: 'https://github.com/username/ecommerce-project',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A collaborative task management application that allows teams to organize projects, assign tasks, track progress, and set deadlines. Features real-time updates and notifications.',
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    images: ['/images/taskapp-1.jpg', '/images/taskapp-2.jpg'],
    liveUrl: 'https://task-app.example.com',
    githubUrl: 'https://github.com/username/task-management-app',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Integrates with OpenWeatherMap API and features interactive maps.',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Leaflet', 'Chart.js'],
    images: ['/images/weather-1.jpg', '/images/weather-2.jpg'],
    liveUrl: 'https://weather-dashboard.example.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Fitness Tracker',
    description:
      'A mobile application for tracking workouts, nutrition, and health metrics. Features custom workout plans, progress visualization, and social sharing capabilities.',
    technologies: ['React Native', 'GraphQL', 'Apollo', 'Node.js', 'PostgreSQL'],
    images: ['/images/fitness-1.jpg', '/images/fitness-2.jpg'],
    videoUrl: 'https://example.com/videos/fitness-demo.mp4',
    githubUrl: 'https://github.com/username/fitness-tracker',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'AI Image Generator',
    description:
      'A web application that uses machine learning to generate and manipulate images based on user prompts. Implements various style transfer and image generation algorithms.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'WebGL'],
    images: ['/images/ai-image-1.jpg', '/images/ai-image-2.jpg'],
    liveUrl: 'https://ai-image-gen.example.com',
    githubUrl: 'https://github.com/username/ai-image-generator',
    featured: true,
  },
];