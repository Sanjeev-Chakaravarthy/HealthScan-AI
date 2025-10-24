export default function VitalCard({ title, value, unit, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900">
        {value} <span className="text-lg text-gray-600">{unit}</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">Latest reading</p>
    </div>
  );
}
