import Link from 'next/link';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export default function ProductCodePage() {
  const filePath = path.join(process.cwd(), 'app', 'templates', 'landing-pages', 'product', 'page.tsx');
  let code = '';
  try {
    code = readFileSync(filePath, 'utf-8');
  } catch (e) {
    code = `// Error loading code\n// ${(e as Error).message}`;
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/templates/landing-pages/product" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Product Template
        </Link>

        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Product Template Code</h1>
            <p className="text-gray-600">Read-only view of the template source.</p>
          </div>
          <a
            href="https://github.com/nazimboudeffa/coolui-nextjs/tree/main/app/templates/landing-pages/product"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
            </svg>
            Get it on GitHub
          </a>
        </header>

        <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
          <pre className="text-sm text-gray-800">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </main>
  );
}
