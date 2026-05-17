import React from "react";

function TextInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

export default TextInput;