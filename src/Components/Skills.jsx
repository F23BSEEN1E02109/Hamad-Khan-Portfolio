import React, { useEffect, useRef, useState } from "react";

function Skills() {
  const skills = [
    { name: "HTML", percentage: 98 },
    { name: "CSS", percentage: 95 },
    { name: "React JS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Upwork Bidding", percentage: 80 },
    { name: "Canva", percentage: 75 },
  ];

  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setProgress(skills.map(() => 0));

          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }

          const duration = 2500;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

            setProgress(
              skills.map((skill) =>
                Math.round(skill.percentage * easedProgress)
              )
            );

            if (rawProgress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        } else {
          setProgress(skills.map(() => 0));

          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        w-full
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        flex
        items-center
      "
    >
      <div className="max-w-[1050px] w-full mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">

        {/* Heading */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100" 
          className="text-center relative mb-16"
        >
          <h2 className="relative z-10 text-white text-[44px] sm:text-[52px] md:text-[58px] font-bold">
            My Skills
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
            Skills
          </span>

          {/* Description */}
          <p className="relative z-10 max-w-[750px] mx-auto mt-6 text-gray-400 text-[14px] sm:text-[15px] leading-6">
            I continuously improve my technical and creative
            skills to build modern, responsive and professional
            digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="
                group
                p-6
                bg-[#1b1b1b]
                rounded-2xl
                border
                border-white/10
                transition-all
                duration-300
                hover:border-[#ffbd39]
                hover:bg-[#202020]
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(255,189,57,0.12)]
              "
            >

              {/* Name + Percentage */}
              <div className="flex items-center justify-between mb-3">
                <h3
                  className="
                    text-white
                    text-[17px]
                    sm:text-[18px]
                    font-semibold
                    transition-colors
                    duration-300
                    group-hover:text-[#ffbd39]
                  "
                >
                  {skill.name}
                </h3>

                <span
                  className="
                    text-[#ffbd39]
                    text-[17px]
                    sm:text-[18px]
                    font-semibold
                    min-w-[48px]
                    text-right
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {progress[index]}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div
                className="
                  relative
                  w-full
                  h-[10px]
                  bg-[#111111]
                  rounded-full
                  overflow-hidden
                  p-[1px]
                  border
                  border-white/5
                "
              >
                {/* Yellow Inner Bar */}
                <div
                  className="
                    h-full
                    bg-[#ffbd39]
                    rounded-full
                    transition-all
                    duration-300
                    shadow-[0_0_12px_rgba(255,189,57,0.4)]
                  "
                  style={{
                    width: `${progress[index]}%`,
                  }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;