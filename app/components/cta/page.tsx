'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function CtaComponentPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'cta-banner',
      name: 'CTA Banner',
      component: (
        <section className="py-16 w-full">
          <div className="rounded-2xl bg-blue-600 text-white p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-2 text-blue-100">Join thousands of satisfied customers today.</p>
            <div className="mt-6">
              <a
                href="#get-started"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      ),
      code: `<section className="py-16">
  <div className="rounded-2xl bg-blue-600 text-white p-10 text-center">
    <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
    <p className="mt-2 text-blue-100">Join thousands of satisfied customers today.</p>
    <div className="mt-6">
      <a
        href="#get-started"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50"
      >
        Get Started
      </a>
    </div>
  </div>
</section>`
    },
    {
      id: 'cta-simple',
      name: 'Simple CTA',
      component: (
        <section className="py-16 w-full">
          <div className="rounded-2xl bg-gray-900 text-white p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Start your free trial</h2>
            <div className="mt-6">
              <a
                href="#trial"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow hover:bg-gray-100"
              >
                Try it now
              </a>
            </div>
          </div>
        </section>
      ),
      code: `<section className="py-16">
  <div className="rounded-2xl bg-gray-900 text-white p-10 text-center">
    <h2 className="text-2xl md:text-3xl font-bold">Start your free trial</h2>
    <div className="mt-6">
      <a
        href="#trial"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow hover:bg-gray-100"
      >
        Try it now
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
            CTA Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} call-to-action banner variation{variations.length === 1 ? '' : 's'}
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
