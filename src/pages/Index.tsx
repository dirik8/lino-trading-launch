
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhatWeOffer from "../components/WhatWeOffer";
import HowItWorks from "../components/HowItWorks";
import Strategies from "../components/Strategies";
import Performance from "../components/Performance";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";
import NotificationPopup from "../components/NotificationPopup";

// Add schema.org structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ernest Lino - Financial Markets Expert",
  "description": "Expert trading signals and mentorship by Ernest Lino to elevate your trading performance in crypto, stocks, and all forms of trading.",
  "url": "https://ernestlino.com",
  "logo": "https://ernestlino.com/logo.png",
  "sameAs": [
    "https://twitter.com/ernestlino",
    "https://linkedin.com/in/ernestlino",
    "https://t.me/ernestlino"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "United States"
  },
  "openingHours": "Mo-Fr 00:00-24:00",
  "telephone": "+14438078332",
  "email": "info@ernestlino.com",
  "priceRange": "$$$",
  "offers": {
    "@type": "Offer",
    "name": "Trading Signals and Mentorship",
    "description": "Expert trading signals and mentorship to elevate your trading performance"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-lino-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeOffer />
        <HowItWorks />
        <Strategies />
        <Performance />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatButton />
      <NotificationPopup />
      
      {/* Add structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Index;
