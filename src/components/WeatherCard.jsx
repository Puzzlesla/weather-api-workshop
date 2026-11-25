export default function WeatherCard({ weather, status, error }) {
  if (status === "error") {
    return <div className="message error-message">{error}</div>;
  }

  if (!weather) {
    return (
      <div className="empty-state">
        <div className="weather-symbol" aria-hidden="true">☁</div>
        <div>
          <p className="temperature">--<span>°C</span></p>
          <p className="condition">
            {status === "loading" ? "Fetching live conditions..." : "Your weather will appear here"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="current-weather">
        <div>
          <p className="temperature">{Math.round(weather.temperature_2m)}<span>°C</span></p>
          <p className="condition">Current temperature</p>
        </div>
        <div className="weather-symbol" aria-hidden="true">🌤</div>
      </div>
      <div className="metrics">
        <div className="metric">
          <span className="metric-icon" aria-hidden="true">💧</span>
          <div>
            <p className="metric-label">Humidity</p>
            <p className="metric-value">{weather.relative_humidity_2m}%</p>
          </div>
        </div>
        <div className="metric">
          <span className="metric-icon" aria-hidden="true">〰</span>
          <div>
            <p className="metric-label">Wind speed</p>
            <p className="metric-value">{weather.wind_speed_10m} km/h</p>
          </div>
        </div>
      </div>
    </>
  );
}
