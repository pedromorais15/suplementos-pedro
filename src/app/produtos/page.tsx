"use client"

import { useState, useMemo, useDeferredValue } from "react"
import CardProduto from "@/components/CardProduto"
import { Input } from "@/components/ui/input"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  const [pesquisa, setPesquisa] = useState("")
  const [categoriaAtiva, setCategoriaAtiva] = useState("TODOS")

  // Adia o recálculo do grid enquanto o utilizador digita, evitando travamentos
  const pesquisaAdiada = useDeferredValue(pesquisa)

  // Extrai todas as categorias únicas de forma estática e automatizada
  const categorias = useMemo(() => {
    return ["TODOS", ...Array.from(new Set(produtos.map((p) => p.categoria)))]
  }, [])

  // Filtro combinado: categoria + texto de pesquisa
  const produtosFiltrados = useMemo(() => {
    const termo = pesquisaAdiada.toLowerCase().trim()
    return produtos.filter((produto) => {
      const bateCategoria =
        categoriaAtiva === "TODOS" || produto.categoria === categoriaAtiva
      const batePesquisa = produto.title.toLowerCase().includes(termo)
      return bateCategoria && batePesquisa
    })
  }, [categoriaAtiva, pesquisaAdiada])

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Título do Catálogo */}
        <div className="text-center my-10">
          <span className="text-[11px] font-black uppercase tracking-widest text-blue-500 bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Linha de Alta Performance
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4 uppercase">
            Nosso{" "}
            <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              Catálogo
            </span>
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Painel de Filtros e Busca */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 mb-12 flex flex-col xl:flex-row justify-between items-center gap-4 shadow-xl">

          {/* Menu de Categorias Dinâmico */}
          <div className="flex flex-wrap gap-2 w-full xl:w-auto justify-center xl:justify-start">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg border transition-all duration-200 ${
                  categoriaAtiva === cat
                    ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Campo de Pesquisa */}
          <div className="relative w-full md:w-80">
            <Input
              type="text"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Buscar suplemento..."
              className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-blue-600 focus-visible:border-blue-500 pl-10 h-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Grid de Produtos ou Estado Vazio */}
        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
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
        ) : (
          <div className="text-center py-20 bg-zinc-900/50 border border-zinc-900 rounded-xl">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">
              Nenhum suplemento encontrado para a sua busca.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}