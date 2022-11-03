mkdir git_clones



while getopts r:c:u:e: flag; do
    case "${flag}" in
        c) content=${OPTARG};;
        u) username=${OPTARG};;
        e) email=${OPTARG};;
        r) remote=${OPTARG};;
    esac
done

cd git_clones
git clone "${remote}" repo
cd repo 

git config --global user.email "${email}"
git config --global user.name "${username}"
echo "${content}" > readme.md
git add .
git commit -m "update readme.md"
git pull
git push

rm -rf ../../git_clones