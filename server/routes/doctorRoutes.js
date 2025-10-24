const express = require('express');
const router = express.Router();
const { getDoctors, getDoctor } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getDoctors);
router.get('/:id', getDoctor);

module.exports = router;