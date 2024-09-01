# Use an official Node runtime as the parent image
FROM node:20

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install any needed packages specified in package.json
RUN pnpm install --frozen-lockfile

# Bundle app source inside the docker image
COPY . .

# Build the app
RUN pnpm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "--loader", "ts-node/esm", "server.ts" ]
