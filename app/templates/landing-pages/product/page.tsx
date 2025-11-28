import Link from 'next/link';
import { Hero } from '../_components/Hero';
import { Features } from '../_components/Features';
import { Testimonials } from '../_components/Testimonials';
import { Cta } from '../_components/CTA';
import { CodeButton } from '../_components/CodeButton';

export default function ProductLanding() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8 relative">
        <CodeButton href="/templates/landing-pages/product/code" />
        <div className="py-6">
          <Link href="/templates/landing-pages" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Variations
          </Link>
        </div>

        <Hero
          title="Showcase Your Product with Clarity"
          subtitle="Feature grid, screenshots, and customer quotes built-in."
          ctaLabel="Try Demo"
          ctaHref="#demo"
        />

        <Features
          items={[
            { title: 'Feature Highlights', description: 'A clear grid with concise copy.', icon: '🔍' },
            { title: 'Screenshot Panel', description: 'Place a large product visual here.', icon: '🖼️' },
            { title: 'Customer Quotes', description: 'Short quotes for social proof.', icon: '💬' },
          ]}
        />

        <Testimonials
          quotes={[
            { quote: 'Our feature comprehension improved dramatically.', author: 'Emily Chen', role: 'PM' },
            { quote: 'The product focus drives conversion.', author: 'Luis Romero', role: 'Founder' },
          ]}
        />

        <Cta
          title="Ready to present your product?"
          subtitle="Launch with a balanced features-first layout."
          ctaLabel="Use Product"
          ctaHref="#use-product"
        />
      </div>
    </main>
  );
}
