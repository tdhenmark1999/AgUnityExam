# Tech Challenge 1: Weather App

This is a simple weather app that uses the OpenWeatherMap API to display weather information for a given location.

## Setup

1. Register for an API key at https://openweathermap.org/.
2. Clone this repository.
3. Navigate to the root of the repository.
4. Replace `'your_api_key'` in the `app.ts` file with your actual API key.
5. Compile the TypeScript file using `tsc app.ts --lib "dom,es2015"` to generate the `app.js` file.
6. Open `index.html` in a browser to use the app.

## Testing

Enter a location (e.g., "London") in the input field and click the "Get Weather" button. The weather information should display below the button.
