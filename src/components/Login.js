import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("Login successful!");

      if (res.data.role === "employer") {
        navigate("/jobs/create");
      } else {
        navigate("/jobs");
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  // Updated styling
  const styles = {
    page: {
      background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
      minHeight: "100vh",
      paddingTop: "80px", // distance from navbar
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // align near top
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    formContainer: {
      background: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    heading: {
      marginBottom: "25px",
      textAlign: "center",
      color: "#2c3e50",
      fontSize: "24px",
    },
    input: {
      marginBottom: "15px",
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      width: "100%",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.formContainer} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>🔐 Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;
