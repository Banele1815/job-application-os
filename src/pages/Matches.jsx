import { Target } from "lucide-react";

function Matches() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="eyebrow">QUALIFICATION ENGINE</p>
          <h2>Matches</h2>
          <p className="page-description">
            See which jobs align with your verified skills and experience.
          </p>
        </div>
      </div>

      <div className="jobs-empty">
        <Target size={38} />
        <h3>No matches yet</h3>
        <p>
          Your matches will appear here once we connect your candidate profile
          to real job listings.
        </p>
      </div>
    </div>
  );
}

export default Matches;