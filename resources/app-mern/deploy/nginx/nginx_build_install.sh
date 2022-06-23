#!/bin/bash
# This bash script will build the nginx verson - nginx-1.16.1 used by dunfell yocto.

# set -euxo pipefail

cwd=$(pwd)
echo $cwd

sudo apt install -y libssl-dev libpcre3-dev libpcre3 zlib1g-dev

wget -P /tmp http://nginx.org/download/nginx-1.16.1.tar.gz

# untar the nginx version stored in the tarball
tar -xzvf /tmp/nginx-1.16.1.tar.gz -C /tmp/

DIR_CHANGE_CMD='cd /tmp/nginx-1.16.1/'
CONFIGURE_CMD='./configure --prefix=/usr --sbin-path=/usr/sbin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --pid-path=/run/nginx.pid --http-log-path=/var/log/nginx/access.log --with-pcre --with-http_ssl_module --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --with-pcre --modules-path=/etc/nginx/modules --with-http_v2_module'
MAKE_CMD='make'
MAKE_INSTALL='make install'
CREATE_CERT_DIR='mkdir -p /etc/nginx/ssl'
LEAVE_DIR='cd ../'
REMOVE_UNTARRED_DIR='rm -rf /tmp/nginx-1.16.1'

# subshell and run everything here
$DIR_CHANGE_CMD && $CONFIGURE_CMD && $MAKE_CMD && $MAKE_INSTALL && $CREATE_CERT_DIR && $LEAVE_DIR && $REMOVE_UNTARRED_DIR

# clean up.
rm -f /tmp/nginx*

# Copy the nginx conf to the system - WSL 
cp $cwd/nginx.conf /etc/nginx/nginx.conf
cp $cwd/proxy_params /etc/nginx

# 
nginx -c /etc/nginx/nginx.conf 