'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface ComponentVariation {
  id: string;
  name: string;
  component: ReactNode;
  code: string;
}

export default function AlertsPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const variations: ComponentVariation[] = [
    {
      id: 'info-alert',
      name: 'Info Alert',
      component: (
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded w-full max-w-md">
          <div className="flex items-center">
            <span className="font-bold mr-2">Info:</span>
            <span>This is an informational message.</span>
          </div>
        </div>
      ),
      code: `<div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded">
  <div className="flex items-center">
    <span className="font-bold mr-2">Info:</span>
    <span>This is an informational message.</span>
  </div>
</div>`
    },
    {
      id: 'success-alert',
      name: 'Success Alert',
      component: (
        <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded w-full max-w-md">
          <div className="flex items-center">
            <span className="font-bold mr-2">Success:</span>
            <span>Operation completed successfully!</span>
          </div>
        </div>
      ),
      code: `<div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
  <div className="flex items-center">
    <span className="font-bold mr-2">Success:</span>
    <span>Operation completed successfully!</span>
  </div>
</div>`
    },
    {
      id: 'warning-alert',
      name: 'Warning Alert',
      component: (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 rounded w-full max-w-md">
          <div className="flex items-center">
            <span className="font-bold mr-2">Warning:</span>
            <span>Please review your action.</span>
          </div>
        </div>
      ),
      code: `<div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 rounded">
  <div className="flex items-center">
    <span className="font-bold mr-2">Warning:</span>
    <span>Please review your action.</span>
  </div>
</div>`
    },
    {
      id: 'error-alert',
      name: 'Error Alert',
      component: (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded w-full max-w-md">
          <div className="flex items-center">
            <span className="font-bold mr-2">Error:</span>
            <span>Something went wrong!</span>
          </div>
        </div>
      ),
      code: `<div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
  <div className="flex items-center">
    <span className="font-bold mr-2">Error:</span>
    <span>Something went wrong!</span>
  </div>
</div>`
    },
    {
      id: 'dismissible-alert',
      name: 'Dismissible Alert',
      component: (
        <div className="p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded w-full max-w-md flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium">You have new messages!</span>
          </div>
          <button className="ml-4 text-blue-700 hover:text-blue-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ),
      code: `<div className="p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded flex items-center justify-between">
  <div className="flex items-center">
    <span className="font-medium">You have new messages!</span>
  </div>
  <button className="ml-4 text-blue-700 hover:text-blue-900">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
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
            Alert Components
          </h1>
          <p className="text-gray-600 text-lg">
            {variations.length} alert variations for notifications
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
