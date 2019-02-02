FROM alpine:latest
LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	redis

RUN touch /var/log/redis/redis.log

COPY entrypoint.sh 		/usr/local/bin/entrypoint.sh
COPY conf/redis.conf 	/etc/redis.conf

EXPOSE 6379
WORKDIR /var/lib/redis
CMD [ "sh", "/usr/local/bin/entrypoint.sh" ]