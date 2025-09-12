'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Cinute InfoMedia transformed our online presence completely. Their web development and SEO services increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and delivers exceptional results.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      name: "Priya Sharma",
      company: "Fashion Forward",
      role: "Marketing Director",
      content: "The social media marketing and brand identity work they did for us was outstanding. Our engagement rates doubled, and we saw a 250% increase in online sales. Their creative approach and data-driven strategies are impressive.",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      name: "Michael Chen",
      company: "Global Consulting",
      role: "Founder",
      content: "Their AI automation solutions streamlined our customer service process and improved response times by 80%. The chatbot they developed handles 70% of our inquiries automatically while maintaining high customer satisfaction.",
      rating: 5,
      image: "/testimonial-3.jpg"
    },
    {
      name: "Anita Patel",
      company: "HealthCare Plus",
      role: "Operations Manager",
      content: "Working with Cinute InfoMedia was a game-changer for our healthcare practice. Their performance marketing campaigns brought in 150% more qualified leads, and the website conversion rate improved significantly.",
      rating: 5,
      image: "/testimonial-4.jpg"
    }
  ]

  // Structured data for reviews
  const reviewsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cinute-infomedia.com/#organization",
    "review": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5
      },
      "reviewBody": testimonial.content,
      "datePublished": "2024-01-01"
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "reviewCount": testimonials.length,
      "bestRating": 5,
      "worstRating": 5
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsStructuredData) }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our digital transformation services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-brand-gold" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-gold to-brand-cyan rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-cyan bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-gold bg-clip-text text-transparent mb-2">
              5.0
            </div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-purple bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

