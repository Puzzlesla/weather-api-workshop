# Mentor solution

Use this to check the workshop implementation. Participants should complete the TODO section in `src/App.jsx`.

Replace the contents of the `try` block and the placeholder `throw` with:

```jsx
const url =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=42.9849" +
  "&longitude=-81.2453" +
  "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Weather request failed (${response.status}).`);
}

const data = await response.json();
setWeather(data.current);
setStatus("success");
```

Keep the existing `catch` block:

```jsx
} catch (err) {
  setError(err.message || "Something went wrong while loading weather.");
  setStatus("error");
}
```

## Expected response shape (simplified)

```json
{
  "current": {
    "temperature_2m": 12.3,
    "relative_humidity_2m": 68,
    "wind_speed_10m": 14.2
  }
}
```

Actual values vary with the weather and time of the request.

## Suggested 30-minute facilitation plan

| Time | Activity |
|---|---|
| 0–3 min | Show the pre-built dashboard and explain what data is missing |
| 3–8 min | Open the Open-Meteo docs; identify the endpoint, required coordinates, and current variables |
| 8–20 min | Participants complete the `loadWeather` function |
| 20–25 min | Run the app, click **Get current weather**, and inspect the displayed values |
| 25–30 min | Review the request/response flow and discuss the optional city-search extension |

## Debrief prompts

- Which part of the URL identifies the endpoint?
- Which parts are query parameters?
- Why do we call `response.json()`?
- What does `await` do?
- Why do we check `response.ok`?
- How does `setWeather` cause the dashboard to update?

## Troubleshooting

- **The page does not load:** confirm `npm install` completed and run `npm run dev`.
- **The request fails:** check the browser console and network tab; confirm the URL is spelled correctly.
- **The page stays in the loading state:** confirm `setStatus("success")` runs after the data is stored and the `catch` block sets `"error"`.
- **A displayed value is undefined:** confirm the code stores `data.current`, not the entire `data` object, because `WeatherCard` expects the current-values object.
