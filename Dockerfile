FROM node:20-alpine
RUN corepack enable

ADD . /frontend 
WORKDIR /frontend

RUN pnpm install --prod
RUN pnpm run build

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "npm", "start" ]