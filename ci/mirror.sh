#!/bin/bash


USER_PATH="/home/gitlab-runner"
REPO_PATH="${USER_PATH}/save-amir-platform-api"
if [ ! -d "${REPO_PATH}" ]; then
    sudo cd "${USER_PATH}"
    git clone "https://amirghedira:${GITLAB_TOKEN}@gitlab.com/amir-platform/amir-platform-api.git" save-amir-platform-api
    cd save-amir-platform-api
    git remote add github "https://amirghedira:${GITHUB_TOKEN}@github.com/amirghedira/mywebsiteRestAPI.git"
fi

sudo cd "${REPO_PATH}" && git pull origin main || :
git push github main -f
exit 0
