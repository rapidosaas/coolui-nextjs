export function Features(
  { items, columns = 3 }: Readonly<{ items: Array<{ title: string; description: string; icon?: string }>; columns?: 2 | 3 }>
) {
  const grid = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <section className="py-12">
      <div className={`grid grid-cols-1 ${grid} gap-6`}>
        {items.map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            {f.icon && <div className="text-2xl mb-2">{f.icon}</div>}
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-1 text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
