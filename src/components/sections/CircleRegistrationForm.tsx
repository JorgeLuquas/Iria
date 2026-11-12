'use client';

import React, { useState } from 'react';
import { DEFAULT_EVENTS } from '@/lib/data/default-events';
import { CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';

export const CircleRegistrationForm = () => {
  const [selectedEventId, setSelectedEventId] = useState(DEFAULT_EVENTS[0].id);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motivation, setMotivation] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) {
      setError('Veuillez renseigner votre prénom et votre adresse email.');
      return;
    }
    if (!consent) {
      setError('Veuillez accepter le traitement des données pour confirmer.');
      return;
    }

    setLoading(true);
    setError(null);

    // Enregistrement local / simulation API instantanée
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const selectedEvent = DEFAULT_EVENTS.find((e) => e.id === selectedEventId) || DEFAULT_EVENTS[0];

  return (
    <div className="bg-[#FBF9F5] rounded-3xl p-8 sm:p-10 border border-[#635634]/20 shadow-xl max-w-2xl mx-auto">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#839689]/20 text-[#4D6355] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl text-[#1A1412]">
            Demande d’inscription transmise
          </h3>
          <p className="text-sm text-[#635634] max-w-md mx-auto leading-relaxed">
            Merci <strong>{firstName}</strong>. Ta demande pour le <strong>{selectedEvent.title}</strong> a bien été enregistrée. Tamara prendra contact avec toi par email sous 48h avec tous les détails pratiques.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFirstName('');
                setEmail('');
                setPhone('');
                setMotivation('');
              }}
              className="text-xs uppercase tracking-widest text-[#4A1521] hover:underline font-semibold"
            >
              Effectuer une autre inscription
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#B6A571] font-semibold block">
              Formulaire d'Inscription Sécurisé
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1412]">
              Rejoindre un Cercle Power Tear Lab
            </h3>
            <p className="text-xs text-[#635634]">
              Nombre de places strictement limité à 8 participantes par session.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Event Picker */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
              Choisis ta session
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEFAULT_EVENTS.map((evt) => {
                const isSelected = selectedEventId === evt.id;
                return (
                  <button
                    key={evt.id}
                    type="button"
                    onClick={() => setSelectedEventId(evt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-[#4A1521] bg-[#F5F0E6] shadow-sm'
                        : 'border-[#635634]/20 bg-[#FBF9F5] hover:bg-[#F5F0E6]/50'
                    }`}
                  >
                    <span className="text-[11px] font-semibold text-[#4A1521] block">
                      {evt.location}
                    </span>
                    <span className="text-xs font-serif text-[#1A1412] block mt-0.5 font-medium">
                      {evt.eventDate}
                    </span>
                    <span className="text-[10px] text-[#635634] block mt-1">
                      {evt.maxSeats - evt.seatsReserved} places restantes
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1412] block">
                Prénom *
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ex : Camille"
                className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1412] block">
                Nom
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Ex : Dubois"
                className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1412] block">
                Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="camille@domaine.ch"
                className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#1A1412] block">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+41 79 123 45 67"
                className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#1A1412] block">
              Quelques mots sur ton intention (optionnel)
            </label>
            <textarea
              rows={3}
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              placeholder="Ce que tu traverses, ce que tu souhaites déposer lors de ce cercle..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521] resize-none"
            />
          </div>

          {/* RGPD / LPD Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 rounded border-[#635634]/30 text-[#4A1521] focus:ring-[#4A1521]"
            />
            <label htmlFor="consent" className="text-[11px] text-[#635634] leading-tight">
              J’accepte que mes coordonnées soient utilisées par Tamara dans le cadre exclusif de l’organisation de ce cercle (confidentialité garantie selon la LPD suisse et le RGPD).
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Enregistrement en cours...</span>
            ) : (
              <>
                <span>Confirmer ma demande de place</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
