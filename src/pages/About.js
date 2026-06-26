import './pages.css';

function About() {
  return (
    <div className="page">
      <h1>About This Project</h1>
      <p>
        This is a learning project designed to teach the fundamentals of React, a popular
        JavaScript library for building user interfaces.
      </p>
      
      <h2>What You'll Learn</h2>
      <ul className="learning-list">
        <li><strong>Components:</strong> Reusable pieces of UI</li>
        <li><strong>JSX:</strong> JavaScript XML syntax for React</li>
        <li><strong>State & Props:</strong> How React manages data</li>
        <li><strong>Hooks:</strong> Functions like useState, useEffect</li>
        <li><strong>Routing:</strong> Multi-page navigation with React Router</li>
        <li><strong>Styling:</strong> CSS and component styling techniques</li>
      </ul>

      <h2>Project Structure</h2>
      <p>This project follows a standard React structure:</p>
      <pre className="code-block">{
src/
├── components/    # Reusable components
├── pages/         # Page components
├── App.js         # Main App component
└── index.js       # Entry point
      }</pre>
    </div>
  );
}

export default About;
