
import React from "react";

const Performance = () => {
  return (
    <section id="performance" className="section bg-lino-black-light relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Performance <span className="text-lino-yellow">Proof</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Results you can trust, verified independently
          </p>
          
          <div className="glossy-card p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">MyFXBook Verified Results</h3>
                <p className="text-gray-300 mb-6">
                  Our trading performance is independently verified by MyFXBook, providing complete transparency and trust.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-lino-yellow text-2xl font-bold">78%</div>
                    <div className="text-gray-400 text-sm">Win Rate</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-lino-yellow text-2xl font-bold">350%</div>
                    <div className="text-gray-400 text-sm">Monthly ROI</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-lino-yellow text-2xl font-bold">1:3</div>
                    <div className="text-gray-400 text-sm">Risk-Reward Ratio</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-lino-yellow text-2xl font-bold">12%</div>
                    <div className="text-gray-400 text-sm">Max Drawdown</div>
                  </div>
                </div>
                <a 
                  href="#"
                  className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  View Complete Verification
                </a>
              </div>
              
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg overflow-hidden relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for performance chart */}
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-lino-yellow opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <span className="mt-4 text-gray-400">MyFXBook Verified Performance Chart</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <button className="cta-button animate-pulse-subtle">
              START NOW
            </button>
            <p className="mt-4 text-gray-400 text-sm">
              Join thousands of successful traders today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
