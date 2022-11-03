mkdir git_clones

while getopts r:c: flag; do
    case "${flag}" in
        c) content=${OPTARG};;
        r) remote=${OPTARG};;
    esac
done

cd git_clones
git clone "${remote}" repo
cd repo 


echo "${content}" > readme.md
git add .
git commit -m "update readme.md"
git pull
git push

rm -rf ../../git_clones