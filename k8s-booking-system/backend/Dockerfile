FROM node:lts-buster-slim

RUN npm -g install \
        @types/express \
        @types/node \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/parser \
        apollo-server-express \
        cors \
        eslint \
        eslint-config-prettier \
        eslint-plugin-prettier \
        express \
        express-graphql \
        graphql@14.4.1 \
        mysql2 \
        nodemon \
        prettier \
        reflect-metadata \
        ts-node \
        tsconfig-paths \
        typeorm \
        typescript \
        && npm cache clean --force

WORKDIR /app
