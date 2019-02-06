#!/usr/bin/env sh

if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --directory .
    find . -type d -exec chmod 755 {} \; && find . -type f -exec chmod 644 {} \;
fi

if [ ! -d /usr/share/app/src/node_module ]; then
    npm install --save @angular/material @angular/cdk @angular/animations
    find . -type d -exec chmod 755 {} \; && find . -type f -exec chmod 644 {} \;
fi

ng serve --port 8081 >/dev/null &
nginx -g 'daemon off;'