FROM  node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm","start"]


#The purpose of Docker Compose is to essentially function as Docker Cli
#  ,but allow you to issue multiple commands much more quickly.
