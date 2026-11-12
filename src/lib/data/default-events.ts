export interface CircleEventItem {
  id: string;
  title: string;
  theme: string;
  edition: string;
  description: string;
  eventDate: string;
  location: string;
  address: string;
  timeRange: string;
  maxSeats: number;
  seatsReserved: number;
  priceChf: number;
  status: 'open' | 'sold_out' | 'draft' | 'completed';
}

export const DEFAULT_EVENTS: CircleEventItem[] = [
  {
    id: 'evt-geneve-h26',
    title: 'Cercle Power Tear Lab · Hiver 2026',
    theme: '« Poser ses limites et cesser d’avoir peur de déplaire »',
    edition: 'Édition Trimestrielle Suisse Romande',
    description:
      'Une matinée intime en présentiel, réservée à un groupe exclusif de 8 femmes. Un espace d’expression sécurisé, guidé par Tamara avec des exercices de libération émotionnelle, des miroirs de groupe et des outils concrets de PNL.',
    eventDate: 'Samedi 12 Décembre 2026',
    timeRange: '09h30 – 13h00',
    location: 'Genève, Suisse',
    address: 'Espace Intimiste & Chaleureux (adresse exacte transmise aux inscrites)',
    maxSeats: 8,
    seatsReserved: 5,
    priceChf: 90,
    status: 'open',
  },
  {
    id: 'evt-lausanne-p27',
    title: 'Cercle Power Tear Lab · Printemps 2027',
    theme: '« Redéfinir ses standards et oser désirer grand en amour »',
    edition: 'Édition Trimestrielle',
    description:
      'Comment sortir des relations de répétition et clarifier ce que tu mérites vraiment. Atelier d’exploration en petit comité pour femmes prêtes à passer à l’action.',
    eventDate: 'Samedi 20 Mars 2027',
    timeRange: '10h00 – 13h30',
    location: 'Lausanne, Suisse',
    address: 'Quartier Sous-Gare / Lac',
    maxSeats: 8,
    seatsReserved: 2,
    priceChf: 90,
    status: 'open',
  },
];
