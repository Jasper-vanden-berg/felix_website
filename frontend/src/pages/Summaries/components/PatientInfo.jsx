export default function PatientInfo({ data, isLoaded }) {
  if (!isLoaded || !data) {
    return (
      <div className="summary_panel">
        <h2>General Info</h2>
        <p>No patient loaded</p>
      </div>
    );
  }

  return (
    <div className="summary_panel">
      <h2>General Info</h2>

      <p><b>NHB:</b> {data.nhb}</p>
      <p><b>Protocol:</b> {data.dcode_protocol}</p>
      <p><b>Pathological:</b> {data.dcode_pathological}</p>
    </div>
  );
}