UPDATE punches
SET punch_status = ${punch_status}, punch_date = ${punch_date}, punch_day = ${punch_day}, punch_time = ${punch_time}, am_pm = ${am_pm}
where id = ${id};

select * from punches;