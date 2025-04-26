
import React, { useState, useEffect } from "react";

type TestimonialType = {
  id: number;
  name: string;
  location: string;
  text: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1, 
    name: "James H.",
    location: "Australia",
    text: "Ernest's signals have given my account steady growth month after month. His analysis is spot on and the support is excellent."
  },
  {
    id: 2, 
    name: "Sarah L.",
    location: "United Kingdom",
    text: "As a complete beginner, I was afraid of trading. Ernest's clear instructions made it easy to understand and start making consistent profits."
  },
  {
    id: 3, 
    name: "Mark T.",
    location: "United States",
    text: "The signals are reliable and profitable. I've been with other services before but none compare to the quality and success rate of Ernest's trades."
  },
  {
    id: 4, 
    name: "Priya K.",
    location: "Thailand",
    text: "The strategies Ernest teaches are practical and work in the real market. I've transformed from a struggling trader to a confident one."
  },
  {
    id: 5, 
    name: "David W.",
    location: "Canada",
    text: "What sets Ernest apart is his personal approach. He's available to answer questions and provides guidance when market conditions change."
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection("left");
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-lino-black relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Member <span className="text-lino-yellow">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300">
            Hear what our community has to say
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden h-64 md:h-72">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`testimonial-card absolute inset-0 transition-all duration-500 ${
                  index === active
                    ? "opacity-100 translate-x-0"
                    : index < active
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-lino-yellow opacity-60">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <p className="text-lg text-gray-200 mb-6">{item.text}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-lino-yellow">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="mx-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index < active ? "left" : "right");
                    setActive(index);
                  }}
                  className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                    index === active ? "bg-lino-yellow w-4" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="mx-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lino-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
