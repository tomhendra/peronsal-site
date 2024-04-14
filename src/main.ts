import './styles.css'
import { getYear } from './utils'

console.log('👻 boo!')

const dateElement = document.querySelector<HTMLSpanElement>('.date')
const thisYear = getYear()
dateElement!.innerHTML = String(thisYear)
