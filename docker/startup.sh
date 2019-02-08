#!/bin/sh
if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --style=$style --prefix=$prefix --routing=true --skipInstall=true --verbose=true --force=true --directory . 
    ng config -g cli.warnings.versionMismatch false
    sed -i "s/dist\\/$projectName/dist/g" angular.json
    chmod -R 777 .
fi
if [ ! -d /usr/share/app/node_modules ]; then
    npm install
    chmod -R 777 node_modules
fi
ng build && chmod -R 777 dist
ng serve --host 0.0.0.0 --port 4200