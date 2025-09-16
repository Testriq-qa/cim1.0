'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/solid'

const Hero = () => {
  const services = [
    { icon: CodeBracketIcon, text: "Web Development", color: "from-brand-blue to-accent-blue-600" },
    { icon: PaintBrushIcon, text: "Brand Identity", color: "from-brand-purple to-brand-magenta" },
    { icon: MagnifyingGlassIcon, text: "SEO & Growth", color: "from-brand-teal to-accent-cyan-600" },
    { icon: ChatBubbleLeftRightIcon, text: "Social Media", color: "from-brand-orange to-accent-orange-600" },
    { icon: ChartBarIcon, text: "Performance Ads", color: "from-brand-gold to-primary-600" },
    { icon: CogIcon, text: "AI Automation", color: "from-brand-indigo to-secondary-700" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden py-16 px-6 md:px-12 xl:px-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Brand dots pattern */}
        {/* <div className="absolute top-20 left-20 w-2 h-2 bg-brand-gold rounded-full opacity-40 animate-pulse-slow"></div> */}
        <div className="absolute top-40 right-32 w-3 h-3 bg-brand-cyan rounded-full opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-brand-purple rounded-full opacity-40 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-brand-orange rounded-full opacity-40 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Transform Your
            <span className="block bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-purple bg-clip-text text-transparent animate-gradient pb-2">
              Digital Future
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From conversion-driven websites to AI-powered automation, we build 
            <span className="text-brand-gold font-semibold"> complete digital ecosystems </span>
            that drive growth, engagement, and measurable ROI for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="#contact"
              className="group bg-gradient-to-r from-brand-gold to-primary-600 hover:from-primary-600 hover:to-brand-gold text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 brand-shadow-lg transform hover:-translate-y-2 hover:scale-105 flex items-center text-lg"
            >
              Start Your Transformation
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            
            
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer brand-shadow"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium text-center leading-tight">{service.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-cyan bg-clip-text text-transparent mb-2">50+</span>
              <span className="text-white text-center">Projects Delivered</span>
            </div> */}
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-4xl font-bold bg-gradient-to-r from-brand-indigo to-brand-indigo bg-clip-text text-transparent mb-2">24/7</span>
              <span className="text-white text-center">Expert Support</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-purple bg-clip-text text-transparent mb-2">98%</span>
              <span className="text-white text-center">Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-brand-gold to-brand-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
