export default function PatientInfo({ isLoaded, patientData }) {
  return (
    <div className="summary_panel">
      <h2>General Info</h2>

      {!isLoaded ? (
        <p>No patient loaded</p>
      ) : (
        <div>
          <p><b>Name:</b> {patientData.name}</p>
          <p><b>Age:</b> {patientData.age}</p>
          <p><b>ID:</b> {patientData.id}</p>
        </div>
      )}
    </div>
  );
}