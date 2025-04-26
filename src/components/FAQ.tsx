
import React, { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`w-5 h-5 text-lino-yellow transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can investing tips help?",
      answer:
        "Our trading signals provide precise entry and exit points, helping you maximize profits and minimize losses. By following our expert guidance, you can avoid common pitfalls and leverage market opportunities that most retail traders miss.",
    },
    {
      question: "How are signals sent?",
      answer:
        "Trading signals are delivered through multiple channels including Email, Telegram, and SMS, allowing you to choose the method that works best for you. Each signal includes entry price, stop loss, and take profit levels.",
    },
    {
      question: "How often are signals sent?",
      answer:
        "We typically send 5-10 high-quality trading signals per day, covering multiple markets and timeframes. Our focus is on quality over quantity, ensuring that each signal has a high probability of success.",
    },
    {
      question: "How is support provided?",
      answer:
        "We offer comprehensive support through our private community chat, email responses within 24 hours, and live webinars for members. Ernest Lino personally reviews market conditions and is available to address specific questions about active trades.",
    },
    {
      question: "Should I invest in each signal?",
      answer:
        "While our signals have a high success rate, we recommend following proper risk management principles. Start with smaller positions as you learn, and never invest more than you can afford to lose. We provide guidance on position sizing based on your account size.",
    },
    {
      question: "How are signals generated?",
      answer:
        "Signals are generated using our proprietary trading strategies that combine technical analysis, market sentiment, and macro-economic factors. Each signal is manually reviewed by Ernest Lino before being sent to ensure the highest quality.",
    },
  ];

  return (
    <section id="faq" className="section bg-lino-black-light relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-lino-yellow">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our trading signals
          </p>
        </div>

        <div className="max-w-3xl mx-auto glossy-card p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-gray-300 mb-6">
            Have more questions? We're here to help you excel in trading.
          </p>
          <button className="cta-button animate-pulse-subtle">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
