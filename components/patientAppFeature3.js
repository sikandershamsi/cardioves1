import React, { useMemo } from "react";
import { FiDownload } from "react-icons/fi";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getRightScrollAnimation from "../utils/getRightScrollAnimation";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import getBottomScrollAnimation from "../utils/getBottomScrollAnimation";

const features = [
  {
    icon: "/icon7.png",
    title: "Blood Pressure Warriors:",
    preTitle: "Assisting those combating hypertension and related issues, ensuring they have real-time insights and control.",
    description:
      "Stay protected around the clock with intelligent heart monitoring. Our wearable devices provide live updates on your heart health, ensuring early detection of irregularities. From daily routines to emergencies, Cardioves helps you and your doctors stay ahead of potential risks — anytime, anywhere.",
  },
  {
    icon: "/icon8.png",
    title: "The Elderly:",
    preTitle: "Customized solutions addressing age-related cardiovascular nuances.",
    description:
      "All your vital data — one simple dashboard. Monitor heart rate, rhythm trends, medication reminders, and progress reports, all in one place. Designed for clarity and ease, the dashboard empowers you to take control of your health journey with confidence and convenience.",
  },
  {
    icon: "/icon9.png",
    title: "Athletes:",
    preTitle: "Optimizing cardiovascular health for peak physical performance.",
    description:
      "No waitlists. No unnecessary travel. Instantly connect with top cardiologists via secure video or in-person visits. Whether you have a question or need a second opinion, expert advice is always a few taps away — tailored to your condition, your goals, and your time.",
  },
  {
    icon: "/icon9.png",
    title: "Proactive Health Buffs:",
    preTitle: "Tailored for individuals focused on wellness and prevention.",
    description:
      "Every heart is different. That’s why Cardioves creates customized care plans based on your unique lifestyle, symptoms, and diagnostic data. From exercise routines to medication schedules, everything is personalized — because your heart deserves more than a one-size-fits-all approach.",
  },
  {
    icon: "/icon9.png",
    title: "Busy Professionals:",
    preTitle: "Efficient health monitoring solutions designed for life on the move.",
    description:
      "You’re not alone in your journey. Join a vibrant community of patients, caregivers, and experts sharing insights, encouragement, and real-life stories. Whether you're newly diagnosed or thriving post-treatment, you’ll find support, motivation, and inspiration from those who truly understand.",
  },
];

const PatientAppFeature3 = () => {
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
              Our Client Base
            </motion.h2>
            <motion.p
              variants={topScrollAnimation}
              className="italic text-2xl text-gray-600 mb-6"
            >
              Because Every Heart Deserves the Best
            </motion.p>
            <motion.div
              variants={topScrollAnimation}
              className="text-lg text-[#4D4D4D] mb-8"
            >
              We extend our specialized services to:
            </motion.div>
            </div>
          </ScrollAnimationWrapper>

            {/* === Desktop / Tablet View === */}
            <div className="hidden md:grid md:grid-cols-5 gap-0 items-center">
              {/* Right: Image */}
              <ScrollAnimationWrapper className="md:col-span-2 justify-center">
                <motion.div variants={rightScrollAnimation}>
                  <div className="w-full flex justify-center items-start h-full rounded-3xl bg-pink-50">
                    <img src="/feature1.png" alt="Image" className="md:w-[580px]" />
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>

              {/* Left: Features */}
              <ScrollAnimationWrapper className="md:col-span-3 justify-center mx-4">
                <motion.div variants={leftScrollAnimation}>
                  <div className="space-y-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-5">
                        <img src={feature?.icon} alt="img" className="h-20 w-30" />
                        <div>
                          <h4 className="font-semibold text-xl">{feature?.title}</h4>
                          <h4 className="font-normal text-lg">{feature?.preTitle}</h4>
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
            </div>

            {/* === Mobile View Only === */}
            <div className="block md:hidden px-4">
              {/* Image Section (No animation) */}
              <div className="w-full flex justify-center items-start h-full rounded-3xl bg-pink-50 mb-10">
                <img src="/feature1.png" alt="Image" className="w-full max-w-md" />
              </div>

              {/* Features Section */}
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row items-start gap-4"
                  >
                    <img
                      src={feature?.icon}
                      alt="img"
                      className="h-20 w-20 md:h-20 md:w-20 mx-auto md:mx-0"
                    />
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-xl">{feature?.title}</h4>
                      <h4 className="font-normal text-lg">{feature?.preTitle}</h4>
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
    </section>
  );
};

export default PatientAppFeature3;
