INSERT INTO punches(punch_status, punch_date, punch_day, punch_time)
VALUES ($(punch_status), $(punch_date), $(punch_day), $(punch_time));

select * from punches;