![favicon-ico] www / wordpress
=======

My [WordPress](https://codex.wordpress.org/) application development environment based on Docker. 

  
###### Install

```
git clone --single-branch --branch wordpress https://github.com/metlinskyi/www.git
cd www
docker-compose up -d --build
```

###### Usage

```
docker exec -it wordpress.<service> /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
```

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/wordpress/favicon.ico
