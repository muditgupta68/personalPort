const express = require('express');
const { getProjects, addProjects } = require('../controllers/reactController');
const router = express.Router();

// projects
router.get('/', getProjects);
router.post('/new', addProjects);



module.exports = router;