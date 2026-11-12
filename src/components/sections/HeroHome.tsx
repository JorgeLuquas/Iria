import React from 'react';
import { ArrowUpRight, Sparkles, Compass, Shield, Heart } from 'lucide-react';

export const HeroHome = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-28 bg-[#FBF9F5]">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#EAE4D9]/60 via-[#F5F0E6]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Copywriting Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EAE4D9]/80 border border-[#635634]/15 text-[#4A1521] text-xs uppercase tracking-[0.2em] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#B6A571]" />
              <span>Accompagnement de Réalignement & Quête de Soi</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light tracking-tight leading-[1.12]">
              Tu n’es pas perdue.{' '}
              <span className="italic font-normal text-[#4A1521]">
                Tu t’es éloignée de toi.
              </span>{' '}
              Il est temps de revenir.
            </h1>

            <p className="text-base sm:text-lg text-[#635634] leading-relaxed max-w-xl">
              Pour les femmes qui sentent qu’il est temps de se retrouver. Pas seulement pour « aller mieux », mais pour mener un vrai travail de fond : redécouvrir qui tu es aujourd’hui, clarifier ce qui compte vraiment, et choisir la vie qui te ressemble, au-delà des rôles que tu portes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/accompagnement"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Découvrir l’Accompagnement</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/methode"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border border-[#635634]/30 text-[#1A1412] hover:bg-[#EAE4D9]/60 transition-all duration-300"
              >
                <span>Explorer la Méthode IRIA</span>
              </a>
            </div>

            {/* Micro Pillars */}
            <div className="pt-8 border-t border-[#635634]/15 grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#1A1412] font-medium">
                  8 Séances
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#635634]/80">
                  12h de Coaching
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#4A1521] font-medium">
                  4 Mois
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#635634]/80">
                  Immersion Complète
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#1A1412] font-medium">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#635634]/80">
                  Sur-Mesure & PNL
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 rounded-[32px] border border-[#B6A571]/30 -z-10 rotate-1" />

              {/* Main Image Card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-[#EAE4D9] aspect-[4/5] border border-[#635634]/20 group">
                <img
                  src="/images/tamara-portrait-1.jpeg"
                  alt="Tamara · Fondatrice d'IRIA"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#FBF9F5]/90 backdrop-blur-md border border-[#635634]/15 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-base text-[#1A1412] font-medium">
                      Tamara
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#635634]">
                      Coach Certifiée & Praticienne PNL
                    </span>
                  </div>
                  <span className="text-xs italic text-[#4A1521] font-serif">
                    Graines d'Éveil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
