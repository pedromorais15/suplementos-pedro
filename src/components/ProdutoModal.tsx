"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X, ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useFavoritos } from "@/context/FavoritosContext"

interface Produto {
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque: boolean
  categoria: string
}

interface ProdutoModalProps {
  produto: Produto | null
  onFechar: () => void
}

export default function ProdutoModal({ produto, onFechar }: ProdutoModalProps) {
  const { adicionarItem } = useCart()
  const { toggleFavorito, isFavorito } = useFavoritos()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onFechar()
    }
    if (produto) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [produto, onFechar])

  if (!produto) return null

  const favorito = isFavorito(produto.id)

  function handleAdicionarCarrinho() {
    adicionarItem({
      id: produto!.id,
      title: produto!.title,
      price: produto!.price,
      imageSrc: produto!.imageSrc,
    })
    onFechar()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onFechar}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Botão fechar */}
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 z-10 text-zinc-500 hover:text-white bg-zinc-950/80 p-1.5 rounded-lg transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        {produto.destaque && (
          <span className="absolute top-4 left-4 z-10 text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-full">
            ⭑ Destaque
          </span>
        )}

        {/* Imagem */}
        <div className="relative w-full h-56 bg-zinc-950 border-b border-zinc-800">
          <Image
            src={produto.imageSrc}
            alt={produto.title}
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">
            {produto.categoria}
          </span>
          <h2 className="text-lg font-black text-white mt-1.5 mb-3 leading-snug">
            {produto.title}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {produto.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-zinc-500 mr-1">R$</span>
              <span className="text-3xl font-black text-white tracking-tight">
                {produto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleFavorito(produto.id)}
                className={`p-3 rounded-xl border transition-all duration-150 ${
                  favorito
                    ? "bg-rose-950/50 border-rose-800 text-rose-400"
                    : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-rose-800 hover:text-rose-400"
                }`}
                aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <Heart className={`w-4 h-4 ${favorito ? "fill-rose-400" : ""}`} />
              </button>
              <button
                onClick={handleAdicionarCarrinho}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-150"
              >
                <ShoppingCart className="w-4 h-4" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}