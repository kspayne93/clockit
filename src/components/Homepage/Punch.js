import React from 'react';
import '../Homepage/Punch.css'

function Punch(props) {
   let { id, punch_status, punch_date, punch_day, punch_time, am_pm } = props; //received props from Homepage component then deconstructed to be accessed

   return (
      <div className='punch'>
         <p>{punch_status}</p>
         <p>DATE: {punch_date}</p>
         <p>DAY: {punch_day}</p>
         <p>TIME: {punch_time}</p>
         <p>{am_pm}</p>
         <button>EDIT</button>
         <button>DELETE</button>
      </div>
   )
};

export default Punch;