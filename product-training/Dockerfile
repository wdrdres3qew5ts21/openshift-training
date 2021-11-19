FROM quay.io/linxianer12/nestjs-node14 as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY . /home/node

RUN yarn install --only=production && yarn build && ls

FROM docker.io/node:14-alpine

ENV NODE_ENV production

WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules
RUN ls


CMD ["node", "dist/main.js"]