FROM nginx:alpine

LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	sed \
 	sudo \
	shadow \
	nodejs \ 
	nodejs-npm \
	git
 
ARG email
ARG name

RUN	git config --global user.name "$name"
RUN git config --global user.email "$email"

RUN npm install -g @angular/cli
RUN npm install -g typescript 

COPY nginx.conf /etc/nginx/nginx.conf
COPY startup.sh /usr/local/bin/startup.sh

WORKDIR /usr/share/app
CMD [ "sh", "/usr/local/bin/startup.sh" ]