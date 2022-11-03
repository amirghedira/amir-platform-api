i=0

for registry_tag in $(curl -X GET --header "PRIVATE-TOKEN:${GITLAB_TOKEN}"  ${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/registry/repositories/${GITLAB_REGISTRY_ID}/tags | jq -r '.[] | @base64'); do
    i=$(( i + 1 ))
    _jq() {
     echo ${registry_tag} | base64 --decode | jq -r ${1}
    }
    if [ $i -gt 5 ]
     then
      curl -X DELETE --header "PRIVATE-TOKEN:${GITLAB_TOKEN}" ${CI_SERVER_URL}/api/v4/projects/${CI_PROJECT_ID}/registry/repositories/${GITLAB_REGISTRY_ID}/tags/$(_jq '.name') >/dev/null
    fi
done

