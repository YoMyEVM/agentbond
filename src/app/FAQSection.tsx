import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What are Gen Credits?",
      answer: "Gen Credits are tokens used to access premium features, content, and services within the platform. They can be purchased with crypto or card.",
    },
    {
      question: "How can I buy Gen Credits?",
      answer: "You can purchase Gen Credits through our Buy Gen Credits page, using either a crypto wallet or a credit card. Follow the steps provided on the page.",
    },
    {
      question: "How do I check my Gen Credit balance?",
      answer: "Your Gen Credit balance can be checked from your account dashboard. If you are connected with a wallet, it will display your current balance.",
    },
    {
      question: "What are gas tokens?",
      answer: "Gas tokens are required for transactions on the blockchain. They are used to pay for network transaction fees, which are usually very small but can vary depending on network activity.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the current item open/close
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-accent2 text-center mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-2 border-accent1 rounded-lg">
            <div
              className="flex justify-between items-center py-3 px-4 cursor-pointer bg-[#1a1a1a] rounded-t-lg hover:bg-[#fd01f5] hover:text-black transition"
              onClick={() => handleToggle(index)}
            >
              <h2 className="font-bold">{item.question}</h2>
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="py-3 px-4 bg-[#1a1a1a] rounded-b-lg">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

