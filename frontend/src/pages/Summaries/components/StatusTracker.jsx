export default function StatusTracker({ data, isLoaded }) {
  if (!isLoaded || !data) {
    return (
      <div className="summary_panel">
        <h2>Tracker</h2>
        <p>No patient loaded</p>
      </div>
    );
  }

  return (
    <div className="summary_panel">
      <h2>Tracker</h2>

      <p><b>Medicine:</b> {data.medicine?"green":"red"}</p>
    </div>
  );
}