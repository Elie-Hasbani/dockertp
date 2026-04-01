FROM node:20-alpine

#RUN apt-get update 
#
#RUN apt-get upgrade -y
#
#RUN apt-get install figlet -y 
#
#RUN apt-get install coreutils 
#
#ENV SALUTAION='CIOA'
##CMD ["figlet", "Hello World!"]
#
ADD ./public ./public
ADD ./server.js ./server.js
ADD ./package.json ./package.json


#CMD ["go", "build", "dispatcher.go"," &&", "./dispatcher"] 
CMD ["node", "server.js"]


