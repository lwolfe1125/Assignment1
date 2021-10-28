CREATE SCHEMA IF NOT EXISTS my_schema AUTHORIZATION user2690;

DROP TABLE IF EXISTS my_schema.test_table;

CREATE TABLE IF NOT EXISTS my_schema.test_table (
    Country varchar(10),
    City varchar(20)
);

INSERT INTO my_schema.test_table(Country, City)
VALUES ('Canada', 'Halifax');

