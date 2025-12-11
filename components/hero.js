import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";

const Hero = () => {
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);

  return (
    <div className="relative">

    <div className="absolute w-full h-full bg-no-repeat bg-[right_-150px] bg-[url('/BG1X.png')] bg-[length:1100px_1300px]"></div>
          {/* <img
            src="/BG1X.png"
            alt="floating background shape"
            className="absolute w-[1200px] h-[1200px] z-[-10] top-[-250px] right-[-20px]"
          /> */}
    <div 
      className="relative max-w-screen-2xl md:px-8 xl:px-10 mx-auto  py-20 min-h-[100vh]"
      id="about"
    >
      <ScrollAnimationWrapper className="mt-24">
        <motion.div
          className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}

        >
          {/* Text Section */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center md:items-start text-left w-fit"
            variants={rightScrollAnimation}
          >
            <p className="text-lg md:text-xl text-start md:text-start text-gray-500 font-semibold leading-loose mt-4 tracking-[0.25em]">Cardioves</p>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold text-black leading-tight">
              WEAR, TRACK, AND
            </h1>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-[#D4274B] italic mt-1">
              STAY HEALTHY
            </h1>
            <p className="text-lg md:text-xl text-center md:text-start text-gray-600 italic mt-4">
              “Smart wearable socks that helps your blood circulation”
            </p>
            <p className="text-gray-700 mt-4 mb-6 text-center md:text-start max-w-xl">
              Welcome to CardioVes – Your premier destination for all cardiovascular solutions.
              Combining innovative techniques with a patient-centric approach, we offer unparalleled cardiac care.
            </p>
            <div className="flex gap-4">
              <a className="bg-[#1C1C1C] text-[#FAFAFA] px-6 py-3 rounded-xl cursor-pointer">Get Started</a>
              <a className="border border-[#D4274B] text-[#D4274B] px-6 py-3 rounded-xl cursor-pointer">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex relative w-fit flex justify-center items-center"
            variants={leftScrollAnimation}
          >

          {/* Video inside the phone screen */}
            <div className="absolute h-[382px] w-[180px] top-[5px] left-[120px] rounded-3xl md:h-[703px] md:w-[350px] md:top-[8px] md:left-[230px] md:rounded-[40px] -translate-x-1/2 overflow-hidden ">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/mobile_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Phone Mockup */}
            <img
              src="/Mobile Mockup.png"
              alt="phone mockup"
              className="w-[250px] md:h-[748px] md:w-[480px] z-[10]"
            />
          </motion.div>

        </motion.div>
      </ScrollAnimationWrapper>
    </div>
    </div>
  );
};

export default Hero;
