'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function FeaturesComponentPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'features-3col',
      name: '3-Column Features Grid',
      component: (
        <section className="py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
              <p className="mt-1 text-gray-600">Optimized sections for speed.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl mb-2">♿</div>
              <h3 className="text-lg font-semibold text-gray-900">Accessible</h3>
              <p className="mt-1 text-gray-600">Focusable controls and readable text.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl mb-2">🧱</div>
              <h3 className="text-lg font-semibold text-gray-900">Composable</h3>
              <p className="mt-1 text-gray-600">Use with different layouts.</p>
            </div>
          </div>
        </section>
      ),
      code: `<section className="py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-2xl mb-2">⚡</div>
      <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
      <p className="mt-1 text-gray-600">Optimized sections for speed.</p>
    </div>
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-2xl mb-2">♿</div>
      <h3 className="text-lg font-semibold text-gray-900">Accessible</h3>
      <p className="mt-1 text-gray-600">Focusable controls and readable text.</p>
    </div>
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-2xl mb-2">🧱</div>
      <h3 className="text-lg font-semibold text-gray-900">Composable</h3>
      <p className="mt-1 text-gray-600">Use with different layouts.</p>
    </div>
  </div>
</section>`
    },
    {
      id: 'features-2col',
      name: '2-Column Features Grid',
      component: (
        <section className="py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Simple Layout</h3>
              <p className="mt-1 text-gray-600">Whitespace-first, distraction-free sections.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Readable Type</h3>
              <p className="mt-1 text-gray-600">Comfortable line-length and contrast.</p>
            </div>
          </div>
        </section>
      ),
      code: `<section className="py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Simple Layout</h3>
      <p className="mt-1 text-gray-600">Whitespace-first, distraction-free sections.</p>
    </div>
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Readable Type</h3>
      <p className="mt-1 text-gray-600">Comfortable line-length and contrast.</p>
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
            Features Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} feature grid variations with 2–3 columns
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
