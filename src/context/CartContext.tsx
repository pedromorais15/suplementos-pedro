"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"

export interface CartItem {
  id: number
  title: string
  price: number
  imageSrc: string
  quantidade: number
}

interface CartContextType {
  itens: CartItem[]
  totalItens: number
  totalPreco: number
  adicionarItem: (item: Omit<CartItem, "quantidade">) => void
  removerItem: (id: number) => void
  limparCarrinho: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CartItem[]>([])

  const adicionarItem = useCallback((novoItem: Omit<CartItem, "quantidade">) => {
    setItens((prev) => {
      const existe = prev.find((i) => i.id === novoItem.id)
      if (existe) {
        return prev.map((i) =>
          i.id === novoItem.id ? { ...i, quantidade: i.quantidade + 1 } : i
        )
      }
      return [...prev, { ...novoItem, quantidade: 1 }]
    })
  }, [])

  const removerItem = useCallback((id: number) => {
    setItens((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const limparCarrinho = useCallback(() => setItens([]), [])

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0)
  const totalPreco = itens.reduce((acc, i) => acc + i.price * i.quantidade, 0)

  return (
    <CartContext.Provider value={{ itens, totalItens, totalPreco, adicionarItem, removerItem, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider")
  return ctx
}