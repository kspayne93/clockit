module.exports = {
   getAll: (req, res) => {
      const db = req.app.get('db')

      db.get_all_punches().then(response => {
         res.status(200).send(response)
      })
   },

   createItem: (req, res) => {
      const db = req.app.get('db')
      let {punch_status, punch_date, punch_day, punch_time, am_pm} = req.body //deconstructing incoming request properties off of body 

      db.create_punch({punch_status, punch_date, punch_day, punch_time, am_pm}).then(response => {
         res.status(200).send(response) //adding new request properties to database, then sending response with updated database
      })
   },

   deleteItem: (req, res) => {
      const db = req.app.get('db')
      let {id} = req.params // id is being deconstructed off of incoming params

      db.delete_punch({id}).then(response => {
         res.status(200).send(response)
      })
   },

   updateItem: (req, res) => {
      const db = req.app.get('db')
      let {id, punch_status, punch_date, punch_day, punch_time, am_pm} = req.params;

      db.update_punch({id, punch_status, punch_date, punch_day, punch_time, am_pm}).then(response => {
         res.status(200).send(response)
      })
   },
   
}