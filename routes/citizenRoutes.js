const express = require('express');
const { getAllCitizens, addCitizen } = require('../controllers/citizenController');

const router = express.Router();

router.get('/', getAllCitizens);
router.post('/', addCitizen);

module.exports = router;
