import './scss/index.scss'
import img from './assets/img/clear-day.svg'
import img1 from './assets/img/heavy-showers.svg'
import { DOM } from './js/domFunctions'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import formatISO from 'date-fns/formatISO'

const imgs = document.getElementById('img')
const weatherImg = [...document.querySelectorAll('.weather-img')]

document.addEventListener('DOMContentLoaded', DOM.initDOM)
