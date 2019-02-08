#!/bin/sh
if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --style=$style --prefix=$prefix --routing=true --skipInstall=true --verbose=true --force=true --directory . 
    sed -i "s/dist\\/$projectName/dist/g" angular.json
    chmod -R 777 .
fi
if [ ! -d /usr/share/app/node_modules ]; then
    npm install --save @angular/material @angular/cdk @angular/animations
    npm install
    npm update
    chmod -R 777 node_modules
fi
ng build && chmod -R 777 dist
ng serve >/dev/null &
nginx -g 'daemon off;'