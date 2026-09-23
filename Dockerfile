# Etapa 1: build — aquí sí necesitamos npm
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Etapa 2: imagen final — solo lo necesario para ejecutar
FROM node:22-alpine
RUN apk update && apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "app.js"]
