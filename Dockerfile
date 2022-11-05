FROM node:14.20-alpine
ENV TZ=Asia/Bangkok

WORKDIR /app/

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

# Running the app
# CMD [ "npm", "start" ]

# CMD pm2 start npm --  start