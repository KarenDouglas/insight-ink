
const seedEntries = require('./entries-seeds')
const seedUsers = require('./user-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedEntries();
  console.log('\n----- ENTRIES SEEDED -----\n');

  

  process.exit(0);
};

seedAll();