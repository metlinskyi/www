![favicon-ico] www / angular
=======

My angular development environment base on Docker

###### Usage

```

cd <app dir>
git clone --single-branch --branch <branch name> https://github.com/metlinskyi/www.git
cd www
docker-compose up -d --build


docker exec -it <branch name> /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"

```

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/angular/docker/favicon.png