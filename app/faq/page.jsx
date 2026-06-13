"use client";

import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ProductHub?",
      answer:
        "ProductHub is a modern product management platform built with Next.js and Firebase. It allows users to browse, add, and manage products securely.",
    },
    {
      question: "Do I need an account to view products?",
      answer:
        "No. Anyone can browse products. However, adding and managing products requires authentication.",
    },
    {
      question: "How does authentication work?",
      answer:
        "ProductHub uses Firebase Authentication with Email and Password login and registration.",
    },
    {
      question: "Can I add my own products?",
      answer:
        "Yes. Logged-in users can access the Add Product page and create new products.",
    },
    {
      question: "Is ProductHub mobile-friendly?",
      answer:
        "Absolutely. The platform is fully responsive and works smoothly on desktop, tablet, and mobile devices.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-14">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            ❓ Frequently Asked Questions
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-black">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about ProductHub.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>

                <span className="text-2xl font-bold">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}