FROM node:10-alpine

WORKDIR /user/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]