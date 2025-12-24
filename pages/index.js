
import Hero from "../components/hero";
import Layout from "../components/layout/layout";
import SeoHead from "../components/seoHead";
import FaqAccordion from "../components/misc/faqAccordion";
import PatientAppFeature from "../components/patientAppFeature";
import PatientAppFeature2 from "../components/patientAppFeature2";
import PatientAppFeature3 from "../components/patientAppFeature3";
import Feature from "../components/feature";
import VideoCarousel from "../components/VideoCarousel";
import ScrollAnimationWrapper from "../components/layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getTopScrollAnimation from "../utils/getTopScrollAnimation";
import { useMemo } from "react";


export default function Home() {
    const topScrollAnimation = useMemo(() => getTopScrollAnimation(), []);
  
  return (
    <>
      <SeoHead title='Cardioves - Smart wearable socks that helps your blood circulation' />
      <Layout>
        <Hero />
        <FaqAccordion />
        <Feature />
        <PatientAppFeature/>
        <PatientAppFeature2/>
        <PatientAppFeature3/>
        <div className="py-12">
          <ScrollAnimationWrapper>
            <div className="text-center">
            <motion.h2
              variants={topScrollAnimation}
              className="text-4xl font-bold mb-4"
            >
              News and Blogs
            </motion.h2>
            </div>
          </ScrollAnimationWrapper>
          <VideoCarousel />
        </div>
      </Layout>
    </>
  );
}
