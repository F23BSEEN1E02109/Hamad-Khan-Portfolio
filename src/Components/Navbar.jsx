import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Resume",
    "Services",
    "Skills",
    "Contact",
  ];

  const [activeItem, setActiveItem] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detect karke active section ka text yellow karne ka logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset

      navItems.forEach((item) => {
        const id = item.toLowerCase();
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (item) => {
    if (item === "Home") return "#home";
    return `#${item.toLowerCase()}`;
  };

  const handleClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">

      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto h-[75px] px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleClick("Home")}
          className="flex items-center shrink-0"
        >
          <img
            src={logo}
            alt="My Logo"
            className="
              w-[160px]
              sm:w-[180px]
              lg:w-[200px]
              h-[55px]
              sm:h-[60px]
              object-contain
            "
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-[32px] xl:gap-[40px] h-full mr-[30px]">

          {navItems.map((item) => {
            const path = getPath(item);
            const isActive = activeItem === item;

            return (
              <li
                key={item}
                className="relative h-full flex items-center"
              >
                <a
                  href={path}
                  onClick={() => handleClick(item)}
                  className={`
                    group
                    relative
                    text-[18px]
                    xl:text-[20px]
                    font-medium
                    whitespace-nowrap
                    transition-colors
                    duration-500
                    ${
                      isActive
                        ? "text-[#ffbd39]"
                        : "text-white hover:text-[#ffbd39]"
                    }
                  `}
                >
                  {item}

                  {/* Underline: Only smooth hover effect (duration-700 for slow smooth animation) */}
                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-full
                      mt-[3px]
                      h-[2px]
                      w-0
                      bg-[#ffbd39]
                      transition-all
                      duration-700
                      ease-in-out
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </li>
            );
          })}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-white
            text-[26px]
            focus:outline-none
            transition-colors
            duration-300
            hover:text-[#ffbd39]
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-[450px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <ul
          className="
            bg-black
            px-6
            pb-6
            pt-2
            flex
            flex-col
            items-center
            gap-5
          "
        >

          {navItems.map((item) => {
            const path = getPath(item);
            const isActive = activeItem === item;

            return (
              <li
                key={item}
                className="w-full text-center"
              >
                <a
                  href={path}
                  onClick={() => handleClick(item)}
                  className={`
                    group
                    inline-block
                    relative
                    text-[18px]
                    font-medium
                    transition-colors
                    duration-500
                    ${
                      isActive
                        ? "text-[#ffbd39]"
                        : "text-white hover:text-[#ffbd39]"
                    }
                  `}
                >
                  {item}

                  {/* Mobile Underline: Only smooth hover */}
                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-full
                      mt-[3px]
                      h-[2px]
                      w-0
                      bg-[#ffbd39]
                      transition-all
                      duration-700
                      ease-in-out
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </li>
            );
          })}

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;