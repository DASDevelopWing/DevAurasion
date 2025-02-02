import Image from "next/image";
import React from "react";
import { navData } from "@/data/nav";
import Link from "next/link";
function NavBar() {
  return (
    <div
      className="absolute mt-32 z-30 w-full
        flex items-center justify-center"
    >
      <div
        className="fixed w-[90%]
          shadow-[inset_0px_0px_7px_4px_#e2e8f0]
          h-[87.96px] bg-[#FFFFFF] rounded-2xl"
      >
        <div className="w-[90%] mx-auto flex justify-between items-center gap-2 h-full">
          <div className="flex w-full h-full justify-between items-center ">
            <div className="flex items-center justify-center w-[20%]">
              <div>
                <Image
                  src={"/images/logo.svg"}
                  alt=""
                  width={200}
                  height={42}
                />
              </div>
            </div>
            <div className="flex w-[50%] items-center justify-between">
              {navData.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl px-2 py-1 hover:bg-[#FFB320] shadow-[0px_0px_0px_0px_#1a202c] hover:border-[3px] hover:border-black transform transition-all duration-300 
                    hover:scale-110 hover:translate-y-1 
                    hover:shadow-lg hover:rotate-3"
                >
                  <Link href={item.link}>
                    <div>
                      <p
                        className="font-normal text-2xl text-[#1a202c] 
                    
                "
                      >
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
