# Stage 1 — Build static site
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 — Serve using SvelteKit preview
FROM node:20
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000

VOLUME ["/app/data"]

CMD ["node", "build/index.js"]
