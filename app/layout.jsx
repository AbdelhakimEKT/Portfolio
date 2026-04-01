import './globals.css';

export const metadata = {
  title: 'Nexa Studio | Abdelhakim Elakrouti',
  description:
    "Portfolio de Nexa Studio. Abdelhakim Elakrouti conçoit des expériences digitales immersives pour restaurants et marques exigeantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
