import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

type Feature = {
  title: string;
  description: string;
};

export default function Features() {
  const features: Feature[] = [
    {
      title: "Contact Management",
      description: `It is a centralized system for managing customer and prospect data,
including contact information communication history, and preferences. This
feature helps sales and support teams maintain up-to-date records and
facilitates effective communication.`,
    },
    {
      title: "Customer Service Management",
      description: `A suite of tools designed to manage and improve customer support
    interactions, including ticketing systems and performance tracking. This
    feature integrates an AI-powered chatbot to handle common inquiries,
    enhancing engagement and support efficiency.`,
    },
    {
      title: "Lead and Sale Management",
      description: `It combines tracking and prioritizing sales leads with predicting future
      sales performance. This feature helps businesses capture lead information,
      nurture relationships, and use historical data to set realistic sales targets.`,
    },
    {
      title: "CRM Analytics",
      description: `This feature provides customer data insights. It helps businesses make informed decisions about products, services,
      marketing strategies, and overall communication efforts with customers by
      leveraging crucial data`,
    },
    {
      title: "Workflow Automation",
      description: `Automates repetitive tasks and processes, such as sending follow-up
emails or updating lead statuses, enhancing efficiency. Customizable
workflows streamline operations, allowing team members to focus on high-
value tasks .`,
    },
    {
      title: "Pipeline Management",
      description: `Visualizes the sales process by tracking the progress of deals
through various stages, from lead to close. This feature enables sales teams to
manage opportunities effectively and identify potential bottlenecks in the sales
pipeline.`,
    },
  ];


  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="ml-0">
      <h1 className="font-semibold text-3xl font-mono text-blue-600">Features</h1>
      <div className="grid grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? 1 : -1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="py-4 w-96 border shadow-lg  rounded-2xl hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{feature.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4 w-96">
                <p>{feature.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
