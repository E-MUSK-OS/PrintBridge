'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, HardDrive, Key, Server, FileText, Mail } from 'lucide-react';
import { ContactModal } from '@/components/printbridge/ContactModal';

export default function PrivacyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* HEADER */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          LEGAL &amp; COMPLIANCE
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          PrintBridge Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          This Privacy Policy explains how PrintBridge handles information when you use the PrintBridge Chrome extension and Windows component.
        </p>
        <div className="text-xs font-semibold text-slate-500 font-mono">
          Effective date: September 7, 2026
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-brand-600" />
          Information PrintBridge processes
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          PrintBridge processes information required to complete a print request. Depending on the integration, this may include PDF print data, printer information, print options, extension settings, and technical information required to process the request.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-brand-600" />
          PDF data
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          When a supported application requests a PDF print, the PDF data is passed through the PrintBridge printing workflow to the locally installed Windows component for printing. PDF data is processed locally on your machine during the print operation.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-5 h-5 text-brand-600" />
          Extension settings
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          PrintBridge stores extension settings required for its functionality, such as the user&apos;s Silent Printing preference.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Server className="w-5 h-5 text-brand-600" />
          Local communication
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The PrintBridge extension communicates with the locally installed Windows component using the browser&apos;s Native Messaging mechanism. This local communication is separate from sending information to a remote PrintBridge server.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Key className="w-5 h-5 text-brand-600" />
          Extension permissions
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-1/3">Permission</th>
                <th className="py-3 px-4">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="py-3 px-4 font-mono text-brand-700 font-semibold">nativeMessaging</td>
                <td className="py-3 px-4 text-slate-600">Communicates with the locally installed Windows component.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-brand-700 font-semibold">storage</td>
                <td className="py-3 px-4 text-slate-600">Stores required extension settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-party services</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          PrintBridge&apos;s local Windows printing operation does not require a third-party cloud printing service unless explicitly stated in the current product documentation.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data retention</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Temporary PDF payloads generated during print requests are held strictly within local system memory or temporary Windows print spool queues for the duration necessary to transmit the job to the designated Windows printer host. Once the print spooled job completes, temporary files are removed according to Windows OS print lifecycle standards.
        </p>
      </section>

      {/* SECTION 8 */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 border border-slate-800">
        <h2 className="text-2xl font-bold">Privacy questions</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          If you have questions about PrintBridge privacy or data handling, please contact the PrintBridge support team at <a href="mailto:2383elonmusk@gmail.com" className="text-brand-400 hover:underline font-mono">2383elonmusk@gmail.com</a>.
        </p>
        <div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm rounded-xl shadow transition-colors"
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

