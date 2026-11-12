import React from 'react';
import { notFound } from 'next/navigation';
import { DEFAULT_ARTICLES } from '@/lib/data/default-articles';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DEFAULT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = DEFAULT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 bg-[#FBF9F5]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#635634] hover:text-[#4A1521] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour au Journal</span>
          </a>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-[#4A1521]/10 text-[#4A1521]">
              {article.categoryLabel}
            </span>
            <span className="text-xs text-[#635634]/70">
              {article.readingTimeMinutes} min de lecture
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1412] font-light leading-[1.18]">
            {article.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-[#635634]/15 text-xs text-[#635634]/80">
            <div className="flex items-center gap-3">
              <img
                src="/images/tamara-portrait-1.jpeg"
                alt="Tamara"
                className="w-8 h-8 rounded-full object-cover border border-[#635634]/20"
              />
              <span>Par Tamara · Fondatrice IRIA Lab</span>
            </div>
            <span>Publié le {article.publishedAt}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 shadow-lg border border-[#635634]/15">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed text-[#1A1412]/90 space-y-6 font-light">
          {article.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-serif text-2xl text-[#1A1412] font-medium pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n- ');
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#635634]">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.match(/^\d+\. /)) {
              const items = paragraph.split(/\n\d+\. /);
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#635634]">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-sm sm:text-base text-[#1A1412]/85 leading-relaxed">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/tamara-portrait-1.jpeg"
            alt="Tamara"
            className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-[#B6A571]/30 shadow-md"
          />
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#1A1412]">Tamara</h4>
            <p className="text-xs text-[#635634] leading-relaxed">
              Coach certifiée et praticienne PNL (Graines d'Éveil), ancienne case manager santé. Elle accompagne les femmes à travers l'approche I.R.I.A. pour se réaligner et bâtir une sécurité intérieure solide.
            </p>
            <div className="pt-2">
              <a
                href="/accompagnement"
                className="text-xs uppercase tracking-wider font-semibold text-[#4A1521] hover:underline"
              >
                Découvrir l'accompagnement individuel →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
