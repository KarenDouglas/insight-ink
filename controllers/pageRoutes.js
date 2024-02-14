const express = require('express');

const router = express.Router();
const { Entry, User, Habit } = require('../models');

router.get('/', async(req, res)=>{
    const data = {
        pageTitle: 'Dashboard',
        buttons: [
            {text: 'NEW ENTRY', url: '/new-entry' },
            {text: 'HABITS', url: '/habits'},
        ],
    }
    try {
        const entriesData = await Entry.findAll({ 
         include: [{ model: Habit }]
        });
        const entries = entriesData.map((entry) =>
        entry.get({ plain: true })
      );
          console.log('entry', entries)
          res.render('dashboard',{...data,entries})
          console.log
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Could not get entries.' });
    }
})

router.get('/new-entry', async (req, res) => {
    const data = {
        pageTitle: 'Entry',
        buttons: [
            { text: 'ENTRIES', url: '/' },
            { text: 'HABITS', url: '/habits' },
        ],
    };

    res.render('entry', data);
});

router.get('/habits', async (req, res) => {
    const data = {
        pageTitle: 'Habits',
        buttons: [
            { text: 'ENTRIES', url: '/' },
            { text: 'NEW ENTRY', url: '/new-entry' },
        ],
    };

    res.render('habits', data);
});


module.exports = router;
