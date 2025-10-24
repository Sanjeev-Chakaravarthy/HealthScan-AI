import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { vitalsAPI } from "../services/api";

export default function Scanner() {
  const [formData, setFormData] = useState({
    heartRate: "",
    temperature: "",
    bloodOxygen: "",
    systolic: "",
    diastolic: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await vitalsAPI.predict(formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      alert("Error analyzing vitals");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            AI Health Scanner
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Your Vital Signs</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heart Rate (bpm)
                  </label>
                  <input
                    type="number"
                    name="heartRate"
                    required
                    value={formData.heartRate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="72"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Temperature (°F)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    name="temperature"
                    required
                    value={formData.temperature}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="98.6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Oxygen (%)
                  </label>
                  <input
                    type="number"
                    name="bloodOxygen"
                    required
                    value={formData.bloodOxygen}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="98"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      BP Systolic
                    </label>
                    <input
                      type="number"
                      name="systolic"
                      required
                      value={formData.systolic}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="120"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      BP Diastolic
                    </label>
                    <input
                      type="number"
                      name="diastolic"
                      required
                      value={formData.diastolic}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="80"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 disabled:opacity-50"
                >
                  {loading ? "Analyzing..." : "⚡ Scan & Analyze"}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">AI Analysis Results</h2>

              {!prediction ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔬</div>
                  <p className="text-gray-600">
                    Enter your vitals and click "Scan & Analyze"
                  </p>
                </div>
              ) : (
                <div>
                  <div
                    className={`p-4 rounded-lg mb-4 ${
                      prediction.status === "Healthy"
                        ? "bg-green-100"
                        : prediction.status === "Warning"
                        ? "bg-yellow-100"
                        : "bg-red-100"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Status: {prediction.status}
                    </h3>
                  </div>

                  {prediction.risks.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">⚠️ Potential Risks:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {prediction.risks.map((risk, idx) => (
                          <li key={idx} className="text-gray-700">
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold mb-2">💡 Recommendations:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {prediction.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-gray-700">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ONLY CHANGE: Smart doctor button */}
                  {prediction.suggestedSpecialist ? (
                    <button
                      onClick={() => navigate(`/doctors?specialty=${prediction.suggestedSpecialist}`)}
                      className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                      📋 Find {prediction.suggestedSpecialist}
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/doctors")}
                      className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                      Find a Doctor
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
