import TopBar from "../components/medical_summaries/TopBar";

function SummaryPage() {
  return (
    <div className="summary-page">

      <TopBar />

      <main className="summary-workspace">

        <aside className="sidebar">
          <h2>Patient Queue</h2>

          <p>Pending patients will appear here.</p>
        </aside>

        <section className="transcript-panel">
          <h2>Transcript / Source Material</h2>

          <p>
            Raw medical notes, transcripts, and uploaded documents
            will appear here.
          </p>
        </section>

        <section className="summary-editor">
          <h2>AI Summary Editor</h2>

          <p>
            Editable AI-generated medical summaries will appear here.
          </p>
        </section>

      </main>

    </div>
  );
}

export default SummaryPage;
