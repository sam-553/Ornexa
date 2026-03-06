import React from "react";
import { Users, Wallet, Smartphone, IndianRupee, Package, TrendingUp, DollarSign, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";



const BecomePartner = () => {
  const number = "917974894201";
  const message = "Hello, I want to know more details about your services."
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;

  const featureCard = [
    {
      desc: "A personalized app built just for you",
      img: "/assets/p1.jpeg",
    },
    {
      desc: "Quickly create, organize, and track your customer leads",
      img: "/assets/p2.jpeg",
    },
    {
      desc: "Promote your business using your referral code",
      img: "/assets/p3.jpeg",
    },
    {
      desc: "One app to manage all your transactions effortlessly",
      img: "/assets/p4.jpeg",
    },
  ];

  const consultant = [
    {
      icon: <Users size={28} />,
      desc: "1000+ Partners",
      bg: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Wallet size={28} />,
      desc: "Weekly Payments",
      bg: "bg-green-100 text-green-700",
    },
    {
      icon: <Smartphone size={28} />,
      desc: "Fintech Mobile App",
      bg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <IndianRupee size={28} />,
      desc: "Upto ₹50,000 Earnings",
      bg: "bg-orange-100 text-orange-700",
    },
  ];

  const custumer = [
    {
      desc: "Loan agents",
      img: "/assets/loan-against.webp",
    },
    {
      desc: "Former bank employee",
      img: "/assets/bank-employee.webp",
    },
    {
      desc: "Insurance agents",
      img: "/assets/ins-agent.webp",
    },
    {
      desc: "Wealth advisors",
      img: "/assets/piggy.webp",
    },
    {
      desc: "BFSI professionals",
      img: "/assets/bfsi.webp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aakash Saxena",
      position: "Ornexa Certified Partner",
      message: "I joined Ornexa 5 months ago. The app is very user friendly and the personalized website and marketing features helped me get more customers. The partner support team is very supportive and cooperative as well. All my queries have been resolved by them quickly.",

    },
    {
      id: 2,
      name: "Sanjay Yadav",
      position: "Ornexa Certified Partner",
      message: "I feel proud to be a Ornexa Partner. This job has earned me respect in society. Also I am very happy to help people when they are in financial difficulties. The appreciation that I get from my customers motivates me to always do my best. The commissions are also very good .",

    },
    {
      id: 3,
      name: "Adesh Chaudhary",
      position: "Ornexa Certified Partner",
      message: "I am glad that I chose to associate myself with Ornexa . They have some unique financial products and selling those to people in need makes me very happy because through Ornexa I could make an impact in people's lives. They have the best commissions in the market.",

    },
  ];


  const Growdata = [
    {
      title: "GET CERTIFIED",
      desc: "Learn from video courses and webinars to become an expert.",
    },
    {
      title: "ACQUIRE CUSTOMERS",
      desc: "Use your personalized website and marketing materials.",
    },
    {
      title: "SELL FINANCIAL PRODUCTS",
      desc: "Sell our products and earn leading commissions.",
    },
  ];

  const successData = [
    {
      icon: <Package size={28} />,
      heading: "Customized products",
      desc: "Created for people traditional institutions do not serve.",
      bg: "bg-blue-100 text-blue-700",
    },
    {
      icon: <TrendingUp size={28} />,
      heading: "Huge unmet demand",
      desc: "300Mn customers in small towns across India.",
      bg: "bg-green-100 text-green-700",
    },
    {
      icon: <DollarSign size={28} />,
      heading: "Great commissions",
      desc: "Enjoy the industry's leading commissions.",
      bg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <RotateCcw size={28} />,
      heading: "7-day payment cycle",
      desc: "Earnings credited 4 times in a month!",
      bg: "bg-orange-100 text-orange-700",
    },
    {
      icon: <Users size={28} />,
      heading: "Own your customers",
      desc: "Upto ₹50,000 Earnings",
      bg: "We don't sell directly to customers.",
    },
    {
      icon: <Smartphone size={28} />,
      heading: "App in your language",
      desc: "5 languages to choose from.",
      bg: "bg-orange-100 text-orange-700",
    },
  ];


  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 mt-8">


      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
      {/* hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 
grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* IMAGE → TOP ON MOBILE */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/assets/partnerimg.webp"
            alt="Finance App"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-5 order-2 md:order-1 text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
  font-extrabold leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 
    bg-clip-text text-transparent">
              Aapki Apni Finance
            </span>

            <br />

            <span className="text-green-600 font-bold">
              Ki Dukaan
            </span>

          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 
  leading-relaxed max-w-lg mx-auto md:mx-0">
            Your reliable partner for personal, home, business, and car loans.
            We simplify the loan process with expert guidance, bank partnerships,
            and fast approvals.
          </p>

          {/* Button */}
          <div className="pt-4 flex justify-center md:justify-start">
            <Link
              to={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 
      bg-green-600 text-white font-medium rounded-full shadow-lg
      hover:bg-green-700 hover:scale-105 hover:shadow-xl
      transition duration-300"
            >
              Become Partner
            </Link>
          </div>

        </div>
      </div>

      {/* feature card */}


      <div className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Aapki Apni Finance Ki Dukaan
          </h1>

          <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
    rounded-full transition-all duration-500 hover:w-28"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featureCard.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md 
      hover:shadow-2xl hover:-translate-y-2 
      transition duration-300 text-center overflow-hidden"
            >

              {/* Image Section */}
              <div className="w-full h-80 flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.desc}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content Section */}
              <div className="px-4 pb-6">
                <p className="text-gray-700 font-semibold text-sm sm:text-base">
                  {card.desc}
                </p>

                <div
                  className="h-1 w-0 bg-blue-600 
          group-hover:w-16 transition-all duration-500 
          mx-auto mt-4 rounded"
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* platform */}
      <div className="text-center m-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
         Why Millions Across India Trust Ornexa
        </h1>

        <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
      </div>


      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 px-6">
        {consultant.map((item, i) => (
          <div
            key={i}
            className="group text-center cursor-pointer 
      transition duration-500 hover:-translate-y-3"
          >

            <div
              className={`h-20 w-20 mx-auto rounded-full flex 
        items-center justify-center relative
        shadow-lg group-hover:shadow-2xl
        transition duration-500 ${item.bg}`}
            >

              <div className="absolute inset-0 rounded-full 
        bg-gradient-to-r from-blue-500/20 to-indigo-500/20 
        opacity-0 group-hover:opacity-100 transition"></div>

              <span className="relative z-10">
                {item.icon}
              </span>
            </div>

            {/* Text */}
            <p className="font-bold text-gray-700 mt-6 
      group-hover:text-blue-700 transition duration-300 text-lg">
              {item.desc}
            </p>

            {/* Bottom line animation */}
            <div className="h-1 w-0 bg-blue-600 mx-auto mt-3 
      rounded-full group-hover:w-16 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* who can earnn */}

      <div className="py-10 px-4 sm:px-6 lg:px-10">


        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Who can earn with Ornexa?
          </h1>

          <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
    rounded-full transition-all duration-500 hover:w-32"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
  gap-6 backdrop-blur-md bg-gray-100/80 
  border border-white/30 rounded-2xl shadow-lg 
  p-6">

          {custumer.map((c, i) => (
            <div
              key={i}
              className="group text-center p-4 rounded-xl 
        hover:bg-white transition duration-300"
            >
              <img
                src={c.img}
                alt=""
                className="w-16 sm:w-20 mx-auto mb-4 rounded-xl"
              />

              <p className="font-semibold text-gray-700 text-sm sm:text-base">
                {c.desc}
              </p>

              <div className="h-1 w-0 bg-blue-600 mx-auto mt-4 
        rounded-full group-hover:w-16 
        transition-all duration-500"></div>
            </div>
          ))}

        </div>

      </div>

      <div className="text-center m-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
          Grow your business
        </h1>

        <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {Growdata.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg
      hover:border-green-400 hover:border
       w-full flex flex-col justify-center"
          >
            <h1 className="text-xl font-bold text-blue-700 mb-3">
              {item.title}
            </h1>

            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>


      <div className="px-4 sm:px-6 lg:px-10 py-10">


        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            How we ensure your success
          </h1>

          <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
    rounded-full transition-all duration-500 hover:w-32"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {successData.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-5 
        items-center sm:items-start text-center sm:text-left
        p-5 sm:p-6 rounded-2xl bg-white shadow-md
        hover:shadow-2xl hover:-translate-y-1
        transition duration-300"
            >


              <div
                className={`min-w-[60px] h-[60px] sm:min-w-[70px] sm:h-[70px]
          rounded-full flex items-center justify-center 
          text-lg sm:text-xl shadow-lg 
          transition duration-300 group-hover:scale-110 ${item.bg}`}
              >
                {item.icon}
              </div>


              <div>
                <h2 className="font-bold text-gray-800 text-base sm:text-lg mb-1">
                  {item.heading}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="h-1 w-0 bg-green-500 mt-2 rounded-full
          group-hover:w-16 transition-all duration-500 mx-auto sm:mx-0">
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
      {/*rating */}

      <div className="px-4 py-10 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            What our Ornexa Partners say
          </h1>

          <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
    rounded-full transition-all duration-500 hover:w-32"></div>
        </div>

        {/* Testimonials Grid */}
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md 
      hover:shadow-2xl transition duration-300 hover:-translate-y-1 flex flex-col"
            >

              {/* Message */}
              <div className="text-gray-700 relative min-h-[120px]">
                <span className="text-blue-700 text-3xl absolute -left-2 -top-3">“</span>
                <p className="mt-4 text-sm sm:text-base leading-relaxed">
                  {t.message}
                </p>
              </div>

              {/* User */}
              <div className="flex items-center mt-6">
                <div className="ml-2 text-left">
                  <h4 className="font-semibold text-base sm:text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t.position}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
      {/* capital */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-3xl p-8 mt-10 mx-4 md:mx-10 overflow-hidden shadow-xl ">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">


          <div className="text-center md:text-left space-y-4 md:ml-6">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              Register as a <span className="text-green-400">Ornexa</span> Partner
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Grow your business. Grow your career.
              Start earning with India’s fast-growing fintech network.
            </p>

            <button className="bg-green-500 px-6 py-2 rounded-lg font-medium shadow-md hover:bg-green-600 hover:shadow-green-400/40 hover:scale-105 transition duration-300">
              <Link to={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline">Contact Us</Link>
              <a href="#" className="md:hidden">Download App</a>
            </button>
          </div>

          {/* Image */}
          <img
            src="/assets/handshake.png"
            alt="Partner"
            className="w-52 md:w-64 mx-auto md:mx-0  hidden md:block"
          />
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default BecomePartner;
