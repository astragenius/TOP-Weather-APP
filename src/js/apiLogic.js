import { addDays } from 'date-fns'
import formatISO from 'date-fns/formatISO'
import { errorFunction } from './utilityFunctions'

function getInput() {
    const searchInput = document.getElementById('search-input').value.trim()

    return searchInput
}

async function fetchData() {
    const input = getInput()
    if (input === '') return alert('Please give a valid city input')
    const coordinates = await getCords(input).catch(errorFunction)
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
    const todayDate = formatISO(new Date(), { representation: 'date' })
    const endDate = formatISO(addDays(new Date(), 5), {
        representation: 'date',
    })
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,surface_pressure,relativehumidity_2m,visibility,windspeed_10m,winddirection_10m,temperature_1000hPa&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum&current_weather=true&timezone=Europe%2FLondon&start_date=${todayDate}&end_date=${endDate}`,
            { mode: 'cors' }
        )
        const data = await response.json()

        return data
    } catch (err) {
        alert('ERROR')
    }
}

export { fetchData, getInput }
