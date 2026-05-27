import { useState } from "react";
import "./SummariesPage.css";
import PatientSearch from "./components/PatientSearch";
import PatientInfo from "./components/PatientInfo";
import StatusTracker from "./components/StatusTracker";
import { BottomTabs, BottomTab } from "./components/BottomTabs";
import { SECTIONS } from "./sections";

export default function SummariesPage() {
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // dummy data for now
  const patientData = {
    name: "John Doe",
    age: 54,
    id: selectedPatientId,
  };

  const handleLoad = () => {
    if (!selectedPatientId) return;
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
          isLoaded={isLoaded}
          patientData={patientData}
        />

        <StatusTracker isLoaded={isLoaded} />

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