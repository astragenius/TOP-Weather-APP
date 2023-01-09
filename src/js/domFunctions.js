import { fetchData, getInput } from './apiLogic'
import {
    formatTime,
    getWeatherStatus,
    getWeatherIcon,
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
    static renderHighlights(data) {}
    static renderfiveDayForcast(data) {}
}
