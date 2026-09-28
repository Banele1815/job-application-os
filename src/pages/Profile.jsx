import { User } from "lucide-react";

function Profile() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="eyebrow">CANDIDATE PROFILE</p>
          <h2>Profile</h2>
          <p className="page-description">
            Manage the verified information JobOS can use when matching and
            preparing applications.
          </p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-icon">
          <User size={25} />
        </div>

        <div>
          <h3>Banele Kubeka</h3>
          <p>Junior Full-Stack Developer</p>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-section">
          <span>Location</span>
          <strong>Johannesburg, South Africa</strong>
        </div>

        <div className="profile-section">
          <span>Target Role</span>
          <strong>Junior Full-Stack Developer</strong>
        </div>

        <div className="profile-section">
          <span>Primary Stack</span>
          <strong>React + JavaScript + Node.js</strong>
        </div>

        <div className="profile-section">
          <span>Cloud</span>
          <strong>Microsoft Azure</strong>
        </div>
      </div>
    </div>
  );
}

export default Profile;