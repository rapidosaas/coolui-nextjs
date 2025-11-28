'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function ButtonsPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'primary-button',
      name: 'Primary Button',
      component: (
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
          Primary
        </button>
      ),
      code: `<button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
  Primary
</button>`
    },
    {
      id: 'secondary-button',
      name: 'Secondary Button',
      component: (
        <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium">
          Secondary
        </button>
      ),
      code: `<button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium">
  Secondary
</button>`
    },
    {
      id: 'outline-button',
      name: 'Outline Button',
      component: (
        <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium">
          Outline
        </button>
      ),
      code: `<button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium">
  Outline
</button>`
    },
    {
      id: 'gradient-button',
      name: 'Gradient Button',
      component: (
        <button className="px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium">
          Gradient
        </button>
      ),
      code: `<button className="px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium">
  Gradient
</button>`
    },
    {
      id: 'rounded-button',
      name: 'Rounded Button',
      component: (
        <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium">
          Rounded
        </button>
      ),
      code: `<button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium">
  Rounded
</button>`
    },
    {
      id: 'icon-button',
      name: 'Icon Button',
      component: (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Item
        </button>
      ),
      code: `<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
  Add Item
</button>`
    },
    {
      id: 'large-button',
      name: 'Large Button',
      component: (
        <button className="px-8 py-4 bg-indigo-500 text-white text-lg rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
          Large Button
        </button>
      ),
      code: `<button className="px-8 py-4 bg-indigo-500 text-white text-lg rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
  Large Button
</button>`
    },
    {
      id: 'disabled-button',
      name: 'Disabled Button',
      component: (
        <button className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium" disabled>
          Disabled
        </button>
      ),
      code: `<button className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium" disabled>
  Disabled
</button>`
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
            Button Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} button variations with different styles and states
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
              
              <div className="mb-4 p-8 bg-gray-50 rounded-lg flex items-center justify-center min-h-[120px]">
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
