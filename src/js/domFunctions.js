import { fetchData, getInput, getWeatherData } from './apiLogic'
import {
    formatTime,
    getWeatherStatus,
    getWeatherIcon,
    convertKm,
    errorFunction,
    getUserCords,
} from './utilityFunctions'

export class DOM {
    static initDOM() {
        DOM.init()
        DOM.renderUserPosition()
    }

    static init() {
        const searchBtn = document.getElementById('search-btn')
        const convertCels = document.getElementById('celsiusConvert')
        const convertFahr = document.getElementById('fahrConvert')
        const menuBtn = document.querySelector('.search-menu-btn')
        menuBtn.addEventListener('click', DOM.toggleMenu)
        searchBtn.addEventListener('click', DOM.renderWeather)
        convertCels.addEventListener('click', DOM.renderWeather)
        convertFahr.addEventListener('click', () => {
            DOM.renderWeather('fahrenheit')
        })
    }

    static async renderWeather(unit, coords = undefined) {
        const data = await fetchData(unit, coords)
        console.log(data)

        //renderTodayWeather
        DOM.renderTodayWeather(data)
        //renderHighlights
        DOM.renderHighlights(data)
        //renderfiveDayForcast
        DOM.renderfiveDayForcast(data)
    }

    static renderTodayWeather(data) {
        const todayImg = document.getElementById('img')
        const todayTemp = document.getElementById('todayTemp')
        const todayCity = document.getElementById('todayCity')
        const todayDate = document.getElementById('todayDate')
        const todayStatus = document.getElementById('todayWeatherStatus')
        const todayTempUnit = document.getElementById('todayTempUnit')

        todayTemp.textContent = Math.round(data.current_weather.temperature)

        if (getInput() === '' || getInput() === 'Berlin') {
            todayCity.textContent = `lat: ${data.latitude}, lon: ${data.longitude}`
        } else {
            todayCity.textContent = getInput()
        }
        todayDate.textContent = formatTime(data.current_weather.time)
        todayStatus.textContent = getWeatherStatus(
            data.current_weather.weathercode
        )
        todayImg.src = getWeatherIcon(data.current_weather.weathercode)
        todayTempUnit.textContent = data.daily_units.temperature_2m_max
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
        const maxTemp = data.daily.temperature_2m_max
        const minTemp = data.daily.temperature_2m_min
        const time = data.daily.time
        const weathercode = data.daily.weathercode
        const tempUnit = data.daily_units.temperature_2m_max

        for (let i = 1; i <= 5; i++) {
            container.innerHTML += `
            <div class="weather-box bg-main-blueBg-100 clr-neutral-200 fs-300 padding-20">
                <h3 class="">${formatTime(time[i])}</h3>
                <img class="weather-img margin-block-16" src="${getWeatherIcon(
                    weathercode[i]
                )}" alt="">
                <div class="temp flex ">
                    <p class="">${Math.round(
                        maxTemp[i]
                    )}<span>${tempUnit}</span></p>
                    <p class=" clr-neutral-400">${Math.round(
                        minTemp[i]
                    )}<span>${tempUnit}</span></p>
                </div>
            </div>
`
        }
    }

    static async renderUserPosition() {
        if ('geolocation' in navigator) {
            const data = await getUserCords()
            const unit = 'celsius'
            DOM.renderWeather(unit, data)
        } else {
            DOM.renderWeather()
        }
    }

    static toggleMenu() {
        const button = document.querySelector('.search-menu-btn')
        const currentState = button.getAttribute('data-state')
        if (!currentState || currentState === 'closed') {
            button.setAttribute('data-state', 'opened')
            button.setAttribute('aria-expanded', 'true')
        } else {
            button.setAttribute('data-state', 'closed')
            button.setAttribute('aria-expanded', 'false')
        }
    }

    static renderError() {}
}
