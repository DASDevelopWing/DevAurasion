"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { CardBody, CardContainer } from "../ui/3d-card";
import { motion } from "framer-motion"; 
const Blog: React.FC = () => {
  return (
    <div className="bg-[#FBFAF5] h-auto w-[95%] mx-auto ">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center lg:py-9 gap-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[40%] font-semibold sm:text-6xl text-4xl lg:text-[137px] lg:leading-[169.5px] flex items-center justify-center ">
          Blogs
        </div>
        <div className="w-[60%] font-normal lg:leading-[45.56px] text-[#263238] lg:flex lg:flex-col lg:text-[34.99px] ">
          <span>Dive into a world of knowledge with articles</span>
          <span>crafted to inform, inspire, and ignite your curiosity</span>
        </div>
      </motion.div>

      {/* Blog Posts Section */}
      <motion.div
        className="w-full min-h-screen flex items-center justify-center p-4 flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="w-full lg:w-full flex flex-col lg:flex-row-reverse gap-10 mx-auto">
              {/* Left Side Content */}
              <div className="w-full lg:w-[60%] flex flex-col gap-8 h-full">
                {/* First Row */}
                <CardContainer>
                  <CardBody>
                    <motion.div
                      className="flex flex-col sm:flex-row lg:flex-row gap-4 bg-[#F682A5] px-10 py-10 rounded-[49.99px]"
                      whileHover={{ scale: 1.05 }} // Hover scale effect
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="w-full sm:w-1/2 flex-shrink-0 flex items-stretch">
                        <Image
                          src={"./images/blog1.svg"}
                          alt="blog1"
                          width={640}
                          height={400}
                          className="object-cover w-full h-[95%] rounded-lg"
                        />
                      </div>
                      {/* Text Content */}
                      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-1">
                        <p className="text-[#4A1A4E] font-normal text-sm lg:text-base">
                          November 16, 2024
                        </p>
                        <p className="font-extrabold text-3xl lg:text-xl text-[#4A1A4E] leading-8 -tracking-tighter">
                          Three Pillars of User Delight
                        </p>
                        <p className="font-semibold text-sm lg:text-base text-[#771B42]">
                          Delight can be experienced viscerally, behaviourally,
                          and reflectively. A great...
                        </p>
                        <div>
                          <Button className="bg-[#CA4F74] rounded-3xl hover:bg-[#F17216] transition duration-300">
                            Read more
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </CardBody>
                </CardContainer>

                {/* Second Row */}
                <CardContainer>
                  <CardBody>
                    <motion.div
                      className="flex flex-col sm:flex-row lg:flex-row gap-4 bg-[#C9D98E] px-10 py-10 rounded-[49.99px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="w-full sm:w-1/2 flex-shrink-0 flex items-stretch">
                        <Image
                          src={"./images/blog1.svg"}
                          alt="blog1"
                          width={640}
                          height={400}
                          className="object-cover w-full h-[95%] rounded-lg"
                        />
                      </div>
                      {/* Text Content */}
                      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-1">
                        <p className="text-[#1F4514] font-normal text-sm lg:text-base">
                          November 16, 2024
                        </p>
                        <p className="font-extrabold text-3xl lg:text-xl text-[#1F4514] leading-8 -tracking-tighter">
                          Three Pillars of User Delight
                        </p>
                        <p className="font-semibold text-sm lg:text-base text-[#364E10]">
                          Delight can be experienced viscerally, behaviourally,
                          and reflectively. A great...
                        </p>
                        <div>
                          <Button className="bg-[#8A9954] rounded-3xl hover:bg-[#6F8F36] transition duration-300">
                            Read more
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </CardBody>
                </CardContainer>
              </div>

              {/* Right Side Content */}
              <div className="w-full lg:w-[40%] flex flex-col gap-8 h-full">
                <CardContainer>
                  <CardBody>
                    <motion.div
                      className="flex flex-col bg-[#C3B2E8] px-10 py-10 rounded-[49.99px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full flex-shrink-0 flex items-stretch">
                        <Image
                          src={"./images/blog1.svg"}
                          alt="blog3"
                          width={640}
                          height={400}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>

                      <div className="w-full flex flex-col justify-center gap-4 mt-4">
                        <p className="text-[#401856] font-normal text-sm lg:text-base">
                          March 13, 2024
                        </p>
                        <p className="font-extrabold text-lg lg:text-xl text-[#401856]">
                          Agile Development Projects and Usability
                        </p>
                        <p className="font-semibold text-sm lg:text-base text-[#533A71]">
                          Agile methods aim to overcome usability barriers in
                          traditional development, but post new threats to user
                          experience quality.
                        </p>
                        <div>
                          <Button className="bg-[#8A72C8] rounded-3xl hover:bg-[#6E58A3] transition duration-300">
                            Read more
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>

          {/* Explore More Blogs */}
          <div className="w-[100%] mx-auto flex h-full flex-col items-center justify-center">
            <div>
              <Link href={"/blogs"}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale on hover
                  transition={{ duration: 0.3 }}
                >
                  <Button className="rounded-3xl border-2 border-black bg-white hover:bg-[#F17216] transition duration-300">
                    <p className="flex gap-3 text-[#263238] items-center justify-center">
                      <span className="font-semibold text-lg leading-8 text-center flex gap-4">
                        Explore more Blogs
                      </span>
                      <span>
                        <FaArrowRight />
                      </span>
                    </p>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
