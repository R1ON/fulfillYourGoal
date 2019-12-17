FROM node:8.16.2-alpine3.9

ARG version="0.0.1"

LABEL maintainer="r.maximov2012@yandex.ru"

WORKDIR /app

COPY . .

RUN echo $version && yarn install && ls

ENTRYPOINT ["yarn", "start"]

EXPOSE 3000
