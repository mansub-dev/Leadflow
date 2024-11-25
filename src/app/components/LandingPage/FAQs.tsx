"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export default function FAQs() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "What is LeadFlow CRM?",
      answer: "LeadFlow CRM is a tool designed to help businesses manage their customer relationships, track leads, and automate sales processes.",
    },
    {
      question: "Is LeadFlow CRM free to use?",
      answer: "We offer a free trial for 14 days. After the trial period, you can choose from our affordable pricing plans.",
    },

    {
      question: "What business size is LeadFlow best for?",
      answer: "LeadFlow CRM is ideal for small to medium-sized businesses but can scale to meet the needs of larger enterprises with its flexible features.",
    },
  ];

  return (
    <div className="theme hidden md:flex">
      <div className="flex flex-row  gap-4 ml-32">
        <h1 className="text-4xl mt-12 text-left">
          Frequently Asked{" "}
          <span className="text-green-600 dark:text-green-400">Questions...</span>
        </h1>

        <div className="flex flex-col gap-6 mt-12 w-full max-w-2xl">
          {questions.map((faq, index) => (
            <Card
              key={index}
              className="border rounded-lg p-2 w-96 dark:border-neutral-700 transition-all duration-300"
            >
              <CardHeader className="flex items-center justify-between">
                <h3 className="">{index + 1}. {faq.question}</h3>
                <Button
                  size="sm"
                  variant="flat"
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                >
                  {activeQuestion === index ? <FaAngleUp size={18} /> : <FaAngleDown size={18} />}
                </Button>
              </CardHeader>


              {activeQuestion === index && (
                <CardBody className="pt-4">
                  <p className="text-sm text-default-500">{faq.answer}</p>
                </CardBody>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
