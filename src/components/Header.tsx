"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"
import CartDrawer from "@/components/CartDrawer"

export default function Header() {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const { totalItens } = useCart()

  return (
    <>
      <header className="w-full h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 sticky top-0 z-50 px-6 md:px-36 flex items-center justify-between transition-all">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-9 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
          />
          <h1 className="text-xl font-black text-white tracking-wider uppercase">
            Pedro <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Suplementos</span>
          </h1>
        </div>

        {/* Nav + Carrinho */}
        <div className="flex items-center gap-6">
          <nav className="flex space-x-8">
            <Link href="/" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
              Home
            </Link>
            <Link href="/produtos" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
              Produtos
            </Link>
            <Link href="/contato" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
              Contato
            </Link>
          </nav>

          {/* Botão Carrinho */}
          <button
            onClick={() => setCarrinhoAberto(true)}
            className="relative flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-blue-500/50 text-zinc-300 hover:text-white px-4 py-2 rounded-xl transition-all duration-200"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:block">Carrinho</span>
            {totalItens > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-950">
                {totalItens}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Drawer do Carrinho */}
      <CartDrawer
        aberto={carrinhoAberto}
        onFechar={() => setCarrinhoAberto(false)}
      />
    </>
  )
}