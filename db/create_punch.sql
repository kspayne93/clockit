INSERT INTO punches(punch_status, punch_date, punch_day, punch_time, am_pm)
VALUES ($(punch_status), $(punch_date), $(punch_day), $(punch_time), $(am_pm));

select * from punches;