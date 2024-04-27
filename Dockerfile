FROM node:16 

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate
RUN npx prisma migrate dev --name init


COPY . .

CMD ["npm", "run", "start"]