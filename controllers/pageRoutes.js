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
