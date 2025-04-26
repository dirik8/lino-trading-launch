import React from "react";
import { Trophy, TrendingUp, Award, ChartCandlestick } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&q=80')] opacity-5" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="bg-gradient-to-r from-lino-yellow to-lino-yellow-light text-transparent bg-clip-text">Ernest Lino</span>
          </h2>
          
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-2 border-lino-yellow shadow-lg shadow-lino-yellow/20 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/d9b5eeb9-83ec-4517-a0d0-7b4dae0f715c.png"
              alt="Ernest Lino - Financial Markets Expert"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 text-lg text-gray-300">
            <p className="leading-relaxed">
              With an extraordinary track record spanning over 15 years in the financial markets,
              Ernest Lino has established himself as one of the most formidable traders of our time,
              consistently achieving what others deem impossible.
            </p>
            
            <p className="leading-relaxed">
              Before founding his exclusive trading mentorship program, Ernest honed his expertise at prestigious 
              institutions including Goldman Sachs and JP Morgan, where he managed multi-billion dollar portfolios
              and developed proprietary trading strategies that consistently outperformed market benchmarks.
            </p>
          </div>

          <div className="mt-8">
            <a 
              href="https://adviserinfo.sec.gov/individual/summary/1196460" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-lino-yellow/20 to-lino-yellow/10 hover:from-lino-yellow/30 hover:to-lino-yellow/20 border border-lino-yellow/30 text-lino-yellow font-medium transition-all hover:scale-105"
            >
              <Award className="w-5 h-5 mr-2" />
              Verify Credentials
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-lino-yellow">Educational Excellence</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>MBA in Financial Engineering - Harvard Business School</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>Ph.D. in Quantitative Finance - MIT</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>Chartered Financial Analyst (CFA) - All 3 Levels</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-lino-yellow">Trading Achievements</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>Generated over $500M in verified trading profits</span>
              </li>
              <li className="flex items-start gap-3">
                <ChartCandlestick className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>98.7% success rate on all trading signals (2023-2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 mt-1 text-lino-yellow flex-shrink-0" />
                <span>Managed $5B+ AUM at top Wall Street firms</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="glossy-card p-6 md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
