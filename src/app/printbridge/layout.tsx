import React from 'react';
import { PBHeader } from '@/components/printbridge/PBHeader';
import { PBFooter } from '@/components/printbridge/PBFooter';

export default function PrintBridgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white">
      <PBHeader />
      <main className="flex-grow">{children}</main>
      <PBFooter />
    </div>
  );
}

