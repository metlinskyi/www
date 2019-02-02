![favicon-ico] www > magento2
=======

My magento2 development environment base on Docker

###### Usage

```
cd <app dir>
git clone --single-branch --branch magento2 https://github.com/metlinskyi/www.git
```

```
scp -i <ssh key> magento2.tar.bz2 <user>@<ip>:<app dir>/www/dist/magento2.tar.bz2
```

```
cd www
docker-compose -f up -d --build
```

&nbsp;
============
&copy; [The best software engineer in the Universe!](http://www.metlinskyi.com/)

[favicon-ico]: https://raw.github.com/metlinskyi/www/magento2/favicon.png