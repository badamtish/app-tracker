FROM node

WORKDIR /apptrkr

COPY ./package.json .
COPY ./packages/server ./packages/server    
COPY ./packages/common/package.json ./packages/common

RUN npm -i g yarn
RUN yarn install --production

COPY ./packages/common/dist ./packages/server

WORKDIR ./packages/server

ENV NODE_ENV production
EXPOSE 80

CMD ["node", "app.js"]

