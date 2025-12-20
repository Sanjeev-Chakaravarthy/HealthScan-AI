const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// ✅ Connect to DB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: "*", // later replace with your frontend URL
  credentials: true,
}));
app.use(express.json());

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vitals', require('./routes/vitalsRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// ✅ Health check route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HealthScan AI API is running 🚀',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

//  No need to export app unless using testing/serverless