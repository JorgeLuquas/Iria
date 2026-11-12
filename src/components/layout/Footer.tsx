import React from 'react';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1412] text-[#FBF9F5] pt-20 pb-12 border-t border-[#635634]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A1521]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FBF9F5]/10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl tracking-[0.2em] font-light uppercase text-[#FBF9F5]">
                IRIA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B6A571]">
                Lab
              </span>
            </div>
            <p className="font-serif text-lg italic text-[#FBF9F5]/80 leading-relaxed max-w-md">
              « Tu n’es pas perdue. Tu t’es éloignée de toi. Il est temps de revenir. »
            </p>
            <p className="text-xs text-[#D6CEBE]/70 leading-relaxed max-w-sm">
              Accompagnement de coaching individuel et cercles de parole fondés sur la PNL et l’approche systémique. Pour les femmes qui choisissent de se réaligner et de bâtir une sécurité intérieure inébranlable.
            </p>
            <div className="pt-2 text-xs text-[#B6A571] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#839689]" />
              <span>Suisse · Séances en Visio & Présentiel</span>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D6CEBE]/80">
              <li>
                <a href="/methode" className="hover:text-[#FBF9F5] transition-colors">
                  La Méthode I.R.I.A. (4 Mouvements)
                </a>
              </li>
              <li>
                <a href="/accompagnement" className="hover:text-[#FBF9F5] transition-colors">
                  L’Accompagnement 8 Séances
                </a>
              </li>
              <li>
                <a href="/power-tear-lab" className="hover:text-[#FBF9F5] transition-colors">
                  Cercles Power Tear Lab
                </a>
              </li>
              <li>
                <a href="/a-propos" className="hover:text-[#FBF9F5] transition-colors">
                  Tamara & La Genèse
                </a>
              </li>
              <li>
                <a href="/journal" className="hover:text-[#FBF9F5] transition-colors">
                  Le Journal & Réflexions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#FBF9F5] transition-colors">
                  Contact & Objections FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA & Contact */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
              Appel Découverte
            </h4>
            <p className="text-xs text-[#D6CEBE]/80 leading-relaxed">
              Un échange confidentiel de 15 à 20 minutes pour faire le point sur ta situation, évaluer la compatibilité de l’accompagnement et répondre à tes questions.
            </p>
            <a
              href="/accompagnement#reserver"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-medium uppercase tracking-wider bg-[#FBF9F5] text-[#1A1412] hover:bg-[#B6A571] hover:text-[#1A1412] transition-colors"
            >
              <span>Réserver mon appel (Offert)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="text-[11px] text-[#D6CEBE]/60 space-y-1">
              <p>Email : contact@iria-lab.ch</p>
              <p>Instagram : @iria_lab</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Discrete Studio Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D6CEBE]/50 gap-4">
          <p>© {new Date().getFullYear()} IRIA Lab · Tamara. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Conformité LPD (Suisse) & RGPD</span>
            <span>Mentions Légales</span>
            {/* Discrete link to back-office for Tamara */}
            <a
              href="/admin"
              className="text-[#D6CEBE]/30 hover:text-[#B6A571] transition-colors text-[10px] tracking-widest uppercase"
              title="Espace administration"
            >
              Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
