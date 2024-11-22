FROM node:18.16 AS build

COPY . ./app

WORKDIR /app

RUN npm install
RUN npm run build
RUN ls -la /app


FROM nginx
EXPOSE 80
EXPOSE 443

COPY --from=build /app/dist /var/www/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
