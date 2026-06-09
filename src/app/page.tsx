"use client"

import { useMemo } from "react"
import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {
  const produtosDestaque = useMemo(() => {
    return produtos.filter((produto) => produto.destaque)
  }, [])

  return (
    <div className="w-full min-h-screen bg-zinc-950 pb-20">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-14 px-4">
        <span className="text-[11px] font-black uppercase tracking-widest text-blue-500 bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
          Sua Loja Completa
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4 uppercase">
          Produtos em Destaque
        </h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm md:text-base font-medium">
          Alcance mais resultados com os suplementos mais procurados e
          organizados para a sua rotina.
        </p>
      </div>

      {/* Grid Responsivo Premium */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {produtosDestaque.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
          />
        ))}
      </div>
    </div>
    
  )
}