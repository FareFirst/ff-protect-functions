# This Dockerfile created for testing in node 10
FROM node:10-alpine

RUN npm install -g npm@latest

ENV NODE_ENV=test

COPY . .

RUN npm ci

# Run the web service on container startup.
CMD [ "npm", "run", "testcircleci" ]
