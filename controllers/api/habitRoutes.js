
const router = require('express').Router();
const { Habit } = require('../../models');
const withAuth = require('../../utils/auth');



//withAuth
router.post('/' ,  async (req, res) => {
    try {
      const newHabit = await Habit.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
     return res.status(200).json(newHabit);
    } catch (err) {
      return res.status(400).json(err);
    }
  });
//withAuth
router.put('/:id' , async (req, res) => {
  try {
    const habitId = req.params.id;

    const habit = await Habit.findByPk(habitId);

    if (!habit) {
      return res.status(400).json({ message: 'No habit found with this id' });
    }
    habit.streak = (habit.streak ?? 0) + 1;
    await habit.save();
    return res.status(200).json(habit);
  } catch (err) {
    console.error('Error completing your request', err);
    return res.status(500).json(err);
  }
});


//withAuth
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



module.exports = router
