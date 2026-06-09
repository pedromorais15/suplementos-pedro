"use client"

import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useFavoritos } from "@/context/FavoritosContext"

interface CardProdutoProps {
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
  categoria?: string
  onVerMais?: () => void
}

export default function CardProduto({
  id,
  title,
  description,
  price,
  imageSrc,
  destaque,
  categoria,
  onVerMais,
}: CardProdutoProps) {
  const { adicionarItem } = useCart()
  const { toggleFavorito, isFavorito } = useFavoritos()
  const favorito = isFavorito(id)

  function handleAdicionarCarrinho(e: React.MouseEvent) {
    e.stopPropagation()
    adicionarItem({ id, title, price, imageSrc })
  }

  function handleFavorito(e: React.MouseEvent) {
    e.stopPropagation()
    toggleFavorito(id)
  }

  return (
    <div
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
      onClick={onVerMais}
    >
      {/* Badge Destaque */}
      {destaque && (
        <span className="absolute top-3 left-3 z-10 text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-full">
          ⭑ Destaque
        </span>
      )}

      {/* Botão Favorito */}
      <button
        onClick={handleFavorito}
        className={`absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-xl border transition-all duration-150 ${
          favorito
            ? "bg-rose-950/60 border-rose-800 text-rose-400"
            : "bg-zinc-950/70 border-zinc-700 text-zinc-500 hover:border-rose-700 hover:text-rose-400"
        }`}
        aria-label={favorito ? "Remover dos favoritos" : "Favoritar"}
      >
        <Heart className={`w-3.5 h-3.5 ${favorito ? "fill-rose-400" : ""}`} />
      </button>

      {/* Imagem */}
      <div className="relative w-full h-48 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Overlay hover: botão adicionar ao carrinho */}
        <div className="absolute inset-0 bg-zinc-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleAdicionarCarrinho}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-black text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-150 shadow-lg"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-4">
        {categoria && (
          <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1.5">
            {categoria}
          </span>
        )}
        <h2 className="text-[13px] font-bold text-zinc-100 leading-snug line-clamp-2 mb-1.5">
          {title}
        </h2>
        <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed flex-1">
          {description}
        </p>

        {/* Rodapé */}
        <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-zinc-800">
          <div className="flex items-baseline gap-0.5">
            <span className="text-[11px] font-medium text-zinc-500 mr-0.5">R$</span>
            <span className="text-[19px] font-black text-white tracking-tight leading-none">
              {price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onVerMais?.() }}
            className="text-[10px] font-black uppercase tracking-wider text-blue-400 border border-blue-900 hover:bg-blue-950 px-3.5 py-2 rounded-lg transition-all duration-150"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}