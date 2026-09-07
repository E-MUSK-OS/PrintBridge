'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, Download, CheckCircle2, ArrowRight, HelpCircle, Mail, Wrench, ShieldAlert } from 'lucide-react';
import { FAQAccordion, FAQItem } from '@/components/printbridge/FAQAccordion';
import { ContactModal } from '@/components/printbridge/ContactModal';

export default function SupportPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Do I need both the Chrome extension and Windows component?',
      answer: 'Yes. The Chrome extension and Windows component work together to provide the PrintBridge printing workflow.',
    },
    {
      id: 'faq-2',
      question: 'Do I need Node.js?',
      answer: 'No. End users do not need Node.js to use PrintBridge.',
    },
    {
      id: 'faq-3',
      question: 'Do I need to install SumatraPDF separately?',
      answer: 'No. The PrintBridge Windows installer is designed to include the PDF printing component required by the application.',
    },
    {
      id: 'faq-4',
      question: 'Can PrintBridge print from any website?',
      answer: 'No. PrintBridge is intended for supported web applications that are authorized to communicate with the extension.',
    },
    {
      id: 'faq-5',
      question: 'Does PrintBridge take screenshots of webpages?',
      answer: 'The PrintBridge printing workflow is based on PDF print data rather than capturing a webpage screenshot.',
    },
    {
      id: 'faq-[#6]',
      question: 'Why do I need the Windows component?',
      answer: 'Chrome extensions operate within the browser security model. The Windows component provides the local Windows-side functionality required for printing.',
    },
    {
      id: 'faq-7',
      question: 'Where does my PDF go?',
      answer: 'During a print operation, PDF data is passed through the PrintBridge workflow to the local Windows component. See the Privacy Policy for details about local processing and temporary files.',
    },
    {
      id: 'faq-8',
      question: 'What happens if my printer is offline?',
      answer: 'The Windows printer must be available and ready to receive the print job. Check the printer status in Windows and retry the print request.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* HEADER */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          HELP &amp; TROUBLESHOOTING
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          PrintBridge Support
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Having trouble installing or printing with PrintBridge? Start with the checks below.
        </p>
      </header>

      {/* TROUBLESHOOTING PROBLEMS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Common Problem Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Troubleshooting</h2>
        </div>

        <div className="space-y-6">
          {/* PROBLEM 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100 text-rose-800 font-bold text-xs border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Problem 1: Windows component not installed</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Solution:</h3>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-1">
                <li>Download the PrintBridge Windows installer.</li>
                <li>Run the installer.</li>
                <li>Complete the installation.</li>
                <li>Restart Chrome if necessary.</li>
                <li>Open PrintBridge again.</li>
                <li>Check the connection status.</li>
              </ol>
            </div>

            <div className="pt-2">
              <a
                href="https://chakudee.com/printbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg shadow transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Windows Component</span>
              </a>
            </div>
          </div>

          {/* PROBLEM 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs border border-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Problem 2: Silent Printing is OFF</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Solution:</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Open the PrintBridge extension and enable <strong>Silent Printing</strong>.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Expected: Silent printing is ON
                </span>
              </div>
            </div>
          </div>

          {/* PROBLEM 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100 text-rose-800 font-bold text-xs border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Problem 3: Windows component is not connected</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Solution:</h3>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-1">
                <li>Confirm the Windows component is installed.</li>
                <li>Confirm the installer completed successfully.</li>
                <li>Close and reopen Chrome.</li>
                <li>Open PrintBridge.</li>
                <li>Check the connection status again.</li>
              </ol>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
              If the problem remains: Continue with the installation guide or contact support.
            </div>

            <div>
              <Link
                href="/printbridge/guide"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg shadow transition-colors"
              >
                <span>Open Installation Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* PROBLEM 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs border border-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Problem 4: Printer unavailable</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Your printer is unavailable or cannot receive the print job.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Solution:</h3>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-1">
                <li>Open Windows Settings.</li>
                <li>Select <strong>Bluetooth &amp; devices</strong>.</li>
                <li>Select <strong>Printers &amp; scanners</strong>.</li>
                <li>Confirm the printer is installed.</li>
                <li>Confirm the printer is online.</li>
                <li>Try a Windows test print.</li>
                <li>Retry the PrintBridge print request.</li>
              </ol>
            </div>
          </div>

          {/* PROBLEM 5 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100 text-rose-800 font-bold text-xs border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Problem 5: PDF print request fails</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              The extension is connected, but the print request fails.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Verification Checklist:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Extension installed</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Windows component installed</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Silent Printing ON</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Windows component connected</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Printer installed</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Printer online</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ PDF is valid</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">✓ Supported web application used</div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              Verify each item above and retry the print request. If the issue continues, contact support with the error message and the step where the failure occurred.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm">Quick answers to common PrintBridge questions.</p>
        </div>

        <FAQAccordion items={faqItems} />
      </section>

      {/* SUPPORT CONTACT */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Still need help?</h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
          If you&apos;ve completed the installation steps and PrintBridge still isn&apos;t working, contact support at <a href="mailto:2383elonmusk@gmail.com" className="text-brand-400 hover:underline font-mono">2383elonmusk@gmail.com</a> with the error message, your PrintBridge version, and the step where the problem occurred.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl shadow transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </button>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

