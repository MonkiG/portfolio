import useRepos from './useRepos'

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const projectsSection = $('#projects')
const app = $('#app')
const firstPTagAboutMe = $('#about-me p')

// export function fixHeader () {
//   addEventListener('scroll', () => {
//     header.classList.toggle('sticky', window.scrollY > 0)
//     // if (header.classList.contains('sticky')) {
//     // //   header.className += ' bg-gradient-to-tr from-[#16162e] via-[#220934]  to-[#37003b]'
//     //   header.classList.add('bg-[#37003b]')
//     // } else {
//     // //   header.classList.remove('bg-gradient-to-tr', 'from-[#16162e]', 'via-[#220934]', 'to-[#37003b]')
//     //   header.classList.remove('bg-[#37003b]')
//     // }
//   })
// }

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

export function addReposToProjectsSection () {
  let isLoading = true
  const div = document.createElement('div')
  div.setAttribute('role', 'status')
  div.className = 'flex justify-center'
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('aria-hidden', 'true')
  svg.setAttribute('class', 'inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600')
  svg.setAttribute('viewBox', '0 0 100 101')
  svg.setAttribute('fill', 'none')
  // Crear el primer elemento path
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path1.setAttribute('d', 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z')
  path1.setAttribute('fill', 'currentColor')
  // Crear el segundo elemento path
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path2.setAttribute('d', 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z')
  path2.setAttribute('fill', 'currentFill')
  // Añadir los elementos path al elemento svg
  svg.appendChild(path1)
  svg.appendChild(path2)
  // Crear el elemento span
  const span = document.createElement('span')
  span.setAttribute('class', 'sr-only')
  span.textContent = 'Loading...'
  // Añadir los elementos al div
  div.appendChild(svg)
  div.appendChild(span)
  projectsSection.appendChild(div)

  useRepos().then(repos => {
    isLoading = false
    const ul = document.createElement('ul')
    ul.classList.add('grid', 'grid-cols-2', 'my-2')
    repos.forEach(repo => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      const div = document.createElement('div')
      const h3 = document.createElement('h3')
      const p = document.createElement('p')
      const h4 = document.createElement('h4')
      const button = document.createElement('button')

      li.className = 'm-5 transition-all duration-500 hover:scale-110'
      h3.className = 'text-slate-200 inline text-2xl mr-2'
      h4.className = 'p-1 inline text-xs language rounded-xl font-bold'
      button.className = 'text-slate-200 clone-button'
      p.className = 'text-slate-400'

      a.setAttribute('href', `${repo.html_url}`)
      a.setAttribute('target', '_blank')
      button.setAttribute('name', `${repo.name}`)
      button.setAttribute('value', `${repo.clone_url}`)

      h3.appendChild(document.createTextNode(`${repo.name}`))
      h4.appendChild(document.createTextNode(`${repo.language}`))
      p.appendChild(document.createTextNode(`${repo.description}`))
      button.appendChild(document.createTextNode('Clone'))
      li.appendChild(a).appendChild(div).appendChild(h3)
      div.appendChild(h4)
      a.appendChild(p)
      li.appendChild(button)
      ul.appendChild(li)

      projectsSection.appendChild(ul)
    })

    if (!isLoading) {
      projectsSection.removeChild(div)
    }
    if (repos && repos.length % 2 !== 0) {
      const ulProjectsSection = $('#projects ul')
      ulProjectsSection.lastChild.className = 'col-span-2 text-center m-auto transition-all duration-500 hover:scale-110'
    }

    addColorToLanguages()
  }).catch(e => console.error(e))
}

function addColorToLanguages () {
  const languages = $$('.language')
  languages.forEach((language, indez) => {
    if (language.innerText === 'JavaScript') {
      language.classList.add('bg-yellow-400')
    }
    if (language.innerText === 'TypeScript') {
      language.classList.add('bg-blue-400')
    }
    if (language.innerText === 'HTML') {
      language.classList.add('bg-orange-600')
    }
  })
}
