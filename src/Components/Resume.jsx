import React from "react";

function Resume() {
  const resumeItems = [
    {
      year: "2023 - Present",
      title: "Software Engineer",
      institute: "The Islamia University of Bahawalpur",
      description:
        "Currently pursuing Software Engineering at The Islamia University of Bahawalpur, developing strong foundations in programming, software development and modern technologies.",
      animation: "fade-right",
    },
    {
      year: "2025 - Present",
      title: "Front End Developer",
      institute: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites using HTML, CSS, Bootstrap, JavaScript and React with a focus on clean and professional interfaces.",
      animation: "fade-left",
    },
    {
      year: "2024 - 2025",
      title: "Web Designer",
      institute: "Creative Web Design",
      description:
        "Designing attractive and responsive web interfaces with a strong focus on layout, typography, usability and creating engaging digital experiences.",
      animation: "fade-right",
    },
    {
      year: "2022 - 2023",
      title: "Canva Designer",
      institute: "Graphic & Visual Design",
      description:
        "Creating professional social media graphics, presentations, banners, promotional designs and other visual content using Canva.",
      animation: "fade-left",
    },
    {
      year: "2025 - Present",
      title: "Upwork Bidder",
      institute: "Freelancing",
      description:
        "Working on professional project research, proposal writing and client communication while identifying suitable opportunities for web development and design projects.",
      animation: "fade-right",
    },
    {
      year: "2024 - 2025",
      title: "UI/UX Designer",
      institute: "User Interface & Experience",
      description:
        "Creating clean and intuitive user interfaces with attention to usability, visual hierarchy, responsive layouts and overall user experience.",
      animation: "fade-left",
    },
  ];

  return (
    <section
      id="resume"
      className="w-full min-h-screen bg-black text-white overflow-hidden py-16"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100" 
          className="text-center relative mb-14"
        >
          <h2 className="relative z-10 text-white text-[45px] sm:text-[52px] md:text-[58px] font-bold">
            Resume
          </h2>

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[25px]
              text-[75px]
              sm:text-[95px]
              md:text-[110px]
              font-bold
              text-[#151515]
              leading-none
              select-none
            "
          >
            Resume
          </span>

          <p className="relative z-10 max-w-[650px] mx-auto mt-5 text-gray-400 text-[13px] sm:text-[14px] leading-6">
            A passionate Software Engineer and Front End Developer focused on
            creating modern, responsive and professional digital experiences.
            I continuously develop my skills in web development, design and
            freelancing.
          </p>
        </div>

        {/* Resume Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {resumeItems.map((item, index) => (
            <div
              key={index}
              data-aos={item.animation}
              data-aos-delay={200 + (index % 2) * 150}
              className="
                group
                bg-[#1b1b1b]
                border
                border-white/10
                rounded-2xl
                p-8
                min-h-[230px]
                flex
                flex-col
                justify-start
                transition-all
                duration-500
                hover:border-[#ffbd39]
                hover:-translate-y-2
                hover:bg-[#202020]
                hover:shadow-[0_15px_30px_rgba(255,189,57,0.15)]
              "
            >

              {/* Year */}
              <h3
                className="
                  text-[#ffbd39]
                  text-[17px]
                  font-bold
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {item.year}
              </h3>

              {/* Title */}
              <h4 className="mt-3 text-white text-[20px] font-semibold">
                {item.title}
              </h4>

              {/* Institute */}
              <p className="mt-2 text-[10px] uppercase tracking-[2px] text-gray-500 font-semibold">
                {item.institute}
              </p>

              {/* Description */}
              <p className="mt-5 text-gray-400 text-[14px] leading-6">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Download CV Button */}
        <div 
          data-aos="zoom-in-up" 
          data-aos-delay="500" 
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="
              inline-flex
              items-center
              justify-center
              h-[60px]
              px-9
              rounded-full
              bg-[#ffbd39]
              border-2
              border-[#ffbd39]
              text-black
              text-[13px]
              font-bold
              tracking-[2px]
              transition-all
              duration-300
              hover:bg-transparent
              hover:text-[#ffbd39]
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(255,189,57,0.25)]
            "
          >
            DOWNLOAD CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;