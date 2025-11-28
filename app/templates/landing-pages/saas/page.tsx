import Link from 'next/link';
import { Hero } from '../_components/Hero';
import { Features } from '../_components/Features';
import { Testimonials } from '../_components/Testimonials';
import { Cta } from '../_components/CTA';

export default function SaaSLanding() {
  return (
    <main className="min-h-screen bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* View Code Button */}
        <div className="absolute right-4 top-4">
          <Link
            href="/templates/landing-pages/saas/code"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md border border-gray-200 text-gray-700 hover:text-blue-700 transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            View Code
          </Link>
        </div>
        <div className="py-6">
          <Link href="/templates/landing-pages" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Variations
          </Link>
        </div>

        <Hero
          title="Launch Your SaaS with Confidence"
          subtitle="KPI highlights, integration badges, and pricing-ready layout."
          ctaLabel="Start Free"
          ctaHref="#start"
        />

        <Features
          items={[
            { title: 'KPI Highlights', description: 'Stats blocks for MRR, users, uptime.', icon: '📊' },
            { title: 'Integrations', description: 'Badge grid for popular tools.', icon: '🧩' },
            { title: 'Pricing Ready', description: 'Drop-in pricing section support.', icon: '💳' },
          ]}
        />

        <Testimonials
          quotes={[
            { quote: 'We shipped v1 landing in a day.', author: 'Noah Brown', role: 'Founder' },
            { quote: 'The structure fits SaaS perfectly.', author: 'Priya Patel', role: 'Head of Marketing' },
          ]}
        />

        <Cta
          title="Ship faster, iterate often"
          subtitle="Use this SaaS starter and adapt as you grow."
          ctaLabel="Use SaaS"
          ctaHref="#use-saas"
        />
      </div>
    </main>
  );
}
