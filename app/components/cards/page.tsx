'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function CardsPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'basic-card',
      name: 'Basic Card',
      component: (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm w-full">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
          <p className="text-gray-600">This is a simple card component with shadow and border.</p>
        </div>
      ),
      code: `<div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm">
  <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
  <p className="text-gray-600">This is a simple card component with shadow and border.</p>
</div>`
    },
    {
      id: 'card-with-image',
      name: 'Card with Image',
      component: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full">
          <div className="h-48 bg-linear-to-r from-blue-400 to-purple-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Image Card</h3>
            <p className="text-gray-600">Card with a colorful header image.</p>
          </div>
        </div>
      ),
      code: `<div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
  <div className="h-48 bg-linear-to-r from-blue-400 to-purple-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">Image Card</h3>
    <p className="text-gray-600">Card with a colorful header image.</p>
  </div>
</div>`
    },
    {
      id: 'card-with-button',
      name: 'Card with Button',
      component: (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm w-full">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Action Card</h3>
          <p className="text-gray-600 mb-4">This card includes an action button.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      ),
      code: `<div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm">
  <h3 className="text-xl font-bold text-gray-800 mb-2">Action Card</h3>
  <p className="text-gray-600 mb-4">This card includes an action button.</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    Learn More
  </button>
</div>`
    },
    {
      id: 'gradient-card',
      name: 'Gradient Card',
      component: (
        <div className="p-6 bg-linear-to-br from-pink-500 to-orange-500 rounded-xl shadow-lg max-w-sm w-full">
          <h3 className="text-xl font-bold text-white mb-2">Gradient Card</h3>
          <p className="text-white/90">A card with a beautiful gradient background.</p>
        </div>
      ),
      code: `<div className="p-6 bg-linear-to-br from-pink-500 to-orange-500 rounded-xl shadow-lg max-w-sm">
  <h3 className="text-xl font-bold text-white mb-2">Gradient Card</h3>
  <p className="text-white/90">A card with a beautiful gradient background.</p>
</div>`
    },
    {
      id: 'profile-card',
      name: 'Profile Card',
      component: (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm w-full text-center">
          <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">John Doe</h3>
          <p className="text-gray-600 mb-4">Software Developer</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            View Profile
          </button>
        </div>
      ),
      code: `<div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm text-center">
  <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
    JD
  </div>
  <h3 className="text-xl font-bold text-gray-800 mb-1">John Doe</h3>
  <p className="text-gray-600 mb-4">Software Developer</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    View Profile
  </button>
</div>`
    },
    {
      id: 'hover-card',
      name: 'Hover Card',
      component: (
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 max-w-sm w-full hover:shadow-2xl hover:scale-105 transition-all cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Hover Me</h3>
          <p className="text-gray-600">This card has hover effects that scale and enhance shadow.</p>
        </div>
      ),
      code: `<div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 max-w-sm hover:shadow-2xl hover:scale-105 transition-all cursor-pointer">
  <h3 className="text-xl font-bold text-gray-800 mb-2">Hover Me</h3>
  <p className="text-gray-600">This card has hover effects that scale and enhance shadow.</p>
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
            Card Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} card variations with different layouts and designs
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
              
              <div className="mb-4 p-8 bg-gray-50 rounded-lg flex items-center justify-center min-h-[280px]">
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
