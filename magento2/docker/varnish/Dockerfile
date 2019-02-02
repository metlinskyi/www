FROM alpine:latest
LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	varnish

COPY entrypoint.sh 		/usr/local/bin/entrypoint.sh
COPY conf/default.vcl 	/etc/varnish/default.vcl

EXPOSE 80
WORKDIR /var/lib/varnish
CMD [ "sh", "/usr/local/bin/entrypoint.sh" ]