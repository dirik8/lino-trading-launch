
import React from "react";

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="section bg-lino-black relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We <span className="text-lino-yellow">Offer</span>
          </h2>
          <p className="text-xl text-gray-300">
            Our premium trading signals and support system is designed to help you maximize profits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-lino-yellow text-5xl font-bold">5-10</div>
            <h3 className="text-xl font-bold mb-2">High-Quality Trading Signals</h3>
            <p className="text-gray-400">Daily signals with precise entry and exit points</p>
          </div>
          
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-lino-yellow text-5xl font-bold">350%</div>
            <h3 className="text-xl font-bold mb-2">Monthly ROI Target</h3>
            <p className="text-gray-400">Ambitious but achievable returns on your investment</p>
          </div>
          
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="mb-4 text-lino-yellow text-5xl font-bold">24/5</div>
            <h3 className="text-xl font-bold mb-2">Global Market Signals</h3>
            <p className="text-gray-400">Coverage across all major trading sessions</p>
          </div>
          
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 rounded-full bg-lino-yellow/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Clear Trade Instructions</h3>
            <p className="text-gray-400">Entry Price, Stop Loss, and Take Profit levels included with every signal</p>
          </div>
          
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 rounded-full bg-lino-yellow/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Market Monitoring</h3>
            <p className="text-gray-400">Continuous analysis and updates to maximize profit opportunities</p>
          </div>
          
          <div className="glossy-card p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 mb-4 rounded-full bg-lino-yellow/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
            <p className="text-gray-400">Immediate notifications for optimal entry and exit points</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="cta-button animate-pulse-subtle">
            START NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
