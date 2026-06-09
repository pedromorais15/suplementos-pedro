"use client"

import Image from "next/image"
import Link from "next/link"

interface CardProdutoProps {
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  id,
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {
  return (
    <div className="relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 group">
      
      {/* Badge Destaque */}
      {destaque && (
        <span className="absolute top-3 left-3 z-10 text-[10px] font-black uppercase tracking-widest text-white bg-blue-600 px-2.5 py-1 rounded-full shadow-lg">
          Destaque
        </span>
      )}

      {/* Imagem */}
      <div className="relative w-full h-52 bg-zinc-800 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h2 className="text-sm font-bold text-zinc-100 leading-snug line-clamp-2">
          {title}
        </h2>
        <p className="text-xs text-zinc-500 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Preço e Botão */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-black text-white">
            R${" "}
            {price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <Link
            href={`/produtos/${id}`}
            className="text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  )
}