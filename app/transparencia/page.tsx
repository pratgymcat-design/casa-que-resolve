export const metadata = {
  title: "Transparencia",
  description: "Politica de afiliados e criterios editoriais do Casa Que Resolve.",
};

export default function TransparencyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
        Transparencia
      </p>
      <h1 className="mt-2 text-4xl font-semibold">
        Como avaliamos produtos e usamos links de afiliado
      </h1>
      <div className="mt-8 space-y-6 rounded-lg bg-white p-6 text-lg leading-8 shadow-sm ring-1 ring-black/5 md:p-8">
        <p>
          Alguns links publicados no Casa Que Resolve podem ser links de
          afiliado. Isso significa que podemos receber uma comissao quando voce
          compra por esses links, sem custo extra para voce.
        </p>
        <p>
          Essa comissao ajuda a manter o blog, mas nao compra opiniao positiva.
          Os reviews devem considerar criterios como utilidade real, custo-
          beneficio, reputacao do produto, facilidade de uso, garantia,
          disponibilidade e pontos de atencao.
        </p>
        <p>
          Precos, estoque, condicoes de frete e campanhas mudam com frequencia.
          Antes de comprar, confira as informacoes atualizadas diretamente na
          loja parceira.
        </p>
      </div>
    </main>
  );
}
