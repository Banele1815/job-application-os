import { Briefcase, Search } from "lucide-react";

function Jobs() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="eyebrow">JOB DISCOVERY</p>
          <h2>Jobs</h2>
          <p className="page-description">
            Discover software-development opportunities from multiple sources.
          </p>
        </div>
      </div>

      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search jobs, companies or skills..."
        />
      </div>

      <div className="jobs-empty">
        <Briefcase size={38} />
        <h3>No jobs collected yet</h3>
        <p>
          Once we connect the first job source, real job opportunities will
          appear here.
        </p>
      </div>
    </div>
  );
}

export default Jobs;