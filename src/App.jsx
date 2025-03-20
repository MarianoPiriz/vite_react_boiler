import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex align-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="from-neutral-700 font-black text-4xl p-5">Vite + React</h1>
      <div className="card">
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p className="p-3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="alert alert-warning alert-dismissible fade show p-3" role="alert">
        This is a warning alert!
      </div>
    </>
  );
}

export default App;
