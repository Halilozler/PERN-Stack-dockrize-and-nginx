FROM node:14-alpine AS server-development
ENV NODE_ENV development
WORKDIR /app/server
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
ENTRYPOINT [ "nodemon", "--legacy-watch", "--inspect=0.0.0.0", "./src/index.js"]


FROM node:14-alpine AS server-builder
ENV NODE_ENV production
WORKDIR /app/server
COPY package*.json ./
RUN npm install --production
COPY . .
# Bu kısımda seçtiğiniz build kütüphanesi ile RUN ... ekleyin.

FROM node:14-alpine AS server-production
COPY --from=server-builder /app/server .
RUN npm install pm2 -g
EXPOSE 80
CMD pm2 start --no-daemon ./src/index.js