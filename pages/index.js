
import Hero from "../components/hero";
import Layout from "../components/layout/layout";
import SeoHead from "../components/seoHead";
import FaqAccordion from "../components/misc/faqAccordion";
import PatientAppFeature from "../components/patientAppFeature";
import PatientAppFeature2 from "../components/patientAppFeature2";
import PatientAppFeature3 from "../components/patientAppFeature3";
import Feature from "../components/feature";

export default function Home() {
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
      </Layout>
    </>
  );
}
