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
  categoria?: string
}

export default function CardProduto({
  id,
  title,
  description,
  price,
  imageSrc,
  destaque,
  categoria,
}: CardProdutoProps) {
  return (
    <div className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 ease-out">

      {/* Badge Destaque */}
      {destaque && (
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-full">
          ⭑ Destaque
        </span>
      )}

      {/* Imagem */}
      <div className="relative w-full h-48 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
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
          <Link
            href={`/produtos/${id}`}
            className="text-[10px] font-black uppercase tracking-wider bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-3.5 py-2 rounded-lg transition-all duration-150"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  )
}