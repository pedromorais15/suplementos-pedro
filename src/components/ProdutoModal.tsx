"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { X, Trash2, ShoppingBag } from "lucide-react"

interface CartDrawerProps {
  aberto: boolean
  onFechar: () => void
}

export default function CartDrawer({ aberto, onFechar }: CartDrawerProps) {
  const { itens, totalItens, totalPreco, removerItem, limparCarrinho } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onFechar()
      }
    }
    if (aberto) document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [aberto, onFechar])

  // Fecha com Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onFechar()
    }
    if (aberto) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [aberto, onFechar])

  if (!aberto) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Painel */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm bg-zinc-950 border-l border-zinc-800 flex flex-col h-full shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-500" />
            <h2 className="text-sm font-black text-white uppercase tracking-wider">
              Carrinho
            </h2>
            {totalItens > 0 && (
              <span className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-full">
                {totalItens}
              </span>
            )}
          </div>
          <button
            onClick={onFechar}
            className="text-zinc-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-zinc-800"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Itens */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {itens.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
              <ShoppingBag className="w-12 h-12 text-zinc-700" />
              <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">
                Seu carrinho está vazio
              </p>
              <p className="text-zinc-700 text-xs">
                Adicione produtos para continuar
              </p>
            </div>
          ) : (
            itens.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3"
              >
                <div className="relative w-14 h-14 bg-zinc-950 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-zinc-100 line-clamp-2 leading-snug">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-medium text-zinc-500">
                      Qtd: {item.quantidade}
                    </span>
                    <span className="text-[10px] text-zinc-700">•</span>
                    <span className="text-xs font-black text-white">
                      R${" "}
                      {(item.price * item.quantidade).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removerItem(item.id)}
                  className="text-zinc-600 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-zinc-800 shrink-0"
                  aria-label="Remover item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {itens.length > 0 && (
          <div className="px-5 py-5 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Total
              </span>
              <span className="text-2xl font-black text-white tracking-tight">
                R${" "}
                {totalPreco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-150">
              Finalizar Compra
            </button>
            <button
              onClick={limparCarrinho}
              className="w-full text-zinc-600 hover:text-zinc-400 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  )
}