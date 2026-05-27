import { SECTIONS } from "../sections";

export default function StatusTracker({ isLoaded }) {
  const getStatus = () => {
    if (!isLoaded) return "red";
    return "green"; // extend later
  };
  return (
    <div className="summary_panel">
      <h2>Tracker</h2>

      {SECTIONS.map(({ id, label }) => (
        <div key={id} className="tracker-row">
          <span className="tracker-label">{label}</span>
          <span className="tracker-status">
            <span className={`status-dot ${getStatus()}`} />
            <span className="tracker-status-text">{getStatus() === "green" ? "Loaded" : "Not Loaded"}</span>
          </span>
        </div>
      ))}
    </div>
  );
}