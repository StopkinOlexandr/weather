// API для определения координат:
// https://www.geojs.io/docs/v1/endpoints/ip/

// API для прогногза погоды:
// https://open-meteo.com/



const cityName = document.getElementById("cityName");
const temperature1 = document.getElementById("temperature");
const windSpeed1 = document.getElementById("windSpeed");
const weatherCode1 = document.getElementById("weatherCode");


async function getIp() {
    const response = await fetch("http://ip-api.com/json");

    const obj = await response.json();
    const { city, lat, lon } = obj;
    console.log(obj);
    console.log(city);
    console.log(lat);
    console.log(lon);
    getWeather(city, lat, lon);
}
getIp();


async function getWeather(city, latitude, longitude) {
    console.log(city);
    const linkWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(linkWeather);
    const obj = await response.json();
    const { current_weather: { temperature, windspeed, weathercode }
    } = obj;
    console.log(temperature);
    console.log(windspeed);
    console.log(weathercode);
    console.log(weatherSubscription(weathercode));
    cityName.textContent = city;
    temperature1.textContent = temperature;
    windSpeed1.textContent = windspeed;
    weatherCode1.textContent = weatherSubscription(weathercode);
}

function weatherSubscription(weathercode) {
    switch (weathercode) {
        case 0:
            return "Clear sky"
            break;
        case 1:
            return "Mainly clear"
            break;
        case 2:
            return "partly cloudy"
            break;
        case 3:
            return "and overcast"
            break;
        case 45:
            return "Fog"
            break;
        case 48:
            return "Depositing rime fog"
            break;
        case 51:
            return "Drizzle: Light"
            break;
        case 53:
            return "Drizzle: Moderate"
            break;
        case 55:
            return "55	Drizzle: Dense intensity"
            break;
        case 56:
            return "Freezing Drizzle: Light"
            break;
        case 57:
            return "Freezing Drizzle: Dense intensity"
            break;
        case 61:
            return "Rain: Slight intensity"
            break;
        case 63:
            return "Rain: Moderate intensity"
            break;
        case 65:
            return "Rain: Heavy intensity"
            break;
        case 66:
            return "Freezing Rain: Light intensity"
            break;
        case 67:
            return "Freezing Rain: Heavy intensity"
            break;
        case 71:
            return "Snow fall: Slight intensity"
            break;
        case 73:
            return "Snow fall: Moderate intensity"
            break;
        case 75:
            return "Snow fall: Heavy intensity"
            break;
        case 77:
            return "Snow grains"
            break;
        case 80:
            return "Rain showers: Slight"
            break;
        case 81:
            return "Rain showers: Moderate"
            break;
        case 82:
            return "Rain showers: Violent"
            break;
        case 85:
            return "Snow showers slight"
            break;
        case 86:
            return "Snow showers heavy"
            break;
        case 95:
            return "Thunderstorm: Slight or moderate"
            break;
        case 96:
            return "Thunderstorm with slight hail"
            break;
        case 99:
            return "Thunderstorm with heavy hail"
            break;
        default:
            return "incorrect code"
            break;
    }
}
