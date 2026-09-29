/**
 * Copy da LP (texto aprovado, não alterar sem aprovação).
 * Marcação: *trecho* = destaque em cor.
 */
import type { IconItem, Plan, Step } from '@lp/ui/types';
import { images } from './images';
import { site } from './site';

const toPlans = '#planos';

export const content = {
  meta: {
    title: 'Guia Visual da Moto Usada | Saiba o que avaliar antes de comprar',
    description:
      'Vai comprar uma moto usada? Saiba o que observar no motor, pneus, freios, transmissão e acabamento com um guia visual para acompanhar sua avaliação inicial.',
  },

  // 1. PRIMEIRA DOBRA
  hero: {
    title:
      'COMPRE SUA *MOTO USADA* E FUJA DE GOLPES: O GUIA QUE TE ENSINA A AVALIAR, NEGOCIAR E ECONOMIZAR NA COMPRA',
    subtitle:
      'Um passo a passo visual e direto ao ponto para saber o que observar em uma moto usada antes de fechar negócio. Reconheça sinais de quedas, desgaste e problemas aparentes para negociar com mais segurança, mesmo sem entender de mecânica.',
    cta: { label: 'QUERO COMPRAR MINHA MOTO COM SEGURANÇA', href: toPlans },
    note: 'Receba o guia no seu e-mail após a confirmação do pagamento.',
    image: images.hero,
  },

  // 2. DEMONSTRAÇÃO DO MATERIAL
  showcase: {
    title: 'Veja como o guia funciona na prática',
    intro: [
      'Saiba o que observar no motor, nas carenagens, nos pneus, nos freios e na transmissão. Leve o material no celular e acompanhe as orientações durante a visita.',
    ],
    images: images.showcase,
  },

  // 3. PROBLEMAS QUE O GUIA AJUDA A OBSERVAR
  problems: {
    title: 'Por que olhar só a aparência da moto *pode sair caro?*',
    intro: [
      'Uma moto limpa, brilhando e com poucos quilômetros no painel pode parecer um ótimo negócio. Mas, antes de confiar no anúncio, você precisa saber onde olhar e o que perguntar.',
    ],
    items: [
      {
        icon: 'gauge',
        title: 'A quilometragem combina com o desgaste?',
        text: 'Aprenda a observar manoplas, pedaleiras, banco e outros sinais de uso para perceber possíveis inconsistências com a quilometragem anunciada.',
      },
      {
        icon: 'alert',
        title: 'Marcas de quedas e reparos',
        text: 'Saiba onde procurar riscos, peças substituídas e diferenças de acabamento em manetes, guidão, pedaleiras e carenagens que merecem uma avaliação mais cuidadosa.',
      },
      {
        icon: 'cog',
        title: 'Motor bonito não conta toda a história',
        text: 'Entenda o que observar na partida, nos ruídos, na fumaça e em possíveis vazamentos para reconhecer sinais que precisam da análise de um mecânico.',
      },
      {
        icon: 'wallet',
        title: 'Desgastes que pesam no bolso',
        text: 'Pneus, freios, suspensão e kit de relação podem gerar gastos logo após a compra. Saiba quais pontos conferir antes de aceitar o preço anunciado.',
      },
    ],
  },

  // 4. COMPARATIVO
  comparison: {
    title: 'A diferença entre comprar pela aparência e saber o que observar',
    image: images.comparison,
    bad: {
      title: 'Comprando sem orientação',
      items: [
        'Confia apenas nas fotos do anúncio e na conversa do vendedor.',
        'Olha a moto, mas não sabe quais detalhes merecem atenção.',
        'Esquece de conferir itens que podem exigir manutenção imediata.',
        'Negocia o preço sem registrar os gastos aparentes.',
      ],
    },
    good: {
      title: 'Comprando com o Guia Visual',
      items: [
        'Segue uma sequência para observar os principais pontos da moto.',
        'Reconhece sinais de desgaste e possíveis marcas de quedas.',
        'Registra dúvidas e itens que precisam de avaliação profissional.',
        'Usa o que encontrou para conversar com o vendedor e negociar com mais informação.',
      ],
    },
  },

  // 5. FACILIDADE DE USO
  ease: {
    title: 'Você não precisa entender de mecânica para saber __por onde começar__',
    paragraphs: [
      'Abra o guia no celular, acompanhe as imagens e **compare as orientações com a moto que está avaliando.**',
      'Um material visual para ajudar você a organizar a visita, fazer as perguntas certas e reconhecer quando precisa da opinião de um mecânico.',
    ],
    features: [
      'Avaliação visual de carenagens, motor, pneus, freios e transmissão.',
      'Checklist pronto para acompanhar a visita.',
      'PDF para consultar no celular ou imprimir.',
    ],
    cta: { label: 'QUERO APRENDER A AVALIAR MOTOS USADAS', href: toPlans },
  },

  // 6. BLOCO DE DOR
  pain: {
    title: 'Não comprometa suas economias por deixar passar o que poderia conferir',
    paragraphs: [
      'Você juntou dinheiro para comprar sua moto. Descobrir depois que ela precisa de pneus, relação, suspensão e reparos no motor pode transformar a compra em uma sequência de gastos.',
      'Saiba o que observar antes de pagar e quais sinais merecem uma avaliação profissional antes de fechar negócio.',
    ],
  },

  // 7. PARA QUEM É
  audience: {
    title: 'Esse guia foi feito para você que:',
    items: [
      'Está procurando uma moto usada e quer saber o que conferir antes da compra.',
      'Não entende de mecânica e tem medo de levar uma moto cheia de problemas.',
      'Vê anúncios na OLX ou no Marketplace, mas não sabe se pode confiar na descrição.',
      'Pensa: “E se eu comprar essa moto e ela começar a dar problema na semana seguinte?”',
      'Quer negociar com base no estado da moto, sem depender apenas da conversa do vendedor.',
      'Precisa de um roteiro simples para levar no dia da visita.',
    ],
  },

  // 8. O QUE VOCÊ VAI RECEBER
  deliverables: {
    title: 'Conheça o Guia Visual da Moto Usada',
    intro: [
      'Um e-book visual para acompanhar você na avaliação inicial de uma moto usada, com uma sequência organizada do que observar antes de fechar negócio.',
    ],
    items: [
      {
        icon: 'search',
        title: 'Avaliação externa',
        text: 'Pontos de atenção em carenagens, tanque, manetes, pedaleiras e marcas aparentes de quedas ou reparos.',
      },
      {
        icon: 'activity',
        title: 'Sinais de uso e desgaste',
        text: 'O que observar em manoplas, banco, pedaleiras e outros componentes para comparar o estado da moto com a descrição do anúncio.',
      },
      {
        icon: 'cog',
        title: 'Motor e funcionamento',
        text: 'Orientações para observar partida, ruídos, fumaça e possíveis vazamentos, reconhecendo situações que precisam de avaliação mecânica.',
      },
      {
        icon: 'wallet',
        title: 'Itens que podem gerar gastos',
        text: 'Pontos de atenção em pneus, freios, suspensão e, nas motos com transmissão por corrente, no kit de relação.',
      },
      {
        icon: 'smartphone',
        title: 'Material para acompanhar a visita',
        text: 'PDF para consultar pelo celular, seguir a sequência de avaliação e registrar o que merece atenção antes da compra.',
      },
    ],
    image: images.product,
  },

  // 9. BÔNUS
  bonuses: {
    title: 'No plano completo, você também recebe 3 bônus para apoiar sua escolha',
    items: [
      {
        tag: 'Bônus 1',
        title: 'Guia de Atenção aos Modelos de Motos Usadas',
        text: 'Consulte os pontos de atenção dos modelos abordados no material. Saiba quais componentes e cuidados de manutenção merecem uma verificação mais detalhada antes de decidir.',
        image: images.bonus[0],
      },
      {
        tag: 'Bônus 2',
        title: 'Comparativo de Motos Usadas por Faixa de Preço',
        text: 'Compare as opções apresentadas no material considerando sua faixa de orçamento, proposta de uso e cuidados de manutenção. Organize sua pesquisa antes de marcar as visitas.',
        image: images.bonus[1],
      },
      {
        tag: 'Bônus 3',
        title: 'Checklist Imprimível de Avaliação',
        text: 'Uma ficha para imprimir e levar na visita. Marque os itens conferidos, anote sinais de desgaste e registre o que precisa ser esclarecido com o vendedor ou avaliado por um mecânico.',
        image: images.bonus[2],
      },
    ],
  },

  // 10. PLANOS
  pricing: {
    title: 'Quanto vale saber o que olhar antes de comprar sua moto?',
    // Quadro de destaque abaixo do título. **negrito**, __verde__
    callout: [
      'Uma vistoria cautelar de moto custa cerca de **R$ 150,00**. Trocar pneus, kit de relação e pastilhas de freio pode passar de **R$ 1.000,00**, e um reparo no motor chega facilmente a **R$ 2.000,00**. Descobrir isso depois da compra sai caro.',
      '**O Guia Visual da Moto Usada é o seu __roteiro para comprar com mais segurança.__**',
    ],
    plans: [
      {
        tag: 'Plano Básico',
        name: 'Guia Visual da Moto Usada',
        features: [
          'Guia Visual da Moto Usada em PDF.',
          'Orientações visuais para acompanhar a avaliação inicial.',
          'Material para consultar no celular ou imprimir.',
        ],
        excluded: [
          'Bônus 1: Guia de Atenção aos Modelos de Motos Usadas.',
          'Bônus 2: Comparativo de Motos Usadas por Faixa de Preço.',
          'Bônus 3: Checklist Imprimível de Avaliação.',
        ],
        price: '27,90',
        oldPrice: '67,00',
        installments: '9x de R$ 3,67',
        cta: { label: 'QUERO O GUIA VISUAL DA MOTO USADA', href: site.checkout.basico },
        notice: {
          label: 'Atenção:',
          text: 'Temos uma oferta __ainda mais vantajosa__ para você!',
          below: 'Veja abaixo.',
          beside: 'Veja ao lado.',
        },
        image: images.planBasic,
      },
      {
        tag: 'Plano Completo',
        name: 'Pack Compra Segura da Moto Usada',
        features: [
          'Guia Visual da Moto Usada em PDF.',
          'Bônus 1: Guia de Atenção aos Modelos de Motos Usadas.',
          'Bônus 2: Comparativo de Motos Usadas por Faixa de Preço.',
          'Bônus 3: Checklist Imprimível de Avaliação.',
        ],
        price: '37,90',
        oldPrice: '97,00',
        installments: '12x de R$ 3,92',
        cta: { label: 'QUERO O GUIA DA MOTO + BÔNUS', href: site.checkout.completo },
        featured: true,
        image: images.product,
      },
    ],
    footnote: '7 dias de garantia.',
  },

  // 11. GARANTIA
  guarantee: {
    title: '7 dias para conhecer o material',
    days: 7,
    paragraphs: [
      'Acesse o guia e veja como as orientações podem ajudar na sua avaliação inicial de uma moto usada.',
      'Se o material não atender às suas expectativas, solicite o reembolso em até 7 dias após a compra.',
    ],
  },

  // 12. COMO ACESSAR
  steps: {
    title: 'Seu guia no celular em poucos passos',
    steps: [
      { icon: 'creditCard', title: 'Conclua sua compra', text: 'Escolha seu plano e finalize o pagamento.' },
      {
        icon: 'mail',
        title: 'Receba o acesso por e-mail',
        text: 'Após a confirmação do pagamento, você receberá as instruções para acessar o material.',
      },
      {
        icon: 'download',
        title: 'Baixe os PDFs',
        text: 'Faça o download do guia e dos bônus incluídos no plano escolhido.',
      },
      {
        icon: 'clipboardCheck',
        title: 'Leve o material na visita',
        text: 'Consulte as orientações, preencha suas anotações e registre os pontos que precisam de atenção antes de fechar negócio.',
      },
    ],
    cta: { label: 'QUERO COMPRAR MINHA MOTO COM SEGURANÇA', href: toPlans },
  },

  // 13. PERGUNTAS FREQUENTES
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Preciso entender de mecânica para usar o guia?',
        a: 'Não. O material foi pensado para quem precisa de uma orientação inicial, com linguagem simples e referências visuais para saber o que observar durante a visita.',
      },
      {
        q: 'Como recebo o material?',
        a: 'Após a confirmação do pagamento, você recebe por e-mail as instruções para acessar e baixar os PDFs do plano escolhido.',
      },
      {
        q: 'O guia serve para qualquer moto?',
        a: 'O guia aborda pontos comuns de avaliação de motos usadas. Alguns itens variam conforme o modelo, como transmissão, refrigeração e freios. Considere essas diferenças e procure avaliação profissional para os pontos específicos da moto escolhida.',
      },
      {
        q: 'Posso ler pelo celular?',
        a: 'Sim. Você pode consultar o PDF pelo celular durante a visita ou imprimir o material para acompanhar a avaliação.',
      },
      {
        q: 'O guia substitui a avaliação de um mecânico?',
        a: 'Não. Ele ajuda você a fazer uma avaliação inicial e organizar suas dúvidas. A análise de um mecânico de confiança continua importante para investigar problemas que não são identificáveis apenas pela aparência.',
      },
      {
        q: 'O guia garante que a moto não terá problemas?',
        a: 'Não. O material ajuda a observar sinais de atenção e a tomar uma decisão mais informada, mas não garante o estado mecânico, a procedência ou o funcionamento futuro da moto.',
      },
    ],
  },

  // 14. RODAPÉ
  footer: '© 2026 Guia Visual da Moto Usada. Todos os direitos reservados.',
} satisfies {
  problems: { items: IconItem[] };
  deliverables: { items: IconItem[] };
  pricing: { plans: Plan[] };
  steps: { steps: Step[] };
  [key: string]: unknown;
};
