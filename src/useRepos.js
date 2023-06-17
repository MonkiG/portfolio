import { Octokit } from 'https://esm.sh/octokit'
import { apiKey } from './settings'
export default async function useRepos () {
  const octokit = new Octokit({
    auth: apiKey
  })

  const repos = await octokit.request('GET /users/ramonha13/repos', {
    header: {
      username: 'USERNAME',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const publicRepos = repos.data.filter((repo) => repo.private === false)
  return publicRepos
}
