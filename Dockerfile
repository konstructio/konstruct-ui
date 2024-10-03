FROM node:20 as builder

WORKDIR /app

COPY . .

RUN npm ci

ENV NODE_ENV=production

RUN npm run build:storybook

FROM nginx:alpine as runner

EXPOSE 80

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/storybook-static /usr/share/nginx/html

CMD nginx -g 'daemon off;'
