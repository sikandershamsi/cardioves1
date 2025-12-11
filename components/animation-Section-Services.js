"use client"
import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import { getRightRotateScrollAnimation } from "../utils/getRightRotateScrollAnimation";
import { getLeftRotateScrollAnimation } from "../utils/getLeftRotateScrollAnimation";
import useIsMobile from "../utils/useIsMobile";

const AnimationServices = () => {
    const isMobile = useIsMobile();
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
  const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  const rightRotateScrollAnimation = useMemo(() => getRightRotateScrollAnimation(), [])
  const leftRotateScrollAnimation = useMemo(() => getLeftRotateScrollAnimation(), [])

  const maybeMotion = (variants, children) =>
    isMobile ? <>{children}</> : <motion.div variants={variants}>{children}</motion.div>;

  return (
    <section className="relative max-w-screen-2xl md:px-8 xl:px-10 mx-auto pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text First on Mobile, Left on Desktop */}
          <div className="sm:order-1 md:order-2">
            <ScrollAnimationWrapper>
              <motion.div variants={leftScrollAnimation}>
                <h1 className="text-4xl text-center md:text-start sm:text-3xl font-bold mb-4">
                  Connected Care Ecosystem
                </h1>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                        Synchronized CardioVes App:
                      </h4>
                      <p className="text-gray-600 text-center md:text-start text-md">
                        A companion to your smart socks, our app provides detailed data visualizations, history, and timely alerts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                        Immediate Alerts & Guidance:
                      </h4>
                      <p className="text-gray-600 text-center md:text-start text-md">
                        Should an irregularity be detected, our system sends immediate notifications, guiding you on next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                        Remote Consultations:
                      </h4>
                      <p className="text-gray-600 text-center md:text-start text-md">
                        Connect with cardiovascular specialists directly through our platform for real-time consultations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>

          {/* Image Second on Mobile, Right on Desktop */}
          <div className="md:order-1 sm:order-2">
            <ScrollAnimationWrapper>
              <motion.div variants={rightRotateScrollAnimation}>
                <div className="w-full h-full md:h-30 rounded-3xl bg-pink-50 p-2 sm:p-10">
                  <img src="/rotate-mobile-1.png" alt="img" />
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>



          <div className="grid md:grid-cols-2 gap-10 items-center pt-10">
        
            {/* Left: Text */}
            <ScrollAnimationWrapper>
              <motion.div variants={rightScrollAnimation}>
                <h1 className="text-4xl text-center md:text-start sm:text-3xl font-bold mb-4">Beyond Monitoring: Comprehensive Care</h1>
                <div className="flex flex-col gap-5">
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                      Trend Analysis:
                      </h4>
                    <p className="text-gray-600 text-center md:text-start text-md">
                      Understand your heart’s behavior over time, empowering you to make informed health decisions.
                      </p>
                  </div>
                </div>
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                      Integrative Health Recommendations:
                    </h4>
                    <p className="text-gray-600 text-center md:text-start text-md">
                      Receive personalized advice, from diet to exercise, based on your data.
                    </p>
                  </div>
                </div>
                <div  className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                      Secure Data Storage:
                      </h4>
                    <p className="text-gray-600 text-center md:text-start text-md">
                     Your health data, protected by advanced encryption, ensures privacy and peace of mind.
                      </p>
                  </div>
                </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            
            {/* Right: Background pattern */}
            <ScrollAnimationWrapper>
              <motion.div variants={leftRotateScrollAnimation}>
                <div className="w-full h-full rounded-3xl bg-pink-50 p-2 sm:p-10">
                  <img src="/rotate-mobile-1.png" alt="img" />
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>


            <div className="grid md:grid-cols-2 gap-10 items-center pt-10">
              {/* Text First on Mobile, Left on Desktop */}
              <div className="sm:order-1 md:order-2">
                <ScrollAnimationWrapper>
                  <motion.div variants={leftScrollAnimation}>
                    <h1 className="text-4xl text-center md:text-start sm:text-3xl font-bold mb-4">
                      Why CardioVes is the Future of Cardiac Care
                    </h1>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start gap-4">
                        <div>
                          <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                            Seamless Integration: 
                          </h4>
                          <p className="text-gray-600 text-center md:text-start text-md">
                            Incorporate heart health monitoring into your daily routine without any hassle.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div>
                          <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                            Driven by Data:
                          </h4>
                          <p className="text-gray-600 text-center md:text-start text-md">
                            Harness the power of real-time data to stay ahead and proactive in your heart health journey.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div>
                          <h4 className="font-semibold text-center md:text-start text-[#D4274B] text-xl">
                            Expert Support:
                          </h4>
                          <p className="text-gray-600 text-center md:text-start text-md">
                            Harness the power of real-time data to stay ahead and proactive in your heart health journey.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>

              {/* Image Second on Mobile, Right on Desktop */}
              <div className="md:order-1 sm:order-2">
                <ScrollAnimationWrapper>
                  <motion.div variants={rightRotateScrollAnimation}>
                    <div className="w-full h-full rounded-3xl bg-pink-50 p-2 sm:p-10">
                      <img src="/rotate-mobile-1.png" alt="img" />
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>

    </section>
  );
};

export default AnimationServices;
