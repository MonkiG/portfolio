import { apiKey } from './settings'
export default async function useRepos () {
  let publicRepos
  fetch('https://api.github.com/users/ramonha13/repos', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      publicRepos = data.filter((repo) => repo.private === false)
      return publicRepos
    })
    .catch((error) => {
      // Manejar el error
      console.error(error)
    })
}
