const EntryHabit = require('../models/EntryHabit')

const entryHabits = [
    { entry_id: 1, habit_id: 1 },
    { entry_id: 1, habit_id: 2 },
    { entry_id: 2, habit_id: 1 },
]
const seedEntryHabit = () => EntryHabit.bulkCreate(entryHabits);
module.exports = seedEntryHabit