import './scss/index.scss'
import img from './assets/img/clear-day.svg'
import img1 from './assets/img/heavy-showers.svg'
import { DOM } from './js/domFunctions'

const imgs = document.getElementById('img')
const weatherImg = [...document.querySelectorAll('.weather-img')]

imgs.src = img

weatherImg.forEach((el) => {
    el.src = img1
})

document.addEventListener('DOMContentLoaded', DOM.initDOM)
