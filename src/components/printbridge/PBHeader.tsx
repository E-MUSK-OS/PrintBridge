'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Printer, Menu, X, Download, Chrome, ExternalLink } from 'lucide-react';

interface PBHeaderProps {
  onOpenSupportModal?: () => void;
}

export const PBHeader: React.FC<PBHeaderProps> = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Guide', href: '/printbridge/guide' },
    { label: 'Privacy', href: '/printbridge/privacy' },
    { label: 'Support', href: '/printbridge/support' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <Link 
            href="/printbridge" 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:bg-brand-700 transition-colors">
              <Printer className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-brand-600 transition-colors">
                PrintBridge
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-1">
                Silent PDF Printing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/printbridge"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/printbridge')
                  ? 'text-brand-600 bg-brand-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-600 bg-brand-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://chakudee.com/printbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors border border-slate-200/80"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download for Windows</span>
            </a>
            <a
              href="https://chromewebstore.google.com/detail/printbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Chrome className="w-4 h-4" />
              <span>Install Extension</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            <Link
              href="/printbridge"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/printbridge')
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="https://chromewebstore.google.com/detail/printbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm"
            >
              <Chrome className="w-5 h-5" />
              <span>Install Extension</span>
            </a>
            <a
              href="https://chakudee.com/printbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-base font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200"
            >
              <Download className="w-5 h-5" />
              <span>Download for Windows</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

