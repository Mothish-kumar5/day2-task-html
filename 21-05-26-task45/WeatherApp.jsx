import { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = "b00e01e5fe58dbe93c20ba062d7d62d0";

  const getWeather = async () => {
    if (!city) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />

        <button onClick={getWeather} style={styles.button}>
          Search
        </button>
      </div>

      {weather && weather.main && (
        <div style={styles.card}>
          <h2>{weather.name}</h2>

          <h3>{weather.main.temp} °C</h3>

          <p>
            Weather: {weather.weather[0].description}
          </p>

          <p>
            Humidity: {weather.main.humidity}%
          </p>

          <p>
            Wind Speed: {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },

  searchBox: {
    marginBottom: '20px',
  },

  input: {
    padding: '10px',
    width: '220px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid gray',
  },

  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  card: {
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    backgroundColor: '#f5f5f5',
  },
};

export default WeatherApp;