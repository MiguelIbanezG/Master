#!/bin/bash

commit_count=$(git rev-list --count HEAD)

docker login

docker build -t back .
docker tag back zhijieuam/team3:$commit_count
docker tag back zhijieuam/team3:latest
docker push zhijieuam/team3:$commit_count
docker push zhijieuam/team3:latest
curl https://api.render.com/deploy/srv-ctbif6ggph6c73btk27g?key=psNRxkkzYPw
