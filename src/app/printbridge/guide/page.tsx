import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Chrome, Download, AlertCircle, CheckCircle2, ChevronDown, HelpCircle, ArrowRight, Monitor, Settings } from 'lucide-react';
import { ArchitectureDiagram } from '@/components/printbridge/ArchitectureDiagram';
import { ScreenshotMockup } from '@/components/printbridge/ScreenshotMockup';

export const metadata: Metadata = {
  title: 'PrintBridge Installation Guide --- Chrome Extension & Windows Setup',
  description: 'Step-by-step guide to installing the PrintBridge Chrome extension, configuring the Windows component, and enabling silent PDF printing.',
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* HEADER SECTION */}
      <header className="space-y-4 text-left border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
          DOCUMENTATION &amp; SETUP
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          PrintBridge Installation Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Follow these steps to install PrintBridge on Windows and prepare it for silent PDF printing.
        </p>

        {/* REQUIREMENT CALLOUT */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Before you begin:</strong> You need Google Chrome, a Windows computer, the PrintBridge Chrome extension, the PrintBridge Windows component, and an available Windows printer.
          </div>
        </div>
      </header>

      {/* STEP 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">1</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 1 --- Install the Chrome extension</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Install PrintBridge from the Chrome Web Store.
        </p>
        <div>
          <a
            href="https://chromewebstore.google.com/detail/printbridge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-lg shadow transition-colors"
          >
            <Chrome className="w-4 h-4" />
            <span>Install PrintBridge</span>
          </a>
        </div>
        <ScreenshotMockup
          type="guide-01-chrome-store"
          caption="Add PrintBridge to Chrome from the Chrome Web Store."
        />
      </section>

      {/* STEP 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 2 --- Download the Windows component</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Download the PrintBridge Windows installer on the computer where your printer is installed.
        </p>
        <div>
          <a
            href="https://chakudee.com/printbridge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg shadow transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download for Windows</span>
          </a>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Important:</strong> The Chrome extension alone cannot provide Windows printer access. The Windows component must also be installed.
          </div>
        </div>

        <ScreenshotMockup
          type="guide-02-windows-download"
          caption="Download flow showing PrintBridge-Setup-v1.0.0.exe installer package."
        />
      </section>

      {/* STEP 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 3 --- Run the installer</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Open the downloaded installer and follow the installation prompts.
        </p>

        {/* Technical Expandable Details */}
        <details className="group border border-slate-200 rounded-xl bg-slate-50/80 p-4 transition-all">
          <summary className="font-semibold text-slate-900 text-sm cursor-pointer flex items-center justify-between">
            <span>What does the installer do?</span>
            <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
          </summary>
          <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
            The PrintBridge installer installs the local Windows component and configures the browser connection required by the extension. It also installs the PDF printing component required by the PrintBridge Windows workflow.
          </p>
        </details>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScreenshotMockup
            type="guide-03-installer-start"
            caption="PrintBridge Windows installer welcome wizard."
          />
          <ScreenshotMockup
            type="guide-04-installer-complete"
            caption="Setup completion confirmation screen."
          />
        </div>
      </section>

      {/* STEP 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 4 --- Open PrintBridge</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Open Chrome&apos;s Extensions menu and select PrintBridge.
        </p>
        <ScreenshotMockup
          type="guide-05-extension-popup"
          caption="PrintBridge Chrome extension popup menu."
        />
      </section>

      {/* STEP 5 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">5</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 5 --- Enable Silent Printing</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Open the PrintBridge extension and enable <strong>Silent Printing</strong>.
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Expected state: Silent printing is ON</span>
        </div>

        <ScreenshotMockup
          type="guide-06-silent-printing-on"
          caption="The popup visibly demonstrates the enabled Silent Printing ON state."
        />

        <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
          <strong>Note:</strong> Silent Printing is disabled by default. Enable it before testing a silent print request.
        </div>
      </section>

      {/* STEP 6 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 6 --- Confirm the Windows connection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Success Box */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Windows component connected</span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              PrintBridge can communicate with the locally installed Windows component.
            </p>
          </div>

          {/* Failure Box */}
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Windows component not installed</span>
            </div>
            <p className="text-xs text-rose-900 leading-relaxed">
              The extension cannot find the local PrintBridge Windows component. Confirm that the Windows installer completed successfully, then reopen PrintBridge.
            </p>
            <a
              href="https://chakudee.com/printbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Windows Component</span>
            </a>
          </div>
        </div>
      </section>

      {/* STEP 7 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 7 --- Verify your Windows printer</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Make sure the printer you want to use is installed and available in Windows.
        </p>

        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-medium">
          Instructions: Open <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-300">Settings → Bluetooth &amp; devices → Printers &amp; scanners</span>.
        </div>

        <ScreenshotMockup
          type="guide-07-windows-printers"
          caption="Windows Printers & scanners settings panel verifying printer availability."
        />
      </section>

      {/* STEP 8 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center">8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step 8 --- Print your PDF</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Return to your supported web application and use its normal PDF printing workflow.
        </p>

        <ArchitectureDiagram variant="simple" />

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
          <strong>Important note:</strong> PrintBridge is intended for supported web applications that are configured to communicate with the PrintBridge extension. It is not a replacement for Chrome&apos;s normal print functionality on arbitrary websites.
        </div>
      </section>

      {/* HOW COMPONENTS WORK TOGETHER */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">How the PrintBridge components work together</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            The Chrome extension receives the supported application&apos;s print request and communicates with the locally installed Windows component. The Windows component then handles the Windows-side print operation.
          </p>
        </div>

        <ArchitectureDiagram variant="detailed" />
      </section>

      {/* COMPLETION SECTION */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">You&apos;re ready to print</h2>
          <p className="text-slate-400 text-sm">Verify your final setup checklist before firing print requests:</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
          <li className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Chrome extension installed</span>
          </li>
          <li className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Windows component installed</span>
          </li>
          <li className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Silent Printing enabled</span>
          </li>
          <li className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Windows component connected</span>
          </li>
          <li className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700 sm:col-span-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Windows printer available</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Link
            href="/printbridge"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl shadow transition-colors"
          >
            Start Printing
          </Link>
          <Link
            href="/printbridge/support"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors"
          >
            Need Help?
          </Link>
        </div>
      </section>
    </div>
  );
}

