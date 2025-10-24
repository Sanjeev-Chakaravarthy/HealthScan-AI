const express = require('express');
const router = express.Router();
const { 
  createAppointment, 
  getUserAppointments, 
  cancelAppointment 
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.post('/', createAppointment);
router.get('/', getUserAppointments);
router.put('/:id/cancel', cancelAppointment);

module.exports = router;
