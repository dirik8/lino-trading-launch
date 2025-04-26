
import React, { useState } from "react";
import { MessageSquare, X, Mail, Phone } from "lucide-react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end">
      {/* Contact options popup */}
      <div 
        className={`bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg mb-4 overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold text-white">Contact Ernest Lino</h3>
          <p className="text-xs text-gray-400">Available 24/7 for your trading needs</p>
        </div>
        
        <div className="p-4 space-y-3">
          <a 
            href="mailto:info@ernestlino.com" 
            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-colors text-gray-200 hover:text-white"
          >
            <Mail className="h-5 w-5 mr-3 text-lino-yellow" />
            <span>info@ernestlino.com</span>
          </a>
          
          <a 
            href="https://wa.me/14438078332" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-colors text-gray-200 hover:text-white"
          >
            <Phone className="h-5 w-5 mr-3 text-lino-yellow" />
            <div>
              <span>WhatsApp</span>
              <p className="text-xs text-gray-400">+1 443-807-8332</p>
            </div>
          </a>
          
          <a 
            href="https://t.me/ernestlino" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-colors text-gray-200 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-lino-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <div>
              <span>Telegram</span>
              <p className="text-xs text-gray-400">@ernestlino / +1 463-600-3983</p>
            </div>
          </a>
        </div>
      </div>

      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-700 rotate-90' 
            : 'bg-lino-yellow hover:bg-lino-yellow-light animate-pulse-subtle'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-black" />
        )}
      </button>
    </div>
  );
};

export default ChatButton;
