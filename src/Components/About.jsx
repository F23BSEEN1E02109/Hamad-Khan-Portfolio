import React from "react";
import profile3 from "../assets/profile3.jpeg";
import myCV from "../assets/MyCV.pdf"; // CV import ki hai

function About() {
  const details = [
    { label: "Name:", value: "Hammad Taufeeq" },
    { label: "Date of birth:", value: "February 10, 2005" },
    { label: "Address:", value: "Bahawalpur, Punjab, Pakistan" },
    { label: "Zip code:", value: "63100" },
    { label: "Email:", value: "hamadtaufeeq@gmail.com", isEmail: true },
    { label: "Phone:", value: "+92 347 6099529" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto min-h-screen px-6 sm:px-10 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

        {/* Profile Image - Slow Entrance Animation */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="w-full lg:w-[42%] flex justify-center items-end"
        >
          <img
            src={profile3}
            alt="Hammad Taufeeq"
            className="
              w-auto
              h-[430px]
              sm:h-[520px]
              md:h-[600px]
              lg:h-[650px]
              xl:h-[700px]
              object-contain
              object-bottom
              rounded-2xl
              border
              border-white/10
              shadow-[0_10px_30px_rgba(0,0,0,0.5)]
              transition-all
              duration-[1000ms]
              ease-in-out
              hover:border-[#ffbd39]/50
              hover:scale-[1.01]
              hover:shadow-[0_15px_40px_rgba(255,189,57,0.15)]
            "
          />
        </div>

        {/* About Content - Slow Entrance Animation */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
          className="w-full lg:w-[58%]"
        >

          {/* Heading */}
          <div className="relative mb-10">
            <h2 className="relative z-10 text-white text-[46px] sm:text-[55px] md:text-[60px] lg:text-[62px] font-bold leading-none">
              About Me
            </h2>

            {/* Background Text */}
            <span
              className="
                absolute
                left-[-20px]
                top-[20px]
                text-[70px]
                sm:text-[85px]
                md:text-[100px]
                lg:text-[105px]
                font-bold
                text-[#151515]
                leading-none
                select-none
              "
            >
              About
            </span>
          </div>

          {/* Description */}
          <p className="relative z-10 text-gray-400 text-[16px] sm:text-[17px] md:text-[18px] leading-8 max-w-[720px] mb-10">
            A dedicated Front End Developer with a passion for building
            modern, responsive and user-focused digital experiences. I combine
            creativity with clean code to deliver professional and engaging
            websites.
          </p>

          {/* Personal Details */}
          <div className="space-y-5 text-[16px] sm:text-[17px]">
            {details.map((item, index) => (
              <div
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={350 + index * 80}
                data-aos-duration="1500"
                className="flex flex-col sm:flex-row"
              >
                <span className="w-[155px] font-bold text-white">
                  {item.label}
                </span>

                <span
                  className={`text-gray-400 ${
                    item.isEmail ? "break-all" : ""
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="850"
            data-aos-duration="1500"
            className="mt-10"
          >
            <a
              href={myCV}
              download="Hammad_Taufeeq_CV.pdf"
              className="
                inline-flex
                items-center
                justify-center
                h-[62px]
                px-8
                rounded-full
                bg-[#ffbd39]
                border-2
                border-[#ffbd39]
                text-black
                text-[14px]
                font-bold
                tracking-[2px]
                transition-all
                duration-[1000ms]
                ease-in-out
                hover:bg-transparent
                hover:text-[#ffbd39]
                hover:-translate-y-2
                hover:shadow-[0_10px_30px_rgba(255,189,57,0.25)]
              "
            >
              DOWNLOAD CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;