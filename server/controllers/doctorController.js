const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
  try {
    const { specialty, city } = req.query;
    let query = {};
    if (specialty) {
      query.specialty = { $regex: specialty, $options: 'i' };
    }
    if (city) {
      query['location.city'] = { $regex: city, $options: 'i' };
    }
    const doctors = await Doctor.find(query).sort({ rating: -1 });
    res.json({ success: true, count: doctors.length, data: doctors });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ success: true, data: doctor });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor' });
  }
};
