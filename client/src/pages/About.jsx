import React from "react";
import {
  Users,
  Landmark,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Globe,
} from "lucide-react";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 overflow-hidden mt-8">

      {/* Decorative Blur Background */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About <span className="text-green-600">Ornexa</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering rural and semi-urban communities with accessible
            financial services and inclusive growth across India.
          </p>
        </div>

        {/* About Content */}
        <div className="bg-white shadow-xl rounded-3xl p-10 mb-16 hover:shadow-2xl transition duration-500">
          <div className="flex items-start gap-4 mb-6">
            <Landmark className="text-green-600 w-8 h-8" />
            <p className="text-gray-700 leading-relaxed">
               Ornexa provides Credit Cards, Personal Loans,
              Business Loans, Home Loans, Micro Loans, Demat Accounts,
              Saving Accounts and financial inclusion programs.
            </p>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <Users className="text-blue-600 w-8 h-8" />
            <p className="text-gray-700 leading-relaxed">
              We actively support women entrepreneurs, farmers, and small
              business owners by offering accessible financial solutions
              and livelihood development initiatives.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Handshake className="text-purple-600 w-8 h-8" />
            <p className="text-gray-700 leading-relaxed font-medium">
              Our belief: “Strong villages build a strong nation.”
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          {[
            ["10K+", "Customers Served", <Users className="mx-auto text-green-600 w-8 h-8 mb-3" />],
            ["500+", "Villages Connected", <Globe className="mx-auto text-blue-600 w-8 h-8 mb-3" />],
            ["24/7", "Support Available", <ShieldCheck className="mx-auto text-purple-600 w-8 h-8 mb-3" />],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 cursor-pointer"
            >
              {item[2]}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {item[0]}
              </h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-green-600 w-7 h-7" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Mission
              </h3>
            </div>
            <p className="text-gray-700">
              To uplift rural and semi-urban communities by providing easy,
              transparent, and affordable financial services along with
              livelihood opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-blue-600 w-7 h-7" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Vision
              </h3>
            </div>
            <p className="text-gray-700">
              To become India’s most trusted fintech partner enabling
              financial freedom, dignity, and sustainable economic growth.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-green-600">Us?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine innovation, transparency, and community support
              to deliver reliable financial services across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />,
                title: "Trusted & Transparent",
                desc: "No hidden charges and clear documentation process."
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />,
                title: "Fast Approvals",
                desc: "Quick loan processing and hassle-free experience."
              },
              {
                icon: <Users className="w-10 h-10 text-purple-600 mb-4" />,
                title: "Community Focused",
                desc: "Empowering rural entrepreneurs and MSMEs."
              },
              {
                icon: <Globe className="w-10 h-10 text-indigo-600 mb-4" />,
                title: "Pan India Reach",
                desc: "Expanding services across villages and towns."
              },
              {
                icon: <Landmark className="w-10 h-10 text-emerald-600 mb-4" />,
                title: "Wide Product Range",
                desc: "Loans, Credit Cards, Demat & more in one platform."
              },
              {
                icon: <Handshake className="w-10 h-10 text-rose-600 mb-4" />,
                title: "Strong Partnerships",
                desc: "Collaborating with trusted financial institutions."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 cursor-pointer"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;