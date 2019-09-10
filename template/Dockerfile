FROM registry.jeebey.com/node:8.10.0-alpine

RUN mkdir -p /app
COPY .nuxt /app/.nuxt
COPY static /app/static
COPY nuxt.config.js /app
COPY package.json /app
WORKDIR /app
RUN npm install
EXPOSE 3002
CMD [ "npm", "start" ]
