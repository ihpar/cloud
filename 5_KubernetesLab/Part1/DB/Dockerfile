FROM node:24-alpine
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3050
CMD ["node", "db.js"]