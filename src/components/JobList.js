// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function JobList() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/jobs");
//         setJobs(res.data.jobs);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Available Jobs</h2>
//       {jobs.map((job) => (
//         <div key={job.id} className="card mb-3 p-3">
//           <h4>{job.title}</h4>
//           <p>{job.description}</p>
//           <p><strong>Company:</strong> {job.company}</p>
//           <Link to={`/jobs/apply/${job.id}`} className="btn btn-primary">
//             Apply
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default JobList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        console.log("📦 Jobs response:", res.data);
        setJobs(res.data.jobs || res.data); // Works with both types
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Jobs</h2>
      {Array.isArray(jobs) && jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="card mb-3 p-3">
            <h4>{job.title}</h4>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <Link to={`/jobs/apply/${job.id}`} className="btn btn-primary">
              Apply
            </Link>
          </div>
        ))
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}

export default JobList;
