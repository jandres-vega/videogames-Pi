const {Router} = require('express');

const {getPlatforms} = require('../controllers/platforms/GET/platforms.controller');

const router = Router();

router.get('/', getPlatforms );

module.exports = router;