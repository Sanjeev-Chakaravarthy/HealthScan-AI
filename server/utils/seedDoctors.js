const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('../models/Doctor');

dotenv.config();

const doctors = [
  // Cardiologists
  {
    name: 'Dr. B Koushik',
    specialty: 'Cardiologist',
    hospital: 'Narayana Hospital, Howrah',
    rating: 4.8,
    address: 'Apollo Gleneagles Hospital, 58 Canal Circular Road, Kolkata - 700054',
    phone: '(033) 2320-3040',
    email: 'bkoushik@narayana.com',
    availability: 'Monday to Friday 5:00 PM',
    experience: 17
  },
  {
    name: 'Dr. Sougata Sanyal',
    specialty: 'Cardiologist',
    hospital: 'Millennium Health Care',
    rating: 4.9,
    address: 'Narayana Hospital Barasat, Saltlake, Kolkata - 700091',
    phone: '(033) 4040-5050',
    email: 'sougata.sanyal@narayana.com',
    availability: 'Sunday 2:30 PM',
    experience: 13
  },
  
  // General Physicians
  {
    name: 'Dr. Rajib Sankar Saha',
    specialty: 'General Physician',
    hospital: 'Madhyamgram Matri Sadan',
    rating: 4.7,
    address: 'Madhyamgram, North 24 Parganas, Kolkata - 700129',
    phone: '(033) 2506-3030',
    email: 'rajib.saha@matrisadan.com',
    availability: 'Daily except Sunday, Tuesday, Friday | 10:00 AM and 5:00 PM',
    experience: 15
  },
  {
    name: 'Dr. M Adhikary',
    specialty: 'General Physician & Diabetologist',
    hospital: 'Narayana Multispeciality Hospital',
    rating: 4.6,
    address: 'Narayana Multispeciality Hospital, Barasat, Kolkata',
    phone: '(033) 6628-5000',
    email: 'madhikary@narayana.com',
    availability: 'Daily 9:00 AM - 6:00 PM',
    experience: 12
  },

  // Gynaecologists
  {
    name: 'Dr. Siuli Choudhury',
    specialty: 'Gynaecologist',
    hospital: 'Narayana Multispeciality Hospital',
    rating: 4.8,
    address: 'Narayana Multispeciality Hospital, Barasat, Kolkata - 700124',
    phone: '(033) 6628-5000',
    email: 'siuli.choudhury@narayana.com',
    availability: 'Thursday 12:00 PM',
    experience: 17
  },
  {
    name: 'Dr. Jyotiska Ghosh',
    specialty: 'Gynaecologist',
    hospital: 'Fair Health Nursing Home',
    rating: 4.5,
    address: 'Fair Health Nursing Home, Barasat, Kolkata',
    phone: '(033) 2537-4040',
    email: 'jyotiska.ghosh@fairhealth.com',
    availability: 'Friday',
    experience: 12
  },

  // Paediatricians
  {
    name: 'Dr. Sumanta Bhattacharya',
    specialty: 'Paediatrician',
    hospital: 'Bhagirathi Neotia Hospital',
    rating: 4.9,
    address: 'Bhagirathi Neotia Hospital, Newtown, Kolkata - 700156',
    phone: '(033) 6605-1000',
    email: 'sumanta.bhattacharya@bhagirathineotia.com',
    availability: 'Tuesday',
    experience: 7
  },
  {
    name: 'Dr. Koushik Chatterjee',
    specialty: 'Paediatrician',
    hospital: 'Madhyamgram Matri Sadan',
    rating: 4.4,
    address: 'Madhyamgram Matri Sadan, Kolkata - 700129',
    phone: '(033) 2506-3030',
    email: 'koushik.chatterjee@matrisadan.com',
    availability: 'Sunday and Monday | By Appointment',
    experience: 2
  },

  // Orthopaedicians
  {
    name: 'Dr. Rahul Mondal',
    specialty: 'Orthopaedician',
    hospital: 'Ohio Hospital',
    rating: 4.7,
    address: 'Ohio Hospital, Barasat, Kolkata',
    phone: '(033) 2584-2020',
    email: 'rahul.mondal@ohio.com',
    availability: 'Daily 10:00 AM - 8:00 PM',
    experience: 8
  },

  // Neurologists
  {
    name: 'Dr. S B Roy',
    specialty: 'Neurologist',
    hospital: 'Narayana Multispeciality Hospital',
    rating: 4.8,
    address: 'Narayana Multispeciality Hospital, Barasat, Kolkata',
    phone: '(033) 6628-5000',
    email: 'sbroy@narayana.com',
    availability: 'Wednesday 12:00 PM',
    experience: 20
  },

  // Urologists
  {
    name: 'Dr. Nabankur Ghosh',
    specialty: 'Urologist',
    hospital: 'Medical College, Kolkata',
    rating: 4.9,
    address: '88, College Street, Kolkata - 700073',
    phone: '(033) 2241-3000',
    email: 'nabankur.ghosh@medical.edu',
    availability: 'Tuesday 4:00 PM',
    experience: 19
  },

  // Dermatologists
  {
    name: 'Dr. Prasun Kumar Ghosh',
    specialty: 'Dermatologist',
    hospital: 'Skin Care Clinic',
    rating: 4.6,
    address: 'Park Street, Kolkata - 700016',
    phone: '(033) 2229-4040',
    email: 'prasun.ghosh@skincare.com',
    availability: 'Daily 6:00 PM - 9:00 PM',
    experience: 3
  },

  // ENT Specialists
  {
    name: 'Dr. Subhamay Karmakar',
    specialty: 'ENT Specialist',
    hospital: 'Tulip Nursing Home',
    rating: 4.7,
    address: 'Tulip Nursing Home, Dumdum, Kolkata - 700074',
    phone: '(033) 2567-8080',
    email: 'subhamay.karmakar@tulip.com',
    availability: 'Tuesday, Thursday, Friday | 10:30 AM',
    experience: 22
  },

  // Pulmonologists
  {
    name: 'Dr. Arnab Bera',
    specialty: 'Pulmonologist',
    hospital: 'Nidaan Clinic',
    rating: 4.8,
    address: 'Nidaan Clinic, Lake Town, Kolkata - 700089',
    phone: '(033) 2365-7070',
    email: 'arnab.bera@nidaan.com',
    availability: 'Thursday 5:00 PM',
    experience: 6
  },

  // Oncologists
  {
    name: 'Dr. Shyam Sharma',
    specialty: 'Oncologist',
    hospital: 'RG Kar Medical College',
    rating: 4.5,
    address: 'RG Kar Medical College, Kolkata - 700004',
    phone: '(033) 2555-7000',
    email: 'shyam.sharma@rgkar.edu',
    availability: 'Wednesday and Friday 11:00 AM',
    experience: 8
  }
];

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    await Doctor.deleteMany();
    console.log('🗑️  Cleared existing doctors');

    await Doctor.insertMany(doctors);
    console.log(`✅ ${doctors.length} Real Kolkata doctors seeded successfully!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDoctors();
