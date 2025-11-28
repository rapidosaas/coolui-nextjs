import Link from 'next/link';
import { Hero } from '../_components/Hero';
import { Features } from '../_components/Features';
import { Testimonials } from '../_components/Testimonials';
import { Cta } from '../_components/CTA';
import { CodeButton } from '../_components/CodeButton';

export default function MinimalLanding() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 relative">
        <CodeButton href="/templates/landing-pages/minimal/code" />
        <div className="py-6">
          <Link href="/templates/landing-pages" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Variations
          </Link>
        </div>

        <Hero
          title="A Calm, Editorial Landing"
          subtitle="Focus on content clarity and typographic rhythm."
          ctaLabel="Subscribe"
          ctaHref="#subscribe"
        />

        <Features
          columns={2}
          items={[
            { title: 'Simple Layout', description: 'Whitespace-first, distraction-free sections.' },
            { title: 'Readable Type', description: 'Comfortable line-length and contrast.' },
            { title: 'Newsletter Block', description: 'Email capture with privacy note.' },
            { title: 'Light Accents', description: 'Soft dividers and minimal icons.' },
          ]}
        />

        <Testimonials
          quotes={[
            { quote: 'Minimal yet effective — perfect for content-first sites.', author: 'Sara Mei', role: 'Content Strategist' },
            { quote: 'It lets the story shine through.', author: 'Jonah Lee', role: 'Editor' },
          ]}
        />

        <Cta
          title="Keep it simple."
          subtitle="Launch a thoughtful landing without visual noise."
          ctaLabel="Use Minimal"
          ctaHref="#use-minimal"
        />
      </div>
    </main>
  );
}
