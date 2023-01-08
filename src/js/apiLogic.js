function getInput() {
    const searchInput = document.getElementById('search-input').value
    return searchInput
}

async function fetchData() {
    const input = getInput()
    const coordinates = await getCords(input)
    const cityData = await getWeatherData(coordinates)

    return cityData
}

async function getCords(cityName) {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
    )
    const data = await response.json()
    const result = await data.results[0]
    const coords = {
        lat: result.latitude,
        lon: result.longitude,
    }

    return coords
}

async function getWeatherData(coords) {
    const lon = coords.lon
    const lat = coords.lat

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,visibility,windspeed_10m,winddirection_10m,temperature_1000hPa&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum&current_weather=true&timezone=Europe%2FLondon&start_date=2023-01-07&end_date=2023-01-11`,
        { mode: 'cors' }
    )
    const data = await response.json()

    return data
}

export { fetchData, getInput }