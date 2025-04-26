
import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-glossy-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_40%)]"></div>
      <div className="container min-h-[90vh] flex flex-col justify-center relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            We don't simply teach you to trade —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lino-yellow to-lino-yellow-light">
              We teach you how to make money from your trading.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Expert trading signals and mentorship by Ernest Lino to elevate your trading performance
          </p>
          
          <button className="cta-button animate-pulse-subtle group">
            START NOW
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-16">
            <p className="text-gray-400 text-sm uppercase font-medium tracking-wider mb-6">Trusted By</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="h-8 text-gray-400 font-heading font-bold">TRADERS UNION</div>
              <div className="h-8 text-gray-400 font-heading font-bold">MODEST MONEY</div>
              <div className="h-8 text-gray-400 font-heading font-bold">TECHOPEDIA</div>
              <div className="h-8 text-gray-400 font-heading font-bold">BENZINGA</div>
              <div className="h-8 text-gray-400 font-heading font-bold">WIKIJOB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
