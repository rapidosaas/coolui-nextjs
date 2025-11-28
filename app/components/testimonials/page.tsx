'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function TestimonialsComponentPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'testimonials-grid',
      name: 'Testimonials Grid',
      component: (
        <section className="py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800 text-lg">"This component made it simple."</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                <span className="font-medium text-gray-900">Alex</span> — Founder
              </figcaption>
            </figure>
            <figure className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800 text-lg">"Clean, flexible, and easy to reuse."</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                <span className="font-medium text-gray-900">Jamie</span> — Designer
              </figcaption>
            </figure>
          </div>
        </section>
      ),
      code: `<section className="py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <figure className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <blockquote className="text-gray-800 text-lg">
        "This component made it simple."
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        <span className="font-medium text-gray-900">Alex</span> — Founder
      </figcaption>
    </figure>
    <figure className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <blockquote className="text-gray-800 text-lg">
        "Clean, flexible, and easy to reuse."
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        <span className="font-medium text-gray-900">Jamie</span> — Designer
      </figcaption>
    </figure>
  </div>
</section>`
    },
    {
      id: 'testimonial-single',
      name: 'Single Testimonial',
      component: (
        <section className="py-12 w-full max-w-2xl mx-auto">
          <figure className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center">
            <blockquote className="text-gray-800 text-xl italic">"Outstanding product with incredible support."</blockquote>
            <figcaption className="mt-4 text-sm text-gray-600">
              <span className="font-medium text-gray-900">Taylor Morgan</span> — Product Manager
            </figcaption>
          </figure>
        </section>
      ),
      code: `<section className="py-12">
  <figure className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center">
    <blockquote className="text-gray-800 text-xl italic">
      "Outstanding product with incredible support."
    </blockquote>
    <figcaption className="mt-4 text-sm text-gray-600">
      <span className="font-medium text-gray-900">Taylor Morgan</span> — Product Manager
    </figcaption>
  </figure>
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
            Testimonials Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} testimonial variations with quotes and author info
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
