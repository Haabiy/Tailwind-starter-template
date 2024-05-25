# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire project directory into the container
COPY . .

# Install the http-server package globally
RUN npm install -g http-server

# Expose port 8080 to the outside world
EXPOSE 8080

# Run http-server when the container launches
CMD ["http-server", "./dist", "-p", "8080"]
