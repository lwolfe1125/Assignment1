FROM postgres
COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_PASSWORD=thispassword
ENV POSTGRES_USER=user2690
ENV POSTGRES_DB=user2690
ENV PGDATA=/var/lib/postgresql/data/pgdata
EXPOSE 4050
CMD ["-p","4040"]

