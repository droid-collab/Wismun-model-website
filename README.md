# Wismun Model Website

A sample React website for learning React fundamentals.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/droid-collab/Wismun-model-website.git
cd Wismun-model-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.js     # Navigation header
│   └── Counter.js    # Interactive counter demo
├── pages/            # Page components
│   ├── Home.js       # Home page
│   ├── About.js      # About page
│   └── Contact.js    # Contact form page
├── App.js            # Main App component with routing
└── index.js          # Entry point
public/
├── index.html        # HTML template
└── styles.css        # Global styles
```

## Key Concepts Demonstrated

### 1. **Components**
   - Functional components (Header, Counter, Home, About, Contact)
   - Component composition and reusability

### 2. **State Management**
   - `useState` hook in Counter.js
   - Form state in Contact.js

### 3. **Props & Data Flow**
   - Passing data between parent and child components

### 4. **Routing**
   - React Router for multi-page navigation
   - Route definitions in App.js

### 5. **Styling**
   - CSS files for each component
   - Global styles in public/styles.css

### 6. **Event Handling**
   - Button click handlers (increment, decrement)
   - Form submission handling
   - Input change handlers

## Pages Overview

### Home
- Welcome message
- Feature cards showcasing React benefits
- Interactive Counter component demo

### About
- Project description
- Learning objectives
- Project structure explanation

### Contact
- Contact form with state management
- Form validation and submission handling

## Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests

## Learning Resources

- [React Official Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [JavaScript ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Next Steps

1. Explore the code in each file
2. Try modifying the components
3. Add new pages or components
4. Experiment with state and props
5. Add more interactivity and features

## License

MIT
