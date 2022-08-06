FROM node:lts-alpine as common-build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

# Development build stage
FROM common-build-stage as development-build-stage

EXPOSE 5173

CMD [ "yarn", "dev" ]


# Production build stage
FROM common-build-stage as production-build-stage

EXPOSE 8080

RUN yarn global add http-server && yarn build

CMD [ "http-server", "dist" ]


