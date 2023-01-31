FROM node:18

COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

WORKDIR /app

COPY package.json .
COPY src ./src

RUN npm install --production

CMD ["node", "src/index.js"]

