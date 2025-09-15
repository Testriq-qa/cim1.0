"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    "Web Development",
    "Brand Identity & Design",
    "SEO & Growth Marketing",
    "Social Media Marketing",
    "Performance Marketing & Ads",
    "AI Automation & Chatbots",
    "Complete Digital Transformation",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll get back to you within 2 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email Us",
      value: "contact@cinuteinfomedia.com",
      href: "mailto:contact@cinuteinfomedia.com",
      gradient: "from-brand-gold to-primary-600",
    },
    {
      icon: PhoneIcon,
      label: "Call Us",
      value: (
        <>
          <p>
            <a href="tel:+917700995410">+91 7700 995 410</a>
          </p>
          <p>
            <a href="tel:+917039550278">+91 7039 550 278</a>
          </p>
          <p>
            <a href="tel:+917400261810">+91 74002 61810</a>
          </p>
        </>
      ),
      href: "#", // No global href; individual links used
      gradient: "from-brand-purple to-brand-magenta",
    },
    {
      icon: MapPinIcon,
      label: "Visit Us",
      value:
        "Office # 1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107",
      href: "https://maps.app.goo.gl/aGCm4bXAbv3rGGJR8",
      gradient: "from-brand-cyan to-brand-teal",
    },
    {
      icon: ClockIcon,
      label: "Business Hours",
      value: (
        <>
          <p>Mon-Fri: 9AM-7PM IST</p>
          <p>Sat-Sun: Limited Availability</p>
        </>
      ),
      href: "#",
      gradient: "from-brand-orange to-accent-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-hero-gradient relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-brand-cyan rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-purple bg-clip-text text-transparent">
              {" "}
              Transform?
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your project and create a custom digital strategy that
            drives real results and measurable growth for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 brand-shadow`}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium mb-1">
                      {info.label}
                    </p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-white font-semibold hover:text-brand-gold transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 brand-shadow">
              <h4 className="text-lg font-semibold text-white mb-4">
                Why Choose Cinute InfoMedia?
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-brand-gold font-semibold">
                    Within 2 Hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Project Start</span>
                  <span className="text-brand-cyan font-semibold">
                    Within 1 Week
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Client Satisfaction</span>
                  <span className="text-gray-300 font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Support</span>
                  <span className="text-brand-orange font-semibold">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 brand-shadow">
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Transformation
              </h3>

              {submitMessage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4 brand-shadow">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {submitMessage}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="text-neutral-900">
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="text-neutral-900"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-brand-gold to-primary-600 hover:from-primary-600 hover:to-brand-gold text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 brand-shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Share Your Vision
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
