# WWW

Common settings

```bash
docker network create -d bridge metlinskyi
docker volume create www
```

Build

```bash
docker build --pull --rm -f "dockerfile" -t metlinskyi/com:www "."
docker push metlinskyi/com:www
```


Run on server

```bash
docker container stop www && docker container rm www
docker pull metlinskyi/com:www
docker run -d \
    --name www \
    --hostname www \
    --network=metlinskyi \
    --volume=www:/app:rw \
    metlinskyi/com:www
```