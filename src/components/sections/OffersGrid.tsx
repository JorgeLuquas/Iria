import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, Check, Users, Sparkles, BookOpen, Clock, HeartHandshake } from 'lucide-react';

export const OffersGrid = () => {
  return (
    <section className="py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Les Chemins d’Accompagnement"
          title="Les Portes d’Entrée d’IRIA Lab"
          subtitle="Trois formats d’expériences conçus pour s’adapter à ton rythme, ton niveau d’engagement et ta situation actuelle."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Accompagnement Individuel (Majeur) */}
          <div className="relative rounded-3xl p-8 bg-[#F5F0E6] border-2 border-[#4A1521]/30 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 md:-mt-4 md:mb-4">
            <div className="absolute -top-3.5 left-8">
              <Badge variant="bordeaux">Parcours Signature</Badge>
            </div>

            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B6A571] font-semibold">
                  Coaching Individuel Premium
                </span>
                <h3 className="font-serif text-3xl text-[#1A1412] font-medium">
                  Le Parcours 8 Séances
                </h3>
                <p className="text-xs text-[#635634] leading-relaxed">
                  L’immersion de réalignement complète. Un travail d’orfèvre pour te retrouver, casser les schémas répétitifs et bâtir des fondations inaltérables.
                </p>
              </div>

              <div className="py-4 border-y border-[#635634]/15">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-[#4A1521] font-semibold">
                    CHF 2’490
                  </span>
                  <span className="text-xs text-[#635634]">/ 2’649 €</span>
                </div>
                <span className="text-[11px] text-[#635634]/70 block mt-0.5">
                  4 à 6 mois · Paiement échelonné possible
                </span>
              </div>

              <ul className="space-y-3 text-xs text-[#1A1412]/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>8 séances individuelles de 1h30 en visio</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Suivi continu WhatsApp (Lun–Ven 9h–14h)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Root Map d’entrée & sortie (mesure concrète)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Rituels des lettres de feu & carnet final</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="/accompagnement"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
              >
                <span>Découvrir l’Accompagnement</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Cercles Power Tear Lab */}
          <div className="rounded-3xl p-8 bg-[#FBF9F5] border border-[#635634]/20 shadow-sm flex flex-col justify-between group hover:border-[#635634]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#839689] font-semibold">
                  Atelier Présentiel Suisse
                </span>
                <h3 className="font-serif text-2xl text-[#1A1412] font-medium">
                  Cercles Power Tear Lab
                </h3>
                <p className="text-xs text-[#635634] leading-relaxed">
                  Des cercles de discussion trimestriels en petit comité pour déposer sa charge mentale, explorer un thème fort et vivre la puissance du miroir entre femmes.
                </p>
              </div>

              <div className="py-4 border-y border-[#635634]/15">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-[#1A1412] font-semibold">
                    CHF 90
                  </span>
                  <span className="text-xs text-[#635634]">/ session</span>
                </div>
                <span className="text-[11px] text-[#635634]/70 block mt-0.5">
                  3h30 d’atelier en présentiel (Genève & Lausanne)
                </span>
              </div>

              <ul className="space-y-3 text-xs text-[#1A1412]/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Groupe restreint à 8 participantes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Cadre sécurisé, confidentiel et bienveillant</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Exercices PNL guidés & temps d’échange</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="/power-tear-lab"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1412] text-[#FBF9F5] hover:bg-[#392118] transition-colors"
              >
                <span>Voir les prochaines dates</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Le Journal & Réflexions */}
          <div className="rounded-3xl p-8 bg-[#FBF9F5] border border-[#635634]/20 shadow-sm flex flex-col justify-between group hover:border-[#635634]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B6A571] font-semibold">
                  Ressources & Savoir
                </span>
                <h3 className="font-serif text-2xl text-[#1A1412] font-medium">
                  Le Journal IRIA
                </h3>
                <p className="text-xs text-[#635634] leading-relaxed">
                  Des clés de compréhension profondes sur les schémas répétitifs, l’estime de soi, les limites et la PNL pour commencer ton cheminement dès aujourd’hui.
                </p>
              </div>

              <div className="py-4 border-y border-[#635634]/15">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-[#1A1412] font-semibold">
                    Accès Libre
                  </span>
                </div>
                <span className="text-[11px] text-[#635634]/70 block mt-0.5">
                  Articles de fond & analyses psychologiques
                </span>
              </div>

              <ul className="space-y-3 text-xs text-[#1A1412]/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Décryptage des dynamiques de couple</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Protocoles d'affirmation et de clarté</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#839689] shrink-0 mt-0.5" />
                  <span>Perspectives et retours d'expérience</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="/journal"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#635634]/30 text-[#1A1412] hover:bg-[#EAE4D9]/60 transition-colors"
              >
                <span>Lire les articles</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
