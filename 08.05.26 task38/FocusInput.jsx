import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <h2>Focus Input</h2>

      <input ref={inputRef} type="text" />

      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}