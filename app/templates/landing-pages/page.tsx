import Link from 'next/link';

export default function LandingPagesTemplate() {
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

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Landing Page Variations</h1>
            <p className="text-gray-600 mt-2">Explore ready-made templates with consistent, reusable sections.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <TemplateCard
              title="Modern SaaS"
              description="Tailored for SaaS startups with KPI highlights, integrations, and pricing."
              href="/templates/landing-pages/saas"
              emoji="🚀"
            />
            <TemplateCard
              title="Minimal Product"
              description="Clean product-focused layout with feature grid and testimonials."
              href="/templates/landing-pages/product"
              emoji="✨"
            />
            <TemplateCard
              title="Marketing Modern"
              description="Hero with angled visuals, social proof, and conversion CTAs."
              href="/templates/landing-pages/modern"
              emoji="📈"
            />
            <TemplateCard
              title="Editorial Minimal"
              description="Calm typographic layout for content-driven launches and newsletters."
              href="/templates/landing-pages/minimal"
              emoji="📰"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function TemplateCard(
  { title, description, href, emoji }: Readonly<{ title: string; description: string; href: string; emoji: string }>
) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{emoji}</div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700">{title}</h2>
          <p className="mt-1 text-gray-600">{description}</p>
          <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
            Preview
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
