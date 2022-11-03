FROM node:16-alpine


RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
    
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

EXPOSE 5000

CMD [ "node", "server.js" ]
