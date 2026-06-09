import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casa-que-resolve.vercel.app"),
  title: {
    default: "Casa Que Resolve",
    template: "%s | Casa Que Resolve",
  },
  description:
    "Reviews, comparativos e guias de compra para casa, home office e tecnologia util.",
  openGraph: {
    title: "Casa Que Resolve",
    description:
      "Guias de compra e reviews sinceros para deixar sua casa mais pratica.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#fbfaf7] text-[#1d1a16]">
        <header className="sticky top-0 z-50 border-b border-[#ddd4c7] bg-[#fbfaf7]/96 backdrop-blur">
          <div className="border-b border-[#ebe4d9] bg-[#173d36] text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-xs font-medium md:px-8 lg:px-10">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={14} />
                Guias de compra com links transparentes
              </span>
              <Link href="/transparencia" className="hidden hover:underline sm:inline">
                Como monetizamos
              </Link>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8 lg:px-10">
            <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
              Casa Que Resolve
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-semibold text-[#5f5a52] md:flex">
              <Link className="transition hover:text-[#1f4f46]" href="/categorias">
                Categorias
              </Link>
              <Link className="transition hover:text-[#1f4f46]" href="/categorias/organizacao">
                Organizacao
              </Link>
              <Link className="transition hover:text-[#1f4f46]" href="/categorias/casa-inteligente">
                Casa inteligente
              </Link>
              <Link className="transition hover:text-[#1f4f46]" href="/sobre">
                Sobre
              </Link>
            </nav>
            <Link
              href="/categorias"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cebf] bg-white text-[#1f4f46] transition hover:border-[#1f4f46] md:h-auto md:w-auto md:gap-2 md:rounded-md md:px-4 md:py-2 md:text-sm md:font-semibold"
              aria-label="Buscar por categorias"
            >
              <Search size={17} />
              <span className="hidden md:inline">Buscar guias</span>
            </Link>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <WhatsAppButton />
        <footer className="border-t border-[#e4ddd2] bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#686159] md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
            <p>
              © {new Date().getFullYear()} Casa Que Resolve. Reviews com
              transparencia.
            </p>
            <div className="flex gap-4">
              <Link href="/sobre" className="hover:text-[#1f4f46]">
                Sobre
              </Link>
              <Link href="/transparencia" className="hover:text-[#1f4f46]">
                Politica de afiliados
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
