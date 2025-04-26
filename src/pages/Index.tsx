
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
    </div>
  );
};

export default Index;
