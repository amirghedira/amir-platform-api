const shell = require('shelljs');


const inject_git_credentials_to_url = (remote, username, token) => {
    splittedRemote = remote.split('//')
    return `${splittedRemote[0]}//${username}:${token}@${splittedRemote[1]}`

}

const updateGitRepoReadme = (github_url, doc) => {

    const TOKEN = process.env.GITHUB_TOKEN
    const username = process.env.GITHUB_USERNAME
    const email = process.env.GITHUB_EMAIL

    const injected_remote = inject_git_credentials_to_url(github_url, username, TOKEN)
    const root_path = require('path').resolve('./')
    shell.exec(`${root_path}/git_script.sh -r ${injected_remote} -u ${username} -e ${email} -c "${doc}"`)

}


module.exports = updateGitRepoReadme