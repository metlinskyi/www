FROM nginx:alpine

LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	sudo \
	shadow \
	nodejs \ 
	nodejs-npm \
	git
 
RUN addgroup -g 1000 developer && \
	adduser -D -S -G developer -u 1000 -s /bin/sh developer

USER developer

ARG email
ARG name

RUN	git config --global user.name "$name"
RUN git config --global user.email "$email"

RUN npm install -g sass
RUN npm install -g less
RUN npm install -g typescript 
RUN npm install -g grunt-cli
RUN npm install -g webpack
RUN npm install -g jasmine
RUN npm install -g karma-cli
RUN npm install -g mocha
RUN npm install -g @angular/cli

COPY nginx.conf /etc/nginx/nginx.conf
COPY startup.sh /usr/local/bin/startup.sh

WORKDIR /usr/share/app
CMD [ "sh", "/usr/local/bin/startup.sh" ]