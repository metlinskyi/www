#!/usr/bin/env sh

chown -R magento:magento /var/www/html

npm install
npm update 
npm audit fix

grunt exec:default
grunt less:default
grunt watch:default