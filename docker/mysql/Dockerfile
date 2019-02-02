FROM alpine:latest
LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	shadow \
	mysql \
	mysql-client

RUN mkdir -p /var/log/mysql && \
	touch /var/log/mysql/mysql_error.log

COPY entrypoint.sh 	/usr/local/bin/entrypoint.sh
COPY conf/my.cnf 	/etc/mysql/my.cnf

EXPOSE 3306
WORKDIR /var/lib/mysql
CMD [ "sh", "/usr/local/bin/entrypoint.sh" ]