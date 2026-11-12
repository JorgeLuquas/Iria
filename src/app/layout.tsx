import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'IRIA · Te retrouver, te choisir, te réaligner | Coaching Féminin',
  description:
    'Accompagnement de coaching individuel fondé sur la PNL et l’approche systémique par Tamara. Pour se reconstruire après une rupture et bâtir des fondations relationnelles inébranlables.',
  keywords: [
    'coaching reconstruction après rupture',
    'coaching féminin suisse',
    'se retrouver après divorce',
    'coaching PNL genève lausanne',
    'IRIA coaching',
    'tamara coaching',
    'cercles de parole power tear lab',
  ],
  openGraph: {
    title: 'IRIA · Te retrouver, te choisir, te réaligner',
    description:
      '« Tu n’es pas perdue. Tu t’es éloignée de toi. Il est temps de revenir. » Accompagnement premium de quête de soi et reconstruction relationnelle.',
    images: ['/images/tamara-portrait-1.jpeg'],
    type: 'website',
    locale: 'fr_CH',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBF9F5] text-[#1A1412] min-h-screen flex flex-col font-sans selection:bg-[#4A1521]/15 selection:text-[#4A1521]">
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
