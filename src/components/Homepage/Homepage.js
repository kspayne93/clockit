import React, {Component} from 'react';
import Punch from './Punch';
import axios from 'axios';

class Homepage extends Component {
   constructor() {
      super()

      this.state = {
         punches: []
      }
   }


   // LIFECYCLE METHODS
   componentDidMount() {
      this.getInventory()
   }


   // AXIOS REQUESTS
   getInventory = () => {
      axios.get(`/api/punches`).then(res => {
         this.setState({
            punches: res.data
         })
      })
      console.log(this.state.punches)
   };




   render() {
      let displayPunches = this.state.punches.map(punch => {
         return (
            <div key={punch.id} className='punch'>
               <Punch 
                  id={punch.id}
                  punch_status={punch.punch_status}
                  punch_date={punch.punch_date}
                  punch_day={punch.punch_day}
                  punch_time={punch.punch_time}
                  am_pm={punch.am_pm}
               />
            </div>
         )
      })
   
      
      return (
         <div >
            <h1>My Punches</h1>
            <div className='punch_container'>
               {displayPunches}
            </div>
         </div>
      )
   }
}

export default Homepage;