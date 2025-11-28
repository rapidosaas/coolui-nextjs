export function Hero(
  { title, subtitle, ctaLabel, ctaHref }: Readonly<{ title: string; subtitle?: string; ctaLabel?: string; ctaHref?: string }>
) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-600">{subtitle}</p>
        )}
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
