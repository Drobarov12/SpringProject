# Use a base image for Node.js
FROM node:14-alpine as frontend

# Set working directory for the frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json for frontend
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend app files
COPY frontend ./

# Build the frontend app
RUN npm run build


# Use a base image for OpenJDK
FROM adoptopenjdk:14 as backend

# Set working directory for the backend
WORKDIR /app/backend

# Copy the JAR file into the backend container
COPY backend/.mvn/wrapper/maven-wrapper.jar ./

# Expose the port on which the Spring Boot application listens
EXPOSE 9999

# Build the Spring Boot application
RUN java -jar maven-wrapper.jar

# Set the final base image
FROM adoptopenjdk:14

# Create a working directory for the combined app
WORKDIR /app

# Copy the frontend build files into the final image
COPY --from=frontend /app/frontend/build ./frontend

# Copy the backend JAR file into the final image
COPY --from=backend /app/backend/project.jar ./

# Expose the port on which the app will run (typically 3000 for frontend)
EXPOSE 3000

# Set the startup command to run the combined app
CMD ["java", "-jar", "project.jar"]
