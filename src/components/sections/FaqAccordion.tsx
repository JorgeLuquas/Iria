'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ_ITEMS } from '@/lib/data/faq-data';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Questions Fréquentes & Clarifications"
          title="Tout ce que tu dois savoir avant d'échanger"
          subtitle="Des réponses transparentes et précises pour lever chaque doute en toute sérénité."
          centered
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#635634]/15 bg-[#FBF9F5] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F5F0E6]/50 transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1A1412] font-normal">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#635634]/20 flex items-center justify-center shrink-0 text-[#4A1521] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#EAE4D9]' : 'bg-transparent'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#635634] leading-relaxed border-t border-[#635634]/10 bg-[#FBF9F5]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
