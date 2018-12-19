# Specify a base o,age
FROM node:alpine

#把檔案都存到 /usr/app的路徑底下
WORKDIR /usr/app  


#這樣才讀的到資料夾裡面的其他檔案
#COPY ./ ./
# Install some dependencies
#RUN npm install

#改成這樣
#這樣才不會假設改了index.js檔案的東西  rebuild的時候都要跑一次下面的dependency檔案
COPY ./package.json ./
#這樣才讀的到資料夾裡面的其他檔案
# Install some dependencies
RUN npm install
COPY ./ ./


# Default command
CMD ["npm","start"]

#docker build -t jimmylin0179/simpleweb .


#docker run -it jimmylin0179/simple sh
