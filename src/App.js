import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import JobList from "./components/JobList";
import JobPost from "./components/JobPost";
import ApplyJob from "./components/ApplyJob";
import Home from "./pages/Home";
import MyApplications from "./components/MyApplications";


function App() {
  return (
    <Router>
       <Navbar /> {/* <- Yeh add karo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/create" element={<JobPost />} />
        <Route path="/jobs/apply/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<MyApplications />} />

      </Routes>
    </Router>
  );
}

export default App;
