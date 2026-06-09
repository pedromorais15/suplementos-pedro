import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 sticky top-0 z-50 px-6 md:px-36 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-9 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
          />
          <h1 className="text-xl font-black text-white tracking-wider uppercase">
            Pedro <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Suplementos</span>
          </h1>
        </div>

        <nav className="flex space-x-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-200">
            Contato
          </Link>
        </nav>
    </header>
  );
}