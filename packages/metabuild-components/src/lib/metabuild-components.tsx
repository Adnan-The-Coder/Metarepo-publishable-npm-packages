import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Star, Menu, X, ArrowRight, Play, Users, Zap, Shield, Globe } from 'lucide-react';

// Hero Component with gradient background and CTA
export function Hero({ 
  title = "Build Amazing Products Faster",
  subtitle = "The complete toolkit for modern web development. Ship beautiful, responsive landing pages in minutes.",
  primaryCTA = "Get Started",
  secondaryCTA = "View Demo",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  backgroundVariant = "gradient"
  }) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ${
      backgroundVariant === 'gradient' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : 'bg-white'
    }`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onPrimaryClick}
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              {primaryCTA}
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {secondaryCTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Grid Component
export function FeatureGrid({ 
  title = "Everything You Need",
  subtitle = "Powerful features to build your next project",
  features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for performance and speed" },
    { icon: Shield, title: "Secure by Default", description: "Built with security best practices" },
    { icon: Globe, title: "Global Scale", description: "Deploy worldwide in seconds" },
    { icon: Users, title: "Team Collaboration", description: "Work together seamlessly" }
  ]
  }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Component
export function PricingSection({ 
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that's right for you",
  plans = [
    { name: "Starter", price: "$29", period: "/month", features: ["10 Projects", "5GB Storage", "Email Support", "Basic Analytics"], popular: false },
    { name: "Pro", price: "$79", period: "/month", features: ["Unlimited Projects", "50GB Storage", "Priority Support", "Advanced Analytics", "Custom Domain"], popular: true },
    { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "Dedicated Support", "Custom Integrations", "SLA Guarantee", "Advanced Security"], popular: false }
  ]
  }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl transform scale-105' 
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className={`${plan.popular ? 'text-blue-200' : 'text-blue-600'} mr-3 flex-shrink-0`} size={20} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
export function Testimonials({ 
  title = "Loved by Thousands",
  subtitle = "See what our customers are saying",
  testimonials = [
    { name: "Sarah Johnson", role: "CEO at TechCorp", content: "This platform transformed how we build products. Highly recommended!", avatar: "SJ", rating: 5 },
    { name: "Michael Chen", role: "Designer", content: "The best tool I've used. Clean, fast, and powerful.", avatar: "MC", rating: 5 },
    { name: "Emily Rodriguez", role: "Developer", content: "Incredible developer experience. Saves us hours every week.", avatar: "ER", rating: 5 }
  ]
  }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
export function CTASection({ 
  title = "Ready to Get Started?",
  subtitle = "Join thousands of satisfied customers today",
  buttonText = "Start Free Trial",
  onButtonClick = () => {}
  }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-blue-100 mb-8">{subtitle}</p>
        <button 
          onClick={onButtonClick}
          className="group px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          {buttonText}
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" size={24} />
        </button>
      </div>
    </section>
  );
}

// Navbar Component
export function Navbar({ 
  logo = "Brand",
  links = ["Features", "Pricing", "About", "Contact"],
  ctaText = "Get Started",
  onCtaClick = () => {}
  }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {logo}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, idx) => (
              <a 
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            <button 
              onClick={onCtaClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              {ctaText}
            </button>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {links.map((link, idx) => (
              <a 
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <button 
              onClick={() => { onCtaClick(); setIsOpen(false); }}
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Footer Component
export function Footer({ 
  brandName = "YourBrand",
  description = "Building the future of web development",
  columns = [
    { title: "Product", links: ["Features", "Pricing", "Security", "Enterprise"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] }
  ]
  }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">{brandName}</div>
            <p className="text-gray-400 mb-6">{description}</p>
          </div>
          {columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Demo Page
export default function MetabuildComponents() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <PricingSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}