![favicon-ico] www / angular
=======

My angular development environment base on Docker

###### Install

```
git config --global core.autocrlf false 
git clone --single-branch --branch angular-app https://github.com/metlinskyi/www.git
cd www
docker-compose up -d --build
```

###### Usage

```
docker exec -it angular /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
```

## Development server

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/angular/docker/favicon.png