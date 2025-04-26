
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample FX trading performance data
const performanceData = [
  { month: 'Jan', profit: 15 },
  { month: 'Feb', profit: 28 },
  { month: 'Mar', profit: 24 },
  { month: 'Apr', profit: 35 },
  { month: 'May', profit: 42 },
  { month: 'Jun', profit: 38 },
  { month: 'Jul', profit: 52 },
  { month: 'Aug', profit: 65 },
  { month: 'Sep', profit: 73 },
  { month: 'Oct', profit: 84 },
  { month: 'Nov', profit: 92 },
  { month: 'Dec', profit: 105 },
];

const Performance = () => {
  const handleStartNow = () => {
    window.open("https://wa.me/14438078332", "_blank");
  };

  return (
    <section id="performance" className="section bg-lino-black-light relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Performance <span className="text-lino-yellow">Proof</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Results you can trust, verified independently
            </p>
          </div>
          
          <div className="glossy-card p-8 mb-12 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">MyFXBook Verified Results</h3>
                <p className="text-gray-300 mb-6">
                  Our trading performance is independently verified by MyFXBook, providing complete transparency and trust.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-all transform hover:scale-105 duration-300">
                    <div className="text-lino-yellow text-2xl font-bold">78%</div>
                    <div className="text-gray-400 text-sm">Win Rate</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-all transform hover:scale-105 duration-300">
                    <div className="text-lino-yellow text-2xl font-bold">350%</div>
                    <div className="text-gray-400 text-sm">Monthly ROI</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-all transform hover:scale-105 duration-300">
                    <div className="text-lino-yellow text-2xl font-bold">1:3</div>
                    <div className="text-gray-400 text-sm">Risk-Reward Ratio</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-all transform hover:scale-105 duration-300">
                    <div className="text-lino-yellow text-2xl font-bold">12%</div>
                    <div className="text-gray-400 text-sm">Max Drawdown</div>
                  </div>
                </div>
                <a 
                  href="#"
                  className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 px-4 rounded-md hover:from-gray-700 hover:to-gray-600 transition duration-300"
                >
                  View Complete Verification
                </a>
              </div>
              
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg overflow-hidden relative h-64 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 10,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#777" />
                    <YAxis stroke="#777" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#222', border: '1px solid #333' }}
                      labelStyle={{ color: '#FFD700' }}
                      itemStyle={{ color: '#FFD700' }}
                    />
                    <Area type="monotone" dataKey="profit" stroke="#FFD700" fillOpacity={1} fill="url(#colorProfit)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <button 
              onClick={handleStartNow}
              className="cta-button animate-pulse-subtle">
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
