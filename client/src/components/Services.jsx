import React, { useEffect, useRef } from "react";
import {
  CreditCard,
  Zap,
  HandCoins,
  Briefcase,
  Home,
  Building,
  GraduationCap,
  Car,
  Truck,
  PiggyBank,
  LineChart,
  Shield,
} from "lucide-react";

const products = [
  { name: "Credit Card", icon: <CreditCard />, color: "bg-blue-100 text-blue-700" },
  { name: "Instant Loan", icon: <Zap />, color: "bg-yellow-100 text-yellow-700" },
  { name: "Personal Loan", icon: <HandCoins />, color: "bg-green-100 text-green-700" },
  { name: "Business Loan", icon: <Briefcase />, color: "bg-purple-100 text-purple-700" },
  { name: "Home Loan", icon: <Home />, color: "bg-pink-100 text-pink-700" },
  { name: "Loan Against Property", icon: <Building />, color: "bg-indigo-100 text-indigo-700" },
  { name: "Educational Loan", icon: <GraduationCap />, color: "bg-orange-100 text-orange-700" },
  { name: "Car Loan", icon: <Car />, color: "bg-red-100 text-red-700" },
 
  { name: "Saving Account", icon: <PiggyBank />, color: "bg-emerald-100 text-emerald-700" },
  { name: "Demat Account", icon: <LineChart />, color: "bg-cyan-100 text-cyan-700" },
  { name: "Insurance", icon: <Shield />, color: "bg-rose-100 text-rose-700" },
   { name: "University Admission", icon: <GraduationCap />, color: "bg-teal-100 text-teal-700" },
];

const stats = [
  { number: "1,000Cr+", desc: "Loan Disbursement" },
  { number: "1000+", desc: "DSA partners" },
  { number: "100+", desc: "Bank Partnerships" },
];

const bankImage = [
  "/assets/axis.webp",
  "/assets/bajaj.webp",
  "/assets/bandhan.webp",
  "/assets/capital.webp",
  "/assets/hdfc.webp",
  "/assets/idfc.webp",
  "/assets/kotak.webp",
  "/assets/lt.webp",
];

const ProductsSection = () => {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      
      {/* PRODUCTS */}
      <h1 className="text-3xl md:text-3xl font-extrabold leading-snug text-center mb-6">
  <span className="text-gray-700">
    Bringing You the Best Products from
      Top Banks
   
  </span>
</h1>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div
              className={`h-14 w-14 mx-auto mb-4 flex
              items-center justify-center rounded-full ${item.color}`}
            >
              {item.icon}
            </div>

            <h2 className="font-semibold text-gray-700">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      {/* STATS SECTION */}
      <div className="bg-gray-700 text-white mt-16 py-12 rounded-2xl relative ml-2 mr-2">
        <h1 className="text-3xl font-bold text-center mb-2">
          Millions of Wishes, Enabled!
        </h1>

        <p className="text-center text-gray-200 mb-8">
          We achieve such numbers because you are more than a number to us.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <h1 className="text-4xl font-bold text-yellow-400">
                {item.number}
              </h1>
              <p className="text-gray-200 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* AUTO SCROLL BANK LOGOS */}
        <div className="bg-white absolute left-1/2 
        -translate-x-1/2 -bottom-10 rounded-xl shadow-lg
        px-6 py-4 w-[90%] max-w-4xl overflow-hidden ">

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto whitespace-nowrap no-scrollbar "
          >
            {[...bankImage, ...bankImage].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="bank"
                className="h-10 object-contain hover:scale-110 transition"
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductsSection;
