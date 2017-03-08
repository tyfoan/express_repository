FROM node:latest

RUN mkdir -p /app
RUN mkdir -p /app/db
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3001

CMD [ "node", "bin/www" ]