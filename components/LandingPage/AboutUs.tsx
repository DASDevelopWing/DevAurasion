"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-[#FEC447] w-full min-h-screen">
      <div className="w-[95%]  mx-auto py-10">
        {/* About Us Title Section */}
        <div className="w-full md:w-[60%]">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold text-[3rem] sm:text-[4rem] md:text-[6rem]">
              About Us
            </p>
            <p className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.8rem] font-semibold text-[#263238] -mt-4 md:-mt-10">
              Where we turn ideas into reality!
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center sm:mt-8 md:mt-14 lg:mt-3">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-[60%] flex mb-8 md:mb-12"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <ul className="list-disc pl-6 font-normal text-base sm:text-xl text-[#263238] space-y-8 sm:space-y-10 mt-6 sm:mt-8 md:mt-9">
                <li>
                  We are a community that{" "}
                  <span className="font-bold">
                    brings together tech enthusiasts,
                  </span>{" "}
                  students, and developers. Whether you&apos;re taking your
                  first steps in tech or you&apos;re an experienced developer,
                  we&apos;re here to help you grow.
                </li>
                <li>
                  At DevAurasion, we believe great things happen when people
                  work together. Through{" "}
                  <span className="font-bold">
                    our workshops, events, and projects, you&apos;ll learn new
                    skills, meet other tech professionals,
                  </span>{" "}
                  and build amazing things.
                </li>
                <li>
                  Join us to explore new technologies, work on exciting
                  projects, and be part of a community that supports your
                  journey in tech.{" "}
                  <span className="font-bold">
                    Let&apos;s shape the future together!
                  </span>
                </li>
              </ul>
              <div className="mt-6 sm:mt-8 md:mt-16">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#263238",
                    color: "#FEC447",
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <Button className="rounded-3xl bg-transparent border-2 border-black text-[#263238] text-xl sm:text-2xl">
                    Read more <FaArrowRightLong />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-[40%] -translate-y-12 sm:-translate-y-16 md:-translate-y-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={"/images/about/AboutUsa.svg"}
              alt="About Us Illustration"
              width={1200}
              height={1200}
              className="w-full scale-125 sm:scale-150"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
