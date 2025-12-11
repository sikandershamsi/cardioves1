import Layout from "../components/Layout/Layout";
import ContactPage from "../components/Contact-Top";
import ContactSection from "../components/Contact-Section";
import SeoHead from "../components/SeoHead";


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
