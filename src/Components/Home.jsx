import React from "react";
import profile from "../assets/profile.png";

function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-75px)] bg-black text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-75px)] px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="w-full lg:w-[52%] pt-16 lg:pt-0 text-center lg:text-left z-10">

          {/* Hello */}
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            data-aos-delay="100"
            className="text-[#ffbd39] text-[16px] sm:text-[18px] font-semibold tracking-[3px] mb-6 mt-5"
          >
            HELLO!
          </p>

          {/* Heading */}
          <h1
            data-aos="fade-right"
            data-aos-duration="2800"
            data-aos-delay="300"
            className="text-white text-[48px] sm:text-[60px] md:text-[68px] lg:text-[70px] xl:text-[76px] leading-[1.05] font-bold"
          >
            I'm{" "}
            <span className="text-[#ffbd39]">
              Hammad
            </span>
            <br />
            <span className="text-[#ffbd39]">
              Taufeeq
            </span>
          </h1>

          {/* Profession */}
          <p
            data-aos="fade-right"
            data-aos-duration="2800"
            data-aos-delay="500"
            className="mt-8 text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-medium"
          >
            Front End Developer
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">

            {/* Hire Me */}
            <a
              href="#contact"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="700"
              className="
                group
                w-[145px]
                h-[62px]
                flex
                items-center
                justify-center
                rounded-full
                bg-[#ffbd39]
                text-black
                text-[14px]
                font-bold
                tracking-[2px]
                border-2
                border-[#ffbd39]
                hover:bg-transparent
                hover:text-[#ffbd39]
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(255,189,57,0.25)]
                transition-all
                duration-300
              "
            >
              HIRE ME
            </a>

            {/* My Works */}
            <a
              href="#resume"
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="850"
              className="
                w-[160px]
                h-[62px]
                flex
                items-center
                justify-center
                rounded-full
                bg-transparent
                text-white
                text-[14px]
                font-bold
                tracking-[2px]
                border-2
                border-gray-500
                hover:bg-[#ffbd39]
                hover:border-[#ffbd39]
                hover:text-black
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(255,189,57,0.25)]
                transition-all
                duration-300
              "
            >
              MY WORKS
            </a>

          </div>
        </div>

        {/* Right Profile Image */}
<div
  data-aos="fade-left"
  data-aos-duration="3000"
  data-aos-delay="400"
  className="w-full lg:w-[48%] flex items-end justify-center lg:justify-end mt-10 lg:mt-0 relative lg:h-[calc(100vh-75px)]"
>
  <img
    src={profile}
    alt="Hammad Taufeeq"
    className="
      w-full
      max-w-[380px]
      sm:max-w-[460px]
      md:max-w-[520px]
      h-auto
      lg:max-w-none
      lg:w-auto
      lg:h-auto
      lg:max-h-full
      object-contain
      object-bottom
      rounded-2xl
      border
      border-white/10
      shadow-[0_10px_30px_rgba(0,0,0,0.5)]
      transition-all
      duration-1000
      ease-in-out
      hover:border-[#ffbd39]/50
      hover:scale-[1.01]
      hover:shadow-[0_15px_40px_rgba(255,189,57,0.15)]
    "
  />
</div>

      </div>
    </section>
  );
}

export default Home;