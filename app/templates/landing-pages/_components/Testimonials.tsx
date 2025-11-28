export function Testimonials(
  { quotes }: Readonly<{ quotes: Array<{ quote: string; author: string; role?: string }> }>
) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q) => (
          <figure key={q.quote} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <blockquote className="text-gray-800 text-lg">“{q.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-gray-600">
              <span className="font-medium text-gray-900">{q.author}</span>{q.role ? ` — ${q.role}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
