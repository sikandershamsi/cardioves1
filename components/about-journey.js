import Image from 'next/image';
import { motion } from "framer-motion";
import getTopScrollAnimation from '../utils/getTopScrollAnimation';
import { useMemo } from 'react';
import getBottomScrollAnimation from '../utils/getBottomScrollAnimation';
import ScrollAnimationWrapper from './layout/ScrollAnimationWrapper';
import getRightScrollAnimation from '../utils/getRightScrollAnimation';
import getLeftScrollAnimation from '../utils/getLeftScrollAnimation';


export default function JourneySection() {
          const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
          const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
          const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
          const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
  return (
    <section className="py-20 mt-10 px-6 bg-white">
      <div className="max-w-screen-2xl px-8 mx-auto pb-0 pt-20">
        {/* Section Heading */}
        <ScrollAnimationWrapper className=" w-full mt-0">
            <motion.div variants={topScrollAnimation} custom={{duration: 5}}>
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
                    <p className="text-xl md:text-2xl font-medium text-gray-800 mt-2">
                        Pioneering Every Pulse
                    </p>
                </div>
            </motion.div>
        </ScrollAnimationWrapper>
        {/* Content Container - Two Columns on Desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
         
          {/* Left Column - Text Content */}
          <ScrollAnimationWrapper className=" w-full mt-0">
            <motion.div variants={rightScrollAnimation} custom={{duration: 5}}>
          <div className="w-full space-y-5">
            {/* Journey Button */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 rounded-full border border-[#D4274B] text-[#D4274B] text-sm font-medium">
                Journey
              </span>
            </div>
            
            {/* Introduction Paragraph */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                At CardioVes, every heartbeat tells a story – one of innovation, passion, and relentless pursuit of excellence.
              </h3>
              <p className="text-gray-700">
                Our odyssey commenced with a simple question:
              </p>
              <p className="text-gray-700 italic mt-2">
                "How can we revolutionize cardiovascular health monitoring?"
              </p>
            </div>
            

            {/* Journey Story Paragraphs */}
            <div className="space-y-2">
              <p className="text-gray-700 mb-0">
                From this spark of curiosity emerged the dream of seamlessly integrating groundbreaking technology with the essence of everyday well-being.
              </p>
              
              <p className="text-gray-700 mb-0">
                Enter the CardioVes Smart Socks - a symphony of advanced engineering and medical expertise. This unique wearable, embedded with ultra-responsive sensors, represents the marriage of Dr. Masud's profound medical insight and the technological prowess that Mr. Rajkumar brings to the table.
              </p>
              
              <p className="text-gray-700 mb-0">
                Our pursuit wasn't just about creating a product; it was about crafting an experience. An experience that ensures real-time blood pressure monitoring becomes as natural as wearing your daily socks.
              </p>
              
              <p className="text-gray-700 mb-0">
                As we scaled the zenith of this innovation, the essence of our journey remained rooted in a singular vision: to ensure that every heartbeat, every pulse, and every rhythmic cadence of life is monitored, cherished, and celebrated.
              </p>
              
              <p className="text-gray-700 mb-0">
                Join us as we tread the path less traveled, stitching the future of cardiovascular health, one step at a time.
              </p>
            </div>
          </div>
          </motion.div>
          </ScrollAnimationWrapper>
          {/* Right Column - Image */}

          <ScrollAnimationWrapper className=" w-full mt-0">
            <motion.div variants={leftScrollAnimation} custom={{duration: 5}}>
          <div className="w-full ">
            <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96 lg:h-[500px] relative">
              <Image 
                src="/Logo Pillow (1).png"
                alt="Engineer working on CardioVes smart technology" 
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
          </motion.div>
        </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}