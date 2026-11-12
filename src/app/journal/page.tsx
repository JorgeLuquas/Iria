import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DEFAULT_ARTICLES } from '@/lib/data/default-articles';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Le Journal · Réflexions & Ressources de Réalignement | IRIA Lab',
  description:
    'Articles et réflexions de fond sur la reconstruction amoureuse, la PNL, l’affirmation de ses limites et la quête de soi.',
};

export default function JournalPage() {
  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
          Éditorial & Perspectives
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          Le Journal IRIA
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-2xl mx-auto leading-relaxed">
          Des clés de compréhension psychologique et neuro-linguistique pour éclairer ton cheminement, questionner tes automatismes et élever tes standards.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEFAULT_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#4A1521]/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#EAE4D9] relative">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#FBF9F5]/90 backdrop-blur-md text-[#4A1521] border border-[#635634]/15">
                      {article.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-[#635634]/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readingTimeMinutes} min de lecture
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1412] group-hover:text-[#4A1521] transition-colors leading-snug">
                    <a href={`/journal/${article.slug}`}>
                      {article.title}
                    </a>
                  </h2>

                  <p className="text-xs text-[#635634] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#4A1521] group-hover:text-[#3A0108]"
                >
                  <span>Lire l’article complet</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
