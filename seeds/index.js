
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds')
const seedEntries = require('./entries-seeds')
const seedHabits = require('./habits-seeds')
const seedEntryHabit = require('./entryHabit_seeds')


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
     await seedUsers()

    console.log('\n----- USERS SYNCED -----\n');
     await seedEntries()
 
 console.log('\n----- ENTRIES SYNCED -----\n');
 await seedHabits()
 
 console.log('\n----- Habits SYNCED -----\n');
  
 await seedEntryHabit()
 
 console.log('\n----- EntryHabits SYNCED -----\n');
  

  process.exit(0);
};

seedAll();