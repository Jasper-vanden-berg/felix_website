const items = [
  "Diagnosis",
  "Medicine",
  "History",
  "Notes",
];

export default function StatusTracker({ isLoaded }) {
  return (
    <div className="summary_panel">
      <h2>Tracker</h2>

      {items.map((item) => (
        <div key={item} className="tracker-row">
          <span>{item}</span>
          <span>
            {isLoaded ? "Done" : "Not done"}
          </span>
        </div>
      ))}
    </div>
  );
}