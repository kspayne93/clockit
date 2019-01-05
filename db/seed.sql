-- CREATE TABLE 
create table punches(
    id serial PRIMARY KEY,
    punch_status varchar(10),
    punch_date date,
    day varchar(10),
    punch_time time
);

