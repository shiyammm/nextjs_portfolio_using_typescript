import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const acme = localFont({
  src: '../public/assets/fonts/Acme-Regular.ttf',
  variable: '--font-acme',
});
const circularBook = localFont({
  src: '../public/assets/fonts/CircularStd-Book.ttf',
  variable: '--font-circular-book',
});
const circularMedium = localFont({
  src: '../public/assets/fonts/circular-std-medium.ttf',
  variable: '--font-circular-medium',
});
const neueMontreal = localFont({
  src: '../public/assets/fonts/NeueMontreal-Regular.ttf',
  variable: '--font-neue-montreal',
});
const roslindaleDisplay = localFont({
  src: '../public/assets/fonts/RoslindaleDisplayCondensed-Regular.ttf',
  variable: '--font-roslindale-display',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acme.variable} ${circularBook.variable} ${circularMedium.variable} ${neueMontreal.variable} ${roslindaleDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}