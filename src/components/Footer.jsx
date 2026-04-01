import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid md:grid-cols-5 gap-4">

          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">
              DigiTools
            </h2>
            <p className="text-sm text-gray-400">
              Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Social Links</h3>

            <div className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-600 cursor-pointer text-black">
                <FaSquareInstagram/>

              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-600 cursor-pointer text-black">
                <FaFacebookSquare />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-600 cursor-pointer text-black">
                <FaXTwitter />

              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-400">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;