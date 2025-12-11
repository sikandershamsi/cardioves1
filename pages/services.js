import AnimationServices from "../components/animation-Section-Services";
import InnovativeServices from "../components/innovative-services";
import Layout from "../components/layout/layout";
import SeoHead from "../components/seoHead";
import ProductSection from "../components/services-products";
import ServicesTop from "../components/services-top";



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