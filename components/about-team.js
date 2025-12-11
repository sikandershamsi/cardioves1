import Image from 'next/image';
import { useMemo } from 'react';
import getTopScrollAnimation from '../utils/getTopScrollAnimation';
import ScrollAnimationWrapper from './layout/ScrollAnimationWrapper';
import { motion } from "framer-motion";
import getLeftScrollAnimation from '../utils/getLeftScrollAnimation';
import getRightScrollAnimation from '../utils/getRightScrollAnimation';
import getBottomScrollAnimation from '../utils/getBottomScrollAnimation';

export default function TeamSection() {
        const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
        const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
        const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
        const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-screen-2xl px-8 mx-auto py-5">
        {/* Section Heading */}
        <ScrollAnimationWrapper className=" w-full mt-0">
            <motion.div variants={topScrollAnimation} custom={{duration: 3}}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
                    <p className="text-xl md:text-2xl font-medium text-gray-800 mt-2">
                        The Heart and Pulse of CardioVes
                    </p>
                    <p className="text-gray-700 mt-2 italic">
                        Meet Our Talented Team Of Designers, Creators, And Problem Solvers.
                    </p>
                </div>
            </motion.div>
        </ScrollAnimationWrapper>

        {/* Team Member 1 - Dr. Faraz Masud */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Profile Image */}
          <ScrollAnimationWrapper className="w-full md:w-1/3 lg:w-1/4 mt-0">
            <motion.div className="" variants={rightScrollAnimation} custom={{duration: 3}}>
                <div className="rounded-lg overflow-hidden bg-pink-50 shadow-md">
                  <div className="w-full aspect-square relative">
                    <Image 
                      src="/dr-Faraz.png"
                      alt="Dr. Faraz Masud" 
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Profile Info */}
          <ScrollAnimationWrapper className="w-full md:w-2/3 lg:w-3/4">
            <motion.div className="" variants={leftScrollAnimation} custom={{duration: 3}}>
              {/* Title Badge */}
              <div className="flex mb-4 items-center">
                <span className="px-4 py-1 rounded-full border border-[#D4274B] text-[#D4274B] text-sm font-medium mr-2">
                  Chief Executive Officer
                </span>
                <a href="https://www.linkedin.com/in/faraz-masud/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full border border-[#D4274B] text-[#D4274B]">
                  <span className="text-[#D4274B] font-semibold">In</span>
                </a>
              </div>
              
              {/* Name and Bio */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dr. Faraz Masud</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Co-Founder and Lead Pediatric Cardiologist Boasting a rich history of 33 years in pediatric cardiology, Dr. Masud has been the beacon in diagnosing and treating intricate cardiovascular conditions in infants and children. His leadership qualities, combined with an entrepreneurial spirit, have always driven innovation and expansion in the healthcare spectrum.
                </p>
                <p>
                  Eager to spearhead CardioVes journey, Dr. Masud will soon be relocating to Canada.
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>


        </div>
        
        {/* Team Member 2 - Mr. Rajkumar Ramaswamy */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Profile Image */}
          <ScrollAnimationWrapper className="w-full md:w-1/3 lg:w-1/4">
            <motion.div className="" variants={leftScrollAnimation} custom={{duration: 3}}>
                <div className="rounded-lg overflow-hidden bg-pink-50 shadow-md">
                  <div className="w-full aspect-square relative">
                    <Image 
                      src="/dr-Rajkumar.png"
                      alt="Mr. Rajkumar Ramaswamy" 
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Profile Info */}
          <ScrollAnimationWrapper className="w-full md:w-2/3 lg:w-3/4">
            <motion.div className="" variants={rightScrollAnimation} custom={{duration: 3}}>
                {/* Title Badge */}
                <div className="flex mb-4 items-center">
                  <span className="px-4 py-1 rounded-full border border-[#D4274B] text-[#D4274B] text-sm font-medium mr-2">
                    Director of Marketing and Sales
                  </span>
                  <a href="https://www.linkedin.com/in/rajkumar-ramaswamy/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full border border-[#D4274B] text-[#D4274B]">
                    <span className="text-[#D4274B] font-semibold">In</span>
                  </a>
                </div>
                
                {/* Name and Bio */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mr. Rajkumar Ramaswamy</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Co-Founder, Sales and Marketing Specialist With 25 years etched in the domain of sales and marketing, Mr. Rajkumar possesses an impeccable track record of fostering revenue growth, sculpting robust customer relationships, and birthing impactful marketing initiatives.
                  </p>
                  <p>
                    He prevails in tapping into market trends, alongside his adeptness at various sales tools, places him at the forefront of CardioVes's outreach. He is on the verge of relocating to Canada to infuse his expertise into the company's sales and marketing divisions.
                  </p>
                </div>
            </motion.div>
          </ScrollAnimationWrapper>

        </div>
      </div>
    </section>
  );
}