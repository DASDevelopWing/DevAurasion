"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import BackgroundGrid from "../common/BackgroundGrid";

const Welcome = () => {
  return (
    <BackgroundGrid>
      <div className="w-full h-screen bg-[#0D161A] flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div>
            icons
            <p>lets connect</p>
          </div>
          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mt-12">
            Welcome to{" "}
            <motion.div
              animate={{
                rotate: 1.8, // Rotate the border container
              }}
              className="inline-block border-2 rounded-bl-3xl rounded-tr-3xl"
            >
              {/* Rotate the inner text element back by -1.8 degrees */}
              <motion.span
                animate={{
                  rotate: -1.8, // Counter rotate to keep the text straight
                  scale: 1.01,
                }}
                transition={{ duration: 1 }}
                className="text-black mx-auto font-samarkan bg-[#FFB320] px-3 rounded-bl-3xl rounded-tr-3xl"
                style={{
                  display: "inline-block", // Ensure it's block to rotate
                  transformOrigin: "center center", // Rotate around center
                }}
              >
                DevAurasion
              </motion.span>
            </motion.div>{" "}
            Community
          </h1>

          {/* Button */}
          <button className="mt-16 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block px-1 py-1">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Join Our Community</span>
              <FaArrowRight />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          <div>
            Start Your Tech Journey
            <div>box</div>
          </div>
          <div>moving</div>
        </div>
      </div>
    </BackgroundGrid>
  );
};

export default Welcome;
