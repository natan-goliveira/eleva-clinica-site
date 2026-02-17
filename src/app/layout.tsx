import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, DM_Sans } from "next/font/google";
import { AllSchemas } from "@/components/JsonLd";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const radioGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/pp-radio-grotesk-ultra-light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/RadioGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-radio-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eleva Clínicas Sistemas de Gestão Sob Medida",
    template: "%s | Eleva Clínicas"
  },
  description: "Sistemas de gestão personalizados para clínicas terapêuticas, odontológicas e estéticas. Organizamos agenda, operação e atendimento com tecnologia adaptada à sua realidade.",
  keywords: [
    "sistema gestão clínica",
    "agenda inteligente clínica",
    "software clínica sob medida",
    "sistema operacional clínica terapêutica",
    "sistema odontológico personalizado",
    "gestão clínica estética",
    "sistema atendimento médico"
  ],
  authors: [{ name: "Eleva Clínicas" }],
  creator: "Eleva Clínicas",
  publisher: "Eleva Clínicas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://73code.com.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Eleva Clínicas — Sistemas de Gestão Sob Medida",
    description: "Sistemas de gestão personalizados para clínicas. Agenda, operação e atendimento organizados com tecnologia que se adapta à sua realidade.",
    url: "/",
    siteName: "Eleva Clínicas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "73 Code - Sistemas de Gestão para Clínicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "73 Code — Sistemas de Gestão Sob Medida para Clínicas",
    description: "Sistemas de gestão personalizados para clínicas. Agenda, operação e atendimento organizados.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Adicionar código de verificação do Google Search Console quando disponível
    // google: "seu-codigo-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <AllSchemas />
      </head>
      <body
        className={`${radioGrotesk.variable} ${dmSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
