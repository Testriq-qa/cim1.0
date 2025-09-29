"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdOutlineAccessTime,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const services = [
    "Web Development",
    "Brand Identity & Design",
    "SEO & Growth Marketing",
    "Social Media Marketing",
    "Performance Marketing & Ads",
    "AI Automation & Chatbots",
    "Complete Digital Transformation",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const submitToAPI = async (data: FormData): Promise<boolean> => {
    try {
      // This is a placeholder for actual API integration
      // You can replace this with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus('');

    try {
      // Try to submit to API first
      const apiSuccess = await submitToAPI(formData);
      
      if (apiSuccess) {
        setSubmitStatus('success');
        setSubmitMessage("Thank you! We'll get back to you within 2 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        // Fallback: Create mailto link for manual sending
        const subject = encodeURIComponent(`New Contact Form Submission - ${formData.service}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Company: ${formData.company}\n` +
          `Service: ${formData.service}\n` +
          `Message: ${formData.message}`
        );
        
        const mailtoLink = `mailto:contact@cinuteinfomedia.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitStatus('success');
        setSubmitMessage("Your email client has been opened. Please send the email to complete your inquiry.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage("There was an error submitting your form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MdOutlineEmail,
      label: "Email Us",
      value: "contact@cinuteinfomedia.com",
      href: "mailto:contact@cinuteinfomedia.com",
      gradient: "from-brand-gold to-primary-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp Us",
      value: "+91 7700 995 410",
      href: "https://wa.me/917700995410",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: MdOutlinePhone,
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
      icon: MdOutlineLocationOn,
      label: "Visit Us",
      value:
        "Office # 1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107",
      href: "https://maps.app.goo.gl/aGCm4bXAbv3rGGJR8",
      gradient: "from-brand-cyan to-brand-teal",
    },
    {
      icon: MdOutlineAccessTime,
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
      className="py-16 px-8 md:px-12 xl:px-16 bg-hero-gradient relative overflow-hidden"
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
                  <div className={`w-16 h-16 ${submitStatus === 'success' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'} rounded-full flex items-center justify-center mx-auto mb-4 brand-shadow`}>
                    {submitStatus === 'success' ? (
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
                    ) : (
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-white text-lg font-semibold mb-4">
                    {submitMessage}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitMessage("");
                      setSubmitStatus('');
                    }}
                    className="bg-gradient-to-r from-brand-gold to-primary-600 hover:from-primary-600 hover:to-brand-gold text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
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
                        className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
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
                        className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                      )}
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
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.service ? 'border-red-400' : 'border-white/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300`}
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
                    {errors.service && (
                      <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                    )}
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
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300 resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
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
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  <p className="text-gray-400 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
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
