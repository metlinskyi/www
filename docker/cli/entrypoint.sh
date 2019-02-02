#!/usr/bin/env sh

alias ll='ls -la --color'
alias magento-cli='php ./bin/magento'

chown -R magento:magento /var/www/html

if [ `ls -A "/var/www/html/bin" | wc -m` == "0" ]; then
    
    tar xvC . -f /dist/magento2.tar.bz2
    
    find . -type d -exec chmod 700 {} \; && find . -type f -exec chmod 600 {} \;

	MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD:-mysql}
	MYSQL_DATABASE=${MYSQL_DATABASE:-""}
	MYSQL_USER_NAME=${MYSQL_USER_NAME:-""}
	MYSQL_USER_PASSWORD=${MYSQL_USER_PASSWORD:-""}
    ADMIN_FIRSTNAME=${ADMIN_FIRSTNAME:-""}
    ADMIN_LASTNAME=${ADMIN_LASTNAME:-""}
    ADMIN_EMAIL=${ADMIN_EMAIL:-""}
    ADMIN_USER=${ADMIN_USER:-""}
    ADMIN_PASSWORD=${ADMIN_PASSWORD:-""}
    LANGUAGE=${LANGUAGE:-""}
    CURRENCY=${CURRENCY:-""}
    BACKEND_FRONTNAME=${BACKEND_FRONTNAME:-""}

    magento-cli setup:install \
        --base-url=http://localhost/ \
        --db-host=mysql.magento2.local \
        --db-name=$MYSQL_DATABASE \
        --db-user=$MYSQL_USER_NAME \
        --db-password=$MYSQL_USER_PASSWORD \
        --backend-frontname=$BACKEND_FRONTNAME \
        --admin-firstname=$ADMIN_FIRSTNAME \
        --admin-lastname=$ADMIN_LASTNAME \
        --admin-email=$ADMIN_EMAIL \
        --admin-user=$ADMIN_USER \
        --admin-password=$ADMIN_PASSWORD \
        --language=$LANGUAGE \
        --currency=$CURRENCY \
        --timezone=UTC \
        --use-rewrites=1

    mv package.json.sample package.json
    mv Gruntfile.js.sample Gruntfile.js
    mv grunt-config.json.sample grunt-config.json 

    npm install
    npm update 
    npm audit fix

else

    grunt exec:default
    grunt less:default
    grunt watch:default

fi
