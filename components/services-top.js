import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";

const ServicesTop = () => {
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
  const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);

  return (
    <div className="relative">
    <div className="absolute w-full h-full bg-no-repeat bg-[right_-150px] bg-[url('/BG1X.png')] bg-[length:1100px_1300px]"></div>
      <div className="max-w-screen-2xl md:px-8 xl:px-10 mx-auto py-20 min-h-[100vh]">
          <div className="grid md:grid-cols-2 gap-10 mt-24 items-center ">
            {/* Left: Text */}
            <ScrollAnimationWrapper>
              <motion.div variants={rightScrollAnimation}>
              <p className="text-lg md:text-xl text-start md:text-start text-gray-500 font-semibold leading-loose mt-4 tracking-[0.25em]">Cardioves</p>
                <h1 className="text-3xl text-center md:text-start lg:text-5xl xl:text-6xl font-semibold text-black leading-tight">
                    Revolutionizing
                </h1>
                <h1 className="text-3xl text-center md:text-start lg:text-5xl xl:text-6xl font-bold text-[#D4274B] italic mt-1">
                    Cardiovascular Care
                </h1>
                <h1 className="text-3xl text-center md:text-start lg:text-5xl xl:text-6xl font-semibold text-black leading-tight">
                     with Every Step
                </h1>
                <p className="text-gray-700 text-center md:text-start mt-4 mb-6 max-w-xl">
                    At CardioVes, we merge cutting-edge technology with the simplicity of daily wear. 
                    Introducing our innovative wearable socks equipped with state-of-the-art sensors, we’re dedicated to monitoring your real-time blood pressure seamlessly. 
                    Because every step you take should be a step toward heart health.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <a className="bg-[#1C1C1C] text-[#FAFAFA] px-6 py-3 rounded-xl cursor-pointer">Get Started</a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            {/* Right: Background pattern */}
            <ScrollAnimationWrapper>
              <motion.div variants={leftScrollAnimation}>
                <div className="w-full h-full rounded-3xl bg-pink-50 p-2 sm:p-10">
                  <div className="relative w-full h-[500px] md:h-[530px] overflow-hidden rounded-2xl shadow-lg">
    
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
    </div>
  );
};

export default ServicesTop;
