'use client'

import TopHeader from "@/Components/TopHeader";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const questions = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "You can go to our shop, select your desired items, and add them to your cart. Once you've finalized your order, proceed to checkout and follow the instructions to complete your purchase.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit/debit cards and mobile wallets.",
  },
  {
    id: 3,
    question: "Do you offer vegetarian options?",
    answer:
      "Yes, we offer a variety of vegetarian and vegan options. Check our menu for more details.",
  },
  {
    id: 4,
    question: "Are your ingredients fresh and locally sourced?",
    answer:
      "Yes, we prioritize fresh and locally sourced ingredients to ensure the highest quality in every dish we serve.",
  },
  {
    id: 5,
    question: "What is your food preparation process?",
    answer:
      "Our food is prepared in a hygienic environment, following strict safety standards to maintain freshness and quality.",
  },
  {
    id: 6,
    question: "Do you offer gluten-free options?",
    answer:
      "Yes, we have a range of gluten-free options available. Please check our menu & shop for more details or ask our team for recommendations.",
  },
  {
    id: 8,
    question: "How do you ensure the food remains fresh during delivery?",
    answer:
      "We use high-quality, insulated packaging to ensure your food stays fresh and at the right temperature until it reaches your doorstep.",
  },
  {
    id: 9,
    question: "What is your policy on food quality complaints?",
    answer:
      "We take food quality very seriously. If you face any issues, you can contact our support team, and we’ll work to resolve it promptly.",
  },
  {
    id: 10,
    question: "Do you serve family-size portions or bulk orders?",
    answer:
      "Yes, we offer family-size portions and bulk orders. You can explore our catering options for larger gatherings or special events.",
  }
];

const QuestionBox = () => {
  const [visibleQuestion, setVisibleQuestion] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setVisibleQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <section >
      <TopHeader title="FAQ Page" link1="Home" link2="FAQ" link3="/faq" />
      <div className="max-w-screen-xl lg:mx-auto px-5 py-[60px] md:py-[100px] md:px-[60px]">
        <h1 className="text-4xl text-[#222] text-center font-bold font-inter mb-2">Frequently Asked Questions</h1>
        <p className="text-base text-[#4f4f4f] mb-7 text-center font-[cursive]">Find quick answers to common questions about ordering, food quality, delivery, and more.</p>
      {questions.map((q) => (
        <div
          key={q.id}
          className="border border-gray-300 rounded-lg p-4 w-full mx-auto my-6 shadow-md lg:w-[70%]"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">{q.question}</h3>
            <button
              onClick={() => toggleAnswer(q.id)}
              className="bg-csYellow p-2 rounded-full hover:bg-gray-500 transition"
            >
              {visibleQuestion === q.id ? (
                <FiMinus className="w-5 h-5 text-white" />
              ) : (
                <BsPlus className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          {visibleQuestion === q.id && (
            <p className="mt-4 text-gray-600">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default QuestionBox;
