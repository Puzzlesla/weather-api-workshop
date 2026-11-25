import { useState } from "react";
import WeatherCard from "./components/WeatherCard.jsx";

const STARTER_CITY = "London, Ontario";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function loadWeather() {
    setStatus("loading");
    setError("");

    /*
     * WORKSHOP TASK
     * 1. Create the Open-Meteo Forecast API URL.
     *    Coordinates for London, Ontario:
     *    latitude = 42.9849
     *    longitude = -81.2453
     *    Request: temperature_2m, relative_humidity_2m, wind_speed_10m
     *
     * 2. Use fetch(url) to send a GET request.
     * 3. Check response.ok. If false, throw a helpful Error.
     * 4. Convert the response to JSON with response.json().
     * 5. Save the current conditions with setWeather(data.current).
     * 6. Set status to "success".
     *
     * 7. Wrap the request in try/catch. In catch, set the error message
     *    and set status to "error".
     */

    try {
      // TODO: Add your API integration here.
      // Example URL format:
      // https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current=...
      throw new Error("Complete the API integration TODOs to load weather.");
    } catch (err) {
      setError(err.message || "Something went wrong while loading weather.");
      setStatus("error");
    }
  }

  return (
    <main className="page">
      <section className="app-shell">
        <header className="topbar">
          <div className="brand">
            <span className="brand-icon" aria-hidden="true">☀</span>
            <span>WeatherNow</span>
          </div>
          <span className="tag">API WORKSHOP</span>
        </header>

        <section className="intro">
          <p className="eyebrow">YOUR LOCAL FORECAST</p>
          <h1>Weather at a glance.</h1>
          <p className="subtitle">
            Connect this dashboard to a live weather API and bring the data to life.
          </p>
        </section>

        <section className="weather-panel" aria-live="polite">
          <div className="location-row">
            <div>
              <p className="eyebrow">CURRENT LOCATION</p>
              <h2>{STARTER_CITY}</h2>
            </div>
            <span className="location-pin" aria-hidden="true">⌖</span>
          </div>

          <WeatherCard weather={weather} status={status} error={error} />

          <button className="load-button" onClick={loadWeather} disabled={status === "loading"}>
            {status === "loading" ? "Loading weather..." : "Get current weather"}
            <span aria-hidden="true">→</span>
          </button>
          <p className="fine-print">Weather data provided by Open-Meteo.</p>
        </section>

        <footer>
          <span>Learn by building</span>
          <span>React · fetch() · Open-Meteo</span>
        </footer>
      </section>
    </main>
  );
}
