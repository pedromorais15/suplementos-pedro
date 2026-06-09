import type { Metadata } from "next"
import { Roboto, Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"
import { CartProvider } from "@/context/CartContext"
import { FavoritosProvider } from "@/context/FavoritosContext"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const roboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Pedro Suplementos | A Melhor Loja de Suplementos da Região",
  description:
    "Alcance mais resultados com a melhor e mais completa linha de performance do mercado.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", roboto.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-600 selection:text-white">
        <CartProvider>
          <FavoritosProvider>
            <Header />
            <main className="flex-1 bg-zinc-950">{children}</main>
            <Footer />
          </FavoritosProvider>
        </CartProvider>
      </body>
    </html>
  )
}