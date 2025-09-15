"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Conversion-Driven Websites & Web Apps",
      positioning:
        "Build fast, secure and conversion focused digital experiences.",
      description:
        "We design and develop responsive websites and web apps that load fast, rank well, and turn visitors into leads and customers. From landing pages to full web apps, our work is performance-first and built to scale.",
      services: [
        "Custom Web Development (React, Next.js, Node, Laravel, Django)",
        "High-Converting Landing Pages (CRO-first)",
        "E-commerce Stores (Shopify, WooCommerce, custom)",
        "API Development & Integrations (REST, GraphQL)",
        "Performance Optimization & Core Web Vitals",
        "SSL, Security & Ongoing Maintenance",
      ],
      gradient: "from-brand-blue to-accent-blue-600",
      bgGradient: "from-accent-blue-50 to-blue-100",
      iconBg: "bg-gradient-to-r from-brand-blue to-accent-blue-600",
    },
    {
      icon: PaintBrushIcon,
      title: "Brand Identity & Creative Assets",
      positioning: "Design that looks premium and performs.",
      description:
        "We craft cohesive brand systems and product interfaces that build trust, improve usability and drive action from logos to full UI systems and high-impact video.",
      services: [
        "Brand Identity & Visual Systems",
        "UI/UX Design - Wireframes, prototypes, user flows",
        "Graphic Design & Collateral",
        "Social Creative Templates",
        "Video Editing & Motion Graphics",
        "Social Media Edits - Reels, Shorts, TikTok-style edits",
      ],
      gradient: "from-brand-purple to-brand-magenta",
      bgGradient: "from-purple-50 to-pink-100",
      iconBg: "bg-gradient-to-r from-brand-purple to-brand-magenta",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Organic Growth & SEO",
      positioning: "Win long-term traffic without burning ad budgets.",
      description:
        "From technical fixes to content strategy and authority building, we help your site rank for keywords that convert delivering traffic that compounds over time.",
      services: [
        "SEO Audit & Action Plan",
        "Keyword Research & Content Strategy",
        "On-Page SEO & Technical Fixes",
        "Link Building & Digital PR",
        "Local SEO & Google Business Profile Optimization",
        "E-commerce SEO & Product Page Optimization",
      ],
      gradient: "from-brand-teal to-brand-cyan",
      bgGradient: "from-teal-50 to-cyan-100",
      iconBg: "bg-gradient-to-r from-brand-teal to-brand-cyan",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Social Media Marketing & Management",
      positioning: "Create, engage, and grow your community.",
      description:
        "We create content that resonates, manage publishing, and build communities that convert. From organic storytelling to creator collaborations, we make brands worth following.",
      services: [
        "Social Strategy & Monthly Content Calendar",
        "Short-Form Video (Reels, Shorts) & Long-Form Content",
        "Static & Carousel Post Design",
        "Community Management (comments, DMs, UGC)",
        "Creator & Influencer Partnerships",
        "Social Listening, Trend Surfing & Performance Insights",
      ],
      gradient: "from-brand-orange to-accent-orange-600",
      bgGradient: "from-orange-50 to-red-100",
      iconBg: "bg-gradient-to-r from-brand-orange to-accent-orange-600",
    },
    {
      icon: ChartBarIcon,
      title: "Performance Marketing & Ads",
      positioning: "Every rupee tracked, optimized, and scaled.",
      description:
        "ROI-first campaign planning, creative testing, and precise targeting across platforms — we scale what works and cut what doesn't to maximize ROI.",
      services: [
        "Meta Ads (Facebook & Instagram)",
        "Google Ads (Search, Display, YouTube)",
        "LinkedIn Ads & B2B Demand Gen",
        "Retargeting & Lookalike Audiences",
        "Creative A/B Testing & Lead Funnel Strategy",
        "Campaign Performance Reports & Analytics Setup",
      ],
      gradient: "from-brand-gold to-primary-600",
      bgGradient: "from-yellow-50 to-amber-100",
      iconBg: "bg-gradient-to-r from-brand-gold to-primary-600",
    },
    {
      icon: CogIcon,
      title: "Automations & AI-Workflows",
      positioning: "Run your growth engine on autopilot.",
      description:
        "Automate repetitive tasks, speed up lead response, and create predictable funnels — from first touch to closed deal - using CRM, WhatsApp, scripts and ad-level automations.",
      services: [
        "CRM Setup, Integration & Workflow Automation",
        "Full-Funnel Lead Nurturing (Email + WhatsApp)",
        "Meta DPA & Smart Retargeting Automations",
        "Google Apps Script & Sheets Automations",
        "WhatsApp (WACA) Automations & SMS Flows",
        "Scheduled Reporting Dashboards & Alerts",
      ],
      gradient: "from-brand-indigo to-secondary-700",
      bgGradient: "from-indigo-50 to-purple-100",
      iconBg: "bg-gradient-to-r from-brand-indigo to-secondary-700",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "AI-Powered Chatbot Setup & Integration",
      positioning:
        "Instant responses, qualified leads, and higher conversions - 24/7.",
      description:
        "Deploy intelligent chat assistants that can sell, qualify, collect feedback and enrich lead data across web and messaging channels in multiple languages.",
      services: [
        "AI Sales Agents - pitch products & send payment links",
        "Multilingual Chatbots - English + regional Indian languages",
        "AI Surveys & Feedback Collection",
        "Lead Enrichment Bots - auto-verify & enrich profiles",
        "CRM Integration & Qualified Lead Push",
        "24/7 Customer Support Automation",
      ],
      gradient: "from-brand-cyan to-brand-teal",
      bgGradient: "from-cyan-50 to-teal-100",
      iconBg: "bg-gradient-to-r from-brand-cyan to-brand-teal",
    },
    {
      icon: UserGroupIcon,
      title: "Additional Support Services",
      positioning:
        "Smart operational support that frees your team to sell and scale.",
      description:
        "We handle the repetitive, data-heavy and research work so your core team can focus on strategy and growth. From clean lead data to market insights and day-to-day admin.",
      services: [
        "Data Processing & Analysis - web scraping, lead enrichment",
        "Virtual Assistance & Support - admin, scheduling, research",
        "Email triage & task management",
        "Market research & competitive analysis",
        "Data cleaning & actionable insights",
        "Calendar & travel scheduling support",
      ],
      gradient: "from-neutral-600 to-neutral-800",
      bgGradient: "from-gray-50 to-slate-100",
      iconBg: "bg-gradient-to-r from-neutral-600 to-neutral-800",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-neutral-50 to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Complete Digital
            <span className="block gradient-text"> Transformation</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end digital services
            powered by cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 card-hover border border-white/50 group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <service.icon className="w-full h-full text-neutral-900" />
              </div>

              {/* Icon & Title */}
              <div className="flex items-start mb-6 relative z-10">
                <div
                  className={`p-4 rounded-2xl ${service.iconBg} text-white mr-4 group-hover:scale-110 transition-transform duration-300 brand-shadow`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.positioning}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Services List */}
              <div className="space-y-3 relative z-10">
                <h4 className="font-semibold text-neutral-900 mb-4">
                  Key Services:
                </h4>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 relative z-10">
                <a
                  href="#contact"
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:underline group-hover:translate-x-2 transition-transform duration-300`}
                >
                  Explore This Service
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row justify-around bg-gradient-to-r from-white to-gray-50 p-10 rounded-3xl brand-shadow-lg border border-white/50"
        >
          <div className="flex justify-center flex-col items-center ">
            <p className="text-lg text-neutral-700 mb-4">
              Looking for{" "}
              <span className="font-bold gradient-text-secondary">
                Software Testing
              </span>{" "}
              services as well?
            </p>
            <p className="text-neutral-600">
              Check out our trusted partner:
              <Link
                href="https://testriq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold gradient-text-primary hover:underline ml-2"
              >
                Testriq QA LAB
              </Link>
            </p>
            <Link href="https://testriq.com/">
              <Image
                title="Testriq Logo"
                src="/Testriq_Logo.png"
                alt="Testriq_Logo"
                className="mt-2"
                height={100}
                width={120}
              />
            </Link>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <p className="text-lg text-neutral-700 mb-4">
              Looking for{" "}
              <span className="font-bold gradient-text-secondary">
                Software Training
              </span>{" "}
              Institute as well?
            </p>
            <p className="text-neutral-600">
              Check out our trusted partner:
              <Link
                href="https://cinutedigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold gradient-text-primary hover:underline ml-2"
              >
                CDPL
              </Link>
            </p>
            <Link href="https://cinutedigital.com/">
              <Image
                title="CDPL Logo"
                src="/CDPL_Logo.webp"
                alt="CDPL_Logo"
                className="mt-2"
                height={50}
                width={60}
              />
            </Link>
          </div>
        </motion.div>
        <section className="bg-white my-8 py-12 rounded-3xl brand-shadow-lg border border-white/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Discover Our Full Suite of Digital Growth Solutions
            </h2>
            <p className="text-gray-600 mx-auto max-w-3xl mb-6">
              From cutting-edge Web Development and Brand Identity to AI-powered
              Chatbots, Automation Workflows, Performance Marketing, and Organic
              SEO - our services are designed to accelerate your digital growth
              and boost conversions.
            </p>
            <a
              href="/path-to-your-brochure.pdf"
              download
              className="inline-block px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-all"
            >
              📥 Download Brochure
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
