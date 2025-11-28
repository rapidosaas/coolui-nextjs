import Link from 'next/link';

export function CodeButton({ href }: Readonly<{ href: string }>) {
  return (
    <div className="absolute right-4 top-4">
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md border border-gray-200 text-gray-700 hover:text-blue-700 transition-all text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
        View Code
      </Link>
    </div>
  );
}
