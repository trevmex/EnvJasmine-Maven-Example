#!/usr/bin/env bash

git submodule init && \
git submodule update && \
cd src/test/javascript/EnvJasmine && \
git pull origin master
