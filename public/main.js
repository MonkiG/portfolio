const GH_USERNAME = 'monkig'
const TOPIC = 'portfolio-project'
const projectsList = document.querySelector('#github-projects')
const emptyMessage = projectsList?.dataset.empty || 'No projects selected yet.'
const errorMessage = projectsList?.dataset.error || 'Unable to load projects.'
const websiteLabel = projectsList?.dataset.websiteLabel || 'Visit website'
const repositoryLabel = projectsList?.dataset.repositoryLabel || 'View GitHub repository'
const githubHeaders = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
}

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

const icons = {
    website: `
        <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M10.5 13.5 13.5 10.5" />
            <path d="M8.75 15.25a3.18 3.18 0 0 1-4.5 0 3.18 3.18 0 0 1 0-4.5l2.5-2.5a3.18 3.18 0 0 1 4.5 0" />
            <path d="M12.75 15.75a3.18 3.18 0 0 0 4.5 0l2.5-2.5a3.18 3.18 0 0 0 0-4.5 3.18 3.18 0 0 0-4.5 0" />
        </svg>
    `,
    github: `
        <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M9 19c-4 1.5-4-2-5.5-2.5" />
            <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
        </svg>
    `,
}

const getSafeExternalUrl = (value) => {
    try {
        const url = new URL(value)
        return ['http:', 'https:'].includes(url.protocol) ? url.href : ''
    } catch {
        return ''
    }
}

const renderProjects = (repos) => {
    if (!projectsList) {
        return
    }

    if (!repos.length) {
        projectsList.innerHTML = `<li class="muted">${escapeHtml(emptyMessage)}</li>`
        return
    }

    projectsList.innerHTML = repos.map((repo) => {
        const description = repo.description ? `<span>${escapeHtml(repo.description)}</span>` : ''
        const projectName = formatProjectName(repo.name)
        const homepageUrl = getSafeExternalUrl(repo.homepage)
        const websiteAction = homepageUrl
            ? `<a class="project-icon-link" href="${escapeHtml(homepageUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${websiteLabel}: ${projectName}`)}">${icons.website}</a>`
            : ''

        return `
            <li>
                <div class="project-entry">
                    <div class="project-header">
                        <strong class="project-title">${escapeHtml(projectName)}</strong>
                        <div class="project-actions">
                            ${websiteAction}
                            <a class="project-icon-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${repositoryLabel}: ${projectName}`)}">${icons.github}</a>
                        </div>
                    </div>
                    ${description}
                </div>
            </li>
        `
    }).join('')
}

const loadProjects = async () => {
    if (!projectsList) {
        return
    }

    try {
        const query = encodeURIComponent(`user:${GH_USERNAME} topic:${TOPIC} is:public`)
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=updated&per_page=100`, {
            headers: githubHeaders,
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
