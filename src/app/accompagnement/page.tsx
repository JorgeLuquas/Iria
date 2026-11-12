'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import {
  Check,
  X,
  Calendar,
  Clock,
  Video,
  MessageCircle,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function AccompagnementPage() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const includedItems = [
    {
      title: '8 Séances Individuelles de 1h30 (12h de coaching)',
      desc: 'En visioconférence sécurisée, à un rythme dégressif adapté à ton évolution pour favoriser l’autonomie.',
    },
    {
      title: 'Cartographie Root Map d’Entrée & de Sortie',
      desc: 'Mesure objective de ton évolution sur 6 dimensions clés entre le premier et le dernier mois.',
    },
    {
      title: 'Préparation Sur-Mesure de chaque séance',
      desc: 'Chaque séance est préparée en amont par Tamara selon tes défis et tes victoires de la semaine.',
    },
    {
      title: 'Suivi Continu WhatsApp (Lun–Ven 9h–14h)',
      desc: 'Pour déposer tes doutes dans les moments clés, célébrer tes déclics et ne jamais rester seule face à un blocage.',
    },
    {
      title: 'Protocoles PNL & 2 Rituels des Lettres de Feu',
      desc: 'Exercices d’ancrage, de modélisation et rituels symboliques de clôture et d’ouverture.',
    },
    {
      title: 'Carnet de Synthèse Final Personnalisé',
      desc: 'Un livrable complet remis en fin de parcours regroupant ton chemin parcouru, tes ressources et ta feuille de route.',
    },
  ];

  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Intro Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A1521]/10 text-[#4A1521] text-xs uppercase tracking-widest font-semibold">
          <span>Parcours Signature 4 à 6 Mois</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          L’Accompagnement IRIA
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-2xl mx-auto leading-relaxed">
          Un travail d’orfèvre individuel pour te retrouver, te choisir et te réaligner. Ni une thérapie au long cours, ni un coup de baguette magique : une transformation mesurable.
        </p>
      </div>

      {/* Le Cœur de l'Investissement */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 mb-24">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#F5F0E6] border-2 border-[#4A1521]/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-[#635634]/15">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B6A571] font-semibold">
                Investissement Transparent
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412]">
                Parcours 8 Séances · 4 à 6 Mois
              </h2>
              <p className="text-xs text-[#635634] leading-relaxed">
                Le parcours peut être prolongé de quelques semaines en cas d’imprévu (vacances, maladie) afin que tu vives chaque étape sans pression de temps.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col lg:items-end justify-center">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl text-[#4A1521] font-semibold">
                  CHF 2’490
                </span>
                <span className="text-sm text-[#635634]">/ 2’649 €</span>
              </div>
              <span className="text-xs text-[#635634] mt-1">
                Paiement échelonné possible en 2, 3 ou 4 mensualités
              </span>
              <a
                href="#reserver"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
              >
                <span>Planifier l’appel découverte</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ce qui est inclus */}
          <div className="pt-10">
            <h3 className="text-xs uppercase tracking-widest text-[#1A1412] font-semibold mb-6">
              Ce que comprend l’investissement :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includedItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#839689]/20 text-[#4D6355] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1A1412]">{item.title}</h4>
                    <p className="text-[11px] text-[#635634] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui / Pas pour qui */}
      <section className="py-20 bg-[#EAE4D9]/40 border-y border-[#635634]/15 mb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Éligibilité & Clarté"
            title="Pour qui est fait ce parcours ?"
            subtitle="Parce qu’un accompagnement réussi repose sur une totale transparence dès le départ."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pour toi si... */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#839689]/40 space-y-4">
              <div className="flex items-center gap-2 text-[#4D6355]">
                <Check className="w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold">Cet accompagnement est pour toi si…</h3>
              </div>
              <ul className="space-y-3 text-xs text-[#1A1412]/90 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#839689] mt-1.5 shrink-0" />
                  <span>Tu as traversé une rupture ou une séparation et tu te sens émotionnellement stabilisée.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#839689] mt-1.5 shrink-0" />
                  <span>Tu as conscience de t’être effacée dans tes rôles et tu veux réapprendre qui tu es.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#839689] mt-1.5 shrink-0" />
                  <span>Tu es orientée solutions et tu souhaites un cadre structuré et rigoureux.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#839689] mt-1.5 shrink-0" />
                  <span>Tu es prête à consacrer du temps chaque semaine et à investir financièrement en toi.</span>
                </li>
              </ul>
            </div>

            {/* Pas pour toi si... */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#4A1521]/20 space-y-4">
              <div className="flex items-center gap-2 text-[#4A1521]">
                <X className="w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold">Ce n’est pas pour toi si…</h3>
              </div>
              <ul className="space-y-3 text-xs text-[#1A1412]/90 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>Tu traverses une crise clinique aiguë (dépression sévère nécessitant un suivi médical/psychiatrique).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>Tu cherches une recette magique instantanée sans t’investir personnellement entre les séances.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A1521] mt-1.5 shrink-0" />
                  <span>Tu n’es pas prête, aujourd’hui, à dégager 2 à 3 heures par semaine pour ce travail.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Réservation Appel Découverte (#reserver) */}
      <section id="reserver" className="max-w-4xl mx-auto px-6 sm:px-8 scroll-mt-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBF9F5] border border-[#635634]/20 shadow-xl space-y-8 text-center">
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
              Prendre Rendez-vous
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412]">
              L’Appel Découverte de 15 à 20 Minutes
            </h2>
            <p className="text-xs text-[#635634] leading-relaxed">
              Un échange confidentiel et sans engagement avec Tamara. Nous faisons le point sur ta situation, tes attentes et la pertinence du parcours pour toi.
            </p>
          </div>

          {/* Calendly Interactive Card Placeholder */}
          <div className="p-8 rounded-2xl bg-[#F5F0E6] border border-[#635634]/15 space-y-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 text-xs text-[#4A1521] font-medium">
              <Calendar className="w-4 h-4" />
              <span>Planning Ouvert · Semaine & Samedi matin</span>
            </div>

            <p className="text-xs text-[#635634] leading-relaxed">
              Sélectionne le créneau qui te convient le mieux pour échanger en visio ou par téléphone.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                type="button"
                onClick={() => setSelectedSlot('Mardi 14h00')}
                className={`py-3 px-4 rounded-xl border text-center font-medium transition-all ${
                  selectedSlot === 'Mardi 14h00'
                    ? 'border-[#4A1521] bg-[#4A1521] text-[#FBF9F5]'
                    : 'border-[#635634]/20 bg-[#FBF9F5] text-[#1A1412] hover:bg-[#EAE4D9]'
                }`}
              >
                Mardi · 14h00
              </button>
              <button
                type="button"
                onClick={() => setSelectedSlot('Jeudi 11h30')}
                className={`py-3 px-4 rounded-xl border text-center font-medium transition-all ${
                  selectedSlot === 'Jeudi 11h30'
                    ? 'border-[#4A1521] bg-[#4A1521] text-[#FBF9F5]'
                    : 'border-[#635634]/20 bg-[#FBF9F5] text-[#1A1412] hover:bg-[#EAE4D9]'
                }`}
              >
                Jeudi · 11h30
              </button>
              <button
                type="button"
                onClick={() => setSelectedSlot('Vendredi 16h30')}
                className={`py-3 px-4 rounded-xl border text-center font-medium transition-all ${
                  selectedSlot === 'Vendredi 16h30'
                    ? 'border-[#4A1521] bg-[#4A1521] text-[#FBF9F5]'
                    : 'border-[#635634]/20 bg-[#FBF9F5] text-[#1A1412] hover:bg-[#EAE4D9]'
                }`}
              >
                Vendredi · 16h30
              </button>
              <button
                type="button"
                onClick={() => setSelectedSlot('Samedi 10h00')}
                className={`py-3 px-4 rounded-xl border text-center font-medium transition-all ${
                  selectedSlot === 'Samedi 10h00'
                    ? 'border-[#4A1521] bg-[#4A1521] text-[#FBF9F5]'
                    : 'border-[#635634]/20 bg-[#FBF9F5] text-[#1A1412] hover:bg-[#EAE4D9]'
                }`}
              >
                Samedi · 10h00
              </button>
            </div>

            <a
              href="mailto:contact@iria-lab.ch?subject=Demande%20d%27appel%20d%C3%A9couverte%20IRIA"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
            >
              <span>{selectedSlot ? `Valider mon créneau (${selectedSlot})` : 'Confirmer mon créneau d’appel'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="text-[10px] text-[#635634]/70">
              * L’intégration directe du widget Calendly / Cal.com de Tamara se synchronisera avec son agenda réel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
