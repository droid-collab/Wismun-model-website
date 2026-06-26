import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h3>Counter Component</h3>
      <p className="counter-display">Count: <strong>{count}</strong></p>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-minus">−</button>
        <button onClick={reset} className="btn btn-reset">Reset</button>
        <button onClick={increment} className="btn btn-plus">+</button>
      </div>
      <p className="counter-info">
        This demonstrates React state using the <code>useState</code> hook.
      </p>
    </div>
  );
}

export default Counter;
