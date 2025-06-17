import React from "react";

function Home() {
  // Internal CSS styles
  const styles = {
    container: {
      background: "linear-gradient(to right, #e0f7fa, #ffffff)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "36px",
      color: "#2c3e50",
      marginBottom: "10px",
    },
    subText: {
      fontSize: "18px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👋 Welcome to the Job Portal</h1>
      <p style={styles.subText}>Find your dream job or post one for the right candidate.</p>
    </div>
  );
}

export default Home;
