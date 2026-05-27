export function openPatientFolder(patientId) {
  if (!patientId) return;

  // placeholder for now
  alert(`Would open folder for patient: ${patientId}`);

  // later when backend exists:
  // window.open(`http://localhost:8000/patient/${patientId}/folder`, "_blank");
}