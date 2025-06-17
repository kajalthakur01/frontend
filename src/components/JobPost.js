import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobPost() {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    company: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to post a job.");
      navigate("/login");
      return;
    }

    try {
      // ✅ POST to the correct backend route
      await axios.post("http://localhost:5000/api/jobs/create", jobData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      alert("✅ Job posted successfully!");
      navigate("/jobs");
    } catch (err) {
      console.error("❌ Error posting job:", err);
      alert("❌ Failed to post job.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit" className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
}

export default JobPost;
