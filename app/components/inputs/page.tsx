'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function InputsPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'basic-input',
      name: 'Basic Input',
      component: (
        <input
          type="text"
          placeholder="Enter text..."
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors w-full max-w-sm"
        />
      ),
      code: `<input
  type="text"
  placeholder="Enter text..."
  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
/>`
    },
    {
      id: 'input-with-label',
      name: 'Input with Label',
      component: (
        <div className="w-full max-w-sm">
          <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      ),
      code: `<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
  />
</div>`
    },
    {
      id: 'input-with-icon',
      name: 'Input with Icon',
      component: (
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      ),
      code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
  />
</div>`
    },
    {
      id: 'textarea',
      name: 'Textarea',
      component: (
        <textarea
          placeholder="Enter your message..."
          rows={4}
          className="w-full max-w-sm px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      ),
      code: `<textarea
  placeholder="Enter your message..."
  rows={4}
  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
/>`
    },
    {
      id: 'select-dropdown',
      name: 'Select Dropdown',
      component: (
        <select className="w-full max-w-sm px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white">
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      ),
      code: `<select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`
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
            Input Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} input variations for forms
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
              
              <div className="mb-4 p-8 bg-gray-50 rounded-lg flex items-center justify-center min-h-[140px]">
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
