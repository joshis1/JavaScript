#!/bin/bash
# This bash script will deploy the front-end
# run as sudo


mkdir -p /opt/frontend
rm -vrf  /opt/frontend/*
npm install --prefix ../../src/front-end-react/ && npm run build --prefix ../../src/front-end-react/ && mv ../../src/front-end-react/build/* /opt/frontend

