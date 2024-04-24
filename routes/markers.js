const express = require('express');
const router = express.Router();
const houseInfoController = require('../controllers/houseInfo.controller');
const upload = require('../middleware/upload');


router.get('/', houseInfoController.getAllHouseInfo);
router.post('/new-marker', upload.single('img'), houseInfoController.createHouseInfo);

module.exports = router;
