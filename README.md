# Weather API Workshop

A small React + Vite starter project for a 30-minute introduction to APIs. The dashboard UI is already built; participants focus on connecting it to the Open-Meteo Forecast API.

## What participants will practise

- Finding an endpoint and query parameters in API documentation
- Sending a `GET` request with `fetch()`
- Working with asynchronous code using `async` / `await`
- Converting a JSON response and reading its fields
- Updating a React interface with state
- Handling loading and error states

## Setup

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Participant task

Open `src/App.jsx` and find the `loadWeather` function. Complete the TODOs:

1. Create the API URL using the coordinates and requested variables below.
2. Send the request using `fetch(url)`.
3. Check `response.ok`.
4. Parse the JSON response.
5. Store `data.current` in React state with `setWeather`.
6. Update the status and handle errors.

### API documentation

- Forecast API: https://open-meteo.com/en/docs
- Geocoding API (optional extension): https://open-meteo.com/en/docs/geocoding-api

### Values for the workshop

- Latitude: `42.9849`
- Longitude: `-81.2453`
- Variables: `temperature_2m`, `relative_humidity_2m`, `wind_speed_10m`

The app uses fixed coordinates for London, Ontario so the group can focus on the API request first. City search is an optional extension.

## Optional extension

Add a city search using the Open-Meteo Geocoding API:

1. Read a city name from an input.
2. Request matching locations from the Geocoding API.
3. Use the returned latitude and longitude in the Forecast API request.
4. Display the selected city and its current weather.

## Project structure

```text
src/
  components/
    WeatherCard.jsx   # Presentational component (already complete)
  App.jsx              # Complete the API integration here
  main.jsx
  styles.css
```

## Notes

- This starter uses Open-Meteo's free API offering, which does not require an API key for this example.
- The API returns JSON. The requested current values are under `data.current`.
- `fetch()` does not automatically throw for HTTP error status codes such as 404, so check `response.ok`.
- This project intentionally keeps the workshop task focused. The mentor solution includes basic request/error handling.
