FROM node:16
WORKDIR /user/src/app
COPY package*.json ./
RUN npm ci 
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]