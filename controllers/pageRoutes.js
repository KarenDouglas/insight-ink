const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    const data = {
        pageTitle: 'Dash',
        buttons: [
            {text: 'NEW ENTRY', url: '/new-entry' },
            {text: 'HABITS', url: '/habits'},
        ],
    }
    res.render('home', data)
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
