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
    res.render('dashboard', data)
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
