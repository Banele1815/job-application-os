import { Settings as SettingsIcon } from "lucide-react";

function Settings() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="eyebrow">SYSTEM CONFIGURATION</p>
          <h2>Settings</h2>
          <p className="page-description">
            Configure job sources, matching preferences and automation.
          </p>
        </div>
      </div>

      <div className="settings-list">
        <div className="setting-card">
          <SettingsIcon size={20} />

          <div>
            <h3>Job Sources</h3>
            <p>
              Configure the sources JobOS can use to discover opportunities.
            </p>
          </div>

          <span className="status-badge">Not configured</span>
        </div>

        <div className="setting-card">
          <SettingsIcon size={20} />

          <div>
            <h3>Automation</h3>
            <p>
              Configure browser automation and application review settings.
            </p>
          </div>

          <span className="status-badge">Not configured</span>
        </div>
      </div>
    </div>
  );
}

export default Settings;