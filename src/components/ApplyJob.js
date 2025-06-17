// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function ApplyJob() {
//   const [resumeLink, setResumeLink] = useState("");
//   const { id } = useParams(); // job id from URL
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login first.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/applications/apply`,
//         { jobId: id, resumeLink },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Job applied successfully!");
//       navigate("/jobs");
//     } catch (err) {
//       console.error("Error applying to job:", err);
//       alert("Application failed.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Apply for Job {id}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={resumeLink}
//           onChange={(e) => setResumeLink(e.target.value)}
//           placeholder="Paste Resume Link"
//           required
//         />
//         <br /><br />
//         <button type="submit" className="btn btn-success">Submit Application</button>
//       </form>
//     </div>
//   );
// }

// export default ApplyJob;

import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ApplyJob() {
  const [resumeLink, setResumeLink] = useState("");
  const { id } = useParams(); // job id from URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/applications/apply`,
        { jobId: id, resumeLink },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Job applied successfully!");
      navigate("/jobs");
    } catch (err) {
      console.error("Error applying to job:", err);
      alert("Application failed.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Apply for Job {id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          placeholder="Paste Resume Link"
          required
        />
        <br /><br />
        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyJob;

