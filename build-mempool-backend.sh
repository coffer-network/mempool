#!/bin/bash

docker build \
  --build-context rustgbt=./rust \
  --build-context backend=./backend \
  -f ./docker/backend/Dockerfile ./backend \
  -t coffernetwork/mempool-backend
