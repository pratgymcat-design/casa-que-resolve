import type { Category, Post } from "@/lib/types";

export const fallbackCategories: Category[] = [
  {
    id: "casa-inteligente",
    name: "Casa inteligente",
    slug: "casa-inteligente",
    description: "Dispositivos conectados, seguranca e automacao simples.",
  },
  {
    id: "eletroportateis",
    name: "Eletroportateis",
    slug: "eletroportateis",
    description: "Produtos que economizam tempo na rotina da casa.",
  },
  {
    id: "home-office",
    name: "Home office",
    slug: "home-office",
    description: "Conforto, produtividade e ergonomia para trabalhar melhor.",
  },
  {
    id: "internet",
    name: "Internet e rede",
    slug: "internet-e-rede",
    description: "Roteadores, mesh, nobreaks e itens para conexao estavel.",
  },
];

export const fallbackPosts: Post[] = [
  {
    id: "robo-aspirador-custo-beneficio",
    title: "Melhor robo aspirador custo-beneficio: o que observar antes de comprar",
    slug: "melhor-robo-aspirador-custo-beneficio",
    excerpt:
      "Um guia direto para escolher um robo aspirador que limpe bem, nao trave em casa e caiba no orcamento.",
    content:
      "Robo aspirador bom nao e apenas o que promete mais funcoes. Para a maioria das casas, o melhor custo-beneficio combina potencia de succao adequada, sensores confiaveis, pecas de reposicao faceis de achar e bateria suficiente para terminar o ciclo sem virar um problema novo. Se voce tem pets, tapetes ou muitos moveis baixos, priorize modelos com mapeamento, escovas removiveis e app simples. Para apartamentos pequenos, modelos intermediarios ja resolvem bem. Para casas maiores, vale pagar mais por mapeamento por ambientes e retorno automatico para a base.",
    image_url:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    published_at: "2026-06-09",
    reading_time: 5,
    score: 8.8,
    featured: true,
    category: fallbackCategories[1],
    product: {
      id: "robo-aspirador",
      name: "Robo aspirador intermediario com mapeamento",
      brand: null,
      short_description:
        "Boa escolha para quem quer automatizar a limpeza sem ir direto aos modelos premium.",
      rating: 8.8,
      pros: ["Economiza tempo", "Bom para manutencao diaria", "Ajuda em casas com pets"],
      cons: ["Nao substitui faxina pesada", "Pode exigir manutencao das escovas"],
      affiliate_links: [
        {
          id: "robo-ml",
          merchant: "Mercado Livre",
          label: "Ver ofertas",
          url: "https://www.mercadolivre.com.br/",
          price_note: "Compare vendedores e garantia.",
        },
      ],
    },
  },
  {
    id: "camera-wifi-apartamento",
    title: "Melhor camera Wi-Fi para apartamento: seguranca simples e sem obra",
    slug: "melhor-camera-wifi-para-apartamento",
    excerpt:
      "Veja os pontos que realmente importam em camera interna: imagem, app, armazenamento e privacidade.",
    content:
      "Para apartamento, a melhor camera Wi-Fi precisa ser discreta, ter boa imagem noturna e enviar alertas confiaveis. Resolucao Full HD costuma ser suficiente para ambientes internos, mas o aplicativo faz enorme diferenca: se ele atrasa notificacoes ou complica o acesso, a camera perde utilidade. Tambem avalie se voce prefere cartao microSD, nuvem paga ou ambos. Para monitorar porta, sala ou pet, modelos com audio bidirecional e deteccao de movimento entregam bom valor.",
    image_url:
      "https://images.unsplash.com/photo-1585770536735-27993a080586?auto=format&fit=crop&w=1200&q=80",
    published_at: "2026-06-09",
    reading_time: 4,
    score: 8.6,
    featured: true,
    category: fallbackCategories[0],
    product: {
      id: "camera-wifi",
      name: "Camera Wi-Fi interna Full HD",
      brand: null,
      short_description:
        "Indicada para monitorar ambientes internos com instalacao simples.",
      rating: 8.6,
      pros: ["Instalacao rapida", "Alertas no celular", "Boa para apartamentos"],
      cons: ["Recursos de nuvem podem ser pagos", "Depende de Wi-Fi estavel"],
      affiliate_links: [
        {
          id: "camera-amazon",
          merchant: "Amazon",
          label: "Pesquisar modelos",
          url: "https://www.amazon.com.br/",
          price_note: "Confira compatibilidade do app.",
        },
      ],
    },
  },
  {
    id: "alexa-vale-a-pena",
    title: "Alexa vale a pena? Para quem uma Echo realmente resolve",
    slug: "alexa-vale-a-pena",
    excerpt:
      "A Alexa brilha quando vira controle central da rotina, mas nem todo mundo precisa comprar uma.",
    content:
      "A Alexa vale a pena para quem quer controlar lampadas, tomadas, lembretes, musica e pequenos comandos de rotina sem pegar o celular. Ela fica mais util quando voce ja tem ou pretende comprar dispositivos compativeis. Para uso basico, uma Echo de entrada atende bem. Para som melhor, modelos maiores fazem mais sentido. O ponto central e pensar nela como uma central de conveniencia, nao como um produto milagroso.",
    image_url:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=1200&q=80",
    published_at: "2026-06-09",
    reading_time: 4,
    score: 8.4,
    featured: false,
    category: fallbackCategories[0],
    product: {
      id: "echo-alexa",
      name: "Smart speaker com Alexa",
      brand: "Amazon",
      short_description:
        "Boa porta de entrada para casa inteligente e comandos por voz.",
      rating: 8.4,
      pros: ["Facil de usar", "Integra com muitos dispositivos", "Boa para rotinas"],
      cons: ["Som varia por modelo", "Melhor com outros itens smart"],
      affiliate_links: [
        {
          id: "alexa-amazon",
          merchant: "Amazon",
          label: "Ver Echo na Amazon",
          url: "https://www.amazon.com.br/",
          price_note: "Precos variam muito em campanhas.",
        },
      ],
    },
  },
  {
    id: "roteador-mesh",
    title: "Melhor roteador mesh para casa: quando vale trocar o repetidor",
    slug: "melhor-roteador-mesh-para-casa",
    excerpt:
      "Mesh costuma resolver pontos cegos melhor que repetidor comum, mas precisa ser escolhido pelo tamanho da casa.",
    content:
      "Um kit mesh vale a pena quando a casa tem paredes grossas, muitos comodos ou sinal instavel longe do roteador principal. Diferente do repetidor simples, o mesh cria uma rede mais integrada e tende a alternar melhor entre os pontos. Antes de comprar, veja a metragem coberta, a velocidade contratada, quantidade de dispositivos e se o modelo tem portas gigabit. Para apartamentos pequenos, um bom roteador unico pode bastar. Para casas maiores, kits com dois ou tres pontos costumam entregar experiencia melhor.",
    image_url:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=1200&q=80",
    published_at: "2026-06-09",
    reading_time: 5,
    score: 8.7,
    featured: false,
    category: fallbackCategories[3],
    product: {
      id: "roteador-mesh",
      name: "Kit roteador mesh dual-band",
      brand: null,
      short_description:
        "Para melhorar cobertura Wi-Fi em casas e apartamentos com pontos cegos.",
      rating: 8.7,
      pros: ["Melhor cobertura", "Rede mais estavel", "Expansivel"],
      cons: ["Custa mais que repetidor", "Precisa posicionar bem os pontos"],
      affiliate_links: [
        {
          id: "mesh-ml",
          merchant: "Mercado Livre",
          label: "Comparar kits mesh",
          url: "https://www.mercadolivre.com.br/",
          price_note: "Confira portas gigabit.",
        },
      ],
    },
  },
  {
    id: "cadeira-ergonomica",
    title: "Melhor cadeira ergonomica ate R$ 1000: conforto sem exagero",
    slug: "melhor-cadeira-ergonomica-ate-1000",
    excerpt:
      "Ajustes, apoio lombar e material importam mais que visual gamer quando a ideia e trabalhar melhor.",
    content:
      "Na faixa ate R$ 1000, procure cadeira com ajuste de altura, apoio lombar funcional, encosto respiravel e assento com espuma firme. Bracos ajustaveis ajudam, mas nao salvam uma cadeira ruim. Para home office, modelos de escritorio bem construidos costumam ser mais confortaveis no longo prazo que cadeiras gamer de entrada. Verifique peso suportado, garantia e comentarios sobre rangidos ou desgaste do tecido.",
    image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    published_at: "2026-06-09",
    reading_time: 5,
    score: 8.5,
    featured: false,
    category: fallbackCategories[2],
    product: {
      id: "cadeira-ergonomica",
      name: "Cadeira ergonomica para home office",
      brand: null,
      short_description:
        "Para quem trabalha sentado varias horas e quer conforto com bom custo.",
      rating: 8.5,
      pros: ["Melhora postura", "Boa para rotina longa", "Muitos modelos na faixa"],
      cons: ["Qualidade varia bastante", "Precisa conferir medidas"],
      affiliate_links: [
        {
          id: "cadeira-shopee",
          merchant: "Shopee",
          label: "Ver opcoes",
          url: "https://shopee.com.br/",
          price_note: "Leia avaliacoes com foto.",
        },
      ],
    },
  },
];
