'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Compass, Sparkles, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';

interface Question {
  id: number;
  dimension: string;
  question: string;
  options: {
    label: string;
    points: number;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'Les Limites & Le Respect de Soi',
    question: 'Quand quelqu’un te sollicite ou te demande un service qui te surcharge, quelle est ta réaction spontanée ?',
    options: [
      { label: 'J’accepte presque toujours par réflexe, par peur de décevoir ou de créer une tension.', points: 1 },
      { label: 'Je ressens un malaise dans le corps, j’hésite longuement, mais je finis par céder.', points: 2 },
      { label: 'J’arrive à dire non, mais avec une pointe de culpabilité ou le besoin de me justifier.', points: 3 },
      { label: 'Je pose mon refus avec calme et clarté, sans culpabilité ni agressivité.', points: 4 },
    ],
  },
  {
    id: 2,
    dimension: 'Le Pilote Automatique',
    question: 'Si tu devais poser un regard honnête sur tes dernières semaines, comment qualifierais-tu ton énergie ?',
    options: [
      { label: 'En survie fonctionnelle. Je coche les cases de mes rôles, mais je ne me sens plus moi-même.', points: 1 },
      { label: 'En dents de scie. Je donne beaucoup aux autres et je m’efface dès qu’il faut prendre soin de moi.', points: 2 },
      { label: 'En questionnement actif. Je sens qu’une page doit se tourner, mais je manque d’outils clairs.', points: 3 },
      { label: 'Ancrée et sereine. Mes besoins fondamentaux sont respectés au quotidien.', points: 4 },
    ],
  },
  {
    id: 3,
    dimension: 'La Clarté Identitaire',
    question: 'Quand on retire tes casquettes (professionnelle, mère, conjointe), sais-tu qui tu es aujourd’hui ?',
    options: [
      { label: 'C’est le vide ou le brouillard complet. J’ai l’impression d’avoir tout construit pour les autres.', points: 1 },
      { label: 'Je me souviens de qui j’étais avant, mais je ne sais plus qui je suis devenue.', points: 2 },
      { label: 'Je commence à percevoir mes désirs réels, mais j’ai encore du mal à les prioriser.', points: 3 },
      { label: 'Mon identité est claire, choisie et assumée avec fierté.', points: 4 },
    ],
  },
  {
    id: 4,
    dimension: 'Les Standards Amoureux & Relations',
    question: 'Face à tes relations actuelles ou futures, quelle est ta plus grande appréhension ?',
    options: [
      { label: 'La peur panique de reproduire exactement les mêmes schémas et de me refaire dévorer.', points: 1 },
      { label: 'La crainte de devoir choisir entre être aimée et être moi-même.', points: 2 },
      { label: 'L’envie d’une relation saine, avec le besoin d’apprendre à fixer des critères inaltérables.', points: 3 },
      { label: 'La certitude que ma sécurité ne dépendra plus jamais de la validation d’un partenaire.', points: 4 },
    ],
  },
];

export const RootMapDiagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const totalPoints = answers.reduce((acc, curr) => acc + curr, 0);

  // Diagnostic feedback profil
  const getProfile = () => {
    if (totalPoints <= 6) {
      return {
        title: 'Phase 1 : En Pilote Automatique & Sur-adaptation',
        color: '#4A1521',
        diagnosis:
          'Tu as pris l’habitude de faire passer tout le monde avant toi. Tes limites sont poreuses non par faiblesse, mais parce que tu as appris qu’être aimée signifiait être utile et irréprochable. Ton énergie est en dette.',
        recommendation:
          'Le parcours individuel en 8 séances (mouvement INITIATE) est particulièrement adapté pour toi : il te permettra de stopper l’urgence, de poser une première sécurité intérieure et de réapprendre à habiter ta propre vie.',
      };
    }
    if (totalPoints <= 11) {
      return {
        title: 'Phase 2 : En Transition & Prise de Conscience',
        color: '#635634',
        diagnosis:
          'Tu as déjà franchi une étape essentielle : tu vois les schémas qui te blessent et tu refuses de continuer ainsi. Cependant, dès qu’une situation émotionnelle forte survient, les vieux réflexes de repli ou de complaisance se réactivent.',
        recommendation:
          'Tu as besoin d’un travail de fond sur le mouvement RISE (les 6 chantiers : identifier tes besoins réels et reprogrammer les blessures anciennes avec la PNL) pour transformer ces prises de conscience en réflexes quotidiens.',
      };
    }
    return {
      title: 'Phase 3 : En Voie d’Alignement & Nouveaux Standards',
      color: '#4D6355',
      diagnosis:
        'Tu as déjà accompli un beau chemin de retour à toi. Tu connais ta valeur, mais tu ressens le besoin d’ancrer des standards solides pour tes futures relations et de rouvrir sereinement le champ de tes projets personnels.',
      recommendation:
        'Les cercles de discussion Power Tear Lab ou un accompagnement ciblé sur les mouvements INSPIRE & ALIGN t’apporteront l’émulation nécessaire pour sceller cette nouvelle étape.',
    };
  };

  const profile = getProfile();

  return (
    <section className="py-24 bg-[#F5F0E6] border-y border-[#635634]/15">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow="Outil d'Auto-Évaluation"
          title="Le Diagnostic Express Root Map"
          subtitle="Quatre questions simples pour situer où tu en es dans ta relation à toi-même et identifier ton premier levier de libération."
          centered
        />

        <div className="bg-[#FBF9F5] rounded-3xl p-8 sm:p-12 border border-[#635634]/20 shadow-xl transition-all">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#635634]">
                  <span className="font-semibold uppercase tracking-wider text-[#4A1521]">
                    Question {currentStep + 1} sur {QUESTIONS.length}
                  </span>
                  <span>{QUESTIONS[currentStep].dimension}</span>
                </div>
                <div className="w-full h-1.5 bg-[#EAE4D9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4A1521] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question header */}
              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1412] leading-snug">
                  {QUESTIONS[currentStep].question}
                </h3>
                <p className="text-xs text-[#635634]">
                  Choisis la réponse qui décrit le plus fidèlement ce que tu vis aujourd’hui, sans filtre ni complaisance.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option.points)}
                    className="w-full p-4 sm:p-5 rounded-2xl border border-[#635634]/15 bg-[#FBF9F5] hover:bg-[#F5F0E6] hover:border-[#4A1521]/40 text-left transition-all duration-200 text-xs sm:text-sm text-[#1A1412]/90 flex items-start gap-4 group"
                  >
                    <span className="w-6 h-6 rounded-full border border-[#635634]/30 group-hover:border-[#4A1521] group-hover:bg-[#4A1521] group-hover:text-[#FBF9F5] flex items-center justify-center text-xs shrink-0 mt-0.5 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-3 pb-6 border-b border-[#635634]/15">
                <div className="w-14 h-14 rounded-full bg-[#4A1521]/10 text-[#4A1521] flex items-center justify-center mx-auto">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
                  Ton Profil de Réalignement
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1412]">
                  {profile.title}
                </h3>
              </div>

              {/* Feedback analysis */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#635634]/15 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1412] block">
                    La photographie de ta situation :
                  </span>
                  <p className="text-xs sm:text-sm text-[#635634] leading-relaxed">
                    {profile.diagnosis}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#EAE4D9]/60 border border-[#635634]/15 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#4A1521] block">
                    Ce qui débloquerait ta situation :
                  </span>
                  <p className="text-xs sm:text-sm text-[#1A1412] leading-relaxed">
                    {profile.recommendation}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#635634] hover:text-[#1A1412] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recommencer le diagnostic</span>
                </button>

                <a
                  href="/accompagnement#reserver"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
                >
                  <span>En parler lors de l’appel découverte (15 min)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
