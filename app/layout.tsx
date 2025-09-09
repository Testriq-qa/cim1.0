import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cinute InfoMedia | Complete Digital Transformation Services',
  description: 'Transform your business with Cinute InfoMedia comprehensive digital services: conversion-driven websites, brand identity, SEO, social media marketing, performance ads, AI chatbots & automation workflows.',
  keywords: 'digital marketing agency, web development, SEO services, social media marketing, performance marketing, AI chatbots, brand identity, UI/UX design, Next.js development, conversion optimization, Cinute InfoMedia',
  authors: [{ name: 'Cinute InfoMedia' }],
  creator: 'Cinute InfoMedia',
  publisher: 'Cinute InfoMedia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cinute-infomedia.com',
    siteName: 'Cinute InfoMedia',
    title: 'Cinute InfoMedia | Complete Digital Transformation Services',
    description: 'Leading digital agency offering web development, SEO, social media marketing, performance ads, AI automation & brand identity services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cinute InfoMedia - Digital Growth Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinute InfoMedia | Complete Digital Services',
    description: 'Transform your business with our comprehensive digital services & AI-powered solutions.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cinute-infomedia.com" />
        <meta name="theme-color" content="#fab900" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cinute InfoMedia",
              "description": "Leading digital marketing agency providing web development, SEO, social media marketing, and AI automation services",
              "url": "https://cinute-infomedia.com",
              "logo": "https://cinute-infomedia.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://linkedin.com/company/cinute-infomedia",
                "https://twitter.com/cinute_infomedia"
              ],
              "services": [
                "Web Development",
                "SEO Services",
                "Social Media Marketing",
                "Performance Marketing",
                "Brand Identity Design",
                "AI Chatbot Development",
                "Marketing Automation"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
