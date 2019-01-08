-- CREATE TABLE 
create table punches(
    id serial PRIMARY KEY,
    punch_status varchar(10),
    punch_date varchar(8),
    punch_day varchar(10),
    punch_time varchar(8),
    am_pm varchar(2)
);


-- Adding dummy data
insert into punches(punch_status, punch_date, punch_day, punch_time, am_pm)
values('in', '01/04/18', 'Friday', '08:00','am');

insert into punches(punch_status, punch_date, punch_day, punch_time, am_pm)
values('out', '1/04/18', 'Friday', '05:00','pm');

insert into punches(punch_status, punch_date, punch_day, punch_time, am_pm)
values('in', '1/05/18', 'Saturday', '11:30', 'am');

insert into punches(punch_status, punch_date, punch_day, punch_time, am_pm)
values('out', '1/05/18', 'Saturday', '04:30', 'pm');