import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Chrome, Download, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { ArchitectureDiagram } from '@/components/printbridge/ArchitectureDiagram';

export const metadata: Metadata = {
  title: 'PrintBridge --- Silent PDF Printing for Windows',
  description: 'Learn how to install and use PrintBridge for silent PDF printing from supported web applications on Windows.',
};

export default function HomePage() {
  const steps = [
    {
      num: '01',
      title: 'Install the Chrome extension',
      desc: 'Add PrintBridge to Chrome from the Chrome Web Store.',
    },
    {
      num: '02',
      title: 'Install the Windows component',
      desc: 'Download and run the PrintBridge Windows installer.',
    },
    {
      num: '03',
      title: 'Enable Silent Printing',
      desc: 'Open PrintBridge and turn on Silent Printing.',
    },
    {
      num: '04',
      title: 'Check the connection',
      desc: 'Confirm that the Windows component is connected.',
    },
    {
      num: '05',
      title: 'Start printing',
      desc: 'Return to your supported web application and print your PDF.',
    },
  ];

  return (
    <div className="space-y-20 py-8 lg:py-16">
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wider uppercase border border-brand-200">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              PRINTBRIDGE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Silent PDF printing for Windows
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              PrintBridge connects your supported web application to a Windows printer through a Chrome extension and a local Windows component, allowing PDF print requests to be handled without opening the browser&apos;s print dialog.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://chromewebstore.google.com/detail/printbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-600/25 hover:shadow-xl transition-all"
              >
                <Chrome className="w-5 h-5" />
                <span>Install Extension</span>
              </a>

              <a
                href="https://chakudee.com/printbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-colors"
              >
                <Download className="w-5 h-5 text-slate-600" />
                <span>Download for Windows</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/printbridge/guide"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 group"
              >
                <span>View Installation Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Hero Architecture Visual */}
          <div className="lg:col-span-5">
            <ArchitectureDiagram variant="simple" />
          </div>
        </div>
      </section>

      {/* SECTION 2: TWO COMPONENTS */}
      <section className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Everything you need to get started
            </h2>
            <p className="text-sm text-slate-600">
              PrintBridge relies on two synced modules to provide reliable silent printing capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Extension */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                  <Chrome className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Chrome Extension</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connects your supported web application to PrintBridge and provides the browser-side printing bridge.
                </p>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/printbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                <Chrome className="w-4 h-4" />
                <span>Install Extension</span>
              </a>
            </div>

            {/* Card 2: Windows Component */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Windows Component</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Runs locally on Windows and provides the Windows-side functionality required for printing.
                </p>
              </div>
              <a
                href="https://chakudee.com/printbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download for Windows</span>
              </a>
            </div>
          </div>

          {/* Callout */}
          <div className="max-w-4xl mx-auto p-4 rounded-xl bg-brand-50 border border-brand-200 text-center text-brand-900 font-bold text-sm sm:text-base shadow-xs">
            ⚡ Both components are required for silent printing.
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How PrintBridge works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When your supported web application requests a PDF print, PrintBridge passes the request through the Chrome extension to the locally installed Windows component. The Windows component handles the local printing workflow using the printer environment available on your computer.
          </p>
        </div>

        <ArchitectureDiagram variant="simple" />

        <div className="text-center pt-2">
          <Link
            href="/printbridge/guide"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group"
          >
            <span>Learn more in the Installation Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: GET STARTED */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get started in a few steps
            </h2>
            <p className="text-slate-400 text-sm">
              Follow these simple steps to configure silent printing on your Windows device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between space-y-3 hover:border-brand-500/50 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-400 block mb-1">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/printbridge/guide"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-colors"
            >
              Open Installation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRIVACY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Local Processing Privacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Your printing workflow</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              PrintBridge uses a locally installed Windows component for the Windows-side printing operation. See the Privacy Policy for information about data handling and local processing.
            </p>
          </div>

          <Link
            href="/printbridge/privacy"
            className="shrink-0 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm rounded-xl shadow transition-colors"
          >
            Read Privacy Policy
          </Link>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pb-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Ready to get started?</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Install both PrintBridge components and follow the setup guide to prepare your Windows printer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://chromewebstore.google.com/detail/printbridge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md transition-all"
          >
            <Chrome className="w-5 h-5" />
            <span>Install Extension</span>
          </a>

          <a
            href="https://chakudee.com/printbridge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-sm transition-colors"
          >
            <Download className="w-5 h-5 text-slate-600" />
            <span>Download for Windows</span>
          </a>
        </div>
      </section>
    </div>
  );
}

