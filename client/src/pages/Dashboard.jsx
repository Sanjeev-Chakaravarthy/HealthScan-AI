import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import VitalCard from '../components/VitalCard';
import HealthChart from '../components/HealthChart';
import { vitalsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [vitals, setVitals] = useState([]);
  const [latest, setLatest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [vitalsRes, latestRes] = await Promise.all([
        vitalsAPI.getAll(),
        vitalsAPI.getLatest().catch(() => ({ data: { data: null } }))
      ]);
      setVitals(vitalsRes.data.data);
      setLatest(latestRes.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-gray-600">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Welcome back, {user?.name || 'User'}!
            </h1>
            <p className="text-sm text-gray-600">Here's your health overview</p>
          </div>

          {latest ? (
            <>
              {/* Vital Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Heart Rate</h3>
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{latest.heartRate}</span>
                    <span className="text-sm text-gray-500">bpm</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Latest reading</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Temperature</h3>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{latest.temperature}</span>
                    <span className="text-sm text-gray-500">°F</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Latest reading</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Blood Oxygen</h3>
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{latest.bloodOxygen}</span>
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Latest reading</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Blood Pressure</h3>
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{latest.systolic}/{latest.diastolic}</span>
                    <span className="text-sm text-gray-500">mmHg</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Latest reading</p>
                </div>
              </div>

              {/* Health Trends Chart */}
              {vitals.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Health Trends</h2>
                    <p className="text-sm text-gray-600">Your vitals over the last 2 readings</p>
                  </div>
                  <HealthChart data={vitals} />
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No health data yet</h3>
                <p className="text-sm text-gray-600 mb-6">Start tracking your vitals to see your health overview</p>
                <a 
                  href="/scanner" 
                  className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium text-sm"
                >
                  Add your first reading
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
