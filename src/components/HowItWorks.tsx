
import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-lino-black-light relative">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center_right,rgba(255,215,0,0.05),transparent_70%)]"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It <span className="text-lino-yellow">Works</span>
          </h2>
          <p className="text-xl text-gray-300">
            Four simple steps to transform your trading journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines (desktop only) */}
          <div className="absolute top-16 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-lino-yellow/20 via-lino-yellow/40 to-lino-yellow/20 hidden lg:block"></div>
          
          {/* Step 1 */}
          <div className="relative">
            <div className="glossy-card p-8 h-full flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow text-black font-bold text-xl flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray-400">
                Create your account in less than 2 minutes and get immediate access to our trading platform
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="glossy-card p-8 h-full flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow text-black font-bold text-xl flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Receive Signals</h3>
              <p className="text-gray-400">
                Get professional trading signals delivered via Email, Telegram, or SMS based on your preference
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="glossy-card p-8 h-full flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow text-black font-bold text-xl flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Follow Trades</h3>
              <p className="text-gray-400">
                Execute the signals with our clear instructions and benefit from our full support
              </p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="glossy-card p-8 h-full flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow text-black font-bold text-xl flex items-center justify-center mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Grow</h3>
              <p className="text-gray-400">
                Watch your portfolio grow while developing into an independent, confident trader
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-xl mx-auto bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <p className="text-center text-gray-300">
            <span className="text-lino-yellow font-bold">Beginner-Friendly:</span> No prior trading experience required. Our step-by-step guidance makes it easy for anyone to start trading successfully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
