
import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const handleStartNow = () => {
    window.open("https://wa.me/14438078332", "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video with Ernest's Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-20"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d9b5eeb9-83ec-4517-a0d0-7b4dae0f715c.png')] bg-center bg-cover opacity-20 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-exchange-business-monitor-going-up-529-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-20 min-h-[90vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-lino-yellow/20 backdrop-blur-sm text-lino-yellow text-sm font-medium animate-fade-in">
              EXPERT FINANCIAL MARKET GUIDANCE
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              We don't simply teach you to trade —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lino-yellow to-lino-yellow-light">
                We teach you how to make money from your trading.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-fade-in">
              Expert trading signals and mentorship by Ernest Lino to elevate your trading performance
            </p>
            
            <button 
              onClick={handleStartNow}
              className="cta-button animate-pulse-subtle group bg-gradient-to-r from-lino-yellow to-lino-yellow-light text-black font-bold py-4 px-8 rounded-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              START NOW
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/d9b5eeb9-83ec-4517-a0d0-7b4dae0f715c.png"
              alt="Ernest Lino - Financial Markets Expert"
              className="rounded-2xl shadow-2xl shadow-lino-yellow/20 animate-fade-in"
            />
          </div>
        </div>
          
        <div className="mt-16 animate-fade-in">
          <p className="text-gray-400 text-sm uppercase font-medium tracking-wider mb-6">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://bloomberg.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bloomberg_News_logo.svg" alt="Bloomberg" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
            </a>
            <a href="https://forbes.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Forbes_logo.svg" alt="Forbes" className="h-5 opacity-80 grayscale hover:grayscale-0 transition-all" />
            </a>
            <a href="https://marketwatch.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/MarketWatch_Logo.svg" alt="MarketWatch" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
            </a>
            <a href="https://cnbc.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Cnbc_logo.svg" alt="CNBC" className="h-5 opacity-80 grayscale hover:grayscale-0 transition-all" />
            </a>
            <a href="https://businessinsider.com" target="_blank" rel="noopener noreferrer" className="h-8 flex items-center transition-all hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Business_Insider_Logo.svg" alt="Business Insider" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce flex flex-col items-center">
          <div className="h-8 w-0.5 bg-lino-yellow/50 mb-2"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
