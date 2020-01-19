#!/bin/bash

if [ "$1" == "svechi" ]; then
cd /docker/projects/svechi.store
docker rm -f svechi
docker rmi -f svechi
docker build -t svechi .
docker run -d --name svechi -p 10001:80 -p 10002:3000 svechi
fi
