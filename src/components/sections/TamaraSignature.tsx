import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowUpRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TamaraSignature = () => {
  return (
    <section className="py-24 bg-[#1A1412] text-[#FBF9F5] relative overflow-hidden">
      {/* Warm ambient background aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#4A1521]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="rounded-[28px] overflow-hidden aspect-[4/5] border border-[#B6A571]/20 shadow-2xl relative">
                <img
                  src="/images/tamara-portrait-3.jpeg"
                  alt="Tamara à Genève"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold block mb-1">
                    Fondatrice d’IRIA
                  </span>
                  <p className="font-serif text-2xl text-[#FBF9F5]">
                    Tamara
                  </p>
                  <p className="text-xs text-[#D6CEBE]/80 mt-1">
                    Coach Certifiée & Praticienne PNL · Graines d’Éveil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF9F5]/10 border border-[#B6A571]/30 text-[#B6A571] text-xs uppercase tracking-[0.2em]">
              <span>La Genèse & La Voix</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FBF9F5] leading-tight">
              « Accompagner, ce n’est pas réparer à la place de l’autre.{' '}
              <span className="italic text-[#B6A571]">
                C’est soutenir et faire circuler. »
              </span>
            </h2>

            <div className="space-y-4 text-sm text-[#D6CEBE]/90 leading-relaxed font-light">
              <p>
                Il y a dix ans, ma propre vie s’est fissurée en silence. Un divorce, et avec lui, cette question vertigineuse qui ne m’a plus quittée :{' '}
                <strong className="text-[#FBF9F5] font-normal italic">
                  qui suis-je en dehors des rôles que je tenais ?
                </strong>{' '}
                J’ai connu le brouillard, la perte totale de repères, et ce besoin d’apprendre à tout reconstruire sans mode d’emploi.
              </p>
              <p>
                Pendant plusieurs années, comme <strong className="text-[#FBF9F5] font-normal">case manager et spécialiste en gestion de la santé</strong>, j’ai accompagné des personnes traversant des épreuves majeures (burn-out, affections lourdes). J’y ai forgé une rigueur professionnelle et une écoute qui refuse les faux-semblants et les recettes magiques toutes faites.
              </p>
              <p>
                Formée et certifiée comme coach et praticienne PNL à l’école Graines d’Éveil, j’ai créé IRIA pour offrir aux femmes le cadre structuré, chaleureux et sans concession que j’aurais voulu trouver sur mon propre chemin.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#FBF9F5]/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#839689] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#FBF9F5] font-medium">
                    Certification PNL Reconnue
                  </span>
                  <span className="text-[11px] text-[#D6CEBE]/70">
                    École Graines d’Éveil (Suisse)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#B6A571] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#FBF9F5] font-medium">
                    Rigueur & Déontologie
                  </span>
                  <span className="text-[11px] text-[#D6CEBE]/70">
                    Confidentialité absolue et cadre sécurisé
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/a-propos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B6A571] hover:text-[#FBF9F5] transition-colors group"
              >
                <span>Découvrir le parcours complet de Tamara</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
