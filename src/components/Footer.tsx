
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Ernest Lino</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Expert trading signals and mentorship to help you succeed in the financial markets. We don't simply teach you to trade — we teach you how to make money from your trading.
            </p>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-lino-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-lino-yellow transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-lino-yellow transition-colors">How It Works</a></li>
              <li><a href="#performance" className="hover:text-lino-yellow transition-colors">Performance</a></li>
              <li><a href="#faq" className="hover:text-lino-yellow transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-lino-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@ernestlino.com</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-lino-yellow transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-lino-yellow transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-lino-yellow transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Trading involves significant risk of loss and is not suitable for all investors.<br/>
            Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
