import Counter from '../components/Counter';
import './pages.css';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Wismun Model Website</h1>
      <p>
        This is a sample React website to help you understand the basics of React development.
        React makes it painless to create interactive user interfaces.
      </p>
      
      <div className="features">
        <div className="feature-card">
          <h3>📦 Components</h3>
          <p>Build encapsulated components that manage their own state.</p>
        </div>
        <div className="feature-card">
          <h3>🔄 State Management</h3>
          <p>React components use state and props to manage data flow.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast & Efficient</h3>
          <p>Virtual DOM ensures your app is fast and responsive.</p>
        </div>
      </div>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <p>Click the button below to see React state in action:</p>
        <Counter />
      </div>
    </div>
  );
}

export default Home;
