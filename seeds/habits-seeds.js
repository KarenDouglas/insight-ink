const Habit = require('../models/Habit')
const habits = [
    {
      user_id: 1,
      habit_name: 'Exercise',
      streak: 5,
    },
    {
      user_id: 2,
      habit_namename: 'Meditation',
      streak: 10,
    },
  ];

  const seedHabits = () => Habit.bulkCreate(habits);
  module.exports =  seedHabits ;