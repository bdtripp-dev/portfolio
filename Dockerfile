FROM php:8.2-apache
RUN rm -f /var/www/html/index.html
COPY index.php /var/www/html/index.php
EXPOSE 80