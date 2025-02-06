FROM node:20-alpine
RUN corepack enable

ADD . /app 
WORKDIR /app

RUN pnpm install --prod
RUN pnpm run build

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "npm", "start" ]