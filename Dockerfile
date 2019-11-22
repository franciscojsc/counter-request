FROM node:alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --production

COPY --chown=node:node src .

USER node

EXPOSE 8080

CMD [ "node", "index.js" ]
