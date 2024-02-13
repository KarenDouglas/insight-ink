const User = require ('./User');
const Habit = require('./Habit');
const Entry = require ('./Entry');
const EntryHabit = require('./EntryHabit')

// define relationships between models here
User.hasMany(Entry);
Entry.belongsTo(User);

User.hasMany(Habit, {foreignKey: "user_id"});
Habit.belongsTo(User, {foreignKey: "user_id"});

Entry.belongsToMany(Habit, { through: EntryHabit, foreignKey: "entry_id"});
Habit.belongsToMany(Entry, { through: EntryHabit,  foreignKey: "habit_id"});

module.exports = {User, Habit, EntryHabit, Entry}