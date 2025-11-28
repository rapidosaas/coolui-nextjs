export function Cta(
  { title, subtitle, ctaLabel, ctaHref }: Readonly<{ title: string; subtitle?: string; ctaLabel: string; ctaHref: string }>
) {
  return (
    <section className="py-16">
      <div className="rounded-2xl bg-blue-600 text-white p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-blue-100">{subtitle}</p>}
        <div className="mt-6">
          <a
            href={ctaHref}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
