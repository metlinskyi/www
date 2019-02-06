#!/usr/bin/env sh

if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --style=$style --prefix=$prefix --routing=true --skipInstall=true --verbose=true --force=true --directory . 
    sed -i "s/dist\\/$projectName/dist/g" angular.json
    npm install && npm update
    chmod -R 777 .
fi

ng build && chmod -R 777 dist
ng serve >/dev/null &
nginx -g 'daemon off;'