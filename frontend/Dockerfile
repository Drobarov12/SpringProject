# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run (typically 3000)
EXPOSE 3000

# Set the startup command to serve the built app
CMD ["npm", "start"]
