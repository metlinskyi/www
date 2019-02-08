FROM node:10-alpine

LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	sed \
 	sudo \
	shadow \
	git
 
ARG email
ARG name

RUN git config --global core.autocrlf false
RUN	git config --global user.name "$name"
RUN git config --global user.email "$email"

# Installs latest Angular CLI with dependency.
RUN npm install -g @angular/cli
RUN npm install -g typescript 
RUN npm install -g sass
RUN npm install -g karma-cli

# Installs latest Chromium package.
RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories \
    && echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories \
    && apk add --no-cache \
    chromium@edge \
    harfbuzz@edge \
    nss@edge \
    && rm -rf /var/cache/*

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/

# Add Chrome as a user
RUN mkdir -p /usr/src/app \
    && adduser -D chrome \
    && chown -R chrome:chrome /usr/src/app

COPY startup.sh /usr/local/bin/startup.sh
RUN chmod +x /usr/local/bin/startup.sh

EXPOSE 4200 
EXPOSE 9876
WORKDIR /usr/share/app

# Initialize
CMD [ "sh", "/usr/local/bin/startup.sh" ]