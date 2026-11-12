export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryLabel: string;
  readingTimeMinutes: number;
  coverImage: string;
  publishedAt: string;
}

export const DEFAULT_ARTICLES: ArticleItem[] = [
  {
    id: '1',
    slug: 'pourquoi-on-se-perd-dans-le-couple',
    title: 'Pourquoi on se perd dans le couple : le piège de la sur-adaptation',
    excerpt:
      'À force de préserver l’harmonie et de porter les besoins de l’autre, la frontière entre compromis et effacement de soi devient invisible. Comment identifier ce mécanisme et réapprendre à habiter sa vie.',
    category: 'quete-de-soi',
    categoryLabel: 'Quête de soi',
    readingTimeMinutes: 6,
    coverImage: '/images/tamara-portrait-2.jpeg',
    publishedAt: '2026-10-18',
    content: `
Quand on traverse une rupture ou que l’on s’épuise dans une relation, le premier réflexe est souvent de chercher ce qui n'a pas fonctionné avec l'autre. Pourtant, la question fondamentale qui émerge dans le silence qui suit est presque toujours la même : *qui suis-je devenue ?*

### Le mécanisme silencieux de la dilution
La sur-adaptation ne commence jamais par un renoncement violent. Elle s'installe par petites concessions quotidiennes :
- Dire oui quand tout ton corps crie non, pour éviter une tension.
- Adapter tes goûts, ton rythme, tes projets pour faire de la place à ceux du couple.
- Devenir celle sur qui tout le monde se repose, en oubliant que toi aussi, tu as besoin d'un socle.

Peu à peu, l'identité s'effrite. Tu ne choisis plus en fonction de tes désirs profonds, mais en fonction des attentes extérieures.

### Ce que la PNL nous enseigne sur nos croyances
Dans l'accompagnement IRIA, nous explorons les stratégies inconscientes qui t'ont poussée à penser que pour être aimée, il fallait être utile, docile ou irréprochable. Ces mécanismes ont souvent été des stratégies de protection très efficaces par le passé. Mais aujourd'hui, elles sont devenues ta propre cage.

### Les 3 premiers pas pour revenir à soi
1. **Identifier le signal corporel de saturation** : Quand ressens-tu cette boule au ventre ou cette fatigue soudaine ? C'est ta limite qui frappe à la porte.
2. **Nommer un besoin non négociable par jour** : Même simple (20 minutes de solitude, une marche, un refus franc).
3. **Cesser de devancer les attentes d'autrui** : Attendre que l'autre formule sa demande plutôt que de porter son fardeau d'avance.
    `,
  },
  {
    id: '2',
    slug: 'les-6-chantiers-du-realignement-feminin',
    title: 'Les 6 chantiers du réalignement : au-delà de la simple reconstruction',
    excerpt:
      'Guérir d’une séparation ne consiste pas à colmater les brèches. C’est l’opportunité rare de bâtir de nouvelles fondations : identité, valeurs, besoins, limites et sécurité autonome.',
    category: 'philosophie-iria',
    categoryLabel: 'Méthode IRIA',
    readingTimeMinutes: 8,
    coverImage: '/images/tamara-portrait-3.jpeg',
    publishedAt: '2026-10-29',
    content: `
« Ce n’est pas le temps qui répare une vie mise en pause. C’est l’action. » 

Cette phrase est le socle de toute la philosophie d'IRIA Lab. Après un bouleversement relationnel, beaucoup de femmes attendent que les mois passent, espérant que l'apaisement survienne par miracle. Mais si tu ne changes pas ton logiciel intérieur, tu réinvites tôt ou tard les mêmes schémas relationnels.

### Les six piliers d'un socle inébranlable
Dans l'accompagnement en 8 séances, nous travaillons chirurgicalement sur six dimensions clés :

1. **L’Identité choisie** : Définir qui tu es quand tu retires tes casquettes de mère, de partenaire ou de professionnelle dévouée.
2. **Les Valeurs cardinales** : Ce qui t'anime viscéralement et qui doit désormais guider tes arbitrages.
3. **Les Besoins réels** : Sécurité, reconnaissance, liberté, sensualité, repos. Savoir les nommer sans honte.
4. **Les Mécanismes d'évitement** : Repérer quand tu fuis le vide par l'hyperactivité, le contrôle ou la complaisance.
5. **La pacification des blessures** : Comprendre comment la peur de l'abandon ou du rejet pilote tes choix affectifs.
6. **L’Ancrage de sécurité autonome** : Sentir que ta valeur ne dépend plus du regard ni de la validation d'un homme.

Quand ces 6 chantiers sont visités et consolidés, tu ne rentres plus dans une relation amoureuse par besoin de complétude, mais par envie de partage. La différence est absolue.
    `,
  },
  {
    id: '3',
    slug: 'comment-poser-des-limites-sans-culpabilite',
    title: 'Poser ses limites sans trembler : l’art de dire non avec calme et fermeté',
    excerpt:
      'Pourquoi dire non suscite-t-il une telle angoisse de rejet ? Découvrez comment transformer la peur du conflit en une affirmation saine et respectée.',
    category: 'valeurs-et-limites',
    categoryLabel: 'Limites Saines',
    readingTimeMinutes: 5,
    coverImage: '/images/tamara-portrait-1.jpeg',
    publishedAt: '2026-11-05',
    content: `
Combien de fois as-tu accepté une invitation, un compromis ou une charge supplémentaire par peur de blesser, de décevoir ou d'être perçue comme "égoïste" ?

Pour la plupart des femmes que j'accompagne chez IRIA, poser une limite est vécu comme un acte de violence ou une déclaration de guerre. Pourtant, une limite n'est pas un mur dressé contre l'autre : c'est la notice d'utilisation de ton respect personnel.

### La différence entre la barrière et la limite saine
Une barrière agressive naît de la colère et cherche à punir l'autre. Une limite saine naît de l'amour de soi et s'exprime avec neutralité :
- *« Je comprends que ce soit important pour toi, mais pour ce week-end, j'ai besoin de temps pour moi. »*
- *« Ce ton ne me convient pas. Nous reprendrons cet échange quand nous serons plus calmes. »*

La clarté est une forme suprême d'élégance. Plus tu es au clair avec tes standards, moins tu as besoin de te justifier.
    `,
  },
];
