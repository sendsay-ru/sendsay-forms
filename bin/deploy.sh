#!/usr/bin/env bash

export MESSAGE=$(git log -1 --pretty=format:"%s %h %an")
export TMP_FOLDER=/tmp
export REP_NAME=sendsay-frontend-builds
export BUILD_PATH=build-forms
export TMP_PATH=$TMP_FOLDER/$REP_NAME

echo -e "machine github.com\n login $GH_TOKEN" > ~/.netrc
git clone https://github.com/sendsay-ru/$REP_NAME.git $TMP_PATH

yarn build

rm -rf $TMP_PATH/$BUILD_PATH dist/index.html

yes | cp -R dist $TMP_PATH/$BUILD_PATH

cd $TMP_PATH

echo $MESSAGE > $BUILD_PATH/COMMIT

git add .
git commit -m "$MESSAGE"
git push origin master
