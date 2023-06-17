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
