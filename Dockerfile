FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 7001
CMD ["npm", "start"]