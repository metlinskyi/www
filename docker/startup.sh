#!/usr/bin/env sh

if [ ! -d /usr/share/app/src ]; then
    ng new $projectName --style=$style --prefix=$prefix --routing=true --skipInstall=true --verbose=true --force=true --directory . 
    chmod -R 777 .
fi

npm install 
npm update
chmod -R 777 node_modules

ng build 
ng serve >/dev/null &
nginx -g 'daemon off;'