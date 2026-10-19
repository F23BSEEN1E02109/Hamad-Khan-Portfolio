import React from "react";
import profile from "../assets/profile.png";
import ParticleText from "./ParticleText";

const YELLOW = "#ffbd39";
const WHITE = "#ffffff";

// Particle text ki lines (component ke bahar rakhna zaroori hai)
const HERO_LINES = [
  {
    size: 20,
    weight: 600,
    lh: 2.2,
    spacing: "3px",
    segments: [{ text: "HELLO!", color: YELLOW }],
  },
  {
    size: 76,
    weight: 700,
    lh: 1.1,
    segments: [
      { text: "I'm ", color: WHITE },
      { text: "Hammad", color: YELLOW },
    ],
  },
  {
    size: 76,
    weight: 700,
    lh: 1.1,
    segments: [{ text: "Taufeeq", color: YELLOW }],
  },
  {
    size: 32,
    weight: 500,
    lh: 2,
    segments: [{ text: "Front End Developer", color: WHITE }],
  },
];

function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-75px)] bg-black text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-75px)] px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="w-full lg:w-[52%] pt-16 lg:pt-0 text-center lg:text-left z-10">

          {/* Hello + Name + Profession (Particle Text) */}
          <div
            data-aos="fade-right"
            data-aos-duration="2800"
            data-aos-delay="300"
            className="w-full h-[300px] sm:h-[330px] lg:h-[350px]"
          >
            <h1 className="sr-only">
              Hello! I'm Hammad Taufeeq - Front End Developer
            </h1>
            <ParticleText lines={HERO_LINES} />
          </div>

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
          className="w-full lg:w-[48%] h-[500px] sm:h-[600px] lg:h-[calc(100vh-75px)] flex items-end justify-center lg:justify-end mt-10 lg:mt-0 relative"
        >
          <img
            src={profile}
            alt="Hammad Taufeeq"
            className="
              h-[430px]
              sm:h-[520px]
              md:h-[600px]
              lg:h-[700px]
              xl:h-[760px]
              w-auto
              max-w-full
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