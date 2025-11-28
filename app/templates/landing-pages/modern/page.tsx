import Link from 'next/link';
import { Hero } from '../_components/Hero';
import { Features } from '../_components/Features';
import { Testimonials } from '../_components/Testimonials';
import { Cta } from '../_components/CTA';
import { CodeButton } from '../_components/CodeButton';

export default function ModernLanding() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 relative">
        <CodeButton href="/templates/landing-pages/modern/code" />
        <div className="py-6">
          <Link href="/templates/landing-pages" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Variations
          </Link>
        </div>

        <Hero
          title="Grow with a Modern Marketing Site"
          subtitle="Beautiful sections, strong social proof, and focused conversion."
          ctaLabel="Get Started"
          ctaHref="#get-started"
        />

        <Features
          items={[
            { title: 'Conversion-focused Hero', description: 'Bold headline, supporting copy, primary CTA.', icon: '🎯' },
            { title: 'Social Proof', description: 'Logos and testimonials to build trust.', icon: '🤝' },
            { title: 'Benefits Grid', description: 'Clear value props and outcomes.', icon: '💡' },
          ]}
        />

        <Testimonials
          quotes={[
            { quote: 'Our signups increased 40% after adopting this layout.', author: 'Aisha Khan', role: 'Growth Lead' },
            { quote: 'It’s clean, fast, and easy to customize.', author: 'Marco Silva', role: 'Design Manager' },
          ]}
        />

        <Cta
          title="Ready to launch faster?"
          subtitle="Use this modern template as your foundation."
          ctaLabel="Start Building"
          ctaHref="#get-started"
        />
      </div>
    </main>
  );
}
