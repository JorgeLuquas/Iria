export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Méthode',
    question: 'En quoi IRIA est-il différent d’une thérapie classique ?',
    answer:
      'IRIA n’est pas une thérapie clinique ni une psychanalyse au long cours. C’est un parcours de coaching bref, dynamique et très structuré en 8 séances (12 heures), axé sur l’action, les solutions et le présent. Si nous prenons le temps d’identifier les blessures du passé (abandon, rejet, trahison), notre travail vise immédiatement à désamorcer leur emprise au quotidien grâce à la PNL, l’approche systémique et des exercices concrets.',
  },
  {
    category: 'Éligibilité',
    question: 'Comment savoir si cet accompagnement est fait pour moi ?',
    answer:
      'IRIA s’adresse aux femmes qui ont traversé une rupture ou une remise en question profonde, qui se sentent stabilisées émotionnellement (pas en crise aiguë nécessitant un psychiatre ou médecin) et qui sont décidées à investir du temps, de l’énergie et des ressources pour bâtir leur nouvelle vie. Si tu es prête à regarder tes propres mécanismes avec honnêteté et envie d’avancer, tu es au bon endroit.',
  },
  {
    category: 'Format',
    question: 'Les séances se déroulent-elles en présentiel ou en visio ?',
    answer:
      'L’accompagnement individuel en 8 séances se fait principalement en visioconférence sécurisée (1h30 par séance à un rythme dégressif), ce qui te permet de suivre le programme depuis la Suisse, la France, la Belgique ou l’étranger, dans le confort de ton cocon. En revanche, les cercles « Power Tear Lab » sont des ateliers trimestriels organisés en présentiel en Suisse (Genève, Lausanne).',
  },
  {
    category: 'Tarif',
    question: 'Quel est l’investissement financier et existe-t-il des facilités de paiement ?',
    answer:
      'Le parcours complet de 4 mois représente un investissement de CHF 2’490 (pour la Suisse) ou 2’649 € (pour la zone Euro). Ce tarif inclut les 8 séances individuelles de 1h30, la préparation sur-mesure de chaque rendez-vous, le suivi WhatsApp hebdomadaire (du lundi au vendredi, de 9h à 14h), la cartographie Root Map d’entrée/sortie, les rituels des lettres de feu et le carnet de synthèse final. Des facilités de règlement en 2, 3 ou 4 fois sans frais peuvent être mises en place lors de l’appel découverte.',
  },
  {
    category: 'Garantie & Appel',
    question: 'Comment se passe l’appel découverte préalable ?',
    answer:
      'L’appel découverte dure 15 à 20 minutes. Il est entièrement offert et sans aucun engagement. Il permet à Tamara de comprendre précisément où tu en es, de s’assurer mutuellement que la méthode IRIA répond à ton besoin, et de répondre à toutes tes questions de vive voix.',
  },
];
