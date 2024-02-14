const router = require('express').Router();
const { User } = require('../../models/User');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');


// Routes GET/POST LOGIN/POST LOGOUT/ POST Register

// Create a new User
router.post('/', async (req, res) => {
    try{
        const newUser = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
        
        res.status(200).json(newUser);
        });
      
    } catch (err) {
        console.error(err);

        res.status(400).json({ error: 'Failed to create new user!', details: err.message });
    }
});

// Create Login route POST
router.post('/login', async (req, res) => {
    console.log('wassup-------------------------------------', req.body)
    try {
        const userLogin = await User.findOne({ 
            where: {
                username: req.body.username,
            },
        });
        if (!userLogin) {
            console.log(error);
            res.status(400).json({
                message: "Incorrect username. Please try again."
            });
            return;
        } 

        const validPassword = await userLogin.checkPassword(req.body.password);
        
        if (!validPassword) {  
            console.log(error);
            res.status(400).json({
                message: "Incorrect password. Please try again."
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userLogin.id;
            req.session.logged_in = true;
        
            res.json({ user: userLogin, message: 'You are logged in.' });
        });
    } catch (err) {
        res.status(500).json({
            message: 'Cannot log in.'
        });
    }
});

// When Logging out, deleting the session user information. withAuth
router.post('/logout', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(404).end();
        });
    } else {
        res.status(404).end();
    }
});

// Create register route
router.post('/register' , async (req, res) => {
    try {
        const existingUser = await User.findOne({
            where: {
                username: req.body.username,
            }
        });

        if (existingUser) {
            res.status(400).json({
                message: 'Username already exists. Please choose a different username.'
            });
            return;
        }

        const newUser = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ 
            error: 'New user could not be registered.', details: err.message 
        });
    }
});

module.exports = router;