import React, { useMemo }  from "react";
import Footer from "./footer";
import Header from "./header";
import getLeftScrollAnimation from "../../utils/getLeftScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import {motion} from "framer-motion";


const Layout = ({ children }) => {

    const leftScrollAnimation = useMemo(() => getLeftScrollAnimation(), []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
