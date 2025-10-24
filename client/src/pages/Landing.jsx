import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Badge */}
      <div className="flex justify-center pt-10 mb-4">
        <div className="flex items-center gap-1.5 text-cyan-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs font-semibold">Powered by AI</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Personal{' '}
            <span className="text-cyan-500">Health Scanner</span>
          </h1>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your vitals, predict health issues early with AI, and connect instantly with nearby doctors—all from your phone.
          </p>
          
          <div className="flex gap-3 justify-center items-center">
            <Link 
              to="/signup" 
              className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-600 transition flex items-center gap-1.5"
            >
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Track Your Vitals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monitor heart rate, temperature, oxygen levels, and blood pressure with easy-to-use tools.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Health Predictions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get instant AI-powered analysis of your vitals to detect potential health issues early.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Find Doctors</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connect instantly with qualified doctors nearby based on your location and needs.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-14 text-center mb-16 max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Start Your Health Journey Today
            </h2>
            <p className="text-base text-gray-600 mb-7">
              Join thousands of users who trust HealthScan AI for affordable, accessible healthcare monitoring.
            </p>
            <Link 
              to="/signup" 
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-cyan-600 transition shadow-md"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
