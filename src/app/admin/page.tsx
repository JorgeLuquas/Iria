'use client';

import React, { useState } from 'react';
import { DEFAULT_ARTICLES, ArticleItem } from '@/lib/data/default-articles';
import { DEFAULT_EVENTS, CircleEventItem } from '@/lib/data/default-events';
import {
  FileText,
  Users,
  Calendar,
  Sparkles,
  Plus,
  Download,
  Trash2,
  Edit,
  Eye,
  Search,
  CheckCircle,
  Globe,
  Lock,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Accessible en local
  const [activeTab, setActiveTab] = useState<'overview' | 'articles' | 'events' | 'seo'>('overview');
  const [articles, setArticles] = useState<ArticleItem[]>(DEFAULT_ARTICLES);
  const [events, setEvents] = useState<CircleEventItem[]>(DEFAULT_EVENTS);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy registrations for preview
  const [registrations, setRegistrations] = useState([
    {
      id: 'reg-1',
      name: 'Camille V.',
      email: 'camille.v@bluewin.ch',
      phone: '+41 79 342 11 02',
      event: 'Cercle Genève · Hiver 2026',
      date: '12 Nov 2026',
      status: 'Confirmée',
    },
    {
      id: 'reg-2',
      name: 'Émilie R.',
      email: 'emilie.reynaud@gmail.com',
      phone: '+41 78 890 45 12',
      event: 'Cercle Genève · Hiver 2026',
      date: '11 Nov 2026',
      status: 'En attente',
    },
    {
      id: 'reg-3',
      name: 'Sophie M.',
      email: 'sophie.m@sunrise.ch',
      phone: '+41 76 211 98 76',
      event: 'Cercle Lausanne · Printemps 2027',
      date: '10 Nov 2026',
      status: 'Confirmée',
    },
  ]);

  const exportCsv = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Nom,Email,Telephone,Evenement,Date,Statut']
        .concat(
          registrations.map(
            (r) => `"${r.name}","${r.email}","${r.phone}","${r.event}","${r.date}","${r.status}"`
          )
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'inscrits_power_tear_lab.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-8 text-[#1A1412]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#635634]/15">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-medium tracking-wide">
                IRIA Studio
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#839689]/20 text-[#4D6355]">
                Espace Tamara
              </span>
            </div>
            <p className="text-xs text-[#635634]">
              Gestion des articles, suivi des inscriptions aux cercles et pilotage SEO.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#635634]/25 bg-[#FBF9F5] text-xs font-medium text-[#1A1412] hover:bg-[#EAE4D9] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Voir le site public</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 pb-8 border-b border-[#635634]/10 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'overview'
                ? 'bg-[#4A1521] text-[#FBF9F5] shadow-sm'
                : 'text-[#635634] hover:bg-[#EAE4D9]/60'
            }`}
          >
            Vue d’ensemble
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'events'
                ? 'bg-[#4A1521] text-[#FBF9F5] shadow-sm'
                : 'text-[#635634] hover:bg-[#EAE4D9]/60'
            }`}
          >
            <span>Cercles & Inscrits</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#B6A571] text-[#1A1412] font-semibold">
              {registrations.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'articles'
                ? 'bg-[#4A1521] text-[#FBF9F5] shadow-sm'
                : 'text-[#635634] hover:bg-[#EAE4D9]/60'
            }`}
          >
            Articles du Journal ({articles.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'seo'
                ? 'bg-[#4A1521] text-[#FBF9F5] shadow-sm'
                : 'text-[#635634] hover:bg-[#EAE4D9]/60'
            }`}
          >
            Tableau SEO & GEO
          </button>
        </div>

        {/* Tab Content: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 pt-4">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A571] font-semibold">
                  Leads Power Tear Lab
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[#1A1412] font-semibold">
                    {registrations.length}
                  </span>
                  <span className="text-xs text-[#839689] font-medium">+2 cette semaine</span>
                </div>
                <p className="text-[11px] text-[#635634]">Demandes de participation enregistrées</p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#4A1521] font-semibold">
                  Articles en Ligne
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[#4A1521] font-semibold">
                    {articles.length}
                  </span>
                  <span className="text-xs text-[#635634]">Prêts pour le SEO</span>
                </div>
                <p className="text-[11px] text-[#635634]">Articles éditoriaux publiés</p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#839689] font-semibold">
                  Sessions Ouvertes
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[#1A1412] font-semibold">
                    {events.length}
                  </span>
                  <span className="text-xs text-[#635634]">Genève & Lausanne</span>
                </div>
                <p className="text-[11px] text-[#635634]">Cercles trimestriels planifiés</p>
              </div>
            </div>

            {/* Recent Registrations Table */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1A1412]">
                    Dernières Inscriptions aux Cercles
                  </h3>
                  <p className="text-xs text-[#635634]">
                    Contacts captés prêts pour le suivi ou l’export mailing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={exportCsv}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#635634]/20 text-xs font-medium text-[#1A1412] hover:bg-[#EAE4D9] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exporter CSV</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#635634]/10 text-[11px] uppercase tracking-wider text-[#635634]">
                      <th className="pb-3 font-semibold">Participante</th>
                      <th className="pb-3 font-semibold">Email</th>
                      <th className="pb-3 font-semibold">Téléphone</th>
                      <th className="pb-3 font-semibold">Session</th>
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#635634]/10">
                    {registrations.map((r) => (
                      <tr key={r.id} className="hover:bg-[#F5F0E6]/50">
                        <td className="py-3 font-medium text-[#1A1412]">{r.name}</td>
                        <td className="py-3 text-[#635634]">{r.email}</td>
                        <td className="py-3 text-[#635634]">{r.phone}</td>
                        <td className="py-3 text-[#4A1521] font-medium">{r.event}</td>
                        <td className="py-3 text-[#635634]">{r.date}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#839689]/15 text-[#4D6355]">
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: CERCLIS & INSCRITS */}
        {activeTab === 'events' && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1412]">
                  Cercles Power Tear Lab & Liste d’Attente
                </h3>
                <p className="text-xs text-[#635634]">
                  Gère les dates trimestrielles et consulte l’ensemble des demandes reçues.
                </p>
              </div>
              <button
                type="button"
                onClick={exportCsv}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4A1521] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3A0108] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger la liste complète (CSV)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#B6A571] uppercase tracking-wider">
                      {evt.location} · {evt.edition}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#839689]/15 text-[#4D6355]">
                      {evt.seatsReserved} / {evt.maxSeats} inscrites
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1412] font-medium">
                    {evt.theme}
                  </h4>
                  <p className="text-xs text-[#635634] leading-relaxed">
                    Date : <strong>{evt.eventDate}</strong> ({evt.timeRange})<br />
                    Lieu : {evt.address}
                  </p>
                  <div className="pt-3 border-t border-[#635634]/10 flex items-center justify-between text-xs">
                    <span className="font-serif text-lg font-semibold text-[#4A1521]">
                      CHF {evt.priceChf}
                    </span>
                    <span className="text-[11px] text-[#635634]">Statut : Actif en ligne</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: ARTICLES */}
        {activeTab === 'articles' && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1412]">
                  Articles du Journal
                </h3>
                <p className="text-xs text-[#635634]">
                  Rédige et pilote les articles piliers pour le référencement naturel.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4A1521] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3A0108] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Rédiger un article</span>
              </button>
            </div>

            <div className="space-y-4">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold bg-[#4A1521]/10 text-[#4A1521]">
                        {art.categoryLabel}
                      </span>
                      <span className="text-xs text-[#635634]">{art.publishedAt}</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#1A1412] font-medium">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#635634] line-clamp-1">{art.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`/journal/${art.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-[#635634]/20 hover:bg-[#EAE4D9] text-[#1A1412] transition-colors"
                      title="Prévisualiser"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: SEO & GEO */}
        {activeTab === 'seo' && (
          <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-6 pt-6">
            <div>
              <h3 className="font-serif text-2xl text-[#1A1412]">
                Tableau de Suivi du Référencement (SEO & GEO)
              </h3>
              <p className="text-xs text-[#635634]">
                Architecture des méta-descriptions et mots-clés cibles optimisés pour Google et les moteurs IA (ChatGPT, Perplexity, Gemini).
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#635634]/10 text-[11px] uppercase tracking-wider text-[#635634]">
                    <th className="pb-3 font-semibold">Page / Route</th>
                    <th className="pb-3 font-semibold">Titre SEO</th>
                    <th className="pb-3 font-semibold">Mots-clés cibles</th>
                    <th className="pb-3 font-semibold">Visibilité IA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#635634]/10 text-xs">
                  <tr>
                    <td className="py-3 font-mono text-[11px] text-[#4A1521]">/ (Accueil)</td>
                    <td className="py-3 text-[#1A1412] font-medium">IRIA Lab · Te retrouver, te choisir, te réaligner</td>
                    <td className="py-3 text-[#635634]">reconstruction rupture, coaching féminin suisse</td>
                    <td className="py-3 text-[#839689] font-medium">Indexé /llms.txt</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[11px] text-[#4A1521]">/methode</td>
                    <td className="py-3 text-[#1A1412] font-medium">La Méthode I.R.I.A. · 4 Mouvements & 6 Chantiers</td>
                    <td className="py-3 text-[#635634]">PNL, méthode réalignement, quête de soi</td>
                    <td className="py-3 text-[#839689] font-medium">Indexé /llms.txt</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[11px] text-[#4A1521]">/accompagnement</td>
                    <td className="py-3 text-[#1A1412] font-medium">L’Accompagnement 8 Séances · Coaching 4 à 6 Mois</td>
                    <td className="py-3 text-[#635634]">coaching divorce genève, limites saines</td>
                    <td className="py-3 text-[#839689] font-medium">Indexé /llms.txt</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[11px] text-[#4A1521]">/power-tear-lab</td>
                    <td className="py-3 text-[#1A1412] font-medium">Cercles Power Tear Lab · Parole Féminine Suisse</td>
                    <td className="py-3 text-[#635634]">cercles de parole lausanne genève</td>
                    <td className="py-3 text-[#839689] font-medium">Indexé /llms.txt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
