import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, HeartHandshake, Award, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'À Propos · Tamara & La Philosophie d’IRIA Lab | Coaching Féminin',
  description:
    'Découvrez l’histoire de Tamara, fondatrice d’IRIA Lab. Ancienne case manager santé et coach certifiée PNL (Graines d’Éveil), dédiée à la reconstruction des femmes.',
};

export default function AProposPage() {
  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Intro Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
          La Fondatrice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          Tamara & IRIA
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-2xl mx-auto leading-relaxed">
          « Ce que je porte dans cet accompagnement, c’est tout ce que je sais avec rigueur, et tout ce que la vie m’a appris en chemin. »
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/5] border border-[#635634]/20 shadow-2xl bg-[#EAE4D9]">
              <img
                src="/images/tamara-portrait-2.jpeg"
                alt="Tamara · IRIA Lab"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm text-[#1A1412]/90 leading-relaxed font-light">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1412] leading-tight">
              Bonjour, je m’appelle Tamara.
            </h2>
            <p>
              Il y a dix ans, ma vie s’est fissurée en silence. Un divorce, et avec lui, cette question qui ne m’a plus quittée pendant des mois :{' '}
              <strong className="font-normal italic text-[#4A1521]">
                qui suis-je, en dehors des rôles que je tenais ?
              </strong>
            </p>
            <p>
              J’ai connu le brouillard épais, la perte brutale de repères, et ce sentiment d’avoir vécu en pilote automatique au service des autres. Peu à peu, j’ai réappris à prendre appui sur mes propres ressources, jusqu’à retrouver un élan sincère et donner un sens nouveau à ma trajectoire.
            </p>
            <p>
              Pendant plusieurs années, en tant que <strong className="font-normal text-[#1A1412]">case manager et spécialiste en gestion de la santé</strong>, j’ai accompagné des personnes confrontées à des ruptures de vie majeures (burn-out, maladies lourdes, handicaps). J’y ai forgé une conviction inébranlable :{' '}
              <span className="italic text-[#4A1521]">
                accompagner, ce n’est pas réparer à la place de l’autre. C’est soutenir, faire circuler et faciliter ce qui peut l’être, avec autant de rigueur méthodologique que d’humanité.
              </span>
            </p>
            <p>
              C’est en réunissant cette expérience humaine et ce savoir-faire clinique que j’ai choisi de me former et me certifier à l’école <strong className="font-normal text-[#1A1412]">Graines d’Éveil</strong>, comme coach et praticienne en Programmation Neuro-Linguistique (PNL).
            </p>
          </div>
        </div>

        {/* Les Piliers Déontologiques */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 shadow-sm space-y-8 mb-24">
          <SectionHeader
            eyebrow="Posture d'Accompagnement"
            title="L’Expérience IRIA : Rigueur & Douceur"
            subtitle="Une éthique de coaching qui refuse le faux espoir pour privilégier l’ancrage réel."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#635634] leading-relaxed">
            <div className="space-y-3">
              <span className="font-serif text-xl text-[#1A1412] font-semibold block">
                Douce mais pas floue
              </span>
              <p>
                Une bienveillance chaleureuse qui accueille ta vulnérabilité sans complaisance stérile. Nous posons des mots justes sur tes mécanismes de défense.
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-serif text-xl text-[#1A1412] font-semibold block">
                Profonde mais concrète
              </span>
              <p>
                Nous ne nous contentons pas de parler : chaque prise de conscience s’ancre dans des micro-actions et des exercices pratiques entre les séances.
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-serif text-xl text-[#1A1412] font-semibold block">
                Structurée sans être scolaire
              </span>
              <p>
                La méthode suit le fil conducteur I.R.I.A., mais chaque séance s’adapte avec souplesse à ton énergie et aux urgences de ta semaine.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-12">
          <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#1A1412] mb-6">
            « N’attends plus pour devenir la femme qui se choisit. »
          </blockquote>
          <a
            href="/accompagnement#reserver"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
          >
            <span>Planifier mon appel découverte offert</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
