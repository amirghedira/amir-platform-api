#!/usr/bin/env bash

ENV_FILE=".env"

export VERSION="${CI_COMMIT_BRANCH}-${CI_COMMIT_SHORT_SHA}"
echo "GITHUB_TOKEN=${GITHUB_TOKEN}" >> "${ENV_FILE}"
echo "GITHUB_USERNAME=${GITHUB_USERNAME}" >> "${ENV_FILE}"
echo "GITHUB_EMAIL=${GITHUB_EMAIL}" >> "${ENV_FILE}"
echo "S3_IAM_USER_KEY=${S3_IAM_USER_KEY}" >> "${ENV_FILE}"
echo "S3_IAM_USER_SECRET=${S3_IAM_USER_SECRET}" >> "${ENV_FILE}"
echo "S3_BUCKET_NAME=${S3_BUCKET_NAME}" >> "${ENV_FILE}"
echo "S3_REGION=${S3_REGION}" >> "${ENV_FILE}"
echo "S3_ENDPOINT=${S3_ENDPOINT}" >> "${ENV_FILE}"
echo "SLACK_TOKEN=${SLACK_TOKEN}">> "${ENV_FILE}"
echo "FEEDBACK_SLACK_TOKEN=${FEEDBACK_SLACK_TOKEN}">> "${ENV_FILE}"
echo "VERSION=${VERSION}" >> "${ENV_FILE}"
echo "JWT_SECRET=${JWT_SECRET}" >> "${ENV_FILE}"
echo "MONGO_INFO=${MONGO_INFO}" >> "${ENV_FILE}"


docker login "${CI_REGISTRY}" --username "${CI_REGISTRY_USER}" --password "${CI_REGISTRY_PASSWORD}"
docker-compose up -d --force-recreate
