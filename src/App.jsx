import React, { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const astrologers = [
    {
      name: "Deepak",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "FREE",
      status: "Chat",
      Area: "Vedic, Numerology",
      image: "./image.png",
    },
    {
      name: "Pushpak",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "FREE",
      status: "Chat",
      Area: "Vedic, Numerology",
      image: "./Dinesh(1) 1.png",
    },
    {
      name: "Tripti",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "FREE",
      status: "Chat",
      Area: "Vedic, Numerology",
      image: "./tripti 1.png",
    },
    {
      name: "Aarohi",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Chat",
      Area: "Vedic, Numerology",
      image: "./mahima(1).png",
    },
    {
      name: "Mahima",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Wait 7 Min",
      Area: "Vedic, Numerology",
      image: "./Astrologer 14 (1) 1.png",
    },
    {
      name: "Khushboo",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Wait 7 Min",
      Area: "Vedic, Numerology",
      image: "./Astrologer 14 (1) 1.png",
    },
    {
      name: "Khushboo",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Wait 7 Min",
      Area: "Vedic, Numerology",
      image: "./mahima(1).png",
    },
    {
      name: "Khushboo",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Wait 7 Min",
      Area: "Vedic, Numerology",
      image: "./Astrologer 14 (1) 1.png",
    },
    {
      name: "Khushboo",
      rating: 4.5,
      languages: "Hindi, English, Gujr..",
      exp: "10 Years",
      price: "₹25/Min",
      status: "Wait 7 Min",
      Area: "Vedic, Numerology",
      image: "./mahima(1).png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="lg:bg-white xl:bg-white md:bg-white sm:bg-transparent xl:shadow-lg md:shadow-lg lg:shadow-lg ">
        <div className="container mx-auto flex items-center justify-between py-10 px-6 md:px-20">
          <div className="text-xl font-bold text-gray-800">
            <img
              src="./Dark_logo@4x 1.png"
              alt="Divine Talk Logo"
              className="w-32 h-8 hidden lg:block"
            />
          </div>

          <nav className="hidden md:flex lg:flex sm:flex-row md:flex-row items-center sm:space-x-6 md:space-x-8 lg:space-x-8">
            <a href="#" className="home-link">
              Home
            </a>
            <a href="#" className="home-link">
              Services
            </a>
            <a href="#" className="home-link font-bold">
              Astrologers
            </a>
            <a href="#" className="home-link">
              Blogs
            </a>
            <select className="border border-gray-600 p-1 px-3 rounded-lg home-link">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
            <button className="bg-[#EF5862] text-white sm:flex-row sm:space-x-5 sm:px-6 sm:-py-2 md:px-2 md:py-1 rounded-lg xl:px-5 xl:py-1">
              Get App
            </button>
          </nav>
        </div>
      </header>

      <div className="md:hidden flex items-center justify-between w-full py-4 px-6 -mt-16 z-50">
        <img
          src="./Icon feather-chevron-down.png"
          alt="Divine Talk Logo"
          className="w-3 h-4 mr-5"
        />
        {/* Heading */}
        <h1 className="font-bold text-gray-800 text-lg w-full truncate hader">
          Connect With Astrologers
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-800"
        >
          <CgMenuBoxed className="w-14 h-10 text-gray-500" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-8  p-4  rounded-lg w-full max-w-[320px] mx-auto">
          <a href="#" className="home-link text-lg  hover:text-[#EF5862]">
            Home
          </a>
          <a href="#" className="home-link text-lg hover:text-[#EF5862]">
            Services
          </a>
          <a
            href="#"
            className="home-link text-lg font-semibold hover:text-[#EF5862] "
          >
            Astrologers
          </a>
          <a href="#" className="home-link text-lg  hover:text-[#EF5862]">
            Blogs
          </a>

          <select className="border border-gray-600 p-2 px-3 rounded-lg home-link ">
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>

          <button className="bg-[#EF5862] text-white  py-2 px-4 rounded-lg sm:px-2 sm:py-2 md:px-5 md:py-2 mt-4">
            Get App
          </button>
        </div>
      )}
      <main className="container mx-auto lg:py-8 lg:px-5 md:py-8 md:px-5 sm:px-2 sm:gap-0 sm:py-0">
        <h1 className="font-bold text-center text-gray-800 mb-8 heading hidden lg:block md:block">
          Chat with Astrologers
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 sm:px-4 sm:pt-0 sm:mt-0 md:px-4 md:pt-0 md:mt-0 lg:px-4 lg:pt-0 lg:mt-0">
          {astrologers.map((astrologer) => (
            <div className="sm:w-[90%] md:w-full mx-auto" key={astrologer.name}>
              <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-20 xl:h-20 rounded-full mr-5 mb-8 border-2 border-green-500"
                />

                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {astrologer.name}
                    </h2>

                    <img
                      src="./Group 128272.png"
                      alt="Star"
                      className="w-4 h-4 ml-5 mb-0"
                    />

                    <span className="ml-2 text-gray-700 text-sm mb-0">
                      {astrologer.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm header mb-2">
                    {astrologer.Area}
                  </p>
                  <p className="text-gray-600 header mb-2">
                    {astrologer.languages}
                  </p>
                  <p className="text-gray-600 text-sm header mb-2">
                    Exp: {astrologer.exp}
                  </p>
                  <p className="text-[#EF5862] font-bold text-sm">
                    {astrologer.price === "FREE" ? (
                      <span>
                        <span className="line-through text-gray-500">₹25</span>
                        {"  "}
                        <span className="font-bold text-xl">FREE</span>
                      </span>
                    ) : astrologer.price === "₹25" ? (
                      <span>
                        <span className="line-through text-gray-500">₹25</span>
                        {"  "}
                        <span className="font-bold text-xl">₹5</span>
                      </span>
                    ) : (
                      astrologer.price
                    )}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="./vector (4).png"
                    alt="Right Image"
                    className="top-0 ml-8 w-5 h-5"
                  />
                  <button
                    className={`ml-auto mt-14 px-6 py-1 rounded-lg border-2 ${
                      astrologer.status.includes("Wait")
                        ? "border-red-500 text-[#EF5862] bg-white"
                        : "border-[#35BA80] text-[#35BA80] bg-white font-bold"
                    } sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-1 lg:text-lg`}
                  >
                    {astrologer.status.includes("Wait") ? "Chat" : "Chat"}
                  </button>

                  {astrologer.status.includes("Wait") && (
                    <p className="text-[#EF5862] text-xs mt-1">Wait - 7 Min</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
