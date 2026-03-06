import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SideButton = () => {
  const number = "917974894201";
  const message = "Hello, I want to know more details about your services."
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;
  return (
    <>

      <div className="fixed right-5 bottom-3 flex flex-col gap-4 z-50">


        <Link
          to={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition transform duration-300"
        >
          <MessageCircle size={24} />
        </Link>


      </div>
    </>
  );
};

export default SideButton;
