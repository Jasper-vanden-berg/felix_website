function ProgressTracker() {

  const progressItems = [
    { label: "Intake Review", done: true },
    { label: "Lab Summary", done: true },
    { label: "Medication Review", done: false },
    { label: "Final Approval", done: false },
  ];

  return (
    <div className="progress-tracker">

      <h3>Summary Progress</h3>

      <div className="progress-items">
        {progressItems.map((item, index) => (
          <div
            key={index}
            className={`progress-item ${item.done ? "done" : "pending"}`}
          >
            <span className="status-dot"></span>
            {item.label}
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProgressTracker;
