// requirements for app.js to run projects
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');

// express app
const app = express();

// link for pug views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// static files
app.use('/', indexRouter);
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static('public'));
app.use(express.json());

//handles errors when any route doesn't exist 
app.use((req, res, next) => {
    const err = new Error("Route does not exist");
    err.status = 404
    res.render('error', {
        message: err.message,
        status: err.status,
        stack: err.stack
    });
    console.error("Error Message:", err.message);
    console.error("Status Code: ", err.status);
    console.error("Stack Trace: ", err.stack);
    next(err)
    
});


app.listen(3002, () => {
    console.log('its working on localhost:3002')
})

module.exports = app;
