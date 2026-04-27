# ========================================
#  Multi-Stage Dockerfile
#  Astro Portfolio - Taha Armanç Bingöl
#  Final Image: ~15MB (Alpine + Nginx)
# ========================================

# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Build the static site
RUN npm run build

# Stage 2: Security Scan (optional, runs in CI)
FROM aquasec/trivy:latest AS scanner
COPY --from=builder /app/dist /scan
RUN trivy fs --severity HIGH,CRITICAL --exit-code 0 /scan

# Stage 3: Production
FROM nginx:1.27-alpine AS production

# Security: run as non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom nginx config for SPA + caching + security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
