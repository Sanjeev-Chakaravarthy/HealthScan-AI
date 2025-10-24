const Vitals = require('../models/Vitals');
const { predictHealth } = require('../utils/aiPredictor');

exports.getVitals = async (req, res) => {
  try {
    const vitals = await Vitals.find({ userId: req.user.id })
      .sort({ recordedAt: -1 })
      .limit(10);
    res.json({ success: true, count: vitals.length, data: vitals });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vitals' });
  }
};

exports.getLatestVital = async (req, res) => {
  try {
    const vital = await Vitals.findOne({ userId: req.user.id })
      .sort({ recordedAt: -1 });
    if (!vital) {
      return res.status(404).json({ message: 'No vitals found' });
    }
    res.json({ success: true, data: vital });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vital' });
  }
};

exports.addVital = async (req, res) => {
  try {
    const { heartRate, temperature, bloodOxygen, systolic, diastolic } = req.body;
    if (!heartRate || !temperature || !bloodOxygen || !systolic || !diastolic) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const vital = await Vitals.create({
      userId: req.user.id,
      heartRate,
      temperature,
      bloodOxygen,
      systolic,
      diastolic
    });
    res.status(201).json({ success: true, message: 'Vital saved', data: vital });
  } catch (error) {
    res.status(500).json({ message: 'Error saving vital' });
  }
};

exports.predictHealth = async (req, res) => {
  try {
    const { heartRate, temperature, bloodOxygen, systolic, diastolic } = req.body;
    if (!heartRate || !temperature || !bloodOxygen || !systolic || !diastolic) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const prediction = predictHealth({ heartRate, temperature, bloodOxygen, systolic, diastolic });
    const vital = await Vitals.create({
      userId: req.user.id,
      heartRate,
      temperature,
      bloodOxygen,
      systolic,
      diastolic,
      prediction
    });
    res.json({ success: true, message: 'Health prediction generated', data: vital, prediction });
  } catch (error) {
    res.status(500).json({ message: 'Error generating prediction' });
  }
};
