
import React from "react";

const Strategies = () => {
  return (
    <section id="strategies" className="section bg-lino-black relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Trading <span className="text-lino-yellow">Strategies</span>
          </h2>
          <p className="text-xl text-gray-300">
            We employ multiple proven strategies to maximize profits in any market condition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glossy-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-lino-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-lino-yellow">Trend Capture</h3>
              <p className="text-gray-300 mb-4">
                We identify and follow long-term market trends to capture significant price movements
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Multiple timeframe analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Early trend identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Strategic position building</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glossy-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-lino-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-lino-yellow">Range Trap</h3>
              <p className="text-gray-300 mb-4">
                We capitalize on price movements between established support and resistance levels
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Key level identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Reversal confirmation signals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>High-probability bounce trades</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glossy-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-lino-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-lino-yellow">Momentum Rider</h3>
              <p className="text-gray-300 mb-4">
                We identify assets experiencing rapid price acceleration to capture early movements
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Volume analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Breakout confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lino-yellow mr-2">•</span>
                  <span>Strategic entries and exits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
