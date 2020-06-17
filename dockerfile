FROM node:alpine

LABEL version="1.0" description="node image"

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]