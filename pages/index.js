import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import FaqAccordion from "../components/misc/FaqAccordion";
import PatientAppFeature from "../components/PatientAppFeature";
import PatientAppFeature2 from "../components/PatientAppFeature2";
import PatientAppFeature3 from "../components/PatientAppFeature3";

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
