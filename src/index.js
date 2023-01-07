import './scss/index.scss'
import img from './assets/img/sun rain.svg'
import img1 from './assets/img/rain.svg'
const imgs = document.getElementById('img')
const weatherImg = [...document.querySelectorAll('.weather-img')]
const searchBtn = document.getElementById('search-btn')

console.log(searchBtn)
imgs.src = img

weatherImg.forEach((el) => {
    el.src = img1
})
/* searchBtn.addEventListener('click', () => {
    const weatherData = fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=49.42&longitude=6.72&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto&start_date=2023-01-07&end_date=2023-01-12',
        { mode: 'cors' }
    )
    weatherData.then((response, reject) => {
        console.log(response.json())
    })

    const cityName = searchInput.value
    const geoAPI = ''
    const cityCords = fetch(geoAPI, { mode: 'cors' })
    cityCords.then((response, reject) => {
        console.log(response.json())
    })
}) */

function getInput() {
    const searchInput = document.getElementById('search-input').value
    return searchInput
}

searchBtn.addEventListener('click', getWeatherData)

async function getWeatherData() {
    const input = getInput()
    const coordinates = await getCords(input)
    const cityData = await getCity(coordinates)
    console.log(cityData)
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

async function getCity(coords) {
    const lon = coords.lon
    const lat = coords.lat
    console.log(lon)
    const response = fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto&start_date=2023-01-07&end_date=2023-01-12`,
        { mode: 'cors' }
    )

    const data = response.then((res, rej) => {
        return res.json()
    })

    return data
}
