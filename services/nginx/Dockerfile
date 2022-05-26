FROM nginx:latest

ENV CWD='./services/nginx'

WORKDIR /var/www

# COPY ./backend /var/www
# COPY ${CWD}/conf/ecommerce.conf /etc/nginx/conf.d

COPY ${CWD}/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
