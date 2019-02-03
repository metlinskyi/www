FROM alpine:latest
LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	shadow \
	sudo \
	curl \
	vim \
	git \
	bzip2 \
	php7 \
	php7-bcmath \
	php7-cli \
	php7-ctype \
	php7-curl \
	php7-dom \
	php7-gd \
	php7-iconv \
	php7-intl \
	php7-json \
	php7-mbstring \
	php7-mcrypt \
	php7-openssl \
	php7-pdo_mysql \
	php7-phar \
	php7-fileinfo \
	php7-session \
	php7-simplexml \
	php7-soap \
	php7-tokenizer \
	php7-xml \
	php7-xmlwriter \
	php7-xsl \
	php7-zip \
	php7-zlib \
	nodejs \ 
	nodejs-npm

RUN addgroup -g 1000 magento && \
	adduser -D -S -G magento -u 1000 -s /bin/sh magento

RUN curl --silent --show-error https://getcomposer.org/installer | php && \
	mv composer.phar /usr/bin/composer

#RUN npm config set unsafe-perm true
RUN npm install -g grunt-cli

COPY entrypoint.sh 			/usr/local/bin/entrypoint.sh
COPY conf/php.ini 			/etc/php7/php.ini

USER magento
WORKDIR /var/www/html
CMD [ "sh", "/usr/local/bin/entrypoint.sh" ]