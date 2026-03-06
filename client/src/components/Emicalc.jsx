import React, { useState, useEffect } from "react";

const EmiCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const P = amount;
    const R = rate / 12 / 100;
    const N = tenure * 12;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(isFinite(emiValue) ? emiValue.toFixed(0) : 0);
  }, [amount, rate, tenure]);

  
  const calcPercent = (value, min, max) => ((value - min) / (max - min)) * 100;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8 md:flex-row items-center">
          
          <div className="flex-1 w-full space-y-8">
            {/* Info Section */}
            <div className="bg-green-50 p-6 rounded-xl shadow-inner">
              <h3 className="text-2xl font-bold mb-2 text-green-700">
                EMI Calculator
              </h3>
              <p className="text-gray-700 mb-2">
                Measure twice, cut once. Calculate your monthly outflow before you take a decision.
              </p>
              <p className="text-gray-700">
                Calculate how much it will take to enable short-term liquidity and plan your finances better.
              </p>
            </div>

            {/* EMI Result */}
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-6">
              <p className="text-4xl font-bold text-green-600 mb-2">
                ₹ {emi.toLocaleString()}
              </p>
              <p className="text-gray-700 text-center">
                Your estimated monthly EMI for the selected loan amount, interest rate, and tenure.
              </p>
            </div>
          </div>

          {/* Right: Sliders Section */}
          <div className="flex-1 w-full space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="font-semibold mb-1 block">
                Loan Amount: ₹{amount.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-300 accent-green-500"
                style={{
                  background: `linear-gradient(to right, #22c55e ${calcPercent(amount, 10000, 10000000)}%, rgba(34,197,94,0.3) ${calcPercent(amount, 10000, 10000000)}%)`,
                }}
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label className="font-semibold mb-1 block">Interest Rate: {rate}%</label>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-300 accent-green-500"
                style={{
                  background: `linear-gradient(to right, #22c55e ${calcPercent(rate, 1, 20)}%, rgba(34,197,94,0.3) ${calcPercent(rate, 1, 20)}%)`,
                }}
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="font-semibold mb-1 block">Tenure: {tenure} years</label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-300 accent-green-500"
                style={{
                  background: `linear-gradient(to right, #22c55e ${calcPercent(tenure, 1, 30)}%, rgba(34,197,94,0.3) ${calcPercent(tenure, 1, 30)}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;
