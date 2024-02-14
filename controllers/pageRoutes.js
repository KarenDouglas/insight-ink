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
          res.render('dashboard',{...data, entries})
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
    try{
        const habitsData = await Habit.findAll()
        const habits = habitsData.map((habit) =>
        habit.get({ plain: true }))
        res.render('entry', {...data, habits});
     
      }
      catch (err) {
        res.status(500).json({ error: 'Could not get habits.' });
      } 
});

router.get('/habits', async (req, res) => {

    try{
    const data = {
        pageTitle: 'Habits',
        buttons: [
            { text: 'ENTRIES', url: '/' },
            { text: 'NEW ENTRY', url: '/new-entry' },
        ],
    };
    {
        const habitdata = await Habit.findAll({
            // include: [{model: User, attributes: ['userName']}],
        });

        const habits = habitdata.map((habit)=> habit.get({plain:true}));

        res.render('habits', {...data, habits});
        console.log(habits)
    };

    
}
catch(err){
    res.status(500).send('Internal Server Error');
}
});

router.get('/users', async (req, res) => {
    try {
        const data = {
            pageTitle: 'Login/Register',
            buttons: [
                { text: 'Login' },
                { text: 'Register' },
            ],
        };
        {
            res.render('home', data);
        };
    } catch (err) {
        res.status(500).json({
            message: 'Could not register/login.'
        });
    }
});

module.exports = router;
