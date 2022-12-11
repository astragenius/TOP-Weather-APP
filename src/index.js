import './scss/index.scss'
import img from './assets/img/sun rain.svg'
import img1 from './assets/img/rain.svg'

const imgs = document.getElementById('img')
const weatherImg = [...document.querySelectorAll('.weather-img')]
imgs.src = img

weatherImg.forEach((el) => {
    el.src = img1
})
