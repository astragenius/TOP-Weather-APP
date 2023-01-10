import { fetchData, getInput } from './apiLogic'
import {
    formatTime,
    getWeatherStatus,
    getWeatherIcon,
    convertKm,
} from './utilityFunctions'

export class DOM {
    static initDOM() {
        DOM.initInput()
    }

    static initInput() {
        const searchBtn = document.getElementById('search-btn')
        searchBtn.addEventListener('click', DOM.renderWeather)
    }

    static async renderWeather() {
        const data = await fetchData()

        //renderTodayWeather
        DOM.renderTodayWeather(data.current_weather)
        //renderHighlights
        DOM.renderHighlights(data)
        //renderfiveDayForcast

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
    static renderfiveDayForcast(data) {}
}
