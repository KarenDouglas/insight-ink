const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 15 * 60 * 1000 } 
}));


function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        res.redirect('/login'); 
    }
}


app.get('/posts', isAuthenticated, (req, res) => {
   
    res.send('Viewing posts and comments');
});


app.post('/updatePost', isAuthenticated, (req, res) => {
   
    res.send('Post updated successfully');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});