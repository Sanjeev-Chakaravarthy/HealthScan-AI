exports.predictHealth = (vitals) => {
  const { heartRate, temperature, bloodOxygen, systolic, diastolic } = vitals;
  
  let status = 'Healthy';
  const risks = [];
  const recommendations = [];
  let suggestedSpecialist = null; // NEW: Doctor suggestion

  // Heart Rate Analysis
  if (heartRate < 60 || heartRate > 100) {
    risks.push(heartRate < 60 ? 'Bradycardia (Low heart rate)' : 'Tachycardia (High heart rate)');
    recommendations.push('Consult a cardiologist');
    status = 'Warning';
    suggestedSpecialist = 'Cardiologist'; // Suggest doctor
  }

  // Temperature Analysis
  if (temperature >= 100.4) {
    risks.push('Fever detected');
    recommendations.push('Consult doctor if persists');
    status = 'Critical';
    if (!suggestedSpecialist) suggestedSpecialist = 'General Physician';
  }

  // Blood Oxygen Analysis
  if (bloodOxygen < 90) {
    risks.push('Severe hypoxemia');
    recommendations.push('Seek immediate medical attention');
    status = 'Critical';
    suggestedSpecialist = 'Pulmonologist'; // Lung specialist
  } else if (bloodOxygen < 95) {
    risks.push('Low oxygen levels');
    recommendations.push('Monitor breathing');
    status = 'Warning';
    if (!suggestedSpecialist) suggestedSpecialist = 'Pulmonologist';
  }

  // Blood Pressure Analysis
  if (systolic >= 180 || diastolic >= 120) {
    risks.push('Hypertensive crisis');
    recommendations.push('Emergency care needed');
    status = 'Critical';
    suggestedSpecialist = 'Cardiologist';
  } else if (systolic >= 140 || diastolic >= 90) {
    risks.push('High blood pressure');
    recommendations.push('Reduce salt, exercise regularly');
    status = 'Warning';
    if (!suggestedSpecialist) suggestedSpecialist = 'Cardiologist';
  }

  if (risks.length === 0) {
    recommendations.push('All vitals normal');
    recommendations.push('Maintain healthy lifestyle');
    suggestedSpecialist = 'No specialist needed - All healthy!';
  }

  return { 
    status, 
    risks, 
    recommendations,
    suggestedSpecialist // NEW: Return doctor suggestion
  };
};
