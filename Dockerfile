FROM php:8.2-apache
# Remove default Apache placeholder
RUN rm -f /var/www/html/index.html
COPY public/ /var/www/html/
EXPOSE 80