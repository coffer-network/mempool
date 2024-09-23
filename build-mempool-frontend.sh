#!/bin/bash

docker build \
  -f ./docker/frontend/Dockerfile ./frontend \
  -t coffernetwork/mempool-frontend