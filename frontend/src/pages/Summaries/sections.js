import DiagnosisTab from "./components/tabs/DiagnosisTab";
import MedicineTab from "./components/tabs/MedicineTab";
import HistoryTab from "./components/tabs/HistoryTab";
import NotesTab from "./components/tabs/CourseTab";

export const SECTIONS = [
  {
    id: "Diagnosis",
    label: "Diagnosis",
    Component: DiagnosisTab,
  },
  {
    id: "Medicine",
    label: "Medicine",
    Component: MedicineTab,
  },
  {
    id: "History",
    label: "History",
    Component: HistoryTab,
  },
  {
    id: "Notes",
    label: "Notes",
    Component: NotesTab,
  },
];