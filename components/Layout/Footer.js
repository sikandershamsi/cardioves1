import Link from "next/link"
import { BsTelephone } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FFEFF3] pt-16 pb-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Info */}
            <div>
              <img
                src="/assets/logo.png"
                className="h-14 w-auto mb-4"
                alt="Logo"
              />
              <p className="text-sm mb-2 text-gray-700">
                Track and improve your health
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Use Cardioves to track your activities and help your blood circulation
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
                <BsTelephone className="text-[#D4274B]" />
                <span>+44 1224 051727</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <img src="/mail-01.png" alt="Email" className="h-5 w-5" />
                <span>hello@Cardioves.com</span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <Link href="/Services">
                  <li className="hover:text-[#D4274B] cursor-pointer">Services</li>
                </Link>
                <Link href="/About">
                  <li className="hover:text-[#D4274B] cursor-pointer">About</li>
                </Link>
                <li className="hover:text-[#D4274B] cursor-pointer">Team</li>
                <li className="hover:text-[#D4274B] cursor-pointer">Blog</li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-[#D4274B] cursor-pointer">Help</li>
                <Link href="/Contact">
                  <li className="hover:text-[#D4274B] cursor-pointer">Contact Us</li>
                </Link>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Download App</h4>
              <div className="space-y-3">
                <img
                  src="/App Store.png"
                  alt="App Store"
                  className="h-11 w-auto cursor-pointer"
                />
                <img
                  src="/Google Play.png"
                  alt="Google Play"
                  className="h-11 w-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Bar */}
      <div className="bg-[#D4274B] py-3 text-center">
        <p className="text-[#ffffff] text-sm">
          &copy {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
