import React from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  Share2,
  Cookie,
  RefreshCcw,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 mt-8 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Privacy <span className="text-green-600">Policy</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ornexa respects your privacy and is committed to
            safeguarding your personal and financial information.
          </p>
        </div>

        <div className="space-y-10">

          {/* Information Collection */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-green-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Personal details (Name, DOB, Address, Phone, Email)</li>
              <li>• KYC documents (Aadhaar, PAN, Passport, Driving License)</li>
              <li>• Financial information (Bank details, Income proof, Credit score)</li>
              <li>• Device & usage data (IP address, browser type, location)</li>
            </ul>
          </div>

          {/* Usage */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Processing loans, credit cards & financial services</li>
              <li>• Identity verification & eligibility assessment</li>
              <li>• Customer support & notifications</li>
              <li>• Analytics & performance improvements</li>
              <li>• Legal & regulatory compliance</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-purple-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold">3. Data Sharing</h2>
            </div>
            <p className="text-gray-700 mb-3">
              Your data may be securely shared with:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Partner Banks & NBFCs</li>
              <li>• Credit Bureaus</li>
              <li>• Technology & Cloud Providers</li>
              <li>• Government / Regulatory Authorities (if required)</li>
            </ul>
            <p className="mt-4 text-green-600 font-semibold">
              We never sell your personal data.
            </p>
          </div>

          {/* Security */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-red-500 w-6 h-6" />
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• SSL encrypted data transmission</li>
              <li>• Secure cloud infrastructure</li>
              <li>• Role-based access control</li>
              <li>• Regular security audits</li>
            </ul>
          </div>

          {/* Rights */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-indigo-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Access & update your personal information</li>
              <li>• Opt out of marketing communications</li>
              <li>• Request deletion (subject to legal conditions)</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-yellow-500 w-6 h-6" />
              <h2 className="text-2xl font-semibold">6. Cookies & Tracking</h2>
            </div>
            <p className="text-gray-700">
              We use cookies to enhance website performance and user experience.
              You may disable cookies through your browser settings.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCcw className="text-teal-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold">7. Policy Updates</h2>
            </div>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Changes will be
              published on our official website.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-3xl px-6 py-10 md:p-12 shadow-xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* Left Side */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
                  Contact <span className="text-green-400">Ornexa</span>
                </h2>

                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  If you have any questions regarding our Privacy Policy,
                  data protection practices, or financial services,
                  feel free to reach out to us.
                </p>

                <p className="text-gray-400 text-xs sm:text-sm">
                  We typically respond within 24–48 business hours.
                </p>
              </div>

              {/* Right Side */}
              <div className=" p-6 space-y-3 text-base sm:text-lg text-center md:text-left">

                <p className="font-semibold text-lg">
                  Ornexa
                </p>

                <p className="text-gray-300 text-sm sm:text-base">
                  Kabir Ward, Near doonda Seoni square - Seoni (MP) 480661
                </p>

                <a
                  href="tel:+91-7974-894201"
                  className="block text-green-400 hover:underline break-all"
                >
                  +91-7974-894201
                </a>

                <a
                  href="mailto: contact@ornexa.in"
                  className="block text-green-400 hover:underline break-all"
                >
                  contact@ornexa.in
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;