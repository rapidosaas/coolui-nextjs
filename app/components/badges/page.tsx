'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function BadgesPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'status-badges',
      name: 'Status Badges',
      component: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Success
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            Error
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            Warning
          </span>
        </div>
      ),
      code: `<div className="flex gap-2">
  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
    Success
  </span>
  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
    Error
  </span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
    Warning
  </span>
</div>`
    },
    {
      id: 'solid-badges',
      name: 'Solid Badges',
      component: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
            Primary
          </span>
          <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
            Secondary
          </span>
          <span className="px-3 py-1 bg-gray-500 text-white rounded-full text-sm font-medium">
            Neutral
          </span>
        </div>
      ),
      code: `<div className="flex gap-2">
  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
    Primary
  </span>
  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
    Secondary
  </span>
  <span className="px-3 py-1 bg-gray-500 text-white rounded-full text-sm font-medium">
    Neutral
  </span>
</div>`
    },
    {
      id: 'outline-badges',
      name: 'Outline Badges',
      component: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-medium">
            Blue
          </span>
          <span className="px-3 py-1 border-2 border-green-500 text-green-500 rounded-full text-sm font-medium">
            Green
          </span>
          <span className="px-3 py-1 border-2 border-red-500 text-red-500 rounded-full text-sm font-medium">
            Red
          </span>
        </div>
      ),
      code: `<div className="flex gap-2">
  <span className="px-3 py-1 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-medium">
    Blue
  </span>
  <span className="px-3 py-1 border-2 border-green-500 text-green-500 rounded-full text-sm font-medium">
    Green
  </span>
  <span className="px-3 py-1 border-2 border-red-500 text-red-500 rounded-full text-sm font-medium">
    Red
  </span>
</div>`
    },
    {
      id: 'dot-badges',
      name: 'Dot Badges',
      component: (
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>{' '}
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>{' '}
            Away
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>{' '}
            Offline
          </span>
        </div>
      ),
      code: `<div className="flex gap-3">
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
    Online
  </span>
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
    Away
  </span>
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
    Offline
  </span>
</div>`
    },
    {
      id: 'number-badges',
      name: 'Number Badges',
      component: (
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Messages{' '}
            <span className="px-2 py-0.5 bg-blue-500 text-white rounded-full text-xs">5</span>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            Alerts{' '}
            <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">12</span>
          </span>
        </div>
      ),
      code: `<div className="flex gap-3">
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
    Messages
    <span className="px-2 py-0.5 bg-blue-500 text-white rounded-full text-xs">5</span>
  </span>
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
    Alerts
    <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">12</span>
  </span>
</div>`
    },
    {
      id: 'removable-badges',
      name: 'Removable Badges',
      component: (
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            JavaScript{' '}
            <button className="hover:bg-blue-200 rounded-full p-0.5 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            React{' '}
            <button className="hover:bg-green-200 rounded-full p-0.5 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      ),
      code: `<div className="flex gap-2">
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
    JavaScript
    <button className="hover:bg-blue-200 rounded-full p-0.5 transition-colors">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>
</div>`
    },
    {
      id: 'gradient-badges',
      name: 'Gradient Badges',
      component: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
            Premium
          </span>
          <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
            Pro
          </span>
          <span className="px-3 py-1 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
            Hot
          </span>
        </div>
      ),
      code: `<div className="flex gap-2">
  <span className="px-3 py-1 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
    Premium
  </span>
  <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
    Pro
  </span>
  <span className="px-3 py-1 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
    Hot
  </span>
</div>`
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
            Badge Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} badge variations for status and labels
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
