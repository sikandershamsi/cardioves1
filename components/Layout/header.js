import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
// import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  // const pathname = usePathname();
  const router = useRouter();
  const pathname = router.pathname;

  console.log("🚀 ~ Header ~ activeLink:", pathname)
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
          className={`fixed top-0 w-full z-30 transition-all duration-300 ${
            scrollActive
              ? "bg-white-500 shadow-md pt-0"
              : "bg-transparent pt-4"
          }`}
      >
        <nav className="max-w-screen-2xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}
            <img src={"/assets/logo.png"} className="h-16 w-auto max-w-full" alt="Logo"  />
          </div>
          <ul className="hidden lg:flex col-start-4 justify-center col-end-8 text-black-500  items-center">
            <Link href="/">
              <LinkScroll
                activeClass="active"
                duration={1000}
                onSetActive={() => {
                  setActiveLink("home");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  ( pathname === "/"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }
              >
                Home
              </LinkScroll>
            </Link>
            
            <Link href="/about">
              <LinkScroll
                activeClass="active"
                href="/about"
                duration={1000}
                onSetActive={() => {
                  setActiveLink("/about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (pathname === "/about"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                About Us
              </LinkScroll>
            </Link>

            <Link href="/services">
              <LinkScroll
                activeClass="services"
                duration={1000}
                onSetActive={() => {
                  setActiveLink("services");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (pathname === "/services"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Services
              </LinkScroll>
            </Link>
            {/* <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Blogs
            </LinkScroll> */}
            <Link href="/contact">
            <LinkScroll
              activeClass="active"
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (pathname === "/contact"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Contact Us
            </LinkScroll>
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-[#ffff] p-3 rounded-lg bg-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
               Get Started
              </a>
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bg-white-500 bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link href="/">
            <LinkScroll
              activeClass="home"
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (pathname === "/"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l9-9 9 9M4.5 10.5v9a1.5 1.5 0 001.5 1.5h3v-6h6v6h3a1.5 1.5 0 001.5-1.5v-9"
              />
            </svg>
              Home
            </LinkScroll>
            </Link>
            <Link href="/about">
            <LinkScroll
              activeClass="active"
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (pathname === "/about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              About
            </LinkScroll>
            </Link>

            <Link href="/services">
            <LinkScroll
              activeClass="active"
              onSetActive={() => {
                setActiveLink("Services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (pathname === "/services"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.983 13.017a1.034 1.034 0 100-2.068 1.034 1.034 0 000 2.068zM4.22 10.77a8.016 8.016 0 000 2.459l1.736.434a6.026 6.026 0 00.663 1.6l-1.041 1.579a8.027 8.027 0 001.74 1.74l1.579-1.041a6.025 6.025 0 001.6.663l.434 1.736a8.016 8.016 0 002.459 0l.434-1.736a6.025 6.025 0 001.6-.663l1.579 1.041a8.027 8.027 0 001.74-1.74l-1.041-1.579a6.026 6.026 0 00.663-1.6l1.736-.434a8.016 8.016 0 000-2.459l-1.736-.434a6.025 6.025 0 00-.663-1.6l1.041-1.579a8.027 8.027 0 00-1.74-1.74l-1.579 1.041a6.025 6.025 0 00-1.6-.663l-.434-1.736a8.016 8.016 0 00-2.459 0l-.434 1.736a6.025 6.025 0 00-1.6.663L6.56 6.44a8.027 8.027 0 00-1.74 1.74l1.041 1.579a6.026 6.026 0 00-.663 1.6l-1.736.434z"
              />
            </svg> 
              Services
            </LinkScroll>
            </Link>
            <Link href="/contact">
            <LinkScroll
              activeClass="active"
              onSetActive={() => {
                setActiveLink("Contact");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (pathname === "/contact"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
              Contact
            </LinkScroll>
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
