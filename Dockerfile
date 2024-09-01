FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["node", "--loader", "ts-node/esm", "server.ts"]
