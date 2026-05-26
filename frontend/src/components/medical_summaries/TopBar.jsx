import PatientSelector from "./PatientSelector";
import ProgressTracker from "./ProgressTracker";

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <PatientSelector />
      </div>

      <div className="topbar-right">
        <ProgressTracker />
      </div>
    </header>
  );
}

export default TopBar;
