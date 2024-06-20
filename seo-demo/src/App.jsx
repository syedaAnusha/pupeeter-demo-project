import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:3001/fetch-urls");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUrls(data);
        setError(null);
      } catch (err) {
        setError(err.message || "An error occurred");
        setUrls([]);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="App">
      <h1>Fetched URLs</h1>
      {error && <div className="error">{error}</div>}
      <div className="url-list">
        {urls.map((item, index) => (
          <div key={index} className="url-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.text || item.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
