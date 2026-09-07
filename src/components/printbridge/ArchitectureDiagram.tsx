import React from 'react';
import { Monitor, Chrome, Cpu, Printer, ArrowRight, ArrowDown } from 'lucide-react';

interface ArchitectureDiagramProps {
  variant?: 'simple' | 'detailed';
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ variant = 'simple' }) => {
  const steps = [
    {
      num: '01',
      title: 'Supported Web App',
      subtitle: 'Triggers PDF print request',
      icon: Monitor,
      bg: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      num: '02',
      title: 'Chrome Extension',
      subtitle: 'Passes print payload',
      icon: Chrome,
      bg: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      num: '03',
      title: 'Windows Component',
      subtitle: 'Handles local print engine',
      icon: Cpu,
      bg: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      num: '04',
      title: 'Windows Printer',
      subtitle: 'Prints PDF silently',
      icon: Printer,
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  if (variant === 'detailed') {
    return (
      <div className="w-full bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 text-white shadow-xl">
        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Architecture Flow</span>
          <h3 className="text-xl font-bold text-white mt-1">Component Interaction Diagram</h3>
        </div>

        {/* Detailed block diagram */}
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-4">
          {/* Box 1 */}
          <div className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-4 shadow-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">Supported Web App</div>
              <div className="text-xs text-slate-400">Web browser application initiating silent PDF print request</div>
            </div>
          </div>

          <div className="flex flex-col items-center py-1">
            <ArrowDown className="w-5 h-5 text-brand-400 animate-bounce" />
          </div>

          {/* Box 2 */}
          <div className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-4 shadow-sm">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Chrome className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">PrintBridge Extension</div>
              <div className="text-xs text-slate-400">Browser extension intercepting PDF request & establishing bridge</div>
            </div>
          </div>

          {/* Native Messaging Connector Label */}
          <div className="w-full py-2 flex items-center justify-center">
            <div className="px-4 py-1.5 rounded-full bg-brand-950 border border-brand-500/40 text-brand-300 text-xs font-mono font-medium flex items-center gap-2 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              Native Messaging Communication Path
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-4 shadow-sm">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">PrintBridge Windows Component</div>
              <div className="text-xs text-slate-400">Locally installed native service processing PDF print queue</div>
            </div>
          </div>

          <div className="flex flex-col items-center py-1">
            <ArrowDown className="w-5 h-5 text-brand-400" />
          </div>

          {/* Box 4 */}
          <div className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-4 shadow-sm">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Printer className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">Windows Printer</div>
              <div className="text-xs text-slate-400">Target local or network printer spooler</div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-center text-xs text-slate-400">
          <strong className="text-slate-200 font-semibold">Technical Note:</strong> Native Messaging provides the secure local communication path between the Chrome extension and the installed Windows component.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div key={step.num} className="flex flex-col items-center text-center group relative">
              <div className={`w-14 h-14 rounded-2xl border ${step.bg} flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-0.5">{step.num}</span>
              <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-[160px]">{step.subtitle}</p>

              {/* Desktop arrow connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-7 -right-3 transform -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}

              {/* Mobile arrow connector */}
              {idx < steps.length - 1 && (
                <div className="flex md:hidden my-3 text-slate-300">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

