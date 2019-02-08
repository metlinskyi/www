![favicon-ico] www / angular
=======

My angular development environment base on Docker

###### Install

```
git clone --single-branch --branch angular https://github.com/metlinskyi/www.git
cd www
docker-compose up -d --build
```

###### Usage

```
docker exec -it angular /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
```

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/angular/docker/favicon.png