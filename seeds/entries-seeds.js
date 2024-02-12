 const  Entry = require('../models/Entry')

const entries = [
    {
      user_id: 1,
      title: 'First Entry',
      mood: 'Happy',
      description: 'This is my first entry. Excited to start journaling!',
    },
    {
      user_id: 2,
      title: 'Morning Reflection',
      mood: 'Calm',
      description: 'Had a peaceful morning today. Feeling relaxed.',
    },
   
  ];
  const seedEntries = () => Entry.bulkCreate(entries);
  module.exports =  seedEntries ;