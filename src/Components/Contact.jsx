import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";
import profile from "../assets/profile.png";

function Contact() {
  const [status, setStatus] = useState("");

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "ADDRESS",
      info: "Bahawalpur, Punjab, Pakistan",
    },
    {
      icon: <FaPhoneAlt />,
      title: "CONTACT NUMBER",
      info: "+92 347 6099529",
    },
    {
      icon: <FaPaperPlane />,
      title: "EMAIL ADDRESS",
      info: "hamadtaufeeq@gmail.com",
    },
    {
      icon: <FaGlobe />,
      title: "WEBSITE",
      info: "MyPortfolio.com",
    },
  ];

  // Formspree Submit Handler (Background Request - No Redirect)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjybdebb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Formspree submit error:", error);
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100" 
          className="text-center relative mb-16 sm:mb-20"
        >
          <h2 className="relative z-10 text-white text-[44px] sm:text-[52px] md:text-[58px] font-bold">
            Contact Me
          </h2>

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
            Contact
          </span>

          <p className="relative z-10 max-w-[650px] mx-auto mt-5 text-gray-400 text-[14px] sm:text-[15px] leading-6">
            Below are the options to get in touch with me. Feel free to reach
            out for projects, collaborations, or inquiries!
          </p>
        </div>

        {/* Top 4 Info Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="
                group
                flex
                flex-col
                items-center
                text-center
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div
                className="
                  w-[75px]
                  h-[75px]
                  rounded-full
                  bg-[#111111]
                  text-[#ffbd39]
                  text-[22px]
                  flex
                  items-center
                  justify-center
                  mb-5
                  border
                  border-white/5
                  transition-all
                  duration-300
                  group-hover:bg-[#ffbd39]
                  group-hover:text-black
                  group-hover:scale-110
                  group-hover:shadow-[0_10px_25px_rgba(255,189,57,0.3)]
                "
              >
                {item.icon}
              </div>

              <h3 className="text-white text-[15px] font-bold tracking-[2px] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[14px] leading-6 break-all">
                {item.info}
              </p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="
            max-w-[1100px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            bg-[#1b1b1b]
            rounded-2xl
            overflow-hidden
            shadow-2xl
            border
            border-white/10
          "
        >

          {/* Left Column: Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="
              w-full
              bg-[#141414]
              flex
              items-end
              justify-center
              pt-8
              px-6
              min-h-[450px]
              lg:min-h-[550px]
              overflow-hidden
            "
          >
            <img
              src={profile}
              alt="Hammad Taufeeq"
              className="
                w-auto
                h-[400px]
                sm:h-[480px]
                lg:h-[520px]
                object-contain
                object-bottom
                rounded-2xl
                transition-all
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>

          {/* Right Column: Form Box */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="
              w-full
              bg-[#f8f9fa]
              p-8
              sm:p-12
              lg:p-14
              text-black
              flex
              flex-col
              justify-center
            "
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    h-[54px]
                    px-5
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    text-[15px]
                    text-black
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-[#ffbd39]
                    focus:ring-1
                    focus:ring-[#ffbd39]
                    transition-all
                    duration-300
                  "
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    h-[54px]
                    px-5
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    text-[15px]
                    text-black
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-[#ffbd39]
                    focus:ring-1
                    focus:ring-[#ffbd39]
                    transition-all
                    duration-300
                  "
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="
                    w-full
                    h-[54px]
                    px-5
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    text-[15px]
                    text-black
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-[#ffbd39]
                    focus:ring-1
                    focus:ring-[#ffbd39]
                    transition-all
                    duration-300
                  "
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Message"
                  required
                  className="
                    w-full
                    p-5
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    text-[15px]
                    text-black
                    placeholder-gray-400
                    resize-none
                    focus:outline-none
                    focus:border-[#ffbd39]
                    focus:ring-1
                    focus:ring-[#ffbd39]
                    transition-all
                    duration-300
                  "
                ></textarea>
              </div>

              {/* Success / Error Messages */}
              {status === "SUCCESS" && (
                <p className="text-green-600 font-semibold text-[14px]">
                  Message sent successfully!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-600 font-semibold text-[14px]">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "SENDING"}
                  className="
                    h-[58px]
                    px-10
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
                    hover:text-black
                    hover:-translate-y-1
                    hover:shadow-[0_10px_25px_rgba(255,189,57,0.3)]
                    disabled:opacity-50
                  "
                >
                  {status === "SENDING" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;