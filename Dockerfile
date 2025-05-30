FROM node:22.14-alpine

WORKDIR /app

ENV TZ=America/Sao_Paulo

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build