"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"

interface FavoritosContextType {
  favoritos: Set<number>
  toggleFavorito: (id: number) => void
  isFavorito: (id: number) => boolean
}

const FavoritosContext = createContext<FavoritosContextType | null>(null)

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set())

  const toggleFavorito = useCallback((id: number) => {
    setFavoritos((prev) => {
      const novo = new Set(prev)
      if (novo.has(id)) novo.delete(id)
      else novo.add(id)
      return novo
    })
  }, [])

  const isFavorito = useCallback(
    (id: number) => favoritos.has(id),
    [favoritos]
  )

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext)
  if (!ctx) throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider")
  return ctx
}