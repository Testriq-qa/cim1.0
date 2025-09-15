"use client";

import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  TrophyIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const AboutUs = () => {
  const values = [
    {
      icon: RocketLaunchIcon,
      title: "Innovation First",
      description: "We stay ahead of digital trends and leverage cutting-edge technology to deliver solutions that give our clients a competitive edge.",
      gradient: "from-brand-blue to-accent-blue-600",
    },
    {
      icon: HeartIcon,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships by delivering measurable results and exceptional service.",
      gradient: "from-brand-purple to-brand-magenta",
    },
    {
      icon: LightBulbIcon,
      title: "Creative Excellence",
      description: "We blend creativity with strategy to create digital experiences that not only look amazing but drive real business growth.",
      gradient: "from-brand-gold to-primary-600",
    },
    {
      icon: TrophyIcon,
      title: "Results Driven",
      description: "Every project is measured by ROI. We focus on conversion optimization, user experience, and data-driven decision making.",
      gradient: "from-brand-teal to-brand-cyan",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      gradient: "from-brand-gold to-primary-600",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      gradient: "from-brand-purple to-brand-magenta",
    },
    {
      number: "24/7",
      label: "Expert Support",
      gradient: "from-brand-teal to-brand-cyan",
    },
    {
      number: "5+",
      label: "Years Experience",
      gradient: "from-brand-blue to-accent-blue-600",
    },
  ];

  const team = [
    {
      name: "Visionary Leaders",
      role: "Strategy & Direction",
      description: "Seasoned entrepreneurs and digital strategists with proven track records in scaling businesses through technology.",
      icon: GlobeAltIcon,
      gradient: "from-brand-gold to-primary-600",
    },
    {
      name: "Technical Experts",
      role: "Development & Engineering",
      description: "Full-stack developers, AI specialists, and automation engineers who turn complex ideas into scalable solutions.",
      icon: CodeBracketIcon,
      gradient: "from-brand-blue to-accent-blue-600",
    },
    {
      name: "Creative Innovators",
      role: "Design & Brand",
      description: "UI/UX designers, brand strategists, and content creators who craft compelling digital experiences.",
      icon: PaintBrushIcon,
      gradient: "from-brand-purple to-brand-magenta",
    },
    {
      name: "Growth Specialists",
      role: "Marketing & Analytics",
      description: "Performance marketers, SEO experts, and data analysts who drive measurable business growth.",
      icon: ChartBarIcon,
      gradient: "from-brand-teal to-brand-cyan",
    },
  ];

  const journey = [
    {
      year: "2019",
      title: "Founded with Vision",
      description: "Started as a small team passionate about helping businesses leverage digital transformation for real growth.",
      gradient: "from-brand-blue to-accent-blue-600",
    },
    {
      year: "2020",
      title: "Rapid Expansion",
      description: "Expanded services to include AI automation and performance marketing, helping clients adapt to digital-first world.",
      gradient: "from-brand-purple to-brand-magenta",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Achieved 98% client satisfaction rate and established partnerships with leading technology providers.",
      gradient: "from-brand-gold to-primary-600",
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the charge in AI-powered digital solutions, serving clients across multiple industries and geographies.",
      gradient: "from-brand-teal to-brand-cyan",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 my-6">
            Transforming Businesses
            <span className="block gradient-text py-3">Through Digital Innovation</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
            At Cinute InfoMedia, we're more than a digital agency – we're your strategic partners 
            in building scalable, conversion-focused digital ecosystems that drive sustainable growth.
          </p>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 brand-shadow-lg border border-white/50 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-brand-gold to-primary-600 rounded-2xl mr-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Our Mission</h3>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              To empower businesses of all sizes with cutting-edge digital solutions that deliver measurable ROI, 
              enhance user experiences, and create lasting competitive advantages in an increasingly digital world.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl brand-shadow border border-white/50 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Core
              <span className="gradient-text"> Values</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 card-hover brand-shadow border border-white/50 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <value.icon className="w-full h-full text-neutral-900" />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 brand-shadow`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our
              <span className="gradient-text"> Journey</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From startup to trusted digital transformation partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 brand-shadow border border-white/50 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent mb-3`}>
                  {milestone.year}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{milestone.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Meet Our
              <span className="gradient-text"> Expert Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to your digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 card-hover brand-shadow border border-white/50 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <member.icon className="w-full h-full text-neutral-900" />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 brand-shadow`}>
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-neutral-700 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-12 brand-shadow-lg border border-white/50"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why Choose
              <span className="gradient-text"> Cinute InfoMedia?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-gold to-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Full-Stack Expertise</h3>
                <p className="text-neutral-600">From strategy to execution, we handle every aspect of your digital transformation.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-magenta rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">ROI-Focused Approach</h3>
                <p className="text-neutral-600">Every solution is designed and optimized for measurable business results.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Cutting-Edge Technology</h3>
                <p className="text-neutral-600">We leverage the latest in AI, automation, and web technologies.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-accent-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Rapid Response Time</h3>
                <p className="text-neutral-600">Quick project starts and responsive ongoing support when you need it.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-orange to-accent-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Transparent Process</h3>
                <p className="text-neutral-600">Clear communication, regular updates, and complete project visibility.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-indigo to-secondary-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Long-Term Partnership</h3>
                <p className="text-neutral-600">We're invested in your ongoing success, not just project completion.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and drive measurable growth.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-brand-gold to-primary-600 hover:from-primary-600 hover:to-brand-gold text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 brand-shadow-lg transform hover:-translate-y-2 hover:scale-105 text-lg"
          >
            Start Your Journey
            <svg
              className="ml-3 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;