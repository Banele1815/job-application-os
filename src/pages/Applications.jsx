import { ClipboardList } from "lucide-react";

function Applications() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="eyebrow">APPLICATION PIPELINE</p>
          <h2>Applications</h2>
          <p className="page-description">
            Track your applications from preparation through to outcome.
          </p>
        </div>
      </div>

      <div className="jobs-empty">
        <ClipboardList size={38} />
        <h3>No applications yet</h3>
        <p>
          Applications you track through JobOS will appear here.
        </p>
      </div>
    </div>
  );
}

export default Applications;