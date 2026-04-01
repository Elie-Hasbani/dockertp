FROM maven:3.9.9-eclipse-temurin-17

ADD ./src ./src
ADD ./target ./target
ADD ./pom.xml ./pom.xml


#CMD ["go", "build", "dispatcher.go"," &&", "./dispatcher"] 
CMD ["sh", "-c", "mvn verify && cd target && java -Xmx64m -Xms64m -jar words.jar"]



