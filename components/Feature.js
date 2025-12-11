import React, { useMemo } from "react";
import { FiDownload } from "react-icons/fi";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getBottomScrollAnimation from "../utils/getBottomScrollAnimation";

const features = [
  {
    icon: "/icon7.png",
    title: "Our Services: Personalized Heart Health Solutions",
    description:
      "We offer tailored treatment plans using data from wearable devices to provide real-time cardiac care, remote monitoring, and in-clinic support for every stage of your heart journey.",
  },
  {
    icon: "/icon8.png",
    title: "Book an Appointment — On Your Time",
    description:
      "Connect instantly with top cardiologists via telehealth or in-person. Scheduling is fast, secure, and based around your availability, not the hospital’s.",
  },
  {
    icon: "/icon9.png",
    title: "Patient Stories: Hope That Heals",
    description:
      "Real people. Real results. Discover how patients recovered from heart conditions with our smart socks and holistic care approach — inspiring stories of resilience.",
  },
];

const Feature = () => {
  const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
  const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
  
  return (
    <section className="max-w-screen-2xl px-8 mx-auto py-10">

          <ScrollAnimationWrapper>
            <div className="text-center">
            <motion.h2
              variants={topScrollAnimation}
              className="text-4xl font-bold mb-4"
            >
              Personalized Cardiac Care Starts Here
            </motion.h2>
            <motion.p
              variants={topScrollAnimation}
              className="italic text-2xl text-gray-600 mb-8"
            >
              Discover How Our Smart Wearables Track Heart <br/> Rhythms, Support
              Post-Op Care, And Keep You In Control.
            </motion.p>
            </div>
          </ScrollAnimationWrapper>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* === Left Text: Mobile === */}
                <div className="block md:hidden">
                  <span className="px-4 py-1 border border-[#D4274B] text-[#D4274B] text-lg rounded-lg font-medium inline-block mb-4">
                    Features
                  </span>

                  <div className="space-y-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="h-30 w-30  flex items-center justify-center rounded-full bg-pink-100">
                          <img src={feature?.icon} alt="img" className="w-30 h-30 object-contain" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">{feature?.title}</h4>
                          <p className="text-gray-600 text-md">{feature?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center"> 
                  <button className="mt-10 bg-[#000000] text-[#ffffff] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                    Download The App <FiDownload />
                  </button>
                  </div>
                </div>

              {/* === Left Text: Tablet & Desktop with animation === */}
              <ScrollAnimationWrapper className="hidden md:block">
                <motion.div variants={rightScrollAnimation}>
                  <span className="px-4 py-1 border border-[#D4274B] text-[#D4274B] text-lg rounded-lg font-medium inline-block mb-4">
                    Features
                  </span>

                  <div className="space-y-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-40 h-30 flex items-center justify-center rounded-full bg-pink-100">
                          <img src={feature?.icon} alt="img" className="w-30 h-30 object-contain" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">{feature?.title}</h4>
                          <p className="text-gray-600 text-md">{feature?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="https://apps.apple.com/pk/app/cardiovespatient/id6503321505" target="_blank">
                  <button className="mt-10 bg-[#000000] text-[#ffffff] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                    Download The App <FiDownload />
                  </button>
                  </a>
                </motion.div>
              </ScrollAnimationWrapper>

              {/* === Right Video Section (no animation on mobile) === */}
              <div className="block md:hidden">
                <div className="w-full h-full rounded-3xl bg-pink-50 p-2 sm:p-6">
                  <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg">
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
              </div>

              {/* === Right Video Section: Tablet & Desktop with animation === */}
              <ScrollAnimationWrapper className="hidden md:block">
                <motion.div variants={leftScrollAnimation}>
                  <div className="w-full h-full rounded-3xl bg-pink-50 p-10">
                    <div className="relative w-full h-[530px] overflow-hidden rounded-2xl shadow-lg">
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


         <ScrollAnimationWrapper className="w-full mt-16 overflow-hidden">
            <motion.div variants={bottomScrollAnimation}>
              <div className="rounded-2xl py-8 sm:py-10 lg:py-12 px-6 sm:px-12 lg:px-12 w-full relative overflow-hidden bg-[#D4274B]">
                {/* Content container with proper z-index */}
                <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                  {/* Text content */}
                  <div className="flex flex-col text-left w-full md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-[#ffffff] italic text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                      A 50% improvement in blood <br className="hidden sm:block"/> circulation was reported on average <br className="hidden sm:block"/> by the users.
                    </h2>
                  </div>
                  
                  {/* Empty div for spacing to keep text on left */}
                  <div className="w-full md:w-1/2"></div>
                </div>
                
                {/* People image - positioned absolutely to bottom right */}
                <div className="absolute bottom-0 right-0 md:right-12 lg:right-16 z-10">
                  <img
                    src="/image 6 full.png"
                    alt="Happy users"
                    className="h-auto w-48 sm:w-64 md:w-72 lg:w-96"
                  />
                </div>
                
                {/* Background shape - positioned absolutely */}
                <div className="absolute top-0 right-0 h-full overflow-hidden z-0">
                  <img
                    src="/hero.png"
                    alt="Background shape"
                    className="h-full w-auto  sm:w-64 md:w-72 lg:w-96 object-cover object-left"
                  />
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
    </section>
  );
};

export default Feature;
