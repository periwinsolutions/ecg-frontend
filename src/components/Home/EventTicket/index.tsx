"use client";
import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";

interface DonationAmount {
  value: number;
  label: string;
}

const DONATION_AMOUNTS: DonationAmount[] = [
  { value: 2, label: "£2" },
  { value: 5, label: "£5" },
  { value: 10, label: "£10" },
  { value: 15, label: "£15" },
  { value: 20, label: "£20" },
  { value: 100, label: "£100" },
  { value: 200, label: "£200" },
];

const MEAL_COST = 2; // £2 per meal

const EventTicket = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState<string>("");

  // Memoized impact calculation
  const { impactAmount, impactMessage } = useMemo(() => {
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
    const meals = Math.floor(amount / MEAL_COST);
    
    return {
      impactAmount: amount,
      impactMessage: amount 
        ? `£${amount} provides ${meals} meal${meals !== 1 ? 's' : ''} for children`
        : "Select an amount to see your impact"
    };
  }, [selectedAmount, customAmount]);

  // Memoized button handlers for better performance
  const handleAmountSelect = useCallback((amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  }, []);

  const handleCustomAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and one decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  }, []);

  const handleCustomAmountBlur = useCallback(() => {
    if (customAmount && parseFloat(customAmount) > 0) {
      setSelectedAmount(null);
    }
  }, [customAmount]);

  // Accessibility-friendly button props
  const getAmountButtonProps = (amount: number) => ({
    role: "radio",
    "aria-checked": selectedAmount === amount,
    "aria-label": `Donate £${amount}`,
    tabIndex: selectedAmount === amount ? 0 : -1,
    onClick: () => handleAmountSelect(amount),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleAmountSelect(amount);
      }
    },
  });

  return (
    <section 
      id="donation-section"
      aria-labelledby="donation-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16">
          <div 
            role="status"
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full"
          >
            <span 
              className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Make a Difference
            </span>
          </div>
          
          <h1 
            id="donation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Support a child today
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your donation helps provide food, essential items, and educational
            support to children living in poverty. Every contribution makes a real difference.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto">
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            role="region"
            aria-label="Donation options"
          >
            {/* Card Content */}
            <div className="p-6 md:p-8">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4"
                  aria-hidden="true"
                >
                  <svg 
                    className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Choose a donation amount
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400">
                  Every £2 provides a nutritious meal for a child
                </p>
              </div>

              {/* Donation Amounts */}
              <fieldset className="mb-8">
                <legend className="sr-only">
                  Select a donation amount
                </legend>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                  {DONATION_AMOUNTS.map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      {...getAmountButtonProps(value)}
                      className={`
                        relative px-4 py-3 rounded-lg border-2 font-semibold text-gray-800 dark:text-gray-200
                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        ${selectedAmount === value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
                        }
                      `}
                    >
                      {label}
                      {selectedAmount === value && (
                        <span 
                          className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <label htmlFor="custom-amount" className="sr-only">
                    Enter custom donation amount
                  </label>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    £
                  </div>
                  <input
                    id="custom-amount"
                    type="text"
                    inputMode="decimal"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    onBlur={handleCustomAmountBlur}
                    placeholder="Enter custom amount"
                    aria-label="Custom donation amount in pounds"
                    className="w-full pl-10 pr-4 py-3 text-lg rounded-lg border border-gray-300 dark:border-gray-600
                      dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </fieldset>

              {/* Impact Preview */}
              <div 
                className="mb-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                role="status"
                aria-live="polite"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        Your impact
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {impactMessage}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      £{impactAmount || 0}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Donation amount
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <div className="mb-6">
                <Link
                  href={`/donate?amount=${impactAmount}`}
                  className="group flex items-center justify-center w-full px-6 py-3 bg-blue-600 
                    hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold 
                    rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 
                    focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="flex items-center gap-2">
                    Donate now
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div 
                className="pt-6 border-t border-gray-200 dark:border-gray-700"
                role="contentinfo"
                aria-label="Donation security and transparency information"
              >
                <ul className="flex flex-wrap justify-center gap-6">
                  {[
                    { icon: 'check', label: 'Secure donation', color: 'text-green-500' },
                    { icon: 'refresh', label: 'Cancel anytime', color: 'text-blue-500' },
                    { icon: 'shield-check', label: 'Full transparency', color: 'text-purple-500' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <svg 
                        className={`w-4 h-4 ${item.color}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        {item.icon === 'check' && (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        )}
                        {item.icon === 'refresh' && (
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        )}
                        {item.icon === 'shield-check' && (
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        )}
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All donations are securely processed. 100% of your contribution goes directly to supporting children in need.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default EventTicket;