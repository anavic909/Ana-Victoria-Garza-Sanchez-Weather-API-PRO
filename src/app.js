async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const loader = document.getElementById('loader');
    if (!city) return alert("Por favor, ingresa una ciudad.");

    loader.innerText = "Sincronizando datos...";

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`);
        const geoData = await geoRes.json();

        if (!geoData.results) {
            loader.innerText = "";
            return alert("Ciudad no encontrada.");
        }

        const { latitude, longitude, name } = geoData.results[0];
        const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);
        const wData = await wRes.json();
        const { temperature, windspeed, weathercode } = wData.current_weather;

        const weatherMap = {
            0: ["Despejado", "☀️"], 1: ["Casi Despejado", "🌤️"],
            2: ["Parcialmente Nublado", "⛅"], 3: ["Nublado", "☁️"],
            61: ["Lluvia Ligera", "🌧️"], 95: ["Tormenta", "⛈️"]
        };

        const [text, icon] = weatherMap[weathercode] || ["Nublado", "☁️"];

        document.getElementById('resCity').innerText = name;
        document.getElementById('resTemp').innerText = `${Math.round(temperature)}°`;
        document.getElementById('resIcon').innerText = icon;
        document.getElementById('resDesc').innerText = text.toUpperCase();
        document.getElementById('valT').innerText = `${temperature}°C`;
        document.getElementById('valW').innerText = `${windspeed} km/h`;
        document.getElementById('valD').innerText = text;

    } catch (error) {
        alert("Error de conexión.");
    } finally {
        loader.innerText = "";
    }
}

// Event Listeners
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getWeather();
});