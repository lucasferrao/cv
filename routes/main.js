const router = require('express').Router();
const homeController = require('../controllers/home.controller');
const bioController = require('../controllers/bio.controller');

router.get('/', homeController.index);
router.get('/biography', bioController.index);

module.exports = router;