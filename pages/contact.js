import Layout from "../components/layout/layout";
import ContactPage from "../components/contact-top";
import ContactSection from "../components/contact-Section";
import SeoHead from "../components/seoHead";


const Contact = () => {

  return (
    
    <>
    <SeoHead title='Cardioves - Smart wearable socks that helps your blood circulation' />
    <Layout>
        <ContactPage />
        <ContactSection/>
    </Layout>
    </>
  );
};

export default Contact;
