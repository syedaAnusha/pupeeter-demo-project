import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  const generateReport = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/generate-report",
        { url }
      );
      setReport(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : "An error occurred");
      setReport(null);
    }
  };

  return (
    <div className="App">
      <h1>SEO Report Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
      />
      <button onClick={generateReport}>Generate Report</button>
      {error && <div className="error">{error}</div>}
      {report && (
        <div className="report">
          <h2>SEO Report</h2>
          <p>Performance Score: {report.categories.performance.score * 100}</p>
          <p>
            Accessibility Score: {report.categories.accessibility.score * 100}
          </p>
          <p>
            Best Practices Score:{" "}
            {report.categories["best-practices"].score * 100}
          </p>
          <p>SEO Score: {report.categories.seo.score * 100}</p>
        </div>
      )}
    </div>
  );
}

export default App;
