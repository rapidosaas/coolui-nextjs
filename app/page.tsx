'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ComponentCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
  icon: string;
  color: string;
}

export default function Home() {
  useEffect(() => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (!scrollContainer) return;

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (wheelEvent.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += wheelEvent.deltaY;
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false } as AddEventListenerOptions);
    return () => scrollContainer.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollLeft = () => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const categories: ComponentCategory[] = [
    {
      name: 'Hero',
      slug: 'hero',
      description: 'Reusable hero section with title',
      count: 2,
      icon: '🏔️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Features',
      slug: 'features',
      description: 'Feature grid with 2–3 columns',
      count: 2,
      icon: '🧩',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Testimonials',
      slug: 'testimonials',
      description: 'Quotes with author and role',
      count: 2,
      icon: '💬',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'CTA',
      slug: 'cta',
      description: 'Call-to-action banner component',
      count: 2,
      icon: '🎯',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Buttons',
      slug: 'buttons',
      description: 'Various button styles and states',
      count: 8,
      icon: '🔘',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Cards',
      slug: 'cards',
      description: 'Different card layouts and designs',
      count: 6,
      icon: '🃏',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Badges',
      slug: 'badges',
      description: 'Status and label badges',
      count: 7,
      icon: '🏷️',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Inputs',
      slug: 'inputs',
      description: 'Form input variations',
      count: 5,
      icon: '✏️',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Alerts',
      slug: 'alerts',
      description: 'Notification and alert messages',
      count: 5,
      icon: '⚠️',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Avatars',
      slug: 'avatars',
      description: 'User avatar components',
      count: 6,
      icon: '👤',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const templates: ComponentCategory[] = [
    {
      name: 'Landing Pages',
      slug: 'landing-pages',
      description: 'Full landing page templates',
      count: 4,
      icon: '🏠',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Dashboards',
      slug: 'dashboards',
      description: 'Admin and analytics dashboards',
      count: 0,
      icon: '📊',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Authentication',
      slug: 'authentication',
      description: 'Login and signup pages',
      count: 0,
      icon: '🔐',
      color: 'from-violet-500 to-violet-600'
    },
    {
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Product and checkout pages',
      count: 0,
      icon: '🛒',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Pricing',
      slug: 'pricing',
      description: 'Pricing table templates',
      count: 0,
      icon: '💰',
      color: 'from-amber-500 to-amber-600'
    },
    {
      name: 'Blog',
      slug: 'blog',
      description: 'Blog and article layouts',
      count: 0,
      icon: '📝',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* GitHub Star Banner */}
      <div className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base">
            If you like CoolUI, give us a ⭐ on{' '}
            <a 
              href="https://github.com/rapidosaas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-yellow-300 transition-colors"
            >
              GitHub
            </a>
            {' '}— THX!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <header className="mb-3 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            CoolUI
          </h1>
          <p className="text-xl text-gray-600">
            Free Beautiful React & Tailwind CSS Basic Components
          </p>
        </header>

        <section className="py-8 md:py-16">
          <div className="rounded-2xl bg-linear-to-r from-purple-600 to-blue-600 text-white p-6 md:p-10">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:justify-between gap-6 md:gap-8">
              <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6">
                <img 
                  src="/icon.png" 
                  alt="Figma Plugin Icon" 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-lg shadow-lg shrink-0"
                />
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Figma Plugin Coming Soon!</h2>
                  <p className="mt-1 md:mt-2 text-sm md:text-base text-purple-100">
                    Convert React (Tailwind) to Figma Design - It&apos;s free!
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto md:shrink-0">
                <a
                  href="https://www.figma.com/community/plugin/1575980360466192568/react-tailwind-to-design"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-white text-purple-700 font-semibold shadow hover:bg-purple-50 transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  Get Plugin
                </a>
                <a
                  href="https://fr.tipeee.com/nazimboudeffa"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-purple-700 text-white font-semibold border-2 border-white hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  ❤️ Donate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section - Horizontal Scroll */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Templates
            </h2>
            <p className="text-gray-600">
              Complete page templates made with the Basic Components
            </p>
          </div>
          <div className="relative -mx-8 px-8 group/scroll">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 md:w-16 bg-linear-to-r from-purple-200 to-transparent items-center justify-start hover:from-purple-300 transition-colors"
              aria-label="Scroll left"
            >
              <div className="ml-2 md:ml-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-600 shadow-xl flex items-center justify-center hover:bg-purple-700 transition-colors border border-purple-500">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            
            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 md:w-16 bg-linear-to-l from-purple-200 to-transparent items-center justify-end hover:from-purple-300 transition-colors"
              aria-label="Scroll right"
            >
              <div className="mr-2 md:mr-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-600 shadow-xl flex items-center justify-center hover:bg-purple-700 transition-colors border border-purple-500">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <div className="horizontal-scroll flex items-center gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
              {templates.map((template) => (
                <Link
                  key={template.slug}
                  href={`/templates/${template.slug}`}
                  className="group block shrink-0 snap-start w-80"
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                    <div className={`w-16 h-16 bg-linear-to-br ${template.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                      {template.icon}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {template.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-500">
                        {template.count} templates
                      </span>
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Basic Components Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Basic Components
            </h2>
            <p className="text-gray-600">
              Essential UI components for building your application
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/components/${category.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-linear-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                    {category.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {category.count} variations
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300">
          <div className="text-center">
            <p className="text-gray-600">
              Go back to {' '}
              <a 
                href="https://codewithadu.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                codewithadu.de
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
