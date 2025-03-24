import { Project } from '../types';

// Using placeholder images for all projects
export const projects: Project[] = [
  {
    id: '2021',
    title: 'Rule based Symbolic Reasoning',
    description:
      'Symbolic reasoning has gained significant attention recently. A new method, which uses rule applications in an RL setup, could lead to a dependable and strong algebra system by solving a critical challenge in the field. In school, we learn basic algebraic rules to solve simple problems.These rules provide us with various paths to find the solution.',
    technologies: ['PyTorch', 'Python', 'Rust', 'C++', 'CUDA'],
    images: ['/images/symbolic-reasoning.gif'],
    // videoUrl: 'https://example.com/videos/ecommerce-demo.mp4',
    githubUrl: 'https://github.com/lochbrunner/symbolic-reasoning',
    featured: true,
  },
  {
    id: '2021',
    title: 'Image Classification without Gradient Descent',
    description:
      'This project draws inspiration from the way neurons connect in the human brain\'s Hippocampus to enable learning and classification. The model uses a deep Convolutional Neural Network (CNN) with randomly initialized weights. During training, it identifies and stores the neurons that exhibit the strongest activation for each image class. This one-shot learning approach allows it to associate specific neuron activation patterns with different classes. To predict the class of a new image, the model observes which group of connected neurons fires most strongly. This group is determined by identifying the neurons with the highest activation and then finding other neurons that are strongly connected to them. The predicted class is the one associated with this most active group of neurons.',
    technologies: ['PyTorch', 'Python'],
    images: ['https://raw.githubusercontent.com/lochbrunner/hippocampus/master/docs/mnist.gif'],
    githubUrl: 'https://github.com/lochbrunner/hippocampus',
    featured: true,
  },
  {
    id: '2018',
    title: 'Editor for Neural Network Architectures',
    description:
      'An online platform where users can design, train, and share AI models. The platform features a no-code editor that allows users to design network architecture and visualize hidden neuron states live on a canvas.',
    technologies: ['TypeScript', 'React', 'Redux', 'TensorFlow.js'],
    images: ['https://raw.githubusercontent.com/lochbrunner/open-go-bot/master/docs/assets/mnist/mnist.gif'],
    liveUrl: 'https://lochbrunner.github.io/demos/social-ai/#/scenario/mnist',
    githubUrl: 'https://lochbrunner.github.io/demos/social-ai/#/scenario/mnist',
    featured: false,
  },
  {
    id: '2021',
    title: 'Present IO',
    description:
      'This project is a web-based SVG editor that is currently simple and easy to use. Due to the versatility of the SVG image format, an interactive UI was created using Material UI and Redux. Future animation features will allow users to build sophisticated presentations directly in their browsers without the need to install additional software.',
    technologies: ['TypeScript', 'React', 'Redux', 'Material UI'],
    images: ['https://media.githubusercontent.com/media/lochbrunner/lochbrunner.github.io/master/assets/present.io.fast.gif'],
    liveUrl: 'https://lochbrunner.github.io/present.io',
    githubUrl: 'https://github.com/lochbrunner/present.io',
    featured: false,
  },
  {
    id: '2021',
    title: 'Graph Extension for VS Code',
    description: 'This VS Code extension displays interactive graphs directly within the editor.  A Rust module loads graph data from a binary file due to the project\'s core elements being written in Rust.The extension utilizes Javascript bindings to interact with the file and maintains a graph index in an SQLite database.A master- detail architecture with infinity scroll allows users to query and visualize specific graphs within VS Code by right - clicking on the file.',
    technologies: ['TypeScript', 'Rust', 'SQLite'],
    images: [],
    // youtubeUrl: 'https://www.youtube.com/embed/TJ5P_vkUihw',
    featured: false,
  },
  {
    id: '2018',
    title: 'Charlie Debugger',
    description: 'This project encompasses the development of a compiler, interpreter, and VS Code debug adapter for the Charlie programming language, a subset of C. All components, with the exception of the VS Code extension, are built from the ground up without the use of external libraries, serving an educational purpose.  The compiler\'s function is to parse source code and generate corresponding byte-code. Subsequently, the interpreter reads the byte-code and can initiate a TCP socket connection for the VS Code debugging extension.',
    technologies: ['TypeScript', 'C++'],
    images: [],
    githubUrl: 'https://github.com/lochbrunner/charlie',
    // youtubeUrl: 'https://www.youtube.com/embed/bC8TMuqG-oE',
    featured: false,
  },
  {
    id: 'before 2015',
    title: 'Previous Projects',
    description: 'I have experience in building both hardware and software for robotics and physics simulations. I\'ve also developed 3D modeling and rendering software, as well as an online platform for LaTeX document storage and semantic linking.Additionally I have utilized GPUs for large - scale physical field calculations.',
    technologies: ['C++', 'CUDA', 'OpenGL', 'LaTeX', 'Direct3d', 'Win32 API', 'JAX', 'Java', 'Prolog', 'Lua', 'Go', 'Blender', 'Maya', 'Matlab', 'Fortran', 'Mathematica'],
    images: [],
    // youtubeUrl: 'https://www.youtube.com/embed/wWIqVlIU-r8',
    featured: false,
  }
];