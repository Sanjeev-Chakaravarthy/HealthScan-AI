const express = require('express');
const router = express.Router();
const {
  getVitals,
  getLatestVital,
  addVital,
  predictHealth
} = require('../controllers/vitalsController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/').get(getVitals).post(addVital);
router.get('/latest', getLatestVital);
router.post('/predict', predictHealth);

module.exports = router;
