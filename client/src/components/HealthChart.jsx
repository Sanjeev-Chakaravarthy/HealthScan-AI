import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HealthChart({ data }) {
  const chartData = data.slice(0, 10).reverse().map((vital, idx) => ({
    name: `Day ${idx + 1}`,
    heartRate: vital.heartRate,
    temperature: vital.temperature,
    bloodOxygen: vital.bloodOxygen
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Heart Rate" />
        <Line type="monotone" dataKey="temperature" stroke="#f59e0b" name="Temperature" />
        <Line type="monotone" dataKey="bloodOxygen" stroke="#10b981" name="Blood Oxygen" />
      </LineChart>
    </ResponsiveContainer>
  );
}
