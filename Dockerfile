FROM php:8.2-apache
RUN rm -f /var/www/html/index.html
RUN apt-get update && apt-get install -y curl
COPY public/ /var/www/html/
EXPOSE 80