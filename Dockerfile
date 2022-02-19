FROM node:14

EXPOSE 3001

WORKDIR /index

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

RUN npm build

COPY . .

CMD ["npm", "start"]