#!/usr/bin/env sh

if [[ "$VERBOSE" == "true" ]]; then
	mkdir -p /var/log/nginx
	touch /var/log/nginx/error.log /var/log/nginx/access.log
	tail -f /var/log/nginx/*.log &
fi

cp "/etc/nginx/available.d/magento.conf" "/etc/nginx/conf.d/http.conf"
chown -R nginx:nginx /var/www /var/tmp/nginx
nginx -g 'daemon off;'