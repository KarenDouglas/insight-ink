
const router = require('express').Router();
const { Habit } = require('../../models');


// ROUTE to POST a new habit
// listens for new client side req for  journal entry with NEW habit added
// adds habit to habits table 
// from here, there will be a client side request to fetch the newly added habit to be displayed on the habits view
router.post('/', async (req, res) => {
    try {
      const newHabit = await Habit.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newHabit);
    } catch (err) {
      res.status(400).json(err);
    }
  });




// ROUTE to UPDATE habit streak
// client side request is made to UPDATE the habit streak
// this request will add +1 to the streak count whenever the user completes the habit a second time and update this habit on the habits table
// it will then be sent back to the client side to display the updated view
router.put()



// ROUTE to DELETE habit 
// listens for client request to DELETE existing habit
// this request will remove the chosen habit from the habits table
// then the conformation of deleted data is sent back to client side and the updated habit view is rendered 

router.delete('/:id', async (req, res) => {
    try {
      const habitData = await Habit.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!habitData) {
        res.status(404).json({ message: 'No habit found with this id!' });
        return;
      }
  
      res.status(200).json(habitData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


