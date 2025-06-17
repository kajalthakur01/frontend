import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("🔒 Logged out successfully");
    navigate("/login");
  };

  // Internal CSS Styles
  const styles = {
    navbar: {
      background: "linear-gradient(to right, #2c3e50, #3498db)",
      padding: "10px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    brand: {
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      margin: 0,
      padding: 0,
    },
    navItem: {
      color: "#f1f1f1",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s",
    },
    navItemHover: {
      color: "#ffd700",
    },
    logoutButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      padding: "6px 12px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.brand}>Job Portal</Link>
      <ul style={styles.navList}>
        {!token ? (
          <>
            <li>
              <Link to="/register" style={styles.navItem}>Register</Link>
            </li>
            <li>
              <Link to="/login" style={styles.navItem}>Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/jobs" style={styles.navItem}>Jobs</Link>
            </li>
            <li>
              <Link to="/jobs/create" style={styles.navItem}>Post Job</Link>
            </li>
            <li>
              <Link to="/applications" style={styles.navItem}>My Applications</Link>
            </li>
            <li>
              <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
