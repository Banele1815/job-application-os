import { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock, Code } from "lucide-react";

const API_URL = "http://localhost:5000/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(`${API_URL}/jobs`);

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        setJobs(data.jobs);
      } catch (err) {
        setError("Unable to load jobs.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div>
      <header className="topbar">
        <div>
          <p className="eyebrow">JOB DISCOVERY</p>
          <h1>Jobs</h1>
        </div>

        <div className="profile-button">BK</div>
      </header>

      <section className="welcome">
        <div>
          <p className="eyebrow">OPPORTUNITIES</p>
          <h2>Find your next opportunity.</h2>
          <p>
            Jobs discovered by JobOS will appear here.
          </p>
        </div>
      </section>

      {loading && (
        <div className="panel">
          <div className="empty-state">
            <Briefcase size={32} />
            <h4>Loading jobs...</h4>
            <p>JobOS is retrieving available opportunities.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="panel">
          <div className="empty-state">
            <h4>{error}</h4>
            <p>
              Make sure the JobOS backend is running on port 5000.
            </p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <section className="jobs-grid">
          {jobs.map((job) => (
            <article className="job-card" key={job.id}>
              <div className="job-card-header">
                <div className="job-icon">
                  <Briefcase size={20} />
                </div>

                <span className="job-type">{job.type}</span>
              </div>

              <h3>{job.title}</h3>

              <p className="job-company">
                {job.company}
              </p>

              <div className="job-details">
                <span>
                  <MapPin size={16} />
                  {job.location}
                </span>

                <span>
                  <Clock size={16} />
                  {job.type}
                </span>
              </div>

              <div className="job-skills">
                <Code size={16} />

                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <button className="primary-button">
                View Job
              </button>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

export default Jobs;