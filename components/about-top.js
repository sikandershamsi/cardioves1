
import { useMemo } from 'react';
import getBottomScrollAnimation from '../utils/getBottomScrollAnimation';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from './layout/ScrollAnimationWrapper';
import getTopScrollAnimation from '../utils/getTopScrollAnimation';

export default function AboutPage() {
    const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
    const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  
  return (
    <div className="flex flex-col">
      {/* About Us Hero Section */}
      <div className="bg-[#FFEFF3] mt-28 pt-20 pb-0">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper className=" w-full mt-0">
            <motion.div variants={topScrollAnimation} custom={{duration: 3}}>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ABOUT US</h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-800 italic">
                  CardioVes: Pioneering The Future Of Cardiovascular Monitoring
                </h2>
                <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                  Stepping into the realms of innovation and health, CardioVes was birthed from a vision - to 
                  seamlessly blend advanced technology with everyday cardiovascular health monitoring.
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <div className="rounded-lg mb-0">
            <div className="w-full h-64 md:h-96 relative">
              <ScrollAnimationWrapper className=" w-full mt-0">
                <motion.div variants={bottomScrollAnimation} custom={{duration: 3}}>
                  <div className="absolute rounded-xl w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 top-[60px]">
                    <img
                      src="/about-top-img.png"
                      alt="Team of healthcare professionals discussing" 
                      // layout="fill"
                      // objectFit="cover"
                      className="w-full h-full object-cover"
                      // priority
                    />
                  </div>
                  <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                    ></div>
                </motion.div>
              </ScrollAnimationWrapper>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

