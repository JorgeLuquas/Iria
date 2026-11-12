import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MethodExplorer } from '@/components/sections/MethodExplorer';
import { Shield, Sparkles, BookOpen, Compass, Flame, Heart, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'La Méthode I.R.I.A. · 4 Mouvements & 6 Chantiers | IRIA Lab',
  description:
    'Découvrez l’architecture de la méthode IRIA : Initiate, Rise, Inspire, Align. Les 6 chantiers de fond pour bâtir des fondations relationnelles inaltérables.',
};

export default function MethodePage() {
  const chantiers = [
    {
      num: '01',
      title: 'L’Identité Choisie',
      desc: 'Qui es-tu au-delà des rôles que tu tiens (professionnelle, mère, partenaire, pilier des autres) ? Distinguer ce qui t’appartient vraiment de ce que tu as adopté pour plaire ou survivre.',
    },
    {
      num: '02',
      title: 'Les Valeurs Fondamentales',
      desc: 'Identifier ce qui compte réellement pour toi aujourd’hui, au-delà de ce qu’on t’a appris à vouloir. Réaligner tes choix sur ta boussole éthique et affective.',
    },
    {
      num: '03',
      title: 'Les Besoins Non Négociables',
      desc: 'Reconnaître tes besoins réels (sécurité, liberté, sensualité, repos, reconnaissance) pour cesser de les sacrifier en silence en espérant que l’autre les devine.',
    },
    {
      num: '04',
      title: 'Les Mécanismes d’Évitement',
      desc: 'Repérer tes stratégies de protection réflexes (sur-adaptation, contrôle, hyperactivité, repli) pour agir en conscience plutôt que par automatisme.',
    },
    {
      num: '05',
      title: 'Les Blessures Anciennes',
      desc: 'Comprendre comment la peur de l’abandon, du rejet ou de la trahison se réactive dans tes moments de bascule relationnelle pour ne plus les rejouer malgré toi.',
    },
    {
      num: '06',
      title: 'L’Ancrage de Sécurité Autonome',
      desc: 'Construire une sécurité intérieure stable, indépendante du regard ou de l’approbation de ton partenaire, sur laquelle tout ton avenir peut s’appuyer.',
    },
  ];

  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Intro Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
          Fondements & Neuro-Linguistique
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          La Méthode IRIA
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-2xl mx-auto leading-relaxed">
          Une architecture en 4 mouvements et 6 chantiers de fond, pensée comme un fil rouge — de la stabilisation de ton quotidien à l’alignement durable de tes choix.
        </p>
      </div>

      {/* Explorer Component */}
      <MethodExplorer />

      {/* Les 6 Chantiers de Fond */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Le Travail Intérieur"
          title="Les 6 Chantiers de Fond Explorés"
          subtitle="Pas de vagues discussions théoriques : chaque chantier est exploré à travers des exercices concrets et des protocoles PNL éprouvés."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chantiers.map((c) => (
            <div
              key={c.num}
              className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 shadow-sm space-y-4 hover:border-[#4A1521]/30 transition-all"
            >
              <span className="font-serif text-3xl text-[#4A1521]/60 font-semibold block">
                {c.num}
              </span>
              <h3 className="font-serif text-2xl text-[#1A1412] font-medium">
                {c.title}
              </h3>
              <p className="text-xs text-[#635634] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Les Outils et Rituels Emblématiques */}
      <section className="py-20 bg-[#1A1412] text-[#FBF9F5] border-y border-[#635634]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Rigueur & Symbolique"
            title="Les Outils & Rituels Clés"
            subtitle="La puissance d’une méthodologie qui allie neurosciences, PNL et actes symboliques libérateurs."
            centered
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FBF9F5]/5 border border-[#B6A571]/20 space-y-4">
              <Compass className="w-8 h-8 text-[#B6A571]" />
              <h3 className="font-serif text-2xl text-[#FBF9F5]">
                La Root Map
              </h3>
              <p className="text-xs text-[#D6CEBE]/80 leading-relaxed">
                Une cartographie visuelle de départ évaluant 6 dimensions fondamentales (identité, limites, confiance, énergie, désir, sens). Reprise et comparée en fin de parcours pour mesurer le chemin parcouru.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FBF9F5]/5 border border-[#B6A571]/20 space-y-4">
              <Flame className="w-8 h-8 text-[#B6A571]" />
              <h3 className="font-serif text-2xl text-[#FBF9F5]">
                Les Lettres de Feu
              </h3>
              <p className="text-xs text-[#D6CEBE]/80 leading-relaxed">
                Deux rituels de passage symboliques d’écriture guidée et de combustion : l’une pour faire le deuil de la version de toi qui s’oubliait, l’autre pour sceller l’engagement envers la femme réalignée.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FBF9F5]/5 border border-[#B6A571]/20 space-y-4">
              <Sparkles className="w-8 h-8 text-[#B6A571]" />
              <h3 className="font-serif text-2xl text-[#FBF9F5]">
                Ancrages PNL & Carnet Final
              </h3>
              <p className="text-xs text-[#D6CEBE]/80 leading-relaxed">
                Modélisation de tes ressources intérieures pour les réactiver instantanément dans les moments de doute. Remise en séance 8 de ton carnet de synthèse personnel, ton guide à vie.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="/accompagnement"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#FBF9F5] text-[#1A1412] hover:bg-[#B6A571] hover:text-[#1A1412] transition-colors"
            >
              <span>Voir le déroulé de l’Accompagnement 8 Séances</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
