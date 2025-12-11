import React, { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import getTopScrollAnimation from "../../utils/getTopScrollAnimation";
import getLeftScrollAnimation from "../../utils/getLeftScrollAnimation";
import getRightScrollAnimation from "../../utils/getRightScrollAnimation";
import { motion } from "framer-motion";
import getBottomScrollAnimation from "../../utils/getBottomScrollAnimation";

const faqItems = [
  {
    id: 1,
    title: "Advanced Monitoring",
    subTitle:
      "Real-time feedback on your cardiovascular health, ensuring no heartbeat goes unchecked.",
    description:
      "Real-time feedback on your cardiovascular health, ensuring no heartbeat goes unchecked.",
    icon: '/icon1.png',
  },
  {
    id: 2,
    title: "Wearable Tech",
    subTitle:
      "State-of-the-art wearable devices that combine style with function.",
    description:
      "State-of-the-art wearable devices that combine style with function.",
    icon: '/icon2.png',
  },
  {
    id: 3,
    title: "User-Centric Design",
    subTitle:
      "Intuitive application interface offering a seamless user experience.",
    description:
      "Intuitive application interface offering a seamless user experience.",
    icon: '/icon3.png',
  },
  {
    id: 4,
    title: "Instant Alerts",
    subTitle:
      "Stay informed with immediate notifications for any abnormalities.",
    description:
      "Stay informed with immediate notifications for any abnormalities.",
    icon: '/icon4.png',
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    subTitle:
      "Tailored insights and advice for maintaining optimal heart health.",
    description:
      "Tailored insights and advice for maintaining optimal heart health.",
    icon: '/icon5.png',
  },
  {
    id: 6,
    title: "Durable and Washable",
    subTitle: "Advanced technology made to endure daily routines.",
    description: "Advanced technology made to endure daily routines.",
    icon: '/icon6.png',
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
  const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-screen-2xl px-8 mx-auto py-10">
      <ScrollAnimationWrapper>
      <div className="text-center">
        <motion.h2
          variants={topScrollAnimation} 
          className="text-4xl sm:text-3xl font-bold"
          >
          Revolutionize your heart health with Cardioves Smart wearable socks:
        </motion.h2>
        <motion.p
          variants={topScrollAnimation} 
          className="italic text-2xl my-5"
          >
            Elevation Wellness, One Step Ahead
        </motion.p>
      </div>
      </ScrollAnimationWrapper>

      {/* <ScrollAnimationWrapper>
        <motion.div variants={bottomScrollAnimation}> */}
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-md mb-4 transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="hidden md:block text-sm font-bold w-6 pt-2 mt-5">{String(index + 1).padStart(2, "0")}</div>

                <div className="flex-1">
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 flex items-center justify-center rounded-full text-xl">
                        <img src={item.icon} alt="img" className="w-13 h-13 "/>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.subTitle}</p>
                      </div>
                    </div>
                    <div
                      className={`text-gray-400 mt-1 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* </motion.div>
      </ScrollAnimationWrapper> */}
    </div>
  );
};

export default FaqAccordion;
