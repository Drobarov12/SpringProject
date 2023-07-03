FROM adoptopenjdk:14

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container
COPY .mvn/wrapper/maven-wrapper.jar /app/project.jar

# Expose the port on which your Spring Boot application listens
EXPOSE 9999

# Define the command to start your Spring Boot application
CMD ["java", "-jar", "project.jar"]