import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [name, setname] = useState("");
  const [list, setList] = useState([
    "nagma",
    "hello",
    "bye",
    "sure",
    "no",
    "yes",
  ]);
  const handleChange = (e) => {
    setname(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={name} onChange={(e) => handleChange(e)} />
      {list
        .filter((item) => {
          if (name.length === 0) {
            return item;
          } else if (item.includes(name)) {
            return item;
          }
        })
        .map((item) => {
          return <h4>{item}</h4>;
        })}
    </div>
  );
}
