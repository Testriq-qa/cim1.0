'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and creative strategies to solve complex business challenges.",
      gradient: "from-brand-gold to-primary-600"
    },
    {
      icon: RocketLaunchIcon,
      title: "Results Driven",
      description: "Every campaign, website, and strategy is designed with measurable outcomes and ROI in mind.",
      gradient: "from-brand-purple to-brand-magenta"
    },
    {
      icon: HeartIcon,
      title: "Client Partnership",
      description: "We don't just work for you, we work with you as an extension of your team.",
      gradient: "from-brand-cyan to-brand-teal"
    }
  ]

  const stats = [
    { 
      number: "50+", 
      label: "Projects Completed",
      gradient: "from-brand-gold to-primary-600"
    },
    { 
      number: "25+", 
      label: "Happy Clients",
      gradient: "from-brand-purple to-brand-magenta"
    },
    { 
      number: "3x", 
      label: "Average ROI Increase",
      gradient: "from-brand-cyan to-brand-teal"
    },
    { 
      number: "24/7", 
      label: "Expert Support",
      gradient: "from-brand-orange to-accent-orange-600"
    }
  ]

  const features = [
    "End-to-end digital transformation",
    "AI-powered automation solutions",
    "Performance-first development approach",
    "Data-driven marketing strategies",
    "Scalable and future-ready solutions",
    "Dedicated project management"
  ]

  return (
    <section id="about" className="py-16 px-8 md:px-12 xl:px-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-brand-gold/20 to-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-brand-purple/20 to-brand-magenta/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-cyan/10 to-brand-teal/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Why Choose
            <span className="gradient-text"> Cinute InfoMedia?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            We're not just another digital agency. We're your growth partners, combining technical expertise 
            with creative excellence to deliver results that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">
              Complete Digital Ecosystem Under One Roof
            </h3>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              From initial strategy to final execution, we handle every aspect of your digital presence. 
              No need to juggle multiple vendors or worry about integration issues.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-gold to-brand-cyan mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Start Your Transformation Today
            </motion.a>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 card-hover brand-shadow group"
              >
                <div className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-neutral-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Everything we do is guided by these fundamental principles that ensure your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl brand-shadow border border-gray-100 card-hover group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 brand-shadow`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
