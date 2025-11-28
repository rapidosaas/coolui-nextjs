'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function AvatarsPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'basic-avatars',
      name: 'Basic Avatars',
      component: (
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
            AB
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
            MK
          </div>
        </div>
      ),
      code: `<div className="flex gap-3">
  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
    JD
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
    AB
  </div>
</div>`
    },
    {
      id: 'different-sizes',
      name: 'Different Sizes',
      component: (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            SM
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
            MD
          </div>
          <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            LG
          </div>
        </div>
      ),
      code: `<div className="flex items-center gap-3">
  <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
    SM
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
    MD
  </div>
  <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
    LG
  </div>
</div>`
    },
    {
      id: 'avatars-with-border',
      name: 'Avatars with Border',
      component: (
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
            JD
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
            AB
          </div>
        </div>
      ),
      code: `<div className="flex gap-3">
  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
    JD
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
    AB
  </div>
</div>`
    },
    {
      id: 'avatar-group',
      name: 'Avatar Group',
      component: (
        <div className="flex -space-x-4">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
            JD
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
            AB
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
            MK
          </div>
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold border-4 border-white">
            +5
          </div>
        </div>
      ),
      code: `<div className="flex -space-x-4">
  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
    JD
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
    AB
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
    MK
  </div>
  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold border-4 border-white">
    +5
  </div>
</div>`
    },
    {
      id: 'avatar-with-status',
      name: 'Avatar with Status',
      component: (
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              AB
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
      ),
      code: `<div className="relative">
  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
    JD
  </div>
  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>`
    },
    {
      id: 'square-avatars',
      name: 'Square Avatars',
      component: (
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
            AB
          </div>
          <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
            MK
          </div>
        </div>
      ),
      code: `<div className="flex gap-3">
  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
    JD
  </div>
  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
    AB
  </div>
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
            Avatar Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} avatar variations for user profiles
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
