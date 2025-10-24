const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      userId: req.user.id,
      ...req.body
    });
    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: appointment
    });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error: error.message });
  }
};

exports.getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id }).sort({ appointmentDate: -1 });
    res.json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'Cancelled' },
      { new: true }
    );
    res.json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling appointment' });
  }
};
