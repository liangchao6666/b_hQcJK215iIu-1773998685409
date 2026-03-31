import type { Metadata } from 'next'
import { OnlineServiceWidget } from '@/components/online-service-widget'

import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.addEventListener('unhandledrejection', event => {
                  console.log('[v0] Caught unhandledrejection:', event.reason);
                  event.preventDefault();
                });
                window.addEventListener('error', event => {
                  console.log('[v0] Caught error event:', event.message);
                  if (event.error instanceof Event || event.type === 'error') {
                    event.preventDefault();
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <OnlineServiceWidget />
      </body>
    </html>
  )
}
