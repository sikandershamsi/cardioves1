import { ArrowDownToLine } from "lucide-react";
import { useMemo, useState } from "react";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";


export default function AppPromoCard() {
  const [isHovered, setIsHovered] = useState(false);
    const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  return (
    <section className="bg-[#FAFAFA] pb-16 px-6 bg-white">
    <ScrollAnimationWrapper className=" w-full mt-0">
        <motion.div variants={topScrollAnimation} custom={{duration: 3}}>
    <div className="max-w-screen-xl px-8 mx-auto py-5">
    <div className="w-full bg-[#1C1C1C] rounded-[80px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 gap-8">
        {/* Phone Mockups - Using Images */}
        <div className="relative w-full lg:w-3/5">
          <div className="flex items-center justify-center">
            {/* Replace these with your actual phone mockup image paths */}
            <img
              src="/Image-1.png"
              alt="Healthcare App Interface"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text and CTA */}
        <div className="w-full lg:w-2/5 text-center lg:text-left mt-4 lg:mt-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#D4274B] mb-4">
            Try The App<br />For Free!
          </h2>
          <p className="text-[#FAFAFA] mb-8 max-w-md mx-auto lg:mx-0">
            Let's download our app and schedule free consultation to get your health better with AI.
          </p>
          <a href="https://apps.apple.com/pk/app/cardiovespatient/id6503321505" target="_blank">
          <button
            className="bg-[#FAFAFA] text-gray-900 font-semibold py-3 px-6 rounded-xl flex items-center gap-2 mx-auto lg:mx-0 transition-all duration-300 hover:bg-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Download The App
            <ArrowDownToLine 
              size={20} 
              className={`transition-transform duration-300 ${isHovered ? 'transform translate-y-1' : ''}`} 
            />
          </button>
          </a>
        </div>
      </div>
    </div>
</div>
</motion.div>
</ScrollAnimationWrapper>
</section>
  );
}