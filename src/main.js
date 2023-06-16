import './../style.css'
import { footer } from './dom'

document.addEventListener('DOMContentLoaded', () => {
  const date = new Date().getFullYear()
  footer.innerHTML = `&copy; Copyright ${date} MonkiDev`
})
