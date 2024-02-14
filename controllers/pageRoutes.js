const express = require('express');
const withAuth = require('../utils/auth');

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
//withAuth
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


module.exports = router;
