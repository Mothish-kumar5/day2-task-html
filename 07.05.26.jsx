import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* Dark/Light Mode Button */}
      <button onClick={() => setDark(!dark)}>
        Toggle Mode
      </button>

      <br /><br />

      {/* Text Input */}
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Live Preview */}
      <p>{text}</p>
    </div>
  );
}

export default App;