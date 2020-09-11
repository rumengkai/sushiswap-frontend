#!/bin/bash
set timeout -1

yarn build
cd build
zip -r ./build.zip ./*
cd ../

./build_spawn.sh
