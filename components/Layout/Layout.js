import React, { useMemo }  from "react";
import Footer from "./Footer";
import Header from "./Header";
import getLeftScrollAnimation from "../../utils/getLeftScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
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
