import { User, FileText, Activity, ArrowDownToLine } from "lucide-react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getLeftScrollAnimation from "../utils/getLeftScrollAnimation";
import Link from "next/link";


export default function ProductSection() {
    const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
    const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
    const [isHovered, setIsHovered] = useState(false);
  
  return (
      <div className="relative max-w-screen-2xl md:px-8 xl:px-10 mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Product</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: App for Doctors */}
          <div className="bg-[#D4274B] text-[#FAFAFA] rounded-3xl p-8 relative overflow-hidden w-full">
            <div className="absolute right-0 top-[-10px] h-full w-1/4 opacity-1">
              <div className="relative right-0 top-0 h-full">
                <div
                  className="relative w-full h-full bg-no-repeat bg-contain bg-right-top bg-[url('/background-heart.png')]"
                >
                  <img
                    src="/front-img.gif"
                    alt="img"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <User className="mr-2" size={24} />
              <h3 className="text-xl text-[#FAFAFA] font-bold">The CardioVes App for Doctors</h3>
            </div>
            
            <p className="mb-4 text-[#FAFAFA]">
              Monitor. Analyze. Act.<br />
              Unlock the power of real-time heart health data. With the CardioVes doctor's app, healthcare professionals can access patient data seamlessly, making timely and precise decisions.
            </p>
            
            <div className="mb-2 font-bold text-[#FAFAFA]">Features:</div>
            <ul className="list-disc pl-5 space-y-1 text-[#FAFAFA]">
              <li>Real-time patient heart data</li>
              <li>End-to-end encrypted patient-doctor chat</li>
              <li>AI-powered insights and predictions</li>
              <li>Comprehensive patient history and trends</li>
            </ul>
          </div>

          
          {/* Card 2: App for Patients */}
          <div className="bg-[#D4274B] text-[#FAFAFA] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-[-10px] h-full w-1/4 opacity-1">
              <div className="relative right-0 top-0 h-full">
                <div
                  className="relative w-full h-full bg-no-repeat bg-contain bg-right-top bg-[url('/background-heart.png')]"
                >
                  <img
                    src="/front-img.gif"
                    alt="img"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <FileText className="mr-2" size={24} />
              <h3 className="text-xl font-bold text-[#FAFAFA]">CardioVes App for Patients</h3>
            </div>
            
            <p className="mb-4 text-[#FAFAFA]">
              Your Health. Your Control.<br />
              Empower yourself with CardioVes patient app. Monitor your heart health, connect with your doctor instantly, and understand your body better.
            </p>
            
            <div className="mb-2 font-bold text-[#FAFAFA]">Features:</div>
            <ul className="list-disc pl-5 space-y-1 text-[#FAFAFA]">
              <li>Personalized heart health dashboard</li>
              <li>Direct connectivity with your doctor</li>
              <li>Educational resources about cardiovascular health</li>
              <li>Real-time alerts & reminders</li>
            </ul>
          </div>
          
          {/* Card 3: Wearable Smart Socks */}
          <div className="bg-[#D4274B] text-[#FAFAFA] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-[-10px] h-full w-1/4 opacity-1">
              <div className="relative right-0 top-0 h-full">
                <div
                  className="relative w-full h-full bg-no-repeat bg-contain bg-right-top bg-[url('/background-heart.png')]"
                >
                  <img
                    src="/front-img.gif"
                    alt="img"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Activity className="mr-2" size={24} />
              <h3 className="text-xl font-bold text-[#FAFAFA]">Wearable Smart Socks</h3>
            </div>
            
            <p className="mb-4 text-[#FAFAFA]">
              Step into the Future of Health Monitoring.<br />
              Our cutting-edge, wearable technology goes beyond just being socks. Experience the seamless blend of comfort and innovation. Wear, wash, and witness the power of real-time blood pressure monitoring through state-of-the-art sensors.
            </p>
            
            <div className="mb-2 font-bold text-[#FAFAFA]">Features:</div>
            <ul className="list-disc pl-5 space-y-1 text-[#FAFAFA]">
              <li>Fully washable without compromising the sensors</li>
              <li>Seamless integration with CardioVes apps</li>
            </ul>
          </div>
        </div>
        
        <p className="text-center mt-12 italic text-2xl text-gray-600 mb-8">
          Take The Step Toward A Heart-Healthy Future With CardioVes, Where Technology Meets Daily Life For Optimal <br/> Cardiovascular Care.
        </p>




    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative">
        {/* Red Card */}
        <div className="bg-[#db2550] rounded-2xl overflow-hidden flex justify-around flex-col lg:flex-row">
          <div className="px-6 py-10 sm:px-10 sm:py-16 lg:py-20 lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] leading-tight mb-8">
              Contact us today and let us know what you need
            </h2>
            <Link href="/contact" >
            <button className="bg-[#ffffff] text-black hover:bg-gray-100 font-medium text-base px-6 py-3 h-auto rounded-xl">
              Contact Us
            </button>
            </Link>
          </div>
          
          {/* Image container - takes up space even on mobile for consistent layout */}
        <ScrollAnimationWrapper className="lg:w-1/3 relative">
          <motion.div  variants={leftScrollAnimation}>
          {/* <div > */}
            {/* Image is positioned absolutely to overflow the card properly */}
            <img
                src="/arrow.gif"
                alt="img"
                className="absolute inset-0 h-[130px]"
              />
            <img
              src="/girl-image.png"
              alt="Person waving at laptop"
              className="hidden lg:block absolute  h-[350px] object-contain object-bottom"
            />
          {/* </div> */}
          </motion.div>
        </ScrollAnimationWrapper>
        </div>
      </div>
    </section>


      </div>
  );
}