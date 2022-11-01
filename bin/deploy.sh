#!/usr/bin/env bash

MESSAGE=$(git describe --tags --abbrev=0)
TMP_FOLDER=/tmp
REP_NAME=sendsay-frontend-builds
BUILD_PATH=build-forms
TMP_PATH=$TMP_FOLDER/$REP_NAME

git clone git@github.com:sendsay-ru/sendsay-frontend-builds.git $TMP_PATH

yarn build

rm -rf $TMP_PATH/$BUILD_PATH dist/index.html

yes | cp -R dist $TMP_PATH/$BUILD_PATH

cd $TMP_PATH

echo $MESSAGE > $BUILD_PATH/COMMIT

git add .
git commit -m "$MESSAGE"
git push origin master
