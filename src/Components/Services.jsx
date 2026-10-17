import React from "react";
import {
  FaLaptopCode,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaPalette,
  FaBriefcase,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "WEB DESIGN",
      description:
        "Creating clean, modern and professional website designs with attractive layouts and user-friendly interfaces.",
    },
    {
      icon: <FaCode />,
      title: "FRONT END DEVELOPMENT",
      description:
        "Building responsive and interactive websites using HTML, CSS, Bootstrap, JavaScript and React.",
    },
    {
      icon: <FaMobileAlt />,
      title: "RESPONSIVE DEVELOPMENT",
      description:
        "Developing websites that work smoothly across desktops, tablets and mobile devices with responsive layouts.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX DESIGN",
      description:
        "Designing simple, intuitive and visually engaging interfaces with a strong focus on user experience.",
    },
    {
      icon: <FaPalette />,
      title: "CANVA DESIGN",
      description:
        "Creating professional graphics, social media designs, presentations and visual content using Canva.",
    },
    {
      icon: <FaBriefcase />,
      title: "UPWORK BIDDING",
      description:
        "Finding suitable projects, preparing professional proposals and communicating with clients for web development and design work.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100" 
          className="text-center relative mb-14 sm:mb-16"
        >

          <h2 className="relative z-10 text-white text-[44px] sm:text-[52px] md:text-[58px] font-bold">
            Services
          </h2>

          {/* Background Text */}
          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[25px]
              text-[70px]
              sm:text-[90px]
              md:text-[105px]
              font-bold
              text-[#151515]
              leading-none
              select-none
              whitespace-nowrap
            "
          >
            Services
          </span>

          {/* Description */}
          <p className="relative z-10 max-w-[750px] mx-auto mt-5 text-gray-400 text-[14px] sm:text-[15px] leading-6">
            I provide professional web development and design services focused
            on creating modern, responsive and user-friendly digital
            experiences.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="
                group
                min-h-[250px]
                bg-[#1b1b1b]
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-7
                py-10
                border
                border-white/10
                rounded-2xl
                cursor-pointer
                transition-all
                duration-500
                hover:bg-[#ffbd39]
                hover:border-[#ffbd39]
                hover:-translate-y-2
                hover:shadow-[0_15px_35px_rgba(255,189,57,0.2)]
              "
            >

              {/* Icon */}
              <div
                className="
                  text-[#ffbd39]
                  text-[52px]
                  mb-6
                  transition-all
                  duration-500
                  group-hover:text-black
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-white
                  text-[14px]
                  sm:text-[15px]
                  font-bold
                  tracking-[3px]
                  transition-colors
                  duration-500
                  group-hover:text-black
                "
              >
                {service.title}
              </h3>

              {/* Small Line */}
              <span
                className="
                  mt-4
                  w-[30px]
                  h-[2px]
                  bg-[#ffbd39]
                  transition-all
                  duration-500
                  group-hover:bg-black
                  group-hover:w-[45px]
                "
              ></span>

              {/* Description - Hover reveal */}
              <p
                className="
                  mt-4
                  max-h-0
                  overflow-hidden
                  opacity-0
                  text-black
                  font-medium
                  text-[13px]
                  leading-5
                  transition-all
                  duration-500
                  group-hover:max-h-[100px]
                  group-hover:opacity-100
                "
              >
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;