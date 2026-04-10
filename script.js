async function getWeather() {
    const city = document.getElementById("city").value;

    // 👉 Replace with your API key
    const apiKey = "YOUR_API_KEY_HERE";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
            <p>🌍 City: ${city}</p>
            <p>🌡 Temperature: ${temp} °C</p>
            <p>☁ Weather: ${weather}</p>
            <p>💧 Humidity: ${humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    }
}
