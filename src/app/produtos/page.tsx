"use client"

import { useState, useMemo, useDeferredValue } from "react"
import CardProduto from "@/components/CardProduto"
import { Input } from "@/components/ui/input"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  const [pesquisa, setPesquisa] = useState("")
  const [categoriaAtiva, setCategoriaAtiva] = useState("TODOS")
  const pesquisaAdiada = useDeferredValue(pesquisa)

  const categorias = useMemo(() => {
    return ["TODOS", ...Array.from(new Set(produtos.map((p) => p.categoria)))]
  }, [])

  const produtosFiltrados = useMemo(() => {
    const termo = pesquisaAdiada.toLowerCase().trim()
    return produtos.filter((produto) => {
      const bateCategoria = categoriaAtiva === "TODOS" || produto.categoria === categoriaAtiva
      const batePesquisa = produto.title.toLowerCase().includes(termo)
      return bateCategoria && batePesquisa
    })
  }, [categoriaAtiva, pesquisaAdiada])

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/40 px-4 py-1.5 rounded-full border border-blue-500/20">
            ✦ Linha de Alta Performance
          </span>
          <h1 className="text-3xl md:text-[2.6rem] font-black text-white tracking-tight mt-5 uppercase leading-none">
            Nosso{" "}
            <span className="text-blue-500">Catálogo</span>
          </h1>
          <div className="w-10 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Barra de Filtros */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-5 mb-10 flex flex-col xl:flex-row justify-between items-center gap-4">

          {/* Categorias */}
          <div className="flex flex-wrap gap-2 w-full xl:w-auto justify-center xl:justify-start">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg border transition-all duration-200 ${
                  categoriaAtiva === cat
                    ? "bg-blue-600 text-white border-blue-500 ring-2 ring-blue-600/25"
                    : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                {cat.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Campo de busca */}
          <div className="relative w-full xl:w-72 shrink-0">
            <Input
              type="text"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Buscar suplemento..."
              className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-blue-600 focus-visible:border-blue-500 pl-10 h-10 rounded-xl"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-zinc-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Contagem de resultados */}
        {pesquisa || categoriaAtiva !== "TODOS" ? (
          <p className="text-xs text-zinc-600 font-semibold uppercase tracking-widest mb-6">
            {produtosFiltrados.length} resultado{produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
          </p>
        ) : null}

        {/* Grid */}
        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {produtosFiltrados.map((produto) => (
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
        ) : (
          <div className="text-center py-24 bg-zinc-900/40 border border-zinc-900 rounded-2xl">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider">
              Nenhum resultado encontrado
            </p>
            <p className="text-zinc-600 text-xs mt-2">
              Tente outro termo ou categoria
            </p>
          </div>
        )}

      </div>
    </div>
  )
}