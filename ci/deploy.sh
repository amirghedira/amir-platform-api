#!/usr/bin/env bash

ENV_FILE=".env"

export VERSION="${CI_COMMIT_BRANCH}-${CI_COMMIT_SHORT_SHA}"

echo "S3_IAM_USER_KEY=${S3_IAM_USER_KEY}"
echo "S3_IAM_USER_SECRET=${S3_IAM_USER_SECRET}"
echo "S3_BUCKET_NAME=${S3_BUCKET_NAME}"
echo "S3_REGION=${S3_REGION}"
echo "S3_ENDPOINT=${S3_ENDPOINT}"
echo "SLACK_TOKEN=${SLACK_TOKEN}">> "${ENV_FILE}"
echo "FEEDBACK_SLACK_TOKEN=${FEEDBACK_SLACK_TOKEN}">> "${ENV_FILE}"
echo "VERSION=${VERSION}" >> "${ENV_FILE}"
echo "JWT_SECRET=${JWT_SECRET}" >> "${ENV_FILE}"
echo "MONGO_INFO=${MONGO_INFO}" >> "${ENV_FILE}"


docker login "${CI_REGISTRY}" --username "${CI_REGISTRY_USER}" --password "${CI_REGISTRY_PASSWORD}"
docker-compose up -d --force-recreate
