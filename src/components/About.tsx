
import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-lino-black-light relative overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet <span className="text-lino-yellow">Ernest Lino</span>
          </h2>
          
          <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-lino-yellow bg-gradient-to-b from-gray-700 to-gray-900">
            {/* Person icon as placeholder */}
            <div className="h-full w-full flex items-center justify-center text-lino-yellow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-6">
            With over 10+ years of experience in the financial markets,
            Ernest Lino has honed his expertise at top financial institutions
            before bringing his knowledge directly to traders like you.
          </p>
          
          <p className="text-gray-400">
            Specializing in digital asset trading, forex, and stock markets,
            Ernest delivers real strategies and real guidance that produces real results.
            No fluff. No hype. Just proven trading methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="glossy-card p-6 md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Proven High Performance</h3>
            <p className="text-gray-400 text-sm">Verified by MyFXBook with consistent results</p>
          </div>
          
          <div className="glossy-card p-6 md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">5 Star Rated</h3>
            <p className="text-gray-400 text-sm">By members who consistently profit</p>
          </div>
          
          <div className="glossy-card p-6 md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Market Analysis</h3>
            <p className="text-gray-400 text-sm">Deep insights into market movements</p>
          </div>
          
          <div className="glossy-card p-6 md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Full Personal Support</h3>
            <p className="text-gray-400 text-sm">Direct guidance when you need it most</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
