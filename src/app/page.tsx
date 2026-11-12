import React from 'react';
import { HeroHome } from '@/components/sections/HeroHome';
import { MethodExplorer } from '@/components/sections/MethodExplorer';
import { OffersGrid } from '@/components/sections/OffersGrid';
import { TamaraSignature } from '@/components/sections/TamaraSignature';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ArrowUpRight, Sparkles, Quote, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroHome />

      {/* 2. Le Miroir Empathique : Ce que tu traverses */}
      <section className="py-20 bg-[#F5F0E6] border-y border-[#635634]/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
              Le Point de Départ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412] font-light">
              Ce que traverse presque chaque femme qui arrive chez IRIA
            </h2>
            <p className="text-sm text-[#635634] leading-relaxed">
              À force de tenir tous les rôles (professionnelle, mère, conjointe, pilier de l’entourage), on finit par reléguer ses propres besoins au second plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Colonne 1 : Ce que tu vis peut-être */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-5">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#4A1521] pb-3 border-b border-[#635634]/10">
                Ce que tu ressens en ce moment
              </h3>
              <ul className="space-y-3.5 text-xs text-[#1A1412]/90">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>« Je fonctionne, mais je ne me sens plus vraiment moi-même. »</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>Le sentiment de vivre en pilote automatique au service des autres.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>Difficulté à distinguer ce qui t’appartient de ce qu’on attend de toi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>La peur de revivre les mêmes schémas ou de s’oublier à nouveau.</span>
                </li>
              </ul>
            </div>

            {/* Colonne 2 : Ce que le parcours t'apporte */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#839689]/40 shadow-sm space-y-5">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#4D6355] pb-3 border-b border-[#839689]/20">
                Ce que la méthode IRIA installe
              </h3>
              <ul className="space-y-3.5 text-xs text-[#1A1412]/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Une sécurité intérieure qui ne dépend plus de la validation d’autrui.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Une identité choisie et affirmée, libérée de la sur-adaptation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Des limites claires posées sans culpabilité ni agressivité.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Des standards relationnels élevés pour tes amours futures.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="font-serif text-xl sm:text-2xl italic text-[#1A1412] max-w-xl mx-auto">
              « Ce n’est pas le temps qui répare une vie mise en pause. C’est l’action. »
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. La Méthode I.R.I.A. Interactive */}
      <MethodExplorer />

      {/* 4. Les 3 Portes d'Accès */}
      <OffersGrid />

      {/* 5. Tamara Signature Story */}
      <TamaraSignature />

      {/* 6. FAQ Stratégique */}
      <FaqAccordion />

      {/* 7. Final Call to Action */}
      <section className="py-20 bg-[#4A1521] text-[#FBF9F5] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B6A571] font-semibold">
            Premier Pas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light">
            Es-tu prête à te choisir ?
          </h2>
          <p className="text-sm sm:text-base text-[#FBF9F5]/80 max-w-xl mx-auto leading-relaxed">
            Chaque mois sans agir est un mois de plus à vivre déconnectée de toi. Réserve un appel découverte de 15 à 20 minutes avec Tamara pour faire le point.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/accompagnement#reserver"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#FBF9F5] text-[#1A1412] hover:bg-[#B6A571] hover:text-[#1A1412] transition-colors shadow-lg"
            >
              Réserver mon appel découverte offert
            </a>
            <a
              href="/power-tear-lab"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#FBF9F5]/40 text-[#FBF9F5] hover:bg-[#FBF9F5]/10 transition-colors"
            >
              Rejoindre un Cercle en Présentiel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
