'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "Is this covered by insurance?",
  "Can I use it with my phone?",
  "How long is the warranty?",
  "What's the return policy?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-white text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-semibold text-left">
  <span className="block">FrequentlyAsked</span>
  <span className="block font-normal italic" style={{ fontFamily: "'Instrument Serif', serif"}}>Questions</span>
</h2>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="border border-black rounded-2xl px-6 py-5 cursor-pointer flex justify-between items-center transition-all"
              onClick={() => toggle(index)}
            >
              <span className="text-left text-gray-800">{question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
