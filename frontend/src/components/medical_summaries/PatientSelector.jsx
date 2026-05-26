import { useState } from "react";

function PatientSelector() {
  const [selectedPatient, setSelectedPatient] = useState("");

  const handleChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const openFolder = () => {
    alert(`Open raw files for ${selectedPatient}`);
  };

  return (
    <div className="patient-selector">

      <label>Select Patient</label>

      <select value={selectedPatient} onChange={handleChange}>
        <option value="">Choose patient_id</option>
        <option value="P001">P001</option>
        <option value="P002">P002</option>
        <option value="P003">P003</option>
      </select>

      {selectedPatient && (
        <button onClick={openFolder}>
          Open Raw Files Folder
        </button>
      )}

    </div>
  );
}

export default PatientSelector;
