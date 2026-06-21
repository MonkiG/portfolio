const GH_USERNAME = 'monkig'
const TOPIC = 'portfolio-project'
const projectsList = document.querySelector('#github-projects')
const emptyMessage = projectsList?.dataset.empty || 'No projects selected yet.'
const errorMessage = projectsList?.dataset.error || 'Unable to load projects.'

const escapeHtml = (value) => {
    const div = document.createElement('div')
    div.textContent = value
    return div.innerHTML
}

const formatProjectName = (name) => name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_.]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => word.length <= 3 && word === word.toUpperCase()
        ? word
        : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(' ')

const renderProjects = (repos) => {
    if (!projectsList) {
        return
    }

    if (!repos.length) {
        projectsList.innerHTML = `<li class="muted">${escapeHtml(emptyMessage)}</li>`
        return
    }

    projectsList.innerHTML = repos.map((repo) => {
        const description = repo.description ? ` - <span>${escapeHtml(repo.description)}</span>` : ''
        const projectName = formatProjectName(repo.name)

        return `<li><a href="${repo.html_url}" target="_blank">${escapeHtml(projectName)}</a>${description}</li>`
    }).join('')
}

const loadProjects = async () => {
    if (!projectsList) {
        return
    }

    try {
        const query = encodeURIComponent(`user:${GH_USERNAME} topic:${TOPIC} is:public`)
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=updated&per_page=100`, {
            headers: {
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })

        if (!response.ok) {
            throw new Error(`GitHub request failed with status ${response.status}`)
        }

        const data = await response.json()
        renderProjects(data.items || [])
    } catch (error) {
        console.error(error)
        projectsList.innerHTML = `<li class="muted">${escapeHtml(errorMessage)}</li>`
    }
}

loadProjects()
