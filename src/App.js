import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    startTime();
  }, []);

  const startTime = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setCount((prev) => {
          return prev + 1;
        });
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{count}</h1>
      <button onClick={startTime}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
