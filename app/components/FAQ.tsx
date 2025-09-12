'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What digital marketing services does Cinute InfoMedia offer?",
      answer: "We offer comprehensive digital marketing services including web development, SEO optimization, social media marketing, performance advertising, brand identity design, AI chatbot development, and marketing automation. Our goal is to provide complete digital transformation solutions for your business."
    },
    {
      question: "How long does it take to see results from SEO services?",
      answer: "SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. The timeline depends on factors like competition, current website status, and the specific keywords you're targeting. We provide monthly reports to track progress and adjust strategies accordingly."
    },
    {
      question: "Do you provide custom web development solutions?",
      answer: "Yes, we specialize in custom web development using modern technologies like Next.js, React, and Node.js. We create responsive, fast-loading websites optimized for conversions and search engines. Each website is tailored to your specific business needs and brand identity."
    },
    {
      question: "What makes your AI automation services unique?",
      answer: "Our AI automation services include intelligent chatbots, automated customer service, lead qualification systems, and marketing workflow automation. We use advanced AI technologies to create solutions that not only save time but also improve customer experience and increase conversion rates."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We use comprehensive analytics and KPI tracking including website traffic, conversion rates, ROI, engagement metrics, lead generation, and revenue attribution. You'll receive detailed monthly reports with actionable insights and recommendations for continuous improvement."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely! We provide 24/7 support and ongoing maintenance for all our services. This includes website updates, security monitoring, performance optimization, content updates, and continuous strategy refinement to ensure your digital presence stays competitive."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across various industries including e-commerce, healthcare, education, real estate, technology, manufacturing, and professional services. Our strategies are customized based on industry-specific requirements and target audience behavior."
    },
    {
      question: "How do you ensure brand consistency across all digital platforms?",
      answer: "We start with comprehensive brand identity development, creating detailed brand guidelines that cover visual elements, tone of voice, and messaging. These guidelines are then consistently applied across all digital touchpoints including websites, social media, advertising, and marketing materials."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our digital marketing services, processes, and how we can help transform your business.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-6 w-6 text-brand-gold flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-brand-gold flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-brand-gold to-primary-600 hover:from-primary-600 hover:to-brand-gold text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 brand-shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

