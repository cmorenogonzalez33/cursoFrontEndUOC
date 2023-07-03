FROM node:18-bullseye

# Path: /pokedex
WORKDIR /pokedex

# Path: /pokedex/package.json
COPY package.json .
RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "dev" ]