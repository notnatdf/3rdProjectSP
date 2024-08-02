import React from "react";
import "./App.css";
import Join from "./Join";
import Button from "./Button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <Join />
      <h1>Reusable Button Component</h1>
      <Button onClick={handleClick} label="Click Me" />
    </div>
  );
};

export default App;
