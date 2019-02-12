![favicon-ico] www / magento2
=======

My [Magento2](https://devdocs.magento.com) application development environment based on Docker.

###### Install

```
git clone --single-branch --branch magento2 https://github.com/metlinskyi/www.git
cd www
docker-compose up -d --build
```

###### Usage

```
docker exec -it magento2.cli /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
```

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/magento2/favicon.png
