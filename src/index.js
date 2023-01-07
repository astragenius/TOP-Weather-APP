import './scss/index.scss'
import img from './assets/img/sun rain.svg'
import img1 from './assets/img/rain.svg'
const imgs = document.getElementById('img')
const weatherImg = [...document.querySelectorAll('.weather-img')]
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
console.log(searchBtn)
imgs.src = img

weatherImg.forEach((el) => {
    el.src = img1
})
const OpenWeatherapi =
    'http://api.openweathermap.org/data/2.5/weather?q=London,gb&APPID=e88292d4ecc6eb2de13b48b038355c0f'
//const OpenWeatherapi1 = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&APPID=e88292d4ecc6eb2de13b48b038355c0f`
searchBtn.addEventListener('click', () => {
    const weatherData = fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=49.42&longitude=6.72&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto&start_date=2023-01-07&end_date=2023-01-12',
        { mode: 'cors' }
    )
    weatherData.then((response, reject) => {
        console.log(response.json())
    })

    const cityName = searchInput.value
    const geoAPI = 'https://geocoding-api.open-meteo.com/v1/search?name=Berlin'
    const cityCords = fetch(geoAPI, { mode: 'cors' })
    cityCords.then((response, reject) => {
        console.log(response.json())
    })
})
