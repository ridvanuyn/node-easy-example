#!/bin/bash
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .. .
ENV NODE_ENV=local
EXPOSE 3000

CMD ["node", "index.js" ]
