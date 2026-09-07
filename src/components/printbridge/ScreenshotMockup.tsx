import React from 'react';
import { Chrome, Download, CheckCircle2, AlertCircle, Printer, Monitor, Settings, RefreshCw, Star, ShieldCheck, Power } from 'lucide-react';

interface ScreenshotMockupProps {
  type: 
    | 'guide-01-chrome-store'
    | 'guide-02-windows-download'
    | 'guide-03-installer-start'
    | 'guide-04-installer-complete'
    | 'guide-05-extension-popup'
    | 'guide-06-silent-printing-on'
    | 'guide-07-windows-printers';
  caption?: string;
}

export const ScreenshotMockup: React.FC<ScreenshotMockupProps> = ({ type, caption }) => {
  return (
    <figure className="my-6 w-full group">
      <div className="rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-100 transition-all group-hover:shadow-lg">
        {/* Mock Browser/Window Header */}
        <div className="bg-slate-200/90 border-b border-slate-300 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 bg-white/70 px-3 py-0.5 rounded-full border border-slate-300/60 truncate max-w-[280px] sm:max-w-md">
            {type.includes('chrome') && 'chromewebstore.google.com/detail/printbridge'}
            {type.includes('download') && 'chakudee.com/printbridge/download'}
            {type.includes('installer') && 'Windows Installer — PrintBridge Setup v1.0.0'}
            {type.includes('popup') && 'chrome-extension://printbridge/popup.html'}
            {type.includes('silent') && 'chrome-extension://printbridge/popup.html'}
            {type.includes('printers') && 'Settings > Bluetooth & devices > Printers & scanners'}
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Body Mockup */}
        <div className="p-4 sm:p-6 bg-white min-h-[260px] flex items-center justify-center">
          {/* 1. Chrome Web Store Mockup */}
          {type === 'guide-01-chrome-store' && (
            <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-md">
                    <Printer className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">PrintBridge</h3>
                    <p className="text-xs text-brand-600 font-medium">Chakudee Official Extension</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="flex text-amber-400 text-xs">★★★★★</span>
                      <span className="text-[11px] text-slate-500">4.9 (120+ reviews) • Productivity</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow flex items-center gap-1.5">
                  <Chrome className="w-4 h-4" />
                  Add to Chrome
                </button>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-4">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4" /> Verified Publisher
                </span>
                <span>• 10,000+ active users</span>
              </div>
            </div>
          )}

          {/* 2. Windows Downloader Flow */}
          {type === 'guide-02-windows-download' && (
            <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
                <Download className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Download PrintBridge Windows Component</h4>
                <p className="text-xs text-slate-500 mt-1">File: <span className="font-mono text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded">PrintBridge-Setup-v1.0.0.exe</span> (12.4 MB)</p>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-left text-xs text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Important:</strong> Install this on the Windows computer connected to your target PDF printer.</span>
              </div>
            </div>
          )}

          {/* 3. Installer Start Screen */}
          {type === 'guide-03-installer-start' && (
            <div className="w-full max-w-md bg-slate-900 text-white border border-slate-700 rounded-xl p-6 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">PrintBridge Setup Wizard</h4>
                  <p className="text-[11px] text-slate-400">Version 1.0.0 Release</p>
                </div>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                Welcome to the PrintBridge Windows Component Setup. This wizard configures Native Messaging host registry keys and local background printing workflow drivers.
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button className="px-3 py-1.5 text-xs text-slate-400 bg-slate-800 rounded">Cancel</button>
                <button className="px-4 py-1.5 text-xs font-semibold text-white bg-brand-600 rounded">Next &gt;</button>
              </div>
            </div>
          )}

          {/* 4. Installer Complete Screen */}
          {type === 'guide-04-installer-complete' && (
            <div className="w-full max-w-md bg-slate-900 text-white border border-slate-700 rounded-xl p-6 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-400">Setup Completed Successfully</h4>
                  <p className="text-[11px] text-slate-400">PrintBridge Service Installed</p>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <li className="flex items-center gap-2 text-emerald-300">✓ Native Messaging Manifest Registered</li>
                <li className="flex items-center gap-2 text-emerald-300">✓ Local Print Host Service Initialized</li>
                <li className="flex items-center gap-2 text-emerald-300">✓ PDF Engine Drivers Ready</li>
              </ul>
              <div className="flex justify-end pt-2 border-t border-slate-800">
                <button className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded">Finish</button>
              </div>
            </div>
          )}

          {/* 5. Extension Popup Standard */}
          {type === 'guide-05-extension-popup' && (
            <div className="w-72 bg-white border border-slate-300 rounded-xl shadow-xl overflow-hidden text-slate-900">
              <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Printer className="w-4 h-4 text-brand-400" />
                  <span className="font-bold text-xs">PrintBridge Popup</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">v1.0.0</span>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs">
                  <span className="font-medium text-amber-900">Silent Printing</span>
                  <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-800 font-bold text-[10px]">OFF</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between">
                  <span className="text-emerald-900">Connection Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Connected
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 6. Extension Popup Silent Printing ON */}
          {type === 'guide-06-silent-printing-on' && (
            <div className="w-72 bg-white border border-slate-300 rounded-xl shadow-xl overflow-hidden text-slate-900">
              <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Printer className="w-4 h-4 text-brand-400" />
                  <span className="font-bold text-xs">PrintBridge Popup</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">READY</span>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-xs shadow-inner">
                  <div>
                    <div className="font-bold text-emerald-950">Silent Printing</div>
                    <div className="text-[10px] text-emerald-700">No print dialog prompt</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-[11px] shadow">
                    ON
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                  <span className="text-slate-700">Windows Component</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Connected
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 7. Windows Printers Settings */}
          {type === 'guide-07-windows-printers' && (
            <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm text-xs space-y-3">
              <div className="font-bold text-slate-900 border-b pb-2 flex items-center justify-between">
                <span>Printers &amp; scanners</span>
                <span className="text-[10px] font-normal text-slate-500">Windows Settings</span>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Printer className="w-4 h-4 text-slate-600" />
                    <div>
                      <div className="font-semibold text-slate-800">HP LaserJet Pro M404 (Default)</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Ready • Online</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">Ready</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Printer className="w-4 h-4 text-slate-600" />
                    <div>
                      <div className="font-semibold text-slate-800">PDF Thermal Printer</div>
                      <div className="text-[10px] text-slate-500">Idle</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">Idle</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Caption Bar */}
        <figcaption className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 text-center text-xs text-slate-600 font-medium">
          {caption || "Screenshot representation matching production UI"}
        </figcaption>
      </div>
    </figure>
  );
};

