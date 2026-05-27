import { useState } from "react";
import "./SummariesPage.css";
import PatientSearch from "./components/PatientSearch";
import PatientInfo from "./components/PatientInfo";
import StatusTracker from "./components/StatusTracker";
import { BottomTabs, BottomTab } from "./components/BottomTabs";
import { SECTIONS } from "./sections";

export default function SummariesPage() {
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [patient, setPatient] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = async (patientId) => {
    if (!patientId) return;

    const res = await fetch(
      `http://localhost:8000/patients/${patientId}`
    );

    const data = await res.json();

    if (!data.found) {
      setPatient(null);
      setIsLoaded(false);
      return;
    }

    setPatient(data);
    setIsLoaded(true);
  };

  return (
    <div className="summaries-page">
      
      {/* TOP: 3 COLUMN PANEL */}
      <div className="summary-grid">
        
        <PatientSearch
          selectedPatientId={selectedPatientId}
          setSelectedPatientId={setSelectedPatientId}
          onLoad={handleLoad}
        />

        <PatientInfo
          data={patient?.general_info}
          isLoaded={isLoaded}
        />

        <StatusTracker
          data={patient?.tracker}
          isLoaded={isLoaded}
        />    

      </div>

      {/* BOTTOM: vertical tabs (empty for now) */}
      <BottomTabs>
        {SECTIONS.map(({ id, label, Component }) => (
          <BottomTab key={id} id={id} name={label}>
            <Component />
          </BottomTab>
        ))}
      </BottomTabs>

    </div>
  );
}