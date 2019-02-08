FROM node:alpine

LABEL maintainer Roman Metlinskyi <gmail@metlinskyi.com>

RUN apk --update --no-cache add \
	sed \
 	sudo \
	shadow \
	git
 
ARG email
ARG name

RUN	git config --global user.name "$name"
RUN git config --global user.email "$email"

RUN npm install -g @angular/cli
RUN npm install -g typescript 
RUN npm install -g sass
RUN npm install -g karma-cli

COPY nginx.conf /etc/nginx/nginx.conf
COPY startup.sh /usr/local/bin/startup.sh

EXPOSE 4200 
EXPOSE 9876
WORKDIR /usr/share/app
CMD [ "sh", "/usr/local/bin/startup.sh" ]