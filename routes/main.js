//Routes main variables
const router = require('express').Router();
const homeController = require('../controllers/home.controller');
const bioController = require('../controllers/bio.controller');
const educationController = require('../controllers/education.controller');
const skillsController = require('../controllers/skills.controller');
const contactController = require('../controllers/contact.controller');

//Add controller for each path
router.get('/', homeController.index);
router.get('/biography', bioController.index);
router.get('/education', educationController.index);
router.get('/skills', skillsController.index);
router.get('/contact', contactController.index);

module.exports = router;