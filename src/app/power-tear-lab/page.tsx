import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CircleRegistrationForm } from '@/components/sections/CircleRegistrationForm';
import { DEFAULT_EVENTS } from '@/lib/data/default-events';
import { Users, Heart, MapPin, Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Cercles Power Tear Lab · Cercles de Discussion Féminins | IRIA Lab',
  description:
    'Des cercles de discussion intimes et trimestriels en présentiel en Suisse (Genève, Lausanne). 8 participantes maximum pour déposer sa vulnérabilité et se réaligner.',
};

export default function PowerTearLabPage() {
  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#839689]/15 text-[#4D6355] text-xs uppercase tracking-widest font-semibold">
          <span>Rencontres Présentielles Suisse Romande</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          Les Cercles Power Tear Lab
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-2xl mx-auto leading-relaxed">
          Un espace de parole intime, guidé et hautement confidentiel. Une matinée pour déposer ce qui pèse, explorer une thématique forte et s’enrichir du miroir d’autres femmes.
        </p>
      </div>

      {/* Le Concept */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 space-y-3">
            <Users className="w-8 h-8 text-[#4A1521]" />
            <h3 className="font-serif text-xl text-[#1A1412] font-medium">
              8 Participantes Max
            </h3>
            <p className="text-xs text-[#635634] leading-relaxed">
              Pour garantir que chaque femme dispose d’un temps de parole respecté et d’une écoute de pleine présence.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 space-y-3">
            <Heart className="w-8 h-8 text-[#839689]" />
            <h3 className="font-serif text-xl text-[#1A1412] font-medium">
              Zéro Jugement
            </h3>
            <p className="text-xs text-[#635634] leading-relaxed">
              Une charte de confidentialité et de bienveillance absolue signée par chacune avant le début de l’atelier.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 space-y-3">
            <Sparkles className="w-8 h-8 text-[#B6A571]" />
            <h3 className="font-serif text-xl text-[#1A1412] font-medium">
              Outils PNL Pratiques
            </h3>
            <p className="text-xs text-[#635634] leading-relaxed">
              Ce n’est pas qu’un café informel : Tamara guide des protocoles concrets pour repartir avec des clés d’action.
            </p>
          </div>
        </div>
      </section>

      {/* Prochaines Dates */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 mb-20">
        <SectionHeader
          eyebrow="Calendrier des Sessions"
          title="Les Prochaines Sessions Trimestrielles"
          subtitle="Réservation obligatoire. Le nombre de places est strictement limité pour préserver l’intimité."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEFAULT_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#635634]/20 shadow-md space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#B6A571] font-semibold">
                    {evt.edition}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#839689]/20 text-[#4D6355]">
                    {evt.maxSeats - evt.seatsReserved} places disponibles
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#1A1412] font-medium">
                  {evt.theme}
                </h3>
                <p className="text-xs text-[#635634] leading-relaxed">
                  {evt.description}
                </p>

                <div className="pt-2 space-y-2 text-xs text-[#1A1412]/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#4A1521]" />
                    <span>{evt.eventDate} ({evt.timeRange})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#4A1521]" />
                    <span>{evt.location} · {evt.address}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#635634]/15 flex items-center justify-between">
                <div>
                  <span className="font-serif text-2xl text-[#4A1521] font-semibold">
                    CHF {evt.priceChf}
                  </span>
                  <span className="text-[10px] text-[#635634] block">Thé, café et supports inclus</span>
                </div>
                <a
                  href="#inscription"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors"
                >
                  S’inscrire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire d'Inscription */}
      <section id="inscription" className="max-w-4xl mx-auto px-6 sm:px-8 scroll-mt-24">
        <CircleRegistrationForm />
      </section>
    </div>
  );
}
