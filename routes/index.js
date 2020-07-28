const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


// router for home page
router.get('/', (req, res) => {
    res.render('index', {projects});
});

// router for about profile
router.get('/about',(req, res) => {
    res.render('about');
});

// router for individual project with id
router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
        res.render('project', {project}); 
    } else {
        // friendly error page if route doesn't exist
        res.render('error');
    }   
});




module.exports = router;