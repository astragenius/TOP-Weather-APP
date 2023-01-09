function formatTime(time) {
    return time
}
function getWeatherIcon(data) {}
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

export { formatTime, getWeatherIcon, getWeatherStatus }
