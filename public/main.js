const GH_USERNAME = 'monkig'
const TOPIC = 'portfolio-project'
const projectsList = document.querySelector('#github-projects')

const escapeHtml = (value) => {
    const div = document.createElement('div')
    div.textContent = value
    return div.innerHTML
}

const renderProjects = (repos) => {
    if (!projectsList) {
        return
    }

    if (!repos.length) {
        projectsList.innerHTML = '<li>No projects selected yet.</li>'
        return
    }

    projectsList.innerHTML = repos.map((repo) => {
        const description = repo.description ? ` - ${escapeHtml(repo.description)}` : ''

        return `<li><a href="${repo.html_url}" target="_blank">${escapeHtml(repo.name)}</a>${description}</li>`
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
        projectsList.innerHTML = '<li>Unable to load projects.</li>'
    }
}

loadProjects()
