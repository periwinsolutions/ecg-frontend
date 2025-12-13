"use client";
import React from "react";

const FooterContact = () => {
  return (
    <section className="bg-IcyBreeze dark:bg-darklight py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-20 items-start">

          {/* Left: Title & intro */}
          <div className="lg:col-span-5">
            <h2 className="pb-6">
              Let’s talk
            </h2>

            <p className="text-lg text-SlateBlueText dark:text-opacity-80 leading-relaxed max-w-md">
              Whether you’re looking for support, want to partner with us, or
              simply have a question, we’re here to listen. Send us a message
              and we’ll respond as soon as we can.
            </p>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-2xl mx-auto">
              <form className="space-y-10">

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="Full name *"
                    className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-5 text-lg text-secondary dark:text-darktext placeholder-gray-400 focus:outline-none focus:border-primary bg-white dark:bg-transparent transition"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email address *"
                    className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-5 text-lg text-secondary dark:text-darktext placeholder-gray-400 focus:outline-none focus:border-primary bg-white dark:bg-transparent transition"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-5 text-lg text-secondary dark:text-darktext placeholder-gray-400 focus:outline-none focus:border-primary bg-white dark:bg-transparent transition"
                  />

                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-5 text-lg text-secondary dark:text-darktext focus:outline-none focus:border-primary bg-white dark:bg-transparent transition"
                  >
                    <option value="" disabled>
                      How can we help? *
                    </option>
                    <option>General enquiry</option>
                    <option>Request support for a child or family</option>
                    <option>School or community partnership</option>
                    <option>Donation or fundraising question</option>
                    <option>Volunteering or mentorship</option>
                    <option>Corporate or organisational support</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <textarea
                  required
                  rows={6}
                  placeholder="Message *"
                  className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-6 text-lg text-secondary dark:text-darktext placeholder-gray-400 focus:outline-none focus:border-primary bg-white dark:bg-transparent transition resize-none"
                />

                {/* Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn btn-1 hover-filled-slide-down rounded-xl px-14 py-5 text-lg"
                  >
                    <span>Send message</span>
                  </button>
                </div>

                {/* Reassurance */}
                <p className="text-sm text-SlateBlueText dark:text-opacity-70 pt-2">
                  We’ll only use your details to respond to your message.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FooterContact;
