#FROM node:8.16.2-alpine3.9
#
#ARG version="0.0.1"
#
#LABEL maintainer="r.maximov2012@yandex.ru"
#
#WORKDIR /app
#
#COPY . .
#
#RUN echo $version && yarn install && ls
#
#ENTRYPOINT ["yarn", "start"]
#
#EXPOSE 3000

FROM nginx:1.17.6-alpine

#RUN apk add --no-cache nodejs npm

WORKDIR /etc/nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /app


COPY . .
RUN ls

#RUN npm i && npm run build

#RUN apk del nodejs npm

CMD ["nginx", "-g", "daemon off;"]

#FROM ubuntu:18.04
#
#RUN apt-get update && \
#    apt-get -y upgrade
#
#RUN ls
#RUN set -x CONFIG="--with-http_ssl_module" && \
#    apt-get install -y build-essential nginx && \
##    libpcre3 libpcre3-dev libpcrecpp0v5 libssl-dev zlib1g-dev && \
#    rm -rf /var/lib/apt/lists/*
#
#COPY ./nginx.conf /etc/nginx/nginx.conf
#
#CMD ["nginx", "-g", "daemon off;"]