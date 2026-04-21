import { useState } from 'react';
import './Counter.css';

export default function Counter({ start = 0 }) {
  const [count, setCount] = useState(start);

  return (
    <div className="counter-card">
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span className="count-value">{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p className="hint">✨ Ceci est un îlot React dans une mer Astro.</p>
    </div>
  );
}
