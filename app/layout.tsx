/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aura - Organic Technology',
  description: 'Aura - Premium warm minimalist electronics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
