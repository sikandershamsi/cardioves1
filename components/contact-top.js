
import { useMemo } from 'react';
import getBottomScrollAnimation from '../utils/getBottomScrollAnimation';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import getTopScrollAnimation from '../utils/getTopScrollAnimation';

export default function ContactPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT US</h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-800 italic">
                  We’re here for you, and we’re wearing our thinking caps.
                </h2>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <div className="rounded-lg mb-0">
            <div className="w-full h-64 md:h-96 relative">
              <ScrollAnimationWrapper className=" w-full mt-0">
                <motion.div variants={bottomScrollAnimation} custom={{duration: 3}}>
                  <div className="absolute rounded-2xl w-full h-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 top-[70px]">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3700212505713!2d-78.86186318449993!3d43.89603654007025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d508d1b84b13e1%3A0x210515e55eb4a214!2s2%20Simcoe%20St%20S%20%23300%2C%20Oshawa%2C%20ON%20L1H%208C1%2C%20Canada!5e0!3m2!1sen!2sca!4v1716537000000!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-xl"
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

