#!/usr/bin/env sh

if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --style=$style --prefix=$prefix --routing=true --skipInstall=true --verbose=true --directory . 
    chmod -R 777 .
fi

if [ ! -d /usr/share/app/node_modules ]; then
    npm install --save @angular/material @angular/cdk @angular/animations
    chmod -R 777 node_modules
fi

if [ -d /usr/share/app/node_modules ]; then
    npm install 
    npm update
    chmod -R 777 node_modules
fi

ng serve --port 8081 >/dev/null &
nginx -g 'daemon off;'