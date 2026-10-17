import React from "react"; 
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaHeart, 
} from "react-icons/fa"; 
 
function Footer() { 
  const quickLinks = ["Home", "About", "Services", "Skills", "Contact"]; 
 
  const servicesLinks = [ 
    "Web Design", 
    "Front End Development", 
    "Responsive Development", 
    "UI/UX Design", 
    "Canva Design", 
  ]; 
 
  return ( 
    <footer className="w-full bg-black text-white pt-20 pb-12 border-t border-gray-900/80 overflow-hidden"> 
      <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10"> 
         
        {/* Main Footer Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16"> 
           
          {/* Column 1: About */} 
          <div  
            className="space-y-6" 
            style={{ animation: "slideFromLeft 0.8s ease-out forwards" }} 
          > 
            <h3 className="text-white text-[20px] font-bold tracking-wide"> 
              About 
            </h3> 
            <p className="text-gray-400 text-[14px] leading-7"> 
              A dedicated Front End Developer and Software Engineering student  
              focused on building high-performance, modern, and visually engaging web applications  
              with seamless user experiences. 
            </p> 
             
            {/* Social Icons */} 
            <div className="flex items-center gap-3 pt-2"> 
              
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/923476099529" 
                target="_blank"
                rel="noopener noreferrer"
                className=" 
                  w-[45px] 
                  h-[45px] 
                  rounded-full 
                  bg-[#1a1a1a] 
                  text-white 
                  flex 
                  items-center 
                  justify-center 
                  text-[18px] 
                  transition-all 
                  duration-300 
                  hover:bg-[#ffbd39] 
                  hover:text-black 
                  hover:-translate-y-1 
                  hover:shadow-[0_5px_15px_rgba(255,189,57,0.25)] 
                " 
              > 
                <FaWhatsapp /> 
              </a> 

              {/* Facebook Link */}
              <a 
                href="https://www.facebook.com/share/19RTxK9WqZ/" 
                target="_blank"
                rel="noopener noreferrer"
                className=" 
                  w-[45px] 
                  h-[45px] 
                  rounded-full 
                  bg-[#1a1a1a] 
                  text-white 
                  flex 
                  items-center 
                  justify-center 
                  text-[15px] 
                  transition-all 
                  duration-300 
                  hover:bg-[#ffbd39] 
                  hover:text-black 
                  hover:-translate-y-1 
                  hover:shadow-[0_5px_15px_rgba(255,189,57,0.25)] 
                " 
              > 
                <FaFacebookF /> 
              </a> 

              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/hamadkhan_529?utm_source=qr&igsi=MWE5dXJjcWVsNGo3dA==" 
                target="_blank"
                rel="noopener noreferrer"
                className=" 
                  w-[45px] 
                  h-[45px] 
                  rounded-full 
                  bg-[#1a1a1a] 
                  text-white 
                  flex 
                  items-center 
                  justify-center 
                  text-[15px] 
                  transition-all 
                  duration-300 
                  hover:bg-[#ffbd39] 
                  hover:text-black 
                  hover:-translate-y-1 
                  hover:shadow-[0_5px_15px_rgba(255,189,57,0.25)] 
                " 
              > 
                <FaInstagram /> 
              </a> 
            </div> 
          </div> 
 
          {/* Column 2: Links */} 
          <div  
            className="space-y-6" 
            style={{ animation: "slideFromBottomLeft 0.8s ease-out forwards" }} 
          > 
            <h3 className="text-white text-[20px] font-bold tracking-wide"> 
              Links 
            </h3> 
            <ul className="space-y-3"> 
              {quickLinks.map((link) => ( 
                <li key={link}> 
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className=" 
                      group 
                      inline-flex 
                      items-center 
                      gap-3 
                      text-gray-400 
                      text-[15px] 
                      transition-colors 
                      duration-300 
                      hover:text-[#ffbd39] 
                    " 
                  > 
                    <FaArrowRight className="text-[12px] text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#ffbd39]" /> 
                    <span>{link}</span> 
                  </a> 
                </li> 
              ))} 
            </ul> 
          </div> 
 
          {/* Column 3: Services */} 
          <div  
            className="space-y-6" 
            style={{ animation: "slideFromBottomRight 0.8s ease-out forwards" }} 
          > 
            <h3 className="text-white text-[20px] font-bold tracking-wide"> 
              Services 
            </h3> 
            <ul className="space-y-3"> 
              {servicesLinks.map((service) => ( 
                <li key={service}> 
                  <a 
                    href="#services" 
                    className=" 
                      group 
                      inline-flex 
                      items-center 
                      gap-3 
                      text-gray-400 
                      text-[15px] 
                      transition-colors 
                      duration-300 
                      hover:text-[#ffbd39] 
                    " 
                  > 
                    <FaArrowRight className="text-[12px] text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#ffbd39]" /> 
                    <span>{service}</span> 
                  </a> 
                </li> 
              ))} 
            </ul> 
          </div> 
 
          {/* Column 4: Contact */} 
          <div  
            className="space-y-6" 
            style={{ animation: "slideFromRight 0.8s ease-out forwards" }} 
          > 
            <h3 className="text-white text-[20px] font-bold tracking-wide"> 
              Have a Questions? 
            </h3> 
            <ul className="space-y-4 text-[14px]"> 
               
              <li className="flex items-start gap-4 text-gray-400"> 
                <FaMapMarkerAlt className="text-[#ffbd39] text-[18px] shrink-0 mt-1" /> 
                <span>Bahawalpur, Punjab, Pakistan</span> 
              </li> 
 
              <li className="flex items-center gap-4 text-gray-400"> 
                <FaPhoneAlt className="text-[#ffbd39] text-[16px] shrink-0" /> 
                <a 
                  href="tel:+923476099529" 
                  className="transition-colors duration-300 hover:text-[#ffbd39]" 
                > 
                  +92 347 6099529 
                </a> 
              </li> 
 
              <li className="flex items-center gap-4 text-gray-400"> 
                <FaEnvelope className="text-[#ffbd39] text-[16px] shrink-0" /> 
                <a 
                  href="mailto:hamadtaufeeq@gmail.com" 
                  className="transition-colors duration-300 hover:text-[#ffbd39] break-all" 
                > 
                  hamadtaufeeq@gmail.com 
                </a> 
              </li> 
 
            </ul> 
          </div> 
 
        </div> 
 
        {/* Bottom Copyright Section */} 
        <div className="pt-10 border-t border-gray-900 text-center"> 
          <p className="text-gray-500 text-[14px] flex items-center justify-center gap-1 flex-wrap"> 
            Copyright ©{new Date().getFullYear()} All rights reserved | Made with{" "} 
            <FaHeart className="text-[#ffbd39] mx-1 animate-pulse inline" /> by{" "} 
             
            <span  
              className=" 
                font-semibold 
                tracking-wide 
                bg-gradient-to-r  
                from-[#ffbd39]  
                via-[#ffffff]  
                to-[#ffbd39]  
                bg-[length:200%_auto]  
                bg-clip-text  
                text-transparent  
                transition-all 
                duration-300 
                cursor-pointer 
                drop-shadow-[0_0_8px_rgba(255,189,57,0.3)] 
              " 
              style={{ 
                animation: "glitterEffect 3s linear infinite", 
              }} 
            > 
              Hammad Taufeeq 
            </span> 
          </p> 
        </div> 
 
      </div> 
 
      {/* Embedded CSS Animations */} 
      <style>{` 
        @keyframes slideFromLeft { 
          from { opacity: 0; transform: translateX(-50px); } 
          to { opacity: 1; transform: translateX(0); } 
        } 
        @keyframes slideFromRight { 
          from { opacity: 0; transform: translateX(50px); } 
          to { opacity: 1; transform: translateX(0); } 
        } 
        @keyframes slideFromBottomLeft { 
          from { opacity: 0; transform: translate(-30px, 30px); } 
          to { opacity: 1; transform: translate(0, 0); } 
        } 
        @keyframes slideFromBottomRight { 
          from { opacity: 0; transform: translate(30px, 30px); } 
          to { opacity: 1; transform: translate(0, 0); } 
        } 
        @keyframes glitterEffect { 
          0% { background-position: 0% center; } 
          50% { background-position: 100% center; } 
          100% { background-position: 0% center; } 
        } 
      `}</style> 
    </footer> 
  ); 
} 
 
export default Footer;