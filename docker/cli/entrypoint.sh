#!/usr/bin/env sh

alias ll='ls -la --color'
alias magento-cli='php ./bin/magento'

chown -R magento:magento /var/www/html

# unzip distributive to source directory
if [ ! -f /var/www/html/index.php ]; then

    tar xvC . -f /dist/magento2.tar.bz2
    find . -type d -exec chmod 700 {} \; && find . -type f -exec chmod 600 {} \;

fi

# install the Magento software
if [ ! -f /var/www/html/.installed ]; then

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
    
    touch /var/www/html/.installed

fi

# run Grunt tasks
if [ -f /var/www/html/Gruntfile.js ]; then

    if [ ! -d /var/www/html/node_modules ]; then
        npm install -g grunt-cli
        npm install
        npm update 
    fi

    grunt exec:default
    grunt less:default
    grunt watch:default

fi