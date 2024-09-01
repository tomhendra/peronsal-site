FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install all dependencies (including devDependencies)
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm run build

# Remove devDependencies
RUN pnpm prune --prod

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "--max-old-space-size=200", "server.js"]
