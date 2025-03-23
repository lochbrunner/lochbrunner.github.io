# Claude Helper Document

## Build & Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint -- --fix` - Fix linting issues automatically
- `npm run typecheck` - Run TypeScript type checking

## Code Style Guidelines
- **Formatting**: Follow Prettier defaults with 2-space indentation
- **Naming**: camelCase for variables/functions, PascalCase for components/classes/interfaces
- **Imports**: Group by: 1) React/Next.js, 2) Material UI, 3) Other libraries, 4) Components, 5) Types/Utils
- **Types**: Use TypeScript with strict mode; prefer interfaces for objects and props
- **Components**: Use functional components with React hooks; one component per file
- **Animation**: Use Framer Motion for animations and transitions
- **Material UI**: Use the sx prop for styling components; utilize theme for consistent design
- **Responsive Design**: Use Material UI's responsive utility props and breakpoints