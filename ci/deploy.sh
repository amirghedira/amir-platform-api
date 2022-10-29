#!/usr/bin/env bash

ENV_FILE=".env"


echo "API_KEY=${API_KEY}" >> "${ENV_FILE}"
echo "API_SECRET=${API_SECRET}" >> "${ENV_FILE}"
echo "CLOUDINARY_URL=${CLOUDINARY_URL}" >> "${ENV_FILE}"
echo "CLOUD_NAME=${CLOUD_NAME}" >> "${ENV_FILE}"
echo "JWT_SECRET=${JWT_SECRET}" >> "${ENV_FILE}"
echo "MONGO_INFO=${MONGO_INFO}" >> "${ENV_FILE}"


docker login "${CI_REGISTRY}" --username "${CI_REGISTRY_USER}" --password "${CI_REGISTRY_PASSWORD}"
docker-compose -f "docker-compose-${ENV}.yml" up -d --force-recreate
