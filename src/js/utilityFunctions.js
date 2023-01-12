import rainImg from '../assets/img/heavy-showers.svg'
import clearDay from '../assets/img/clear-day.svg'
import clearNight from '../assets/img/clear-night.svg'
import cloudy from '../assets/img/cloudy.svg'
import fog from '../assets/img/fog.svg'
import heavySleet from '../assets/img/heavy-sleet.svg'
import heavySnow from '../assets/img/heavy-snow.svg'
import overcast from '../assets/img/overcast.svg'
import partlyCloudy from '../assets/img/partly-cloudy-day.svg'
import showers from '../assets/img/showers.svg'
import snow from '../assets/img/snow.svg'
import thunderstorm from '../assets/img/thunderstorm-showers.svg'
import format from 'date-fns/format'

function formatTime(time) {
    console.log(time)
    return format(new Date(time), 'iii dd MMM')
}
function getWeatherIcon(data) {
    switch (data) {
        case 0:
            return clearDay
        case 1:
        case 2:
            return partlyCloudy
        case 3:
            return cloudy

        case 45:
        case 48:
            return fog
        case 51:
        case 53:
        case 55:
        case 61:
        case 63:
        case 65:
            return showers
        case 66:
        case 67:
            return heavySleet
        case 71:
        case 73:
        case 85:
        case 86:
            return snow
        case 75:
        case 77:
            return heavySnow

        case 80:
        case 81:
        case 82:
            return rainImg
        case 95:
            return thunderstorm
    }
}
function getWeatherStatus(data) {
    switch (data) {
        case 0:
            return 'Clear sky'
        case 1:
            return 'Manly clear'
        case 2:
            return 'Partly cloudy'
        case 3:
            return 'Overcast'
        case 45:
            return 'Fog'
        case 48:
            return 'Rime Fog'
        case 51:
        case 53:
        case 55:
            return 'Drizzle'
        case 56:
        case 57:
            return 'Freezing Drizzle'
        case 61:
        case 63:
        case 65:
            return 'Rain'
        case 66:
        case 67:
            return 'Freezing Rain'
        case 71:
        case 73:
        case 75:
        case 77:
            return 'Snow'
        case 80:
        case 81:
        case 82:
            return 'Rain showers'
        case 85:
        case 86:
            return 'Snow Showers'
        case 95:
            return 'Thunderstorm'
    }
}
function convertKm(data) {
    return Math.round(data / 1000)
}
function errorFunction(err) {
    console.log('TEST')
    console.log(err)
}

export {
    formatTime,
    getWeatherIcon,
    getWeatherStatus,
    convertKm,
    errorFunction,
}
