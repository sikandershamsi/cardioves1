import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";

const InnovativeServices = () => {
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
  const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);

  return (
    <section className="relative max-w-screen-2xl md:px-8 xl:px-10 mx-auto md:pt-20 sm:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <ScrollAnimationWrapper>
              <motion.div variants={rightScrollAnimation}>
                <h1 className="text-4xl text-center md:text-start sm:text-3xl font-bold mb-4">Innovative Wearable Technology</h1>
                <div className="flex flex-col gap-5">
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">CardioVes Smart Socks: </h4>
                    <p className="text-gray-600 text-center md:text-start text-md">Comfortable, washable, and designed to be a part of your daily life. Monitor your heart health without any extra effort.</p>
                  </div>
                </div>
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">Real-time Blood Pressure Monitoring:</h4>
                    <p className="text-gray-600 text-center md:text-start text-md">Stay informed with continuous blood pressure readings throughout your day.</p>
                  </div>
                </div>
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">Precise Sensors Embedded:</h4>
                    <p className="text-gray-600 text-center md:text-start text-md">Our socks come embedded with sensors designed to capture accurate and vital heart-related metrics.</p>
                  </div>
                </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            {/* Right: Background pattern */}
            <ScrollAnimationWrapper>
              <motion.div variants={leftScrollAnimation}>
                <div className="w-full h-full rounded-3xl bg-pink-50 p-2 sm:p-10">
                  <img src="/Logo Pillow1.png" alt="img" />
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
    </section>
  );
};

export default InnovativeServices;
