import { useMemo } from 'react';
import getTopScrollAnimation from '../utils/getTopScrollAnimation';
import getLeftScrollAnimation from '../utils/getLeftScrollAnimation';
import getRightScrollAnimation from '../utils/getRightScrollAnimation';
import getBottomScrollAnimation from '../utils/getBottomScrollAnimation';

export default function ServiceBenefitsSection() {
            const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
            const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
            const rightScrollAnimation = useMemo(() => getRightScrollAnimation(), []);
            const bottomScrollAnimation = useMemo(() => getBottomScrollAnimation(), []);
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 bg-white">
      <div className="max-w-screen-2xl px-8 mx-auto py-5">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Service Benefits</h2>
        </div>
        
        {/* Benefits Grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 - External Expertise and Growth */}
          <div className="bg-[#FFEFF3] rounded-3xl p-8">
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              {/* Chart Icon */}
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">External Expertise and Growth</h3>
            <p className="text-gray-700">
              At CardioVes, we believe in the amalgamation of internal expertise and external insights. To that end, we are in the process of aligning with consultants who can offer a wealth of knowledge in business strategies, intellectual property rights, and other pivotal sectors. As our operations burgeon, we are poised to onboard more talents, each bringing a unique value to our mission.
            </p>
          </div>
          
          {/* Benefit 2 - Crafted with Precision */}
          <div className="bg-[#FFEFF3] rounded-3xl p-8">
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              {/* Target Icon */}
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM8.25 10.5a3.75 3.75 0 117.5 0c0 .756-.224 1.459-.609 2.047A8.25 8.25 0 0012 21a8.25 8.25 0 00-2.891-8.447c-.38-.593-.85-1.086-1.398-1.45a3.766 3.766 0 01-.54-.413A3.75 3.75 0 018.25 10.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Crafted with Precision</h3>
            <p className="text-gray-700">
              Our CardioVes Smart Socks, comfortably wearable and meticulously designed, integrate proprietary sensors ensuring round-the-clock blood pressure monitoring.
            </p>
          </div>
          
          {/* Benefit 3 - Synergy for Better Care */}
          <div className="bg-[#FFEFF3] rounded-3xl p-8">
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              {/* Heart Icon */}
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Synergy for Better Care</h3>
            <p className="text-gray-700">
              The CardioVes App, a perfect cohort to our Smart Socks, delves deeper than just data representation. It's a tool of empowerment, offering timely insights, crucial alerts, and a direct channel to cardiovascular specialists.
            </p>
          </div>
          
          {/* Benefit 4 - Stride into the Future with Us */}
          <div className="bg-[#FFEFF3] rounded-3xl p-8">
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              {/* Rocket Icon */}
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stride into the Future with Us</h3>
            <p className="text-gray-700">
              As we forge ahead, our commitment remains anchored in simplicity, accessibility, and top-tier cardiac care for all. Embrace a heart-healthy tomorrow with CardioVes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}