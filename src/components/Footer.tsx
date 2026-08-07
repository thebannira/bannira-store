// "use client";

// import React from "react";
// import SignInStrip from "./SignInStrip";
// import Link from "next/link";
// import { WhatsappLogo } from "phosphor-react";

// const Footer: React.FC = () => {
//   return (
//     <>
//     <SignInStrip/>
//     <footer className="bg-[#1a1a1a] text-gray-300 py-16 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
//         <div>
//           <img
//             src="/bannira_web_logo.png"
//             alt="Bannira Logo"
//             className="mb-6 w-40 object-contain"
//             loading="lazy"
//           />
//           <p className="text-gray-400 max-w-xs leading-relaxed">
//             Bannira is a homegrown fashion brand founded by a Marwari husband-and-wife team who turned their passion for Indian craftsmanship into a purpose.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
//           <ul className="space-y-3">
//             <li>
//               <a href="/products" className="hover:text-[#D4AF37] transition">
//                 Products
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-[#D4AF37] transition">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-[#D4AF37] transition">
//                 Contact
//               </a>
//             </li>
//             {/* <li>
//               <a href="" className="hover:text-[#D4AF37] transition">
//                 FAQ
//               </a>
//             </li> */}
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold text-lg mb-6">
//             Customer Service
//           </h3>
//           <ul className="space-y-3">
//             <li>
//               <a href="/shipping-policy" className="hover:text-[#D4AF37] transition">
//                 Shipping Policy
//               </a>
//             </li>
//             <li>
//               <a href="/exchange-policy" className="hover:text-[#D4AF37] transition">
//                 Exchange Policy
//               </a>
//             </li>
//             <li>
//               <a href="/privacy-policy" className="hover:text-[#D4AF37] transition">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="/terms-of-service" className="hover:text-[#D4AF37] transition">
//                 Terms of Service
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold text-lg mb-6">Follow Us</h3>
//           <div className="flex space-x-6 text-gray-400 items-center">
//             <a
//               href="https://www.facebook.com/profile.php?id=61583170716636"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Facebook"
//               className="hover:text-[#D4AF37] transition"
//             >
//               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.098 2.796.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.588l-.467 3.622h-3.12V24h6.116c.726 0 1.325-.6 1.325-1.337V1.337C24 .6 23.4 0 22.675 0z" />
//               </svg>
//             </a>
//             <a
//               href="https://www.instagram.com/thebannira?igsh=MW5hZzBwbXNuZnl3eQ=="
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Instagram"
//               className="hover:text-[#D4AF37] transition"
//             >
//               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//                 <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.02 3.77a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm-4.02 1.96a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
//               </svg>
//             </a>
//             <Link href="https://wa.me/7976354818" className=""><WhatsappLogo size={25} /></Link>
           
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm select-none">
//         &copy; {new Date().getFullYear()} Bannira. All rights reserved.
//       </div>
//     </footer>
//     </>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import SignInStrip from "./SignInStrip";
import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo } from "phosphor-react";

const Footer: React.FC = () => {
  return (
    <>
      <SignInStrip />
      <footer className="bg-[#FAF6EE] text-[#2C2C2C] border-t border-[#7b2d0a]/15 py-16 px-6 md:px-16 selection:bg-[#7b2d0a] selection:text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="relative w-40 h-16 mb-4">
              <Image
                src="/bannira_logo.png"
                alt="Bannira Logo"
                fill
                className="object-cover object-left rounded-lg"
              />
            </div>
            <p className="text-[#3A3A3A] max-w-xs leading-relaxed text-xs md:text-sm font-normal">
              Bannira is a homegrown fashion brand founded by a Marwari husband-and-wife team who turned their passion for Indian craftsmanship into a purpose.
            </p>
          </div>

          <div>
            <h3 className="text-[#7b2d0a] font-serif font-bold text-lg mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link href="/products" className="hover:text-[#7b2d0a] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#7b2d0a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7b2d0a] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#7b2d0a] font-serif font-bold text-lg mb-6 tracking-wide">
              Customer Service
            </h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link href="/shipping-policy" className="hover:text-[#7b2d0a] transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/exchange-policy" className="hover:text-[#7b2d0a] transition-colors">
                  Exchange Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#7b2d0a] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-[#7b2d0a] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#7b2d0a] font-serif font-bold text-lg mb-6 tracking-wide">
              Follow Us
            </h3>
            <div className="flex space-x-6 text-[#7b2d0a] items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61583170716636"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#B8860B] transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.098 2.796.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.588l-.467 3.622h-3.12V24h6.116c.726 0 1.325-.6 1.325-1.337V1.337C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thebannira?igsh=MW5hZzBwbXNuZnl3eQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#B8860B] transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.02 3.77a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm-4.02 1.96a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>
              <Link
                href="https://wa.me/7976354818"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B8860B] transition-colors"
              >
                <WhatsappLogo size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7b2d0a]/15 mt-16 pt-8 text-center text-[#3A3A3A] text-xs font-medium select-none">
          &copy; {new Date().getFullYear()} Bannira. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;