export async function openPatientFolder(patientId) {
  if (!patientId) return;

  try {
    const res = await fetch(
      `http://localhost:8000/patients/open-folder/${patientId}`
    );

    return await res.json();
  } catch (err) {
    console.error("Failed to open folder:", err);
    return { opened: false };
  }
}