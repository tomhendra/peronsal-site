# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the app
RUN pnpm run build

# Production stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./

# Install production dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Install ts-node for running TypeScript directly
RUN npm install -g ts-node

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "--loader", "ts-node/esm", "server.ts"]
