const users = [
    {
      username: 'john_doe',
      password: 'password123',
    },
    {
      username: 'jane_smith',
      password: 'password456',
    },
    // Add more users as needed
  ];
  const seedUsers = () => Entry.bulkCreate(users);
  module.exports = { seedUsers };
