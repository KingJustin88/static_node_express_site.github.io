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
app.use('/', (req, res) => {
    console.log('Sorry, this route does not exist')
    res.render('error')
});


app.listen(3001, () => {
    console.log('its working on localhost:3001')
})

module.exports = app;
