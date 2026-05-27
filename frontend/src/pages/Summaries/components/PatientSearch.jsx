import { openPatientFolder } from "../../../actions/patientactions";
import { useEffect, useState } from "react";

export default function PatientSearch({
  selectedPatientId,
  setSelectedPatientId,
  onLoad,
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isValid, setIsValid] = useState(false);

  // sync external selection → input
  useEffect(() => {
    if (selectedPatientId) setQuery(selectedPatientId);
  }, [selectedPatientId]);

  // unified search endpoint
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      setIsValid(false);
      return;
    }

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      fetch(`http://localhost:8000/patients/search?q=${query}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.results || []);
          setIsValid(!!data.exact_match);
        })
        .catch(() => {
          setSuggestions([]);
          setIsValid(false);
        });
    }, 200);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  const showAutocomplete = query && suggestions.length > 1;

  return (
    <div className="summary_panel">
      <h2>Search Patient</h2>

      <div className="search-wrapper">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedPatientId("");
            setIsValid(false);
          }}
          placeholder="Enter patient ID"
          autoComplete="off"
        />

        {showAutocomplete && (
          <div className="autocomplete">
            {suggestions.slice(0, 6).map((id) => (
              <div
                key={id}
                className="autocomplete-item"
                onClick={() => {
                  setQuery(id);
                  setSelectedPatientId(id);
                  setSuggestions([]);
                  setIsValid(true);
                }}
              >
                {id}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LOAD (delegated to parent) */}
      <button
        onClick={() => onLoad(query)}
        disabled={!isValid}
      >
        Load
      </button>

      {/* OPEN FOLDER */}
      <button
        onClick={() => openPatientFolder(query)}
        disabled={!isValid}
      >
        Open Folder
      </button>
    </div>
  );
}