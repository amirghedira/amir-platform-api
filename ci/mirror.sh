#!/bin/bash

REPO_PATH="/home/centos/save-amir-platform-api"
if [ ! -d "${REPO_PATH}" ]; then
    cd "/home/centos"
    git clone "https://amirghedira:${GITLAB_TOKEN}@gitlab.com/amir-platform/amir-platform-api.git" save-amir-platform-api
    cd save-amir-platform-api
    git remote add github "https://amirghedira:${GITHUB_TOKEN}@github.com/amirghedira/mywebsiteRestAPI.git"
fi

cd "${REPO_PATH}" && git pull origin main || :
git push github main -f
exit 0
