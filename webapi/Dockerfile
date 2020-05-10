FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

ARG API_KEY
ENV API_KEY=${API_KEY}

RUN npm ci --silent

COPY . ./

EXPOSE 8000

CMD ["npm", "start"]