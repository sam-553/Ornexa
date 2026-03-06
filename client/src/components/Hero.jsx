import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const number = "917974894201";
  const message = "Hello, I want to know more details about your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;

  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-16 overflow-hidden mt-10 font-sans">


      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/assets/homeherologo.webp"
            alt="Finance App"
            className="w-full max-w-sm"
          />
        </div>


        <div className="space-y-5 order-2 md:order-1">

          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            <span className="text-gray-700">
              Best Platform to Sell{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Financial & Banking Services
              </span>{" "}
              Online
            </span>
          </h1>

          <p className="text-base text-gray-600 max-w-lg">
            Learn & Earn from anywhere by referring customers and educating
            them about financial products offered on our platform.
          </p>

          {/* CTA BUTTON */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <button className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 hover:scale-105 hover:shadow-xl transition duration-300 mx-auto md:ml-0 font-medium">
              <Link
                to={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                Contact Us
              </Link>

              <a href="#" className="md:hidden mx-auto">
                Download Now
              </a>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;