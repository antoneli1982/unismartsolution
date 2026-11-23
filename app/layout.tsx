import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL("https://unismartsolution.com.br"),
  title: "UNI | Engenharia de Processos, MTM e BPMN",
  description:
    "Engenharia de processos para opera��es industriais e log�sticas. MTM, BPMN, estudo de tempos, redesenho de fluxos e padroniza��o do trabalho.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://unismartsolution.com.br",
    siteName: "UNI Smart Outsourcing Solutions",
    title: "Processos mais inteligentes. Resultados que aparecem.",
    description:
      "Engenharia de processos aplicada � produtividade, padroniza��o e melhoria cont�nua.",
    images: [
      {
        url: "/assets/uni-social-share.png",
        width: 1200,
        height: 630,
        alt: "UNI Smart Outsourcing Solutions - Processos mais inteligentes. Resultados que aparecem.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Processos mais inteligentes. Resultados que aparecem.",
    description:
      "Engenharia de processos aplicada � produtividade, padroniza��o e melhoria cont�nua.",
    images: ["/assets/uni-social-share.png"],
  },
  icons: {
    icon: `${process.env.PAGES_BASE_PATH || ""}/favicon.svg`,
    shortcut: `${process.env.PAGES_BASE_PATH || ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}



