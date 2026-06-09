import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContatoPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da Página — Identidade Pedro Suplementos */}
        <div className="text-center my-12">
          <span className="text-[11px] font-black uppercase tracking-widest text-blue-500 bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Fale Conosco
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4 uppercase">
            Suplementos Pedro — <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Contato</span>
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm md:text-base font-medium">
            Dúvidas sobre produtos, pedidos ou parcerias? Nossa equipe de especialistas está pronta para te atender.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Formulário de Envio Premium com os componentes Shadcn */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            <h2 className="text-xl font-black uppercase tracking-wide text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
              Envie uma Mensagem
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Nome Completo</label>
                  <Input 
                    type="text" 
                    placeholder="Ex: João Silva" 
                    className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-blue-600 focus-visible:border-blue-500 h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">E-mail</label>
                  <Input 
                    type="email" 
                    placeholder="Ex: joao@email.com" 
                    className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-blue-600 focus-visible:border-blue-500 h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Assunto</label>
                <Input 
                  type="text" 
                  placeholder="Ex: Dúvida sobre o envio / Sugestão" 
                  className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-blue-600 focus-visible:border-blue-500 h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Mensagem</label>
                <Textarea 
                  placeholder="Escreva sua mensagem detalhadamente aqui..." 
                  rows={5}
                  className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-blue-600 focus-visible:border-blue-500 resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-wider transition-all duration-200 py-6 rounded-lg shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] border border-blue-500">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Cards de Canais de Atendimento Direto */}
          <div className="flex flex-col gap-4">
            
            {/* Card WhatsApp */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-400 transition-colors">
                  📞 Atendimento Via WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-white tracking-tight">(11) 99999-9999</p>
                <p className="text-xs text-zinc-400 mt-1">Segunda a Sexta: 8h às 18h</p>
                <a 
                  href="https://wa.me/seunumerohere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-blue-500 tracking-wider mt-4 hover:underline"
                >
                  Chamar no Whats &rarr;
                </a>
              </CardContent>
            </Card>

            {/* Card Instagram */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-400 transition-colors">
                  📸 Redes Sociais Oficiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-white tracking-tight">@pedrosuplementos</p>
                <p className="text-xs text-zinc-400 mt-1">Acompanhe nossos stories com reposições diárias.</p>
                <a 
                  href="https://instagram.com/pedrosuplementos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-blue-500 tracking-wider mt-4 hover:underline"
                >
                  Acessar Instagram &rarr;
                </a>
              </CardContent>
            </Card>

            {/* Card E-mail */}
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-400 transition-colors">
                  ✉️ E-mail Corporativo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-bold text-white tracking-tight break-all">contato@pedrosuplementos.com.br</p>
                <p className="text-xs text-zinc-400 mt-1">Respondemos em até 24 horas úteis.</p>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </div>
  )
}