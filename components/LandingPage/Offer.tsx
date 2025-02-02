"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ImageComponent from "./ImageComponent";

const Offer = () => {
  return (
    <div className="w-[90%] bg-[#FEFFFF] mx-auto min-h-screen p-6 flex items-center justify-center py-9 mt-24 mb-24">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-1/3 md:flex-col flex"
        >
          <div className="bg-[#242B60] border-[rgb(39,43,76)] p-6 rounded-3xl flex-1 flex flex-col justify-center">
            <div className="flex flex-col mt-7 mb-2">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#DBEBFE] py-3 tracking-[0.02em] flex flex-col gap-6">
                <span>What we offer and</span> <span>Our Capabilities?</span>
              </h2>
              <p className="text-[#D2D5E4] font-medium text-lg lg:text-2xl py-3 leading-7">
                We help people who love technology and developers by providing
              </p>
              <div className="mt-8 flex items-center justify-center">
                <Image
                  src={"/images/team/Ques.svg"}
                  alt="question"
                  width={500}
                  height={500}
                  className="w-[120px] h-[120px] lg:w-[170.53px] lg:h-[170.53px]"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle Column */}
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EFDA68] border-[#272B4C] border-2 p-6 rounded-3xl flex-1 flex flex-col justify-between relative"
          >
            <div className="w-[90%] flex flex-col gap-4 px-4 z-10 py-6">
              <h2 className="text-[#272B4C] font-bold leading-7 text-2xl">
                Networking
              </h2>
              <p className="font-normal text-xl text-[#3B3B39] leading-relaxed">
                Meet other developers, students, and tech enthusiasts at events
                and meetups
              </p>
            </div>
            <div className="absolute bottom-0 right-0">
              <ImageComponent fill="#DABD15" />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#E7C1D3] border-[#272B4C] border-2 p-6 rounded-3xl flex-1 flex flex-col justify-between relative"
          >
            <div className="w-[90%] flex flex-col gap-4 px-4 z-10 py-6">
              <h2 className="text-[#272B4C] font-bold leading-7 text-2xl">
                Networking
              </h2>
              <p className="font-normal text-xl text-[#3B3B39] leading-relaxed">
                Meet other developers, students, and tech enthusiasts at events
                and meetups
              </p>
            </div>
            <div className="absolute bottom-0 right-0">
              <ImageComponent fill="#E0AFC8" />
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#A4DAC2] border-[#272B4C] border-2 p-6 rounded-3xl flex-1 flex flex-col justify-between relative"
          >
            <div className="w-[90%] flex flex-col gap-4 px-4 z-10 py-6">
              <h2 className="text-[#272B4C] font-bold leading-7 text-2xl">
                Networking
              </h2>
              <p className="font-normal text-xl text-[#3B3B39] leading-relaxed">
                Meet other developers, students, and tech enthusiasts at events
                and meetups
              </p>
            </div>
            <div className="absolute bottom-0 right-0">
              <ImageComponent fill="#80CAA9" />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#92BDF5] border-[#272B4C] border-2 p-6 rounded-3xl flex-1 flex flex-col justify-between relative"
          >
            <div className="w-[90%] flex flex-col gap-4 px-4 z-10 py-6">
              <h2 className="text-[#272B4C] font-bold leading-7 text-2xl">
                Networking
              </h2>
              <p className="font-normal text-xl text-[#3B3B39] leading-relaxed">
                Meet other developers, students, and tech enthusiasts at events
                and meetups
              </p>
            </div>
            <div className="absolute bottom-0 right-0">
              <ImageComponent fill="#68A0EC" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
