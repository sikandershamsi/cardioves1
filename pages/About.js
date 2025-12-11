import Layout from "../components/Layout/Layout";
import AboutTop from "../components/About-Top";
import JourneySection from "../components/About-Journey";
import TeamSection from "../components/About-Team";
import ServiceBenefitsSection from "../components/About-Services";
import AppPromoSection from "../components/AboutPromoSection";
import SeoHead from "../components/SeoHead";


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
