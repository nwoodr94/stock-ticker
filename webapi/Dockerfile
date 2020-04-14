FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY /ticker .

EXPOSE 8000

CMD ["node", "server.js"]