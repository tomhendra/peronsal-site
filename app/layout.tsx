import '@/styles/globals.css';
import React from 'react';
import Nav from '../ui/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Tom Hendra | Dev</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <Nav />
          </div>

          <div className="col-start-3 space-y-6">{children}</div>

          <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <div className="text-sm text-zinc-600">
              Created with <b>Next.js</b> and <b>MDX</b>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://github.com/tomhendra/tomhendra.dev"
              >
                View the code
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
