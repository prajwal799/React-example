import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    startTime();
  }, []);

  const startTime = () => {
    ref.current = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{count}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
