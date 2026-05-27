import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abroad Scholars Apply',
  description: 'A platform for students around the world to find and apply for education opportunities abroad.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
