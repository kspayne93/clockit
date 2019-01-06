-- CREATE TABLE 
create table punches(
    id serial PRIMARY KEY,
    punch_status varchar(10),
    punch_date date,
    punch_day varchar(10),
    punch_time time
);


-- Adding dummy data
insert into punches(punch_status, punch_date, punch_day, punch_time)
values('in', '2018-01-04', 'Friday', '08:00:00');

insert into punches(punch_status, punch_date, punch_day, punch_time)
values('out', '2018-01-04', 'Friday', '05:00:00');

insert into punches(punch_status, punch_date, punch_day, punch_time)
values('in', '2018-01-0', 'Saturday', '11:30:00');

insert into punches(punch_status, punch_date, punch_day, punch_time)
values('out', '2018-01-0', 'Saturday', '04:30:00');