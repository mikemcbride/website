FROM node:10
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && mv dist /public
