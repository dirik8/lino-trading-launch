
import React, { useState } from "react";
import { Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Form submission would typically go through a server endpoint
    // For now, we'll simulate a successful submission
    try {
      // Simulate server delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(true);
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-lino-black relative">
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact <span className="text-lino-yellow">Us</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We're here to help you excel in trading
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-lino-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@ernestlino.com</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-lino-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Support Hours</h3>
                    <p className="text-gray-400">Monday to Friday: 24/5</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-full bg-lino-yellow/10 flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-lino-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Verification</h3>
                <a href="#" className="flex items-center text-lino-yellow hover:underline group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  View Ernest Lino's BrokerCheck Profile
                </a>
              </div>
            </div>
            
            <div className="glossy-card p-6 md:p-8 backdrop-blur-sm animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lino-yellow transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lino-yellow transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lino-yellow resize-none transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-lino-yellow text-black py-3 px-6 rounded-md font-bold text-lg hover:bg-lino-yellow-light transition duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-900/30 border border-green-500/30 rounded-md text-green-300 text-center animate-fade-in">
                    Message sent successfully! We'll be in touch soon.
                  </div>
                )}

                {submitError && (
                  <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-md text-red-300 text-center animate-fade-in">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
