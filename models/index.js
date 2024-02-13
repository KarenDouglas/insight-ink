const User = require ('./User');
const Habit = require('./Habit');
const Entry = require ('./Entry');
const EntryHabit = require('./EntryHabit')

// define relationships between models here
User.hasMany(Entry);
Entry.belongsTo(User);

User.hasMany(Habit);
Habit.belongsTo(User);

Entry.belongsToMany(Habit, { through: EntryHabit });
Habit.belongsToMany(Entry, { through: EntryHabit });

module.exports = {User, Habit, EntryHabit}