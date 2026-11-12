'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight, Compass, Shield, Sparkles, Anchor, Flame, CheckCircle2 } from 'lucide-react';

export const MethodExplorer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const movements = [
    {
      letter: 'I',
      name: 'INITIATE',
      month: 'Mois 1 · Sortir du pilote automatique',
      tagline: 'Faire l’état des lieux, stabiliser ton quotidien et poser une première sécurité intérieure.',
      description:
        'Le point de bascule. Nous dressons une cartographie honnête de ta situation à travers la Root Map. Nous identifions les zones de fuite d’énergie, désamorçons l’urgence émotionnelle et posons le premier rituel libérateur : la première lettre de feu.',
      icon: Compass,
      tools: ['Root Map d’entrée (6 dimensions)', 'Ancrage de sécurité PNL', '1ère Lettre de Feu (rituel de clôture)', 'Journaling guidé'],
      result: 'Tu passes de la survie à la lucidité : ton quotidien est sécurisé et tu cesses de subir le regard d’autrui.',
    },
    {
      letter: 'R',
      name: 'RISE',
      month: 'Mois 2 · Redéfinir qui tu es',
      tagline: 'Valeurs fondamentales, besoins réels, limites saines et reprise de pouvoir.',
      description:
        'Le cœur du travail identitaire. Qui es-tu une fois délestée des attentes des autres ? Nous passons au crible tes mécanismes d’évitement (contrôle, sur-adaptation, fuite) et les schémas réactivés par tes blessures anciennes pour ne plus jamais les rejouer.',
      icon: Shield,
      tools: ['Identification des valeurs cardinales', 'Cartographie des besoins non négociables', 'Protocoles de désactivation des blessures', 'Modélisation PNL de l’assurance'],
      result: 'Tu réapprends à poser des limites claires sans trembler ni culpabiliser. Ton identité t’appartient.',
    },
    {
      letter: 'I',
      name: 'INSPIRE',
      month: 'Mois 3 · Rouvrir le champ des possibles',
      tagline: 'Plaisir, désir, créativité, nouveaux projets et nouvelles connexions.',
      description:
        'Quand la sécurité et l’identité sont en place, l’espace se libère pour le vivant. Nous réactivons ta capacité à désirer, à oser rêver grand et à projeter la femme que tu as envie de devenir dans toutes les sphères de ta vie.',
      icon: Sparkles,
      tools: ['Visualisation guidée de futurisation', 'Stratégies créatives PNL', 'Human Design (en éclairage optionnel)', 'Exercices d’audace relationnelle'],
      result: 'L’énergie revient avec puissance. Tu réinvestis tes passions et tes standards s’élèvent naturellement.',
    },
    {
      letter: 'A',
      name: 'ALIGN',
      month: 'Mois 4 · Ancrer des choix durables',
      tagline: 'Vision de vie, nouveaux standards relationnels, feuille de route et ancrage.',
      description:
        'L’aboutissement de la quête. Tu ne retournes pas dans ton ancienne vie : tu incarnes tes nouveaux choix. Nous célébrons le chemin parcouru avec la seconde lettre de feu, comparons ta Root Map finale et te remettons ton carnet de synthèse personnel.',
      icon: Anchor,
      tools: ['2ème Lettre de Feu (vers la femme réalignée)', 'Root Map de sortie (mesure concrète)', 'Carnet de synthèse personnalisé', 'Plan de résilience sur 12 mois'],
      result: 'Une autonomie totale. Tu avances avec une boussole intérieure claire et des standards d’amour fermes.',
    },
  ];

  return (
    <section className="py-24 bg-[#EAE4D9]/40 border-y border-[#635634]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Architecture Méthodologique"
          title="La Méthode I.R.I.A. en 4 Mouvements"
          subtitle="Une structure progressive et concrète, pensée pour t'accompagner de la stabilisation immédiate jusqu’à l’alignement pérenne."
          centered
        />

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {movements.map((m, index) => {
            const Icon = m.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl flex items-center gap-3.5 transition-all text-left border ${
                  isActive
                    ? 'bg-[#FBF9F5] border-[#4A1521] shadow-md -translate-y-1'
                    : 'bg-[#FBF9F5]/50 border-[#635634]/15 hover:bg-[#FBF9F5]/90'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif text-lg font-semibold shrink-0 ${
                    isActive ? 'bg-[#4A1521] text-[#FBF9F5]' : 'bg-[#EAE4D9] text-[#635634]'
                  }`}
                >
                  {m.letter}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#1A1412]">
                    {m.name}
                  </span>
                  <span className="text-[10px] text-[#635634]/70">Mois {index + 1}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Movement Content Card */}
        {(() => {
          const current = movements[activeTab];
          const CurrentIcon = current.icon;
          return (
            <div className="max-w-4xl mx-auto bg-[#FBF9F5] rounded-3xl p-8 sm:p-12 border border-[#635634]/15 shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#635634]/15">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B6A571]">
                    {current.month}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1412] font-light">
                    Mouvement {current.letter} ·{' '}
                    <span className="italic font-normal text-[#4A1521]">{current.name}</span>
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#EAE4D9]/80 border border-[#635634]/20 flex items-center justify-center text-[#4A1521] shrink-0">
                  <CurrentIcon className="w-7 h-7" />
                </div>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-4">
                  <p className="text-base text-[#1A1412] font-medium leading-relaxed">
                    {current.tagline}
                  </p>
                  <p className="text-sm text-[#635634] leading-relaxed">
                    {current.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F5F0E6] border border-[#635634]/10 mt-6">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A1521] block mb-1">
                      Transformation Obtenue :
                    </span>
                    <p className="text-xs text-[#1A1412]/90 leading-relaxed italic">
                      « {current.result} »
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#EAE4D9]/40 rounded-2xl p-6 border border-[#635634]/10 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1412] block">
                      Outils & Protocoles Mobilisés :
                    </span>
                    <ul className="space-y-2.5">
                      {current.tools.map((t) => (
                        <li key={t} className="flex items-start gap-2.5 text-xs text-[#392118]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#839689] shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#635634]/10">
                    <a
                      href="/methode"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#4A1521] hover:text-[#3A0108] group"
                    >
                      <span>Voir le détail des 6 chantiers</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
