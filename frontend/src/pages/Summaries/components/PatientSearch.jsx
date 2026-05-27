import { openPatientFolder } from "../../../actions/patientactions";

export default function PatientSearch({
  selectedPatientId,
  setSelectedPatientId,
  onLoad,
}) {
  return (
    <div className="summary_panel">
      <h2>Search Patient</h2>

      <input
        type="text"
        placeholder="Enter patient ID"
        value={selectedPatientId}
        onChange={(e) => setSelectedPatientId(e.target.value)}
      />

      <button
        onClick={onLoad}
        disabled={!selectedPatientId}
      >
        Load
      </button>
      <button>
        onClick={() => openPatientFolder(selectedPatientId)}
        disabled={!selectedPatientId}
      </button>
    </div>
  );
}