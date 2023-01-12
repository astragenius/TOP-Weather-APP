import { fetchData, getInput } from './apiLogic'
import {
    formatTime,
    getWeatherStatus,
    getWeatherIcon,
    convertKm,
    errorFunction,
    celsiusConverter,
} from './utilityFunctions'

export class DOM {
    static initDOM() {
        DOM.init()
        DOM.renderWeather()
    }

    static init() {
        const searchBtn = document.getElementById('search-btn')
        const convertCels = document.getElementById('celsiusConvert')
        const convertFahr = document.getElementById('fahrConvert')

        searchBtn.addEventListener('click', DOM.renderWeather)
        convertCels.addEventListener('click', DOM.convertToCel)
        convertFahr.addEventListener('click', DOM.convertToFahr)
    }

    static async renderWeather() {
        const data = await fetchData()
        console.log(data)

        //renderTodayWeather
        DOM.renderTodayWeather(data.current_weather)
        //renderHighlights
        DOM.renderHighlights(data)
        //renderfiveDayForcast
        DOM.renderfiveDayForcast(data.daily)

        console.log(data)
    }

    static renderTodayWeather(data) {
        const todayImg = document.getElementById('img')
        const todayTemp = document.getElementById('todayTemp')
        const todayCity = document.getElementById('todayCity')
        const todayDate = document.getElementById('todayDate')
        const todayStatus = document.getElementById('todayWeatherStatus')

        todayTemp.textContent = Math.round(data.temperature)
        todayCity.textContent = getInput()
        todayDate.textContent = formatTime(data.time)
        todayStatus.textContent = getWeatherStatus(data.weathercode)
        todayImg.src = getWeatherIcon(data.weathercode)
    }
    static renderHighlights(data) {
        const windspeed = document.getElementById('windspeed')
        const humidity = document.getElementById('humidity')
        const humidityProgress = document.getElementById('humidity-progressbar')
        const visibility = document.getElementById('visibility')
        const airPressure = document.getElementById('airPressure')

        windspeed.textContent = data.current_weather.windspeed
        humidity.textContent = data.hourly.relativehumidity_2m[0]
        humidityProgress.value = data.hourly.relativehumidity_2m[0]
        visibility.textContent = convertKm(data.hourly.visibility[0])
        airPressure.textContent = data.hourly.surface_pressure[0]
    }
    static renderfiveDayForcast(data) {
        let container = document.querySelector('.forecast')
        container.innerHTML = ``
        const maxTemp = data.temperature_2m_max
        const minTemp = data.temperature_2m_min
        const time = data.time
        const weathercode = data.weathercode

        console.log(container)

        for (let i = 1; i <= 5; i++) {
            container.innerHTML += `
            <div class="weather-box bg-main-blueBg-100 clr-neutral-200 fs-300 padding-20">
                <h3 class="">${formatTime(time[i])}</h3>
                <img class="weather-img margin-block-16" src="${getWeatherIcon(
                    weathercode[i]
                )}" alt="">
                <div class="temp flex ">
                    <p class="">${Math.round(maxTemp[i])}<span>&#8451</span></p>
                    <p class=" clr-neutral-400">${Math.round(
                        minTemp[i]
                    )}<span>&#8451</span></p>
                </div>
            </div>
`
        }
    }
    static convertToCel() {
        celsiusConverter()
    }
    static convertToFahr() {
        console.log('TEST')
    }

    static renderError() {}
}
