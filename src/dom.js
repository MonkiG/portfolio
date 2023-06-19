const $ = selector => document.querySelector(selector)
export const $$ = selector => document.querySelectorAll(selector)
const app = $('#app')
const firstPTagAboutMe = $('#about-me p')
const bars = $('#bars')
const menuCanvas = $('#menu-overlay')
const closeMenu = $('.button-close')
const closeMenuSvg = $('.button-close svg')
const menuLayout = $('#menu-layout')
const menuLayoutItems = $$('.menu-layout-items')

export function svgColor () {
  closeMenuSvg.addEventListener('mouseover', () => {
    closeMenuSvg.setAttribute('fill', '#000')
  })
  closeMenu.addEventListener('mouseout', () => {
    closeMenuSvg.setAttribute('fill', '#94a3b8')
  })
}

export function barsMenu () {
  closeMenuAnimations()
  bars.addEventListener('click', () => {
    menuCanvas.classList.remove('hidden')
    menuCanvas.classList.add('fixed', 'animate-start-fade-in')
    menuLayout.classList.add('animate-slide-left')
  })
}

export function addAboutMeData () {
  const actualDate = new Date()
  const careerExpectedEnd = 2025
  const careerSemesters = 4 * 2
  const carrerLeftSemesters = actualDate.getMonth() + 1 >= 6 ? careerExpectedEnd - actualDate.getFullYear() : (careerExpectedEnd - actualDate.getFullYear()) + 1
  let endCareer = false
  const currentSemester = (() => {
    switch (careerSemesters - carrerLeftSemesters) {
      case 6:
        return careerSemesters - carrerLeftSemesters + 'to'
      case 7:
        return careerSemesters - carrerLeftSemesters + 'mo'
      case 8:
        return careerSemesters - carrerLeftSemesters + 'vo'
      default :
        endCareer = true
        return ''
    }
  })()

  const dataBirth = new Date('2000 09 19')

  let currentAge = actualDate.getFullYear() - dataBirth.getFullYear()
  const age = new Date(actualDate.getFullYear(), dataBirth.getMonth(), dataBirth.getDate())

  if (actualDate.getFullYear() - age) {
    currentAge--
  }

  if (endCareer) {
    firstPTagAboutMe.innerHTML = `Hola! Me llamo Ramón Hernández tengo ${currentAge} años , soy egresado de la carrera "Ingenieria en
  Computación" de el <span class="font-bold underline"><a href="http://www.cuc.udg.mx/" target="_blank">Centro Universitario de la Costa, UdeG</a></span>. `
  } else {
    firstPTagAboutMe.innerHTML = `Hola! Me llamo Ramón Hernández tengo ${currentAge} años , actualmente curso el ${currentSemester} semestre de la carrera "Ingenieria en
  Computación" en el <span class="font-bold underline"><a href="http://www.cuc.udg.mx/" target="_blank">Centro Universitario de la Costa, UdeG</a></span>. `
  }
}

export function addCurrentYearToFooter () {
  const footer = document.createElement('footer')
  footer.classList.add('h-full', 'p-2')
  const p = document.createElement('p')
  p.classList.add('text-center', 'text-slate-400')
  footer.appendChild(p)
  document.addEventListener('DOMContentLoaded', () => {
    const date = new Date().getFullYear()
    p.innerHTML = `&copy; Copyright ${date} MonkiDev`
    app.appendChild(footer)
  })
}

function closeMenuAnimations () {
  closeMenu.addEventListener('click', () => {
    closeMenuLogic()
  })

  menuLayoutItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenuLogic()
    })
  })
}

function closeMenuLogic () {
  menuCanvas.classList.add('animate-end-fade-out')
  menuLayout.classList.add('animate-slide-right')
  menuCanvas.classList.remove('animate-start-fade-in')
  menuLayout.classList.remove('animate-slide-left')
  setTimeout(() => {
    menuCanvas.classList.add('hidden')
    menuCanvas.classList.remove('fixed')
    menuLayout.classList.remove('animate-slide-right')
    menuCanvas.classList.remove('animate-end-fade-out')
  }, 300)
}
