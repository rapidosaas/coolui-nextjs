'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function HeroComponentPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'hero-basic',
      name: 'Basic Hero',
      component: (
        <section className="py-16 w-full">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Beautiful Hero Section</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">Clean, centered hero with title and subtitle.</p>
          </div>
        </section>
      ),
      code: `<section className="py-16">
  <div className="max-w-5xl mx-auto text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
      Beautiful Hero Section
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600">
      Clean, centered hero with title and subtitle.
    </p>
  </div>
</section>`
    },
    {
      id: 'hero-with-cta',
      name: 'Hero with CTA',
      component: (
        <section className="py-16 w-full">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Launch Your Product</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">Get started with a powerful call-to-action button.</p>
            <div className="mt-8">
              <a
                href="#get-started"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      ),
      code: `<section className="py-16">
  <div className="max-w-5xl mx-auto text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
      Launch Your Product
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600">
      Get started with a powerful call-to-action button.
    </p>
    <div className="mt-8">
      <a
        href="#get-started"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
      >
        Get Started
      </a>
    </div>
  </div>
</section>`
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hero Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} hero section variations for landing pages
          </p>
        </header>

        <div className="space-y-8">
          {variations.map((variation) => (
            <div
              key={variation.id}
              className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {variation.name}
              </h2>
              
              <div className="mb-4 p-8 bg-gray-50 rounded-lg flex items-center justify-center min-h-[200px]">
                {variation.component}
              </div>

              <button
                onClick={() => toggleCode(variation.id)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                {expandedIndex === variation.id ? 'Hide Code' : 'Show Code'}
              </button>

              {expandedIndex === variation.id && (
                <div className="mt-4 p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{variation.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
