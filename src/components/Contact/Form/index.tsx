"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FormField {
  id: string;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
}

interface ContactOption {
  value: string;
  label: string;
}

const FORM_FIELDS: FormField[] = [
  {
    id: "name",
    label: "Full name *",
    type: "text",
    required: true,
    placeholder: "John Doe",
  },
  {
    id: "email",
    label: "Email address *",
    type: "email",
    required: true,
    placeholder: "john@example.com",
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    required: false,
    placeholder: "+1 (555) 000-0000",
  },
];

const HELP_OPTIONS: ContactOption[] = [
  { value: "general", label: "General enquiry" },
  { value: "support", label: "Request support for a child or family" },
  { value: "partnership", label: "School or community partnership" },
  { value: "donation", label: "Donation or fundraising question" },
  { value: "volunteering", label: "Volunteering or mentorship" },
  { value: "corporate", label: "Corporate or organisational support" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    const errors: Record<string, string> = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.helpType) errors.helpType = "Please select how we can help";
    if (!data.message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, you would send this to your backend
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on successful submission
      e.currentTarget.reset();
      alert("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact-section"
      aria-labelledby="contact-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Form Section */}
          <div>
            <div className="max-w-2xl">
              {/* Header */}
              <header className="mb-10">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <span 
                    className="inline-block w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-primary dark:text-blue-300 uppercase tracking-wider">
                    Contact Us
                  </span>
                </div>
                
                <h1 
                  id="contact-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                >
                  Get in touch
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you need support, want to partner with us, or have a question,
                  please fill in the form below and we'll respond as soon as we can.
                </p>
              </header>

              {/* Form */}
              <form 
                onSubmit={handleSubmit}
                className="space-y-8"
                aria-label="Contact form"
                noValidate
              >
                {/* Error message for general form errors */}
                {formErrors.submit && (
                  <div 
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    role="alert"
                  >
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {formErrors.submit}
                    </p>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {FORM_FIELDS.slice(0, 2).map((field) => (
                    <div key={field.id} className="space-y-3">
                      <label 
                        htmlFor={field.id}
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors[field.id] 
                            ? 'border-red-300 dark:border-red-600' 
                            : 'border-gray-300 dark:border-gray-600'
                        } dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 
                          focus:ring-blue-500 focus:outline-none transition-colors duration-200`}
                        aria-invalid={!!formErrors[field.id]}
                        aria-describedby={formErrors[field.id] ? `${field.id}-error` : undefined}
                      />
                      {formErrors[field.id] && (
                        <p 
                          id={`${field.id}-error`}
                          className="text-sm text-red-600 dark:text-red-400"
                          role="alert"
                        >
                          {formErrors[field.id]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Phone & Help Type */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-3">
                    <label 
                      htmlFor={FORM_FIELDS[2].id}
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {FORM_FIELDS[2].label}
                    </label>
                    <input
                      id={FORM_FIELDS[2].id}
                      name={FORM_FIELDS[2].id}
                      type={FORM_FIELDS[2].type}
                      required={FORM_FIELDS[2].required}
                      placeholder={FORM_FIELDS[2].placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 
                        focus:ring-blue-500 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Help Type */}
                  <div className="space-y-3">
                    <label 
                      htmlFor="helpType"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      How can we help? *
                    </label>
                    <select
                      id="helpType"
                      name="helpType"
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.helpType 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-300 dark:border-gray-600'
                      } dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 
                        focus:ring-blue-500 focus:outline-none transition-colors duration-200 
                        appearance-none cursor-pointer`}
                      aria-invalid={!!formErrors.helpType}
                      aria-describedby={formErrors.helpType ? 'helpType-error' : undefined}
                    >
                      <option value="" className="text-gray-400">Select an option</option>
                      {HELP_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {formErrors.helpType && (
                      <p 
                        id="helpType-error"
                        className="text-sm text-red-600 dark:text-red-400"
                        role="alert"
                      >
                        {formErrors.helpType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help you..."
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-gray-300 dark:border-gray-600'
                    } dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 
                      focus:ring-blue-500 focus:outline-none resize-none transition-colors duration-200`}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {formErrors.message && (
                    <p 
                      id="message-error"
                      className="text-sm text-red-600 dark:text-red-400"
                      role="alert"
                    >
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary 
                      hover:bg-secondary dark:bg-primary dark:hover:bg-primary text-white font-semibold 
                      rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll only use your details to respond to your message. Your privacy is important to us.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Image Section */}
          <div>
            <div className="relative">
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero/footer.png"
                    alt="Our team is ready to help and support you with any questions or partnership opportunities"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>


              {/* Contact Information */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Other ways to reach us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">info@elpiscomm.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">+44 (0)7396 739170</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Charity No: 1143048;   Companies House reg:  07572271</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;