"use client"

import { useMemo } from "react"
import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {
  const produtosDestaque = useMemo(() => {
    return produtos.filter((p) => p.destaque)
  }, [])

  return (
    <div className="w-full min-h-screen bg-zinc-950 pb-24">
      {/* Carrossel */}
      <Carrossel />

      {/* Header da seção */}
      <div className="text-center mt-20 mb-12 px-4">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/40 px-4 py-1.5 rounded-full border border-blue-500/20">
          ✦ Sua Loja Completa
        </span>
        <h1 className="text-3xl md:text-[2.6rem] font-black text-white tracking-tight mt-5 uppercase leading-none">
          Produtos em{" "}
          <span className="text-blue-500">Destaque</span>
        </h1>
        <div className="w-10 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full" />
        <p className="text-zinc-400 mt-4 max-w-sm mx-auto text-sm leading-relaxed">
          Os suplementos mais procurados, selecionados para a sua rotina de performance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
        {produtosDestaque.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
            categoria={produto.categoria}
          />
        ))}
      </div>
    </div>
  )
}