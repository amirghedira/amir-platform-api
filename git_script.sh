mkdir git_clones



while getopts r:u:e: flag; do
    case "${flag}" in
        u) username=${OPTARG};;
        e) email=${OPTARG};;
        r) remote=${OPTARG};;
    esac
done

git clone "${remote}" ./git_clones/repo

git config --global user.email "${email}"
git config --global user.name "${username}"
cat readme.md > ./git_clones/repo/readme.md

cd ./git_clones/repo
git add .
git commit -m "update readme.md"
git pull
git push

rm -rf ../../git_clones