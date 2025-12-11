import Layout from "../components/layout/layout";
import AboutTop from "../components/about-top";
import JourneySection from "../components/about-journey";
import TeamSection from "../components/about-team";
import ServiceBenefitsSection from "../components/about-services";
import AppPromoSection from "../components/aboutPromoSection";
import SeoHead from "../components/seoHead";




const About = () => {

  
  return (
    <>
    <SeoHead title='Cardioves - Smart wearable socks that helps your blood circulation' />
    <Layout>
        <AboutTop />
        <JourneySection/>
        <TeamSection />
        <ServiceBenefitsSection/>
        <AppPromoSection/>
    </Layout>
    </>
  );
};

export default About;
