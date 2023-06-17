import { Octokit } from 'https://esm.sh/octokit'

export default async function useRepos () {
  const octokit = new Octokit({
    auth: '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'
  })

  const repos = await octokit.request('GET /user/repos', {
    header: {
      username: 'USERNAME',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const publicRepos = repos.data.filter((repo) => repo.private === false)

  return publicRepos
}
