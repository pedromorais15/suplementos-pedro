import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 px-6 md:px-36 py-10 flex flex-col gap-6">
      {/* Grid de Informações Adicionais */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-zinc-900 pb-6">
        <div className="flex gap-6 text-zinc-500 text-xs uppercase font-semibold tracking-wider">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 100% Originais</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Entrega Rápida</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Compra Segura</span>
        </div>
        <div className="text-zinc-400 text-sm font-bold tracking-wide">
          WWW.<span className="text-blue-500">PEDROSUPLEMENTOS</span>.COM.BR
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-medium tracking-wider uppercase text-zinc-600 gap-2">
        <p>&copy; {currentYear} Suplementos Pedro. Todos os direitos reservados.</p>
        <p className="text-zinc-500 border border-zinc-800/80 rounded px-2.5 py-1 bg-zinc-900/30">
          Toda sua suplementação aqui!
        </p>
      </div>
    </footer>
  );
}