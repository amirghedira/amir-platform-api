#!/usr/bin/env bash

source ./ci/compute-env.sh

ENV_FILE=".env.${ENV}"

# api ENV
echo "SCW_ACCESS_KEY=${CI_SCW_ACCESS_KEY}"  > "${ENV_FILE}"
echo "SCW_SECRET_KEY=${CI_SCW_SECRET_KEY}"  >> "${ENV_FILE}"
echo "SCW_PROJECT_ID=${CI_SCW_PROJECT_ID}"  >> "${ENV_FILE}"
echo "DYNAMIC_REPO_GROUPID=${CI_DYNAMIC_REPO_GROUPID}"  >> "${ENV_FILE}"
echo "PLAYBOOK_REPO_PROJECTID=${CI_PLAYBOOK_REPO_PROJECTID}"  >> "${ENV_FILE}"
echo "GIT_EMAIL=${CI_GIT_EMAIL}"  >> "${ENV_FILE}"
echo "GIT_PLAYBOOK_REPO_URL=${CI_GIT_PLAYBOOK_REPO_URL}"  >> "${ENV_FILE}"
echo "GIT_USERNAME=${CI_GIT_USERNAME}"  >> "${ENV_FILE}"
echo "GIT_PRIVATE_TOKEN=${CI_GIT_PRIVATE_TOKEN}"  >> "${ENV_FILE}"
echo "SENDGRID_API_KEY=${CI_SENDGRID_API_KEY}"  >> "${ENV_FILE}"
echo "TOKEN_EXPIRATION_TIME=${CI_TOKEN_EXPIRATION_TIME}"  >> "${ENV_FILE}"
echo "JWT_SECRET_KEY=${CI_JWT_SECRET_KEY}"  >> "${ENV_FILE}"
echo "APP_ENV=${ENV}" >> "${ENV_FILE}"
echo "GITLAB_URL=${GITLAB_URL}" >> "${ENV_FILE}"
echo "EMAIL_EXPEDITOR=${EMAIL_EXPEDITOR}" >> "${ENV_FILE}"
echo "LOG_LEVEL=${LOG_LEVEL}" >> "${ENV_FILE}"
echo "DEFAULT_PROVIDER=${DEFAULT_PROVIDER}" >> "${ENV_FILE}"

# slack/discord ENV
env|grep -E "^(SLACK_|DISCORD_)"|while read -r; do
  echo "${REPLY}" >> "${ENV_FILE}"
done

# db ENV
echo "POSTGRES_HOST_AUTH_METHOD=${CI_POSTGRES_HOST_AUTH_METHOD}" >> "${ENV_FILE}"
echo "POSTGRES_PASSWORD=${CI_POSTGRES_PASSWORD}" >> "${ENV_FILE}"
echo "POSTGRES_USER=${CI_POSTGRES_USER}" >> "${ENV_FILE}"
echo "POSTGRES_DB=${DB_NAME}" >> "${ENV_FILE}"
echo "POSTGRES_HOST=${CI_POSTGRES_HOST}" >> "${ENV_FILE}"
echo "POSTGRES_PORT=${CI_POSTGRES_PORT}" >> "${ENV_FILE}"

# Redis env
echo "REDIS_HOST=comwork_cloud_cache_${ENV}:6379" >> "${ENV_FILE}"

# PULUMI
echo "PULUMI_CONFIG_PASSPHRASE=${CI_PULUMI_CONFIG_PASSPHRASE}" >> "${ENV_FILE}"
echo "PULUMI_BACKEND_URL=${CI_PULUMI_BACKEND_URL}" >> "${ENV_FILE}"
echo "PULUMI_ACCESS_TOKEN=${CI_PULUMI_ACCESS_TOKEN}"  >> "${ENV_FILE}" 

# S3 bucket
echo "AWS_ACCESS_KEY_ID=${CI_AWS_ACCESS_KEY_ID}" >> "${ENV_FILE}"
echo "AWS_SECRET_ACCESS_KEY=${CI_AWS_SECRET_ACCESS_KEY}" >> "${ENV_FILE}"
echo "AWS_DEFAULT_REGION=${CI_AWS_DEFAULT_REGION}" >> "${ENV_FILE}"

echo "TTVA=${TTVA}" >> "${ENV_FILE}"
env|grep -E "^PRICE_"|while read -r; do
  echo "${REPLY}" >> "${ENV_FILE}"
done

# scaleway invoice bucket
echo "BUCKET_NAME=${INVOICE_BUCKET_NAME}" >> "${ENV_FILE}"
echo "BUCKET_REGION=${BUCKET_REGION}" >> "${ENV_FILE}"
echo "BUCKET_URL=${BUCKET_URL}" >> "${ENV_FILE}"

# open stack credentials
echo "OS_USERNAME=${OS_USERNAME}" >> "${ENV_FILE}"
echo "OS_PASSWORD=${OS_PASSWORD}" >> "${ENV_FILE}"
echo "OS_TENANT_NAME=${OS_TENANT_NAME}" >> "${ENV_FILE}"
echo "OS_DOMAIN_NAME=${OS_DOMAIN_NAME}" >> "${ENV_FILE}"
echo "OS_AUTH_URL=${OS_AUTH_URL}" >> "${ENV_FILE}"

# versioning
echo "VERSION=${VERSION}" >> "${ENV_FILE}"
echo "API_VERSION=v1" >> "${ENV_FILE}"
echo "APP_VERSION=${ENV}-${VERSION}" >> "${ENV_FILE}"

# domain 
echo "DOMAIN=${DOMAIN}" >> "${ENV_FILE}"

#stripe
echo "STRIPE_API_KEY=${STRIPE_API_KEY}" >> "${ENV_FILE}"
echo "STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}" >> "${ENV_FILE}"
#company name
echo "COMPANY_NAME=${COMPANY_NAME}" >> "${ENV_FILE}"

# yubico yubikey credentials
echo "YUBICO_CLIENT_ID=${YUBICO_CLIENT_ID}" >> "${ENV_FILE}"
echo "YUBICO_SECRET_KEY=${YUBICO_SECRET_KEY}" >> "${ENV_FILE}"
# ovh credentials
echo "OVH_ENDPOINT=${OVH_ENDPOINT}" >> "${ENV_FILE}"
echo "OVH_APPLICATION_KEY=${OVH_APPLICATION_KEY}" >> "${ENV_FILE}"
echo "OVH_APPLICATION_SECRET=${OVH_APPLICATION_SECRET}" >> "${ENV_FILE}"
echo "OVH_CONSUMER_KEY=${OVH_CONSUMER_KEY}" >> "${ENV_FILE}"
echo "OVH_SERVICENAME=${OVH_SERVICENAME}" >> "${ENV_FILE}"

docker login "${CI_REGISTRY}" --username "${CI_REGISTRY_USER}" --password "${CI_REGISTRY_PASSWORD}"
docker-compose -f "docker-compose-${ENV}.yml" up -d --force-recreate
