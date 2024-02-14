const router = require('express').Router();
const User = require('../../models/User');


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

// Added comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
    try {
        // we search the DB for a user with the provided email
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            // the error message shouldn't specify if the login failed because of wrong email or password
            res.status(404).json({ message: 'Login failed. Please try again!' });
            return;
        }
        // use `bcrypt.compare()` to compare the provided password and the hashed password
      
            const validateP = () => {
                if(req.body.password === userData.password){
                    return true
                }else{
                    return fale
                }
            }
       
    // if they do not match, return error message
    if (!validateP()) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if they do match, return success message
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});
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
        console.log('made it this far')
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