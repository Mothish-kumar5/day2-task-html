import React, { useState } from "react";
import TextInput from "./TextInput";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [preview, setPreview] = useState(null);

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // simple validation
  const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const isFormValid =
    form.name !== "" &&
    form.email !== "" &&
    form.password !== "" &&
    isValidEmail(form.email);

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setPreview(form);
    }
  };

  // clear form
  const handleClear = () => {
    setForm({ name: "", email: "", password: "" });
    setPreview(null);
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      {/* Preview Section */}
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview Data</h3>
          <p>Name: {preview.name}</p>
          <p>Email: {preview.email}</p>
          <p>Password: {preview.password}</p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;