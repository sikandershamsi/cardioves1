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
    title: "BP Monitoring on the Go:",
    preTitle: "Instant, real-time access to patient readings.",
    description:
      "Stay protected around the clock with intelligent heart monitoring. Our wearable devices provide live updates on your heart health, ensuring early detection of irregularities. From daily routines to emergencies, Cardioves helps you and your doctors stay ahead of potential risks — anytime, anywhere.",
  },
  {
    icon: "/icon8.png",
    title: "Digital Health Vault:",
    preTitle: "Comprehensive, secure storage of all patient cardiovascular data.",
    description:
      "All your vital data — one simple dashboard. Monitor heart rate, rhythm trends, medication reminders, and progress reports, all in one place. Designed for clarity and ease, the dashboard empowers you to take control of your health journey with confidence and convenience.",
  },
  {
    icon: "/icon9.png",
    title: "Telehealth Capabilities:",
    preTitle: "Streamlined online consultations, minimizing geographical constraints.",
    description:
      "No waitlists. No unnecessary travel. Instantly connect with top cardiologists via secure video or in-person visits. Whether you have a question or need a second opinion, expert advice is always a few taps away — tailored to your condition, your goals, and your time.",
  },
  {
    icon: "/icon9.png",
    title: "Alert Mechanisms:",
    preTitle: "Stay informed about critical patient health shifts.",
    description:
      "Every heart is different. That’s why Cardioves creates customized care plans based on your unique lifestyle, symptoms, and diagnostic data. From exercise routines to medication schedules, everything is personalized — because your heart deserves more than a one-size-fits-all approach.",
  },
  {
    icon: "/icon9.png",
    title: "Knowledge Hub:",
    preTitle: "Access to the latest cardiovascular studies and best practices.",
    description:
      "You’re not alone in your journey. Join a vibrant community of patients, caregivers, and experts sharing insights, encouragement, and real-life stories. Whether you're newly diagnosed or thriving post-treatment, you’ll find support, motivation, and inspiration from those who truly understand.",
  },
];

const PatientAppFeature2 = () => {
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
                Cardioves Patient App
              </motion.h2>
              <motion.p
                variants={topScrollAnimation}
                className="italic text-2xl text-gray-600 mb-6"
              >
                The Next Frontier in Cardiovascular Care
              </motion.p>
              <motion.div
                variants={topScrollAnimation}
                className="text-lg text-[#4D4D4D] mb-8"
              >
                Experience advanced patient management and care with our app’s robust features:
              </motion.div>
            </div>
          </ScrollAnimationWrapper>

            {/* === Desktop / Tablet View === */}
            <div className="hidden md:grid md:grid-cols-2 gap-5 items-center">

              {/* Left: Text */}
              <ScrollAnimationWrapper>
                <motion.div variants={rightScrollAnimation}>
                  <div className="space-y-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
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

              {/* Right: Image */}
              <ScrollAnimationWrapper>
                <motion.div variants={leftScrollAnimation}>
                  <div className="w-full flex justify-center items-start h-full rounded-3xl bg-pink-50">
                    <img src="/feature1.png" alt="Image" className="md:w-[580px]" />
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>

            </div>

            {/* === Mobile View Only === */}
            <div className="block md:hidden px-4 space-y-10">

              {/* Image (No animation) */}
              <div className="w-full flex justify-center items-start h-full rounded-3xl bg-pink-50">
                <img src="/feature1.png" alt="Image" className="w-full max-w-md" />
              </div>

              {/* Features */}
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


          {/* <ScrollAnimationWrapper className="w-full mt-16 overflow-hidden">
            <motion.div variants={bottomScrollAnimation}>
                <div className="rounded-xl py-8 sm:py-10 lg:py-6 px-6 sm:px-12 lg:px-16 w-full relative overflow-hidden bg-[#D4274B]">
                <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div className="flex flex-col text-left w-full md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-[#ffffff] italic text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                            GET CARDIOVES NOW !
                    </h2>
                    <p className="text-[#ffffff] italic text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                        Track your blood circulation and more
                    </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 items-end justify-end w-full md:w-1/2 h-full">
                    <div className="relative">

                        <img
                        src="/App Store.png"
                        alt="Happy users"
                        className="h-16"
                        />
                    </div>
                    <div className="relative">
                        <img
                        src="/Google Play.png"
                        alt="Happy users"
                        className="h-16"
                        />
                    </div>
                    </div>
                </div>
                
                <div className="absolute top-0 right-0 h-full overflow-hidden z-0">
                    <img
                    src="/hero.png"
                    alt="Background shape"
                    className="h-full w-auto  sm:w-64 md:w-72 lg:w-96 object-cover object-left"
                    />
                </div>
                </div>
            </motion.div>
        </ScrollAnimationWrapper> */}
    </section>
  );
};

export default PatientAppFeature2;
