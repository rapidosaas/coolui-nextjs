import Link from 'next/link';

export default function PricingTemplate() {
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

        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-6xl mb-6">💰</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-600">
              Pricing templates are under development
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
