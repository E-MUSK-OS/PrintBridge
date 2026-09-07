import React from 'react';
import Link from 'next/link';
import { Printer, HelpCircle } from 'lucide-react';

export const PBFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand and Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white shadow">
                <Printer className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-xl tracking-tight">PrintBridge</span>
            </div>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Silent PDF printing for supported Windows applications.
            </p>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 max-w-md text-xs text-slate-300">
              <HelpCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <p>
                Need help? Email <a href="mailto:2383elonmusk@gmail.com" className="text-brand-400 hover:text-brand-300 underline font-medium">2383elonmusk@gmail.com</a> or visit the <Link href="/printbridge/support" className="text-brand-400 hover:text-brand-300 underline font-medium">Support page</Link>.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/printbridge" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/printbridge/guide" className="hover:text-white transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/printbridge/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/printbridge/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Component Quick Downloads */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Components</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://chromewebstore.google.com/detail/printbridge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chrome Extension
                </a>
              </li>
              <li>
                <a 
                  href="https://chakudee.com/printbridge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Windows Component Installer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Chakudee. All rights reserved.</p>
          <p className="text-slate-500">
            PrintBridge requires both Chrome Extension & Windows Component.
          </p>
        </div>
      </div>
    </footer>
  );
};

