import React, { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to see your applications.");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/applications/mine", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications:", err);
        alert("Could not load applications.");
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Job Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul className="list-group">
          {applications.map((app, idx) => (
            <li key={idx} className="list-group-item">
              <strong>Job:</strong> {app.job.title} <br />
              <strong>Company:</strong> {app.job.company} <br />
              <strong>Resume:</strong> <a href={app.resumeLink} target="_blank" rel="noreferrer">View Resume</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyApplications;
