FROM python:3.12-slim

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


ADD ./server.py ./server.py
ADD ./requirements.txt ./requirements.txt


#CMD ["go", "build", "dispatcher.go"," &&", "./dispatcher"] 
CMD ["sh", "-c", "pip install -r requirements.txt && python3 server.py"]



