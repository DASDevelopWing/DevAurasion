"use client";
import React, { useState } from "react";
import { qnas } from "@/data/qna";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion"; // Import framer motion

const QnA = () => {
  // State to track which item is open
  const [openItem, setOpenItem] = useState<string | undefined>("");

  return (
    <div className="w-full bg-[#EEEADF] min-h-screen flex items-center justify-center">
      <div className="mb-14 w-11/12 md:w-4/6 h-[90%]">
        {/* Header Section */}
        <section>
          <div className="py-8 mt-16 text-center">
            <motion.p
              className="font-bold text-3xl md:text-4xl text-[#1C3434]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              We’ve Got Answers for You!
            </motion.p>
            <motion.p
              className="w-[90%] mx-auto font-normal text-base md:text-lg lg:text-2xl text-[#46483D] mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              From common queries to in-depth explanations, find everything you
              need to know right here.
            </motion.p>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="mt-9">
          <div className="w-full mx-auto">
            <Accordion
              type="single"
              collapsible
              value={openItem} // Controlled value to track open state
              onValueChange={(value) => setOpenItem(value)} // Update state on value change
              className="w-full"
            >
              {qnas.map((qna) => (
                <AccordionItem value={`item-${qna.sno}`} key={qna.sno}>
                  {/* Motion div for smooth background color transition */}
                  <motion.div
                    className={`${
                      openItem === `item-${qna.sno}`
                        ? "text-white"
                        : "text-[#1C3434]"
                    } border-2 border-gray-200 mt-2 rounded-lg px-6 md:px-11 py-4`}
                    initial={{ backgroundColor: "#FFFFFF" }} // Initial background
                    animate={{
                      backgroundColor:
                        openItem === `item-${qna.sno}` ? "#1C3434" : "#FFFFFF", // Animated background color
                    }}
                    transition={{ duration: 0.5 }} // Smooth transition duration
                  >
                    <AccordionTrigger>
                      <motion.p
                        className="font-bold text-lg md:text-xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {qna.question}
                      </motion.p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.p
                        className="font-normal text-sm md:text-lg text-[#E2EEEA] mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {qna.answer}
                      </motion.p>
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QnA;
