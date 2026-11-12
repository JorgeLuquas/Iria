'use client';

import React, { useState, useEffect } from 'react';
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
  X,
  Filter,
  UserPlus,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface RegistrationItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventId: string;
  event: string;
  date: string;
  status: 'Confirmée' | 'En attente' | 'Annulée';
}

const INITIAL_REGISTRATIONS: RegistrationItem[] = [
  {
    id: 'reg-1',
    name: 'Camille V.',
    email: 'camille.v@bluewin.ch',
    phone: '+41 79 342 11 02',
    eventId: 'evt-geneve-h26',
    event: 'Cercle Genève · Hiver 2026',
    date: '12 Nov 2026',
    status: 'Confirmée',
  },
  {
    id: 'reg-2',
    name: 'Émilie R.',
    email: 'emilie.reynaud@gmail.com',
    phone: '+41 78 890 45 12',
    eventId: 'evt-geneve-h26',
    event: 'Cercle Genève · Hiver 2026',
    date: '11 Nov 2026',
    status: 'En attente',
  },
  {
    id: 'reg-3',
    name: 'Sophie M.',
    email: 'sophie.m@sunrise.ch',
    phone: '+41 76 211 98 76',
    eventId: 'evt-lausanne-p27',
    event: 'Cercle Lausanne · Printemps 2027',
    date: '10 Nov 2026',
    status: 'Confirmée',
  },
  {
    id: 'reg-4',
    name: 'Nathalie B.',
    email: 'nathalie.b@bluemail.ch',
    phone: '+41 79 501 32 88',
    eventId: 'evt-geneve-h26',
    event: 'Cercle Genève · Hiver 2026',
    date: '09 Nov 2026',
    status: 'Confirmée',
  },
  {
    id: 'reg-5',
    name: 'Laurence D.',
    email: 'laurence.d@orange.fr',
    phone: '+33 6 12 34 56 78',
    eventId: 'evt-lausanne-p27',
    event: 'Cercle Lausanne · Printemps 2027',
    date: '08 Nov 2026',
    status: 'En attente',
  },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'articles' | 'events' | 'seo'>('overview');
  const [articles, setArticles] = useState<ArticleItem[]>(DEFAULT_ARTICLES);
  const [events, setEvents] = useState<CircleEventItem[]>(DEFAULT_EVENTS);
  const [registrations, setRegistrations] = useState<RegistrationItem[]>(INITIAL_REGISTRATIONS);

  // Filter state for circles / events
  const [selectedEventId, setSelectedEventId] = useState<string | 'all'>('all');

  // Modal / Form state for new article
  const [isCreatingArticle, setIsCreatingArticle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('quete-de-soi');
  const [newCategoryLabel, setNewCategoryLabel] = useState('Quête de soi');
  const [newReadingTime, setNewReadingTime] = useState(5);
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCoverImage, setNewCoverImage] = useState('/images/tamara-portrait-1.jpeg');
  const [articleSuccess, setArticleSuccess] = useState(false);

  // Manual participant addition
  const [isAddingParticipant, setIsAddingParticipant] = useState(false);
  const [newPartName, setNewPartName] = useState('');
  const [newPartEmail, setNewPartEmail] = useState('');
  const [newPartPhone, setNewPartPhone] = useState('');
  const [newPartEventId, setNewPartEventId] = useState(DEFAULT_EVENTS[0].id);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const savedArticles = localStorage.getItem('iria_admin_articles');
      if (savedArticles) {
        setArticles(JSON.parse(savedArticles));
      }
      const savedRegs = localStorage.getItem('iria_admin_registrations');
      if (savedRegs) {
        setRegistrations(JSON.parse(savedRegs));
      }
    } catch {
      // Ignorer
    }
  }, []);

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newExcerpt.trim() || !newContent.trim()) {
      return;
    }

    const slug = newTitle
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const newArticle: ArticleItem = {
      id: `art-${Date.now()}`,
      slug: slug || `article-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      categoryLabel: newCategoryLabel,
      readingTimeMinutes: Number(newReadingTime) || 5,
      excerpt: newExcerpt.trim(),
      content: newContent.trim(),
      coverImage: newCoverImage,
      publishedAt: new Date().toISOString().split('T')[0],
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    try {
      localStorage.setItem('iria_admin_articles', JSON.stringify(updated));
    } catch {}

    setArticleSuccess(true);
    setTimeout(() => {
      setArticleSuccess(false);
      setIsCreatingArticle(false);
      setNewTitle('');
      setNewExcerpt('');
      setNewContent('');
    }, 1200);
  };

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartName.trim() || !newPartEmail.trim()) return;

    const targetEvent = events.find((evt) => evt.id === newPartEventId) || events[0];

    const newReg: RegistrationItem = {
      id: `reg-${Date.now()}`,
      name: newPartName.trim(),
      email: newPartEmail.trim(),
      phone: newPartPhone.trim() || '+41 79 000 00 00',
      eventId: targetEvent.id,
      event: targetEvent.title,
      date: new Date().toLocaleDateString('fr-CH', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Confirmée',
    };

    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    try {
      localStorage.setItem('iria_admin_registrations', JSON.stringify(updated));
    } catch {}

    setIsAddingParticipant(false);
    setNewPartName('');
    setNewPartEmail('');
    setNewPartPhone('');
  };

  const filteredRegistrations =
    selectedEventId === 'all'
      ? registrations
      : registrations.filter((r) => r.eventId === selectedEventId);

  const selectedEventObj = events.find((e) => e.id === selectedEventId);

  const exportCsv = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Nom,Email,Telephone,Evenement,Date,Statut']
        .concat(
          filteredRegistrations.map(
            (r) => `"${r.name}","${r.email}","${r.phone}","${r.event}","${r.date}","${r.status}"`
          )
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `inscrits_${selectedEventId}.csv`);
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
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'articles'
                ? 'bg-[#4A1521] text-[#FBF9F5] shadow-sm'
                : 'text-[#635634] hover:bg-[#EAE4D9]/60'
            }`}
          >
            <span>Articles du Journal</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#839689] text-[#FBF9F5] font-semibold">
              {articles.length}
            </span>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                onClick={() => setActiveTab('events')}
                className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2 cursor-pointer hover:border-[#4A1521]/40 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B6A571] font-semibold">
                  Leads Power Tear Lab
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[#1A1412] font-semibold">
                    {registrations.length}
                  </span>
                  <span className="text-xs text-[#839689] font-medium">Voir par session →</span>
                </div>
                <p className="text-[11px] text-[#635634]">Demandes de participation enregistrées</p>
              </div>

              <div
                onClick={() => setActiveTab('articles')}
                className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2 cursor-pointer hover:border-[#4A1521]/40 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#4A1521] font-semibold">
                  Articles en Ligne
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[#4A1521] font-semibold">
                    {articles.length}
                  </span>
                  <span className="text-xs text-[#635634]">+ Nouveau post →</span>
                </div>
                <p className="text-[11px] text-[#635634]">Articles éditoriaux publiés</p>
              </div>

              <div
                onClick={() => setActiveTab('events')}
                className="p-6 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-2 cursor-pointer hover:border-[#4A1521]/40 transition-colors"
              >
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

            {/* Quick list preview */}
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
                  onClick={() => setActiveTab('events')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#4A1521] hover:underline"
                >
                  Gérer les cercles et filtrer →
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
                    {registrations.slice(0, 4).map((r) => (
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

        {/* Tab Content: CERCLES & INSCRITS AVEC CLIC FILTRE */}
        {activeTab === 'events' && (
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1412]">
                  Cercles Power Tear Lab & Inscriptions par Session
                </h3>
                <p className="text-xs text-[#635634]">
                  Clique sur un évènement pour afficher précisément qui est inscrite à cette date.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddingParticipant(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#635634]/25 bg-[#FBF9F5] text-xs font-semibold uppercase tracking-wider text-[#1A1412] hover:bg-[#EAE4D9] transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Ajouter une participante</span>
                </button>
                <button
                  type="button"
                  onClick={exportCsv}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4A1521] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3A0108] transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Event Selection Cards (Clickable Filter) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((evt) => {
                const isSelected = selectedEventId === evt.id;
                const attendees = registrations.filter((r) => r.eventId === evt.id);

                return (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedEventId(isSelected ? 'all' : evt.id)}
                    className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer border-2 relative ${
                      isSelected
                        ? 'bg-[#FBF9F5] border-[#4A1521] shadow-lg -translate-y-1'
                        : 'bg-[#FBF9F5]/70 border-[#635634]/15 hover:border-[#635634]/40 hover:bg-[#FBF9F5]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#4A1521] text-[#FBF9F5] uppercase tracking-wider">
                          Session Filtrée
                        </span>
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#B6A571] uppercase tracking-wider">
                          {evt.location} · {evt.edition}
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
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#839689]/20 text-[#4D6355]">
                            {attendees.length} / {evt.maxSeats} inscrites
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Filter Bar */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-[#635634] flex items-center gap-1.5 font-medium">
                <Filter className="w-3.5 h-3.5" />
                Affichage :
              </span>
              <button
                type="button"
                onClick={() => setSelectedEventId('all')}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  selectedEventId === 'all'
                    ? 'bg-[#4A1521] text-[#FBF9F5] font-semibold'
                    : 'bg-[#FBF9F5] border border-[#635634]/20 text-[#635634] hover:bg-[#EAE4D9]'
                }`}
              >
                Toutes les sessions ({registrations.length})
              </button>
              {events.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setSelectedEventId(e.id)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    selectedEventId === e.id
                      ? 'bg-[#4A1521] text-[#FBF9F5] font-semibold'
                      : 'bg-[#FBF9F5] border border-[#635634]/20 text-[#635634] hover:bg-[#EAE4D9]'
                  }`}
                >
                  {e.location} ({registrations.filter((r) => r.eventId === e.id).length})
                </button>
              ))}
            </div>

            {/* Filtered Registrations Table */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#635634]/15 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl text-[#1A1412]">
                    {selectedEventId === 'all'
                      ? 'Liste de toutes les participantes inscrites'
                      : `Participantes inscrites · ${selectedEventObj?.title}`}
                  </h4>
                  <p className="text-xs text-[#635634]">
                    {filteredRegistrations.length} participante(s) affichée(s).
                  </p>
                </div>
              </div>

              {filteredRegistrations.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#635634] space-y-2">
                  <p>Aucune inscription enregistrée pour cette session pour le moment.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#635634]/10 text-[11px] uppercase tracking-wider text-[#635634]">
                        <th className="pb-3 font-semibold">Participante</th>
                        <th className="pb-3 font-semibold">Email</th>
                        <th className="pb-3 font-semibold">Téléphone</th>
                        <th className="pb-3 font-semibold">Session concernée</th>
                        <th className="pb-3 font-semibold">Date d'inscription</th>
                        <th className="pb-3 font-semibold">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#635634]/10">
                      {filteredRegistrations.map((r) => (
                        <tr key={r.id} className="hover:bg-[#F5F0E6]/50">
                          <td className="py-3 font-medium text-[#1A1412]">{r.name}</td>
                          <td className="py-3 text-[#635634]">
                            <a href={`mailto:${r.email}`} className="hover:text-[#4A1521] underline">
                              {r.email}
                            </a>
                          </td>
                          <td className="py-3 text-[#635634]">
                            <a href={`tel:${r.phone}`} className="hover:text-[#4A1521]">
                              {r.phone}
                            </a>
                          </td>
                          <td className="py-3 text-[#4A1521] font-medium">{r.event}</td>
                          <td className="py-3 text-[#635634]">{r.date}</td>
                          <td className="py-3">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                                r.status === 'Confirmée'
                                  ? 'bg-[#839689]/20 text-[#4D6355]'
                                  : 'bg-[#B6A571]/20 text-[#6E5D2A]'
                              }`}
                            >
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Content: GESTION DES ARTICLES AVEC CRÉATION COMPLÈTE */}
        {activeTab === 'articles' && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1412]">
                  Articles du Journal
                </h3>
                <p className="text-xs text-[#635634]">
                  Rédige et publie de nouveaux articles pour nourrir le référencement et la réflexion de tes lectrices.
                </p>
              </div>

              {!isCreatingArticle && (
                <button
                  type="button"
                  onClick={() => setIsCreatingArticle(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A1521] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3A0108] transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Rédiger un nouvel article</span>
                </button>
              )}
            </div>

            {/* Article Creation Form Panel */}
            {isCreatingArticle && (
              <div className="p-8 rounded-3xl bg-[#FBF9F5] border-2 border-[#4A1521]/30 shadow-xl space-y-6 animate-fade-in-up">
                <div className="flex items-center justify-between pb-4 border-b border-[#635634]/15">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-widest text-[#B6A571] font-semibold block">
                      Nouvelle Publication
                    </span>
                    <h4 className="font-serif text-2xl text-[#1A1412]">
                      Créer un article pour le Journal IRIA
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCreatingArticle(false)}
                    className="p-2 text-[#635634] hover:text-[#1A1412] rounded-full hover:bg-[#EAE4D9]/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {articleSuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>L'article a été créé et publié avec succès dans le Journal !</span>
                  </div>
                )}

                <form onSubmit={handleCreateArticle} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                      Titre de l'article *
                    </label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Ex : Apprendre à dire non sans trembler ni culpabiliser"
                      className="w-full px-4 py-3 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-sm text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                        Catégorie
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) => {
                          setNewCategory(e.target.value);
                          const labels: Record<string, string> = {
                            'quete-de-soi': 'Quête de soi',
                            'valeurs-et-limites': 'Limites Saines',
                            'philosophie-iria': 'Méthode IRIA',
                            'reconstruction-amoureuse': 'Reconstruction Amoureuse',
                          };
                          setNewCategoryLabel(labels[e.target.value] || 'Quête de soi');
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                      >
                        <option value="quete-de-soi">Quête de soi</option>
                        <option value="valeurs-et-limites">Limites Saines</option>
                        <option value="philosophie-iria">Méthode IRIA</option>
                        <option value="reconstruction-amoureuse">Reconstruction Amoureuse</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                        Temps de lecture (minutes)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={newReadingTime}
                        onChange={(e) => setNewReadingTime(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                      Image de couverture
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Portrait 1 (Lumière douce)', src: '/images/tamara-portrait-1.jpeg' },
                        { label: 'Portrait 2 (Regard posé)', src: '/images/tamara-portrait-2.jpeg' },
                        { label: 'Portrait 3 (Sérénité)', src: '/images/tamara-portrait-3.jpeg' },
                      ].map((img) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => setNewCoverImage(img.src)}
                          className={`p-2 rounded-xl border text-left transition-all ${
                            newCoverImage === img.src
                              ? 'border-[#4A1521] bg-[#F5F0E6]'
                              : 'border-[#635634]/15 bg-[#FBF9F5] hover:bg-[#F5F0E6]/50'
                          }`}
                        >
                          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-1.5 bg-[#EAE4D9]">
                            <img src={img.src} alt={img.label} className="w-full h-full object-cover object-top" />
                          </div>
                          <span className="text-[10px] text-[#635634] block font-medium">{img.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                      Résumé / Chapô (accroche pour la grille) *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={newExcerpt}
                      onChange={(e) => setNewExcerpt(e.target.value)}
                      placeholder="Deux à trois phrases courtes pour résumer l'essence de l'article..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412] focus:outline-none focus:border-[#4A1521] resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] block">
                      Corps complet de l'article *
                    </label>
                    <textarea
                      required
                      rows={8}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Rédige ici ton article. Tu peux utiliser des titres de sections en commençant par ### ou des puces avec - ..."
                      className="w-full px-4 py-3 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs sm:text-sm text-[#1A1412] focus:outline-none focus:border-[#4A1521] leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCreatingArticle(false)}
                      className="px-5 py-2.5 rounded-full text-xs font-medium text-[#635634] hover:bg-[#EAE4D9] transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108] transition-colors shadow-md"
                    >
                      Publier cet article en direct
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* List of articles */}
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
                      <span className="text-xs text-[#635634]">· {art.readingTimeMinutes} min</span>
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#635634]/20 hover:bg-[#EAE4D9] text-xs text-[#1A1412] transition-colors"
                      title="Prévisualiser"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Voir en ligne</span>
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
                    <td className="py-3 text-[#1A1412] font-medium">IRIA · Te retrouver, te choisir, te réaligner</td>
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

        {/* Modal: Ajout manuel d'une participante */}
        {isAddingParticipant && (
          <div className="fixed inset-0 z-50 bg-[#1A1412]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FBF9F5] rounded-3xl p-8 max-w-md w-full border border-[#635634]/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#635634]/15">
                <h4 className="font-serif text-xl text-[#1A1412]">
                  Ajouter une participante
                </h4>
                <button
                  type="button"
                  onClick={() => setIsAddingParticipant(false)}
                  className="p-1 rounded-full text-[#635634] hover:bg-[#EAE4D9]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddParticipant} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1412]">Session</label>
                  <select
                    value={newPartEventId}
                    onChange={(e) => setNewPartEventId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412]"
                  >
                    {events.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.title} ({e.location})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1412]">Nom & Prénom</label>
                  <input
                    type="text"
                    required
                    value={newPartName}
                    onChange={(e) => setNewPartName(e.target.value)}
                    placeholder="Ex : Claire B."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1412]">Email</label>
                  <input
                    type="email"
                    required
                    value={newPartEmail}
                    onChange={(e) => setNewPartEmail(e.target.value)}
                    placeholder="claire@bluewin.ch"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1412]">Téléphone</label>
                  <input
                    type="tel"
                    value={newPartPhone}
                    onChange={(e) => setNewPartPhone(e.target.value)}
                    placeholder="+41 79 123 45 67"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#635634]/20 bg-[#FBF9F5] text-xs text-[#1A1412]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddingParticipant(false)}
                    className="px-4 py-2 rounded-full text-xs text-[#635634] hover:bg-[#EAE4D9]"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4A1521] text-[#FBF9F5] hover:bg-[#3A0108]"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
