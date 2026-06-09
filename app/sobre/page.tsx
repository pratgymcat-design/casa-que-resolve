export const metadata = {
  title: "Sobre",
  description: "Conheca o Casa Que Resolve.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
        Sobre
      </p>
      <h1 className="mt-2 text-4xl font-semibold">Um blog para comprar melhor</h1>
      <div className="mt-8 space-y-6 rounded-lg bg-white p-6 text-lg leading-8 shadow-sm ring-1 ring-black/5 md:p-8">
        <p>
          O Casa Que Resolve nasceu para ajudar pessoas a escolher produtos que
          realmente melhoram a rotina da casa: tecnologia util, home office,
          eletroportateis, organizacao e itens inteligentes.
        </p>
        <p>
          A proposta e simples: transformar pesquisa de compra em guias claros,
          com criterios praticos, pontos fortes, limitacoes e indicacoes para
          perfis diferentes de usuario.
        </p>
        <p>
          Nem sempre o melhor produto e o mais caro. Muitas vezes, o melhor e o
          que resolve exatamente o problema certo.
        </p>
      </div>
    </main>
  );
}
