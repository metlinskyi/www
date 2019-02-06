#!/usr/bin/env sh

if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --directory .
    chmod -R 777 src
fi

if [ ! -d /usr/share/app/src/node_module ]; then
    npm install --save @angular/material @angular/cdk @angular/animations
    chmod -R 777 src/node_module
fi

ng serve --port 8081 >/dev/null &
nginx -g 'daemon off;'