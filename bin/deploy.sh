#!/usr/bin/env bash

BUILD_PATH=build-forms
MESSAGE=$(git log -1 --pretty=format:"%s %h %an")

git clone git@github.com:sendsay-ru/sendsay-frontend-builds.git /tmp/sendsay-frontend-builds

yarn build

rm -rf /tmp/sendsay-frontend-builds/$BUILD_PATH

yes | cp -R build /tmp/sendsay-frontend-builds/$BUILD_PATH

cd /tmp/sendsay-frontend-builds

echo $MESSAGE > $BUILD_PATH/COMMIT

git add .
git commit -m "$MESSAGE"
git push origin master