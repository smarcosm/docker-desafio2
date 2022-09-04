FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget 

RUN npm install  && npm install -g nodemon module  
 

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


EXPOSE 8080

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "node","index.js" ]