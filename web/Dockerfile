FROM golang:latest

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
ADD ./dispatcher.go ./dispatcher.go
ADD ./static ./static

#CMD ["go", "build", "dispatcher.go"," &&", "./dispatcher"] 
CMD ["sh", "-c", "go build dispatcher.go && ./dispatcher"]


