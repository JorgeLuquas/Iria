'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Globe } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('accompagnement');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#FBF9F5]">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B6A571] font-semibold">
          Échange & Renseignements
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-light">
          Contacter IRIA Lab
        </h1>
        <p className="text-base sm:text-lg text-[#635634] max-w-xl mx-auto leading-relaxed">
          Une question sur le parcours, les cercles ou une situation particulière ? Écris-nous, nous te répondrons sous 24 à 48 heures.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#635634]/15 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-[#1A1412]">
                Coordonnées Directes
              </h3>

              <div className="space-y-4 text-xs text-[#1A1412]/90">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#4A1521] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1A1412]">Email Général</span>
                    <a href="mailto:contact@iria-lab.ch" className="text-[#635634] hover:text-[#4A1521]">
                      contact@iria-lab.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-4 h-4 text-[#4A1521] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1A1412]">Instagram Officiel</span>
                    <a
                      href="https://instagram.com/iria_lab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#635634] hover:text-[#4A1521]"
                    >
                      @iria_lab
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#4A1521] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1A1412]">Localisation</span>
                    <span className="text-[#635634]">
                      Genève & Lausanne · Suisse (Séances en Visio & Présentiel)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#635634]/15">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B6A571] block mb-2">
                  Appel Découverte de 15 Min
                </span>
                <p className="text-xs text-[#635634] leading-relaxed mb-3">
                  Pour candidater à l’accompagnement individuel en 8 séances, privilégie la réservation directe dans l’agenda.
                </p>
                <a
                  href="/accompagnement#reserver"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#4A1521] hover:underline"
                >
                  <span>Réserver mon créneau en ligne →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBF9F5] border border-[#635634]/20 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#839689]/20 text-[#4D6355] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1412]">
                    Message bien reçu
                  </h3>
                  <p className="text-xs text-[#635634] max-w-sm mx-auto leading-relaxed">
                    Merci {name}. Tamara te répondra personnellement sous 24 à 48 heures ouvrées.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs uppercase tracking-widest text-[#4A1521] hover:underline font-semibold"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-[#1A1412]">
                    Écris-nous directement
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#1A1412] block">
                        Ton Prénom & Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex : Sarah Morel"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#1A1412] block">
                        Ton Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@domaine.ch"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#1A1412] block">
                      Objet de ton message
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                    >
                      <option value="accompagnement">L’Accompagnement 8 Séances</option>
                      <option value="cercles">Cercles Power Tear Lab</option>
                      <option value="autre">Autre question ou partenariat</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#1A1412] block">
                      Ton Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Comment pouvons-nous t’aider ?"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Envoyer mon message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FaqAccordion />
    </div>
  );
}
