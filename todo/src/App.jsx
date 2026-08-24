import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter your task"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
          if (inputValue.trim() !== "") {
            setTodos([inputValue.trim()]);
            setInputValue("");
          }
        }}>Submit</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
