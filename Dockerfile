FROM node:latest

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 8090
CMD [ "node", "bin/www" ]