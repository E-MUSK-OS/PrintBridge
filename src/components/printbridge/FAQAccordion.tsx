'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all shadow-xs hover:border-slate-300"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 text-left font-semibold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

