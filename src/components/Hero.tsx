
import React from "react";
import { ChevronRight, Trophy, TrendingUp, Award } from "lucide-react";

const Hero = () => {
  const handleStartNow = () => {
    window.open("https://wa.me/14438078332", "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-20"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-exchange-business-monitor-going-up-529-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-20 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-lino-yellow/20 to-lino-yellow/10 backdrop-blur-sm border border-lino-yellow/30">
            <span className="text-lino-yellow text-sm font-bold tracking-wider animate-pulse">
              MASTER THE MARKETS WITH THE ELITE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-lino-yellow to-white">
            Transform Your Trading Into A
            <span className="block mt-2 bg-gradient-to-r from-lino-yellow to-lino-yellow-light text-transparent bg-clip-text">
              Fortune-Building Machine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Join the elite circle of traders who consistently extract massive profits from the markets with precision strategies and unparalleled mentorship
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={handleStartNow}
              className="group bg-gradient-to-r from-lino-yellow to-lino-yellow-light text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] flex items-center gap-2"
            >
              START YOUR JOURNEY
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
              <Trophy className="w-8 h-8 text-lino-yellow mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-white">98% Success Rate</h3>
              <p className="text-gray-400">Verified Trading Performance</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in [animation-delay:200ms]">
              <TrendingUp className="w-8 h-8 text-lino-yellow mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-white">$50M+</h3>
              <p className="text-gray-400">Client Profits Generated</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in [animation-delay:400ms]">
              <Award className="w-8 h-8 text-lino-yellow mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-white">15+ Years</h3>
              <p className="text-gray-400">Market Mastery</p>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <p className="text-gray-400 text-sm uppercase font-medium tracking-wider mb-6 text-center">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a href="https://bloomberg.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
                <img src="https://e7.pngegg.com/pngimages/727/671/png-clipart-bloomberg-round-logo-icons-logos-emojis-iconic-brands-thumbnail.png" alt="Bloomberg" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://forbes.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
                <img src="https://icon2.cleanpng.com/20180611/jwx/aa8nd32te.webp" alt="Forbes" className="h-5 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://marketwatch.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
                <img src="https://e7.pngegg.com/pngimages/828/126/png-clipart-logo-brand-marketwatch-green-design-text-logo-thumbnail.png" alt="MarketWatch" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://cnbc.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
                <img src="https://e7.pngegg.com/pngimages/310/9/png-clipart-cnbc-logo-of-nbc-television-others-miscellaneous-television.png" alt="CNBC" className="h-5 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://businessinsider.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
                <img src="https://icon2.cleanpng.com/20180630/qxo/aayqdiqap.webp" alt="Business Insider" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
