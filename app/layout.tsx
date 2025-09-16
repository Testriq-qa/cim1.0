import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

export const metadata: Metadata = {
  title: {
    default: 'Cinute InfoMedia | Complete Digital Transformation Services',
    template: '%s | Cinute InfoMedia'
  },
  description: 'Transform your business with Cinute InfoMedia comprehensive digital services: conversion-driven websites, brand identity, SEO, social media marketing, performance ads, AI chatbots & automation workflows. Expert digital agency delivering measurable ROI.',
  keywords: [
    'digital marketing agency',
    'web development services',
    'SEO optimization',
    'social media marketing',
    'performance marketing',
    'AI chatbots',
    'brand identity design',
    'UI/UX design',
    'Next.js development',
    'conversion optimization',
    'marketing automation',
    'digital transformation',
    'Cinute InfoMedia',
    'business growth',
    'online presence',
    'digital strategy'
  ],
  authors: [{ name: 'Cinute InfoMedia', url: 'https://cinute-infomedia.com' }],
  creator: 'Cinute InfoMedia',
  publisher: 'Cinute InfoMedia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cinute-infomedia.com',
    siteName: 'Cinute InfoMedia',
    title: 'Cinute InfoMedia | Complete Digital Transformation Services',
    description: 'Leading digital agency offering web development, SEO, social media marketing, performance ads, AI automation & brand identity services. Transform your business with measurable results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cinute InfoMedia - Complete Digital Transformation Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cinute_infomedia',
    creator: '@cinute_infomedia',
    title: 'Cinute InfoMedia | Complete Digital Services',
    description: 'Transform your business with our comprehensive digital services & AI-powered solutions. Expert team delivering measurable ROI.',
    images: {
      url: '/og-image.jpg',
      alt: 'Cinute InfoMedia - Digital Transformation Services',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  alternates: {
    canonical: 'https://cinute-infomedia.com',
  },
  category: 'Digital Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and Browser Configuration */}
        <meta name="theme-color" content="#fab900" />
        <meta name="msapplication-TileColor" content="#fab900" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cinute-infomedia.com/#organization",
                  "name": "Cinute InfoMedia",
                  "alternateName": "Cinute InfoMedia Digital Agency",
                  "description": "Leading digital marketing agency providing comprehensive web development, SEO, social media marketing, performance advertising, and AI automation services",
                  "url": "https://cinute-infomedia.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://cinute-infomedia.com/logo-512.png",
                    "width": 512,
                    "height": 512
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://cinute-infomedia.com/og-image.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-XXXXXXXXXX",
                      "contactType": "customer service",
                      "availableLanguage": ["English", "Hindi"],
                      "areaServed": "IN"
                    },
                    {
                      "@type": "ContactPoint",
                      "email": "info@cinute-infomedia.com",
                      "contactType": "customer service"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "Your State",
                    "addressLocality": "Your City"
                  },
                  "sameAs": [
                    "https://linkedin.com/company/cinute-infomedia",
                    "https://twitter.com/cinute_infomedia",
                    "https://facebook.com/cinute.infomedia",
                    "https://instagram.com/cinute_infomedia"
                  ],
                  "foundingDate": "2020",
                  "numberOfEmployees": "10-50",
                  "slogan": "Complete Digital Transformation Services"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cinute-infomedia.com/#website",
                  "url": "https://cinute-infomedia.com",
                  "name": "Cinute InfoMedia",
                  "description": "Complete Digital Transformation Services",
                  "publisher": {
                    "@id": "https://cinute-infomedia.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://cinute-infomedia.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Digital Marketing Services",
                  "provider": {
                    "@id": "https://cinute-infomedia.com/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Web Development",
                          "description": "Custom website development with modern technologies"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "SEO Services",
                          "description": "Search engine optimization for better visibility"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Social Media Marketing",
                          "description": "Comprehensive social media strategy and management"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Performance Marketing",
                          "description": "Data-driven advertising campaigns for maximum ROI"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Brand Identity Design",
                          "description": "Complete brand identity and visual design services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Automation",
                          "description": "AI-powered chatbots and marketing automation solutions"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics (replace with your tracking ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Skip to main content
        </a>
        
        <div id="main-content">
          <Header />
          {children}
          <Footer />
        </div>
{/* Tawk.to Live Chat Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68c8fdff1b7703192745cc0e/1j58i0c27';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* Schema.org breadcrumb will be added by individual pages */}
      </body>
    </html>
  )
}
