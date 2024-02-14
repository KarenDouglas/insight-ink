const Habit = require('../models/Habit')
const habits = [
    {
      user_id: 1,
      habit_name: 'Exercise',
      streak: 5,
    },
    {
      user_id: 2,
      habit_name: 'Meditation',
      streak: 10,
    },
    {
      user_id: 2,
      habit_name: 'reading',
      streak: 10,
    },
    {
      user_id: 2,
      habit_name: 'walking',
      streak: 10,
    }
  ];

  const seedHabits = () => Habit.bulkCreate(habits);
  module.exports =  seedHabits ;