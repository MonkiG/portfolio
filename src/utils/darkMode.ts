import { $ } from '../../lib/query'
export default function darkMode (): void {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

  if (prefersDarkScheme.matches) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

  const darkButton = $('[aria-label="toggle dark mode"]')

  darkButton.addEventListener('click', () => {
    const theme = localStorage.getItem('theme')
    console.log(theme)
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })
}
