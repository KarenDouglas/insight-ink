const User = require('../models/User')
const users = [
    {
      username: 'john_doe',
      password: 'password123',
    },
    {
      username: 'jane_smith',
      password: 'password456',
    },

  ];
  const seedUsers = async() => await User.bulkCreate(users);
  module.exports =  seedUsers 
