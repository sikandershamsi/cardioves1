import AnimationServices from "../components/Animation-Section-Services";
import InnovativeServices from "../components/Innovative-Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ProductSection from "../components/Services-Products";
import ServicesTop from "../components/Services-Top";



const Services = () => {

  return (
    <>
      <SeoHead title='Cardioves - Smart wearable socks that helps your blood circulation' />
        <Layout>
            <ServicesTop />
            <InnovativeServices />
            <AnimationServices />
            <ProductSection />
        </Layout>
    </>
  )
}

export default Services;