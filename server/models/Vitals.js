const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  heartRate: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  bloodOxygen: {
    type: Number,
    required: true
  },
  systolic: {
    type: Number,
    required: true
  },
  diastolic: {
    type: Number,
    required: true
  },
  prediction: {
    status: String,
    risks: [String],
    recommendations: [String]
  },
  recordedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vitals', vitalsSchema);
