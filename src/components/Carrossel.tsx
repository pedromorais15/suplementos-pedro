"use client"

import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    {src:"/carrossel/1.jpg",alt:"Banner promocional Pedro Suplementos com whey protein, creatina e desconto de até 30%"},
    {src:"/carrossel/2.jpg",alt:"Banner de suplementos com atleta treinando e oferta de até 30% de desconto"},
    {src:"/carrossel/3.jpg",alt:"Banner institucional Pedro Suplementos destacando qualidade, força e resultados"},
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  return (
    <section className="w-full flex justify-center bg-black">
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
            <CarouselContent>
                {carrosselImagens.map((imagem, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[320px] md:h-[500px] overflow-hidden select-none">
                            <Image
                              src={imagem.src}
                              alt={imagem.alt}
                              fill
                              className="object-cover"
                              priority={index === 0}
                            />
                            {/* Overlay sutil inferior para mesclar o banner perfeitamente com o fundo da página */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* Controles Estilizados com a paleta Black & Blue */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-blue-600 text-white hover:text-white border-zinc-800/80 hover:border-blue-500 transition-all duration-200 shadow-xl"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-blue-600 text-white hover:text-white border-zinc-800/80 hover:border-blue-500 transition-all duration-200 shadow-xl"/>
        </Carousel>
    </section>
  )
}