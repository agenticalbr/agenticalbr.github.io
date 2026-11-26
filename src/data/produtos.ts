export type Produto = {
  slug: string;
  nome: string;
  parte: string; // a parte da cultura agêntica que o produto representa
  chamada: string;
  resumo: string;
  problema: string[];
  oQueFaz: { titulo: string; texto: string }[];
  conexao: string;
  destaque?: string;
  emBreve?: string[];
};

export const produtos: Produto[] = [
  {
    slug: 'culture',
    nome: 'Culture',
    parte: 'pessoas',
    chamada: 'A cultura agêntica começa pelas pessoas.',
    resumo:
      'Consultoria que mapeia seus processos, mostra onde os agentes trazem mais valor, treina a equipe e acompanha a adoção. É por onde toda empresa começa.',
    destaque: 'Comece por aqui',
    problema: [
      'Cada um usa IA do seu jeito, sem regra e sem método.',
      'Pilotos e testes que nunca viram rotina.',
      'Equipe com medo de ser substituída em vez de ser ampliada.',
    ],
    oQueFaz: [
      { titulo: 'Diagnóstico de processos', texto: 'Entrevistas e análise da operação para encontrar onde os agentes geram mais resultado, e onde não vale a pena usá-los.' },
      { titulo: 'Mapa de oportunidades', texto: 'Um plano priorizado, com o que fazer primeiro, o que esperar e como medir.' },
      { titulo: 'Treinamento da equipe', texto: 'Pessoas aprendem a trabalhar com agentes: delegar, revisar e propor os próximos.' },
      { titulo: 'Uso responsável', texto: 'Regras claras sobre o que vai para a IA, quem aprova o quê e como proteger os dados.' },
      { titulo: 'Acompanhamento da adoção', texto: 'Seguimos junto depois da implantação, ajustando até virar hábito.' },
    ],
    conexao:
      'O diagnóstico do Culture indica quais partes da cultura agêntica fazem sentido para a sua empresa: site, conteúdo, atendimento, dados ou o Cockpit inteiro.',
  },
  {
    slug: 'websites',
    nome: 'Websites',
    parte: 'vitrine',
    chamada: 'Um site ligado à sua operação, que você muda conversando.',
    resumo:
      'Sites e landing pages rápidos, conectados aos seus sistemas, com um chat para você mesmo fazer alterações. Toda mudança tem prévia, fica registrada e pode ser desfeita.',
    problema: [
      'Depender de terceiros para trocar uma foto ou um preço.',
      'Site desatualizado em relação ao estoque e à agenda.',
      'Visitante que se interessa, mas não consegue agir ali mesmo.',
    ],
    oQueFaz: [
      { titulo: 'Conectado aos seus sistemas', texto: 'Estoque, catálogo e agenda aparecem no site direto da fonte, sem digitar duas vezes.' },
      { titulo: 'Alterações por conversa', texto: 'Peça "troque o banner da home" e veja a prévia antes de aprovar.' },
      { titulo: 'Tudo versionado', texto: 'Cada mudança fica registrada e pode ser desfeita com um clique.' },
      { titulo: 'Rápido e encontrável', texto: 'Páginas leves, bem estruturadas para o Google e para quem chega pelo celular.' },
    ],
    conexao:
      'O site é a vitrine do que os outros agentes fazem: o agendamento cai na agenda, o lead chega ao atendimento e os números vão para o Dashboard.',
  },
  {
    slug: 'media',
    nome: 'Media',
    parte: 'voz',
    chamada: 'Conteúdo de marketing produzido por agentes.',
    resumo:
      'Posts, textos e vídeos criados a partir do que acontece na sua empresa: produtos que chegam, serviços entregues, novidades da equipe. Você aprova, e o conteúdo sai com a sua voz.',
    problema: [
      'Redes sociais paradas porque ninguém tem tempo.',
      'Conteúdo genérico, que poderia ser de qualquer empresa.',
      'Novidades da operação que nunca viram comunicação.',
    ],
    oQueFaz: [
      { titulo: 'Posts e textos', texto: 'Legendas, artigos e newsletters escritos no tom da sua marca.' },
      { titulo: 'Vídeos curtos', texto: 'Roteiros e cortes para redes sociais a partir do seu material.' },
      { titulo: 'Ligado à operação', texto: 'Chegou um produto no estoque? O agente já prepara o post com foto e descrição.' },
      { titulo: 'Você aprova', texto: 'Nada sai sem o seu ok. O agente sugere, você decide.' },
    ],
    emBreve: ['Publicação automática nas redes, depois da sua aprovação.'],
    conexao:
      'O Media usa os dados que os outros agentes já organizam (estoque, agenda, resultados) para falar do que é real na sua empresa.',
  },
  {
    slug: 'attendants',
    nome: 'Attendants',
    parte: 'conversa',
    chamada: 'Atendimento no WhatsApp que sabe o que acontece na empresa.',
    resumo:
      'Agentes de atendimento integrados ao estoque, à agenda e ao ERP. Respondem clientes, agendam e passam a conversa para a pessoa certa quando é hora de um humano.',
    problema: [
      'WhatsApp respondido à mão, com cliente esperando.',
      'Perguntas repetidas que tomam o dia da equipe.',
      'Contatos fora do horário que se perdem.',
    ],
    oQueFaz: [
      { titulo: 'Responde com informação real', texto: 'Disponibilidade, preços e prazos consultados nos seus sistemas, não inventados.' },
      { titulo: 'Agenda sozinho', texto: 'Marca visitas, test-drives ou reuniões direto na agenda da equipe.' },
      { titulo: 'Passa para a pessoa certa', texto: 'Quando a conversa pede um humano, encaminha com o histórico completo.' },
      { titulo: 'Funciona o dia todo', texto: 'Ninguém fica sem resposta à noite ou no fim de semana.' },
    ],
    conexao:
      'Cada conversa alimenta o Dashboard e aparece no Cockpit: você sabe o que os clientes perguntam, e o que deixou de vender.',
  },
  {
    slug: 'dashboards',
    nome: 'Dashboards',
    parte: 'memória',
    chamada: 'Nunca mais perca seu histórico quando trocar de sistema.',
    resumo:
      'Um painel de gestão que junta seus sistemas num centro único de dados. Tudo é traduzido para um formato padrão, então os indicadores mantêm a mesma curva mesmo quando o ERP muda.',
    problema: [
      'Sistemas que não conversam entre si.',
      'Histórico que se perde a cada troca de ERP.',
      'Indicadores montados à mão, em planilhas, todo mês.',
    ],
    oQueFaz: [
      { titulo: 'Centro único de dados', texto: 'ERP, agenda, atendimento e site reunidos num só lugar.' },
      { titulo: 'Histórico preservado', texto: 'Trocou de sistema? Os dados antigos são traduzidos e continuam vivos.' },
      { titulo: 'Indicadores contínuos', texto: 'Vendas de 2019 e de hoje na mesma régua, sem quebra na curva.' },
      { titulo: 'Pergunte em conversa', texto: '"Como foram as vendas de 2019 comparadas com hoje?" A resposta vem em segundos.' },
    ],
    conexao:
      'O Dashboard é a memória da empresa: é dele que o Cockpit, o Media e os atendentes tiram as respostas.',
  },
  {
    slug: 'cockpit',
    nome: 'Cockpit',
    parte: 'comando',
    chamada: 'Veja, converse, aja.',
    resumo:
      'O centro da cultura agêntica: um só lugar, com login único, onde você vê o que acontece na empresa, conversa sobre isso e coloca seus agentes para agir.',
    problema: [
      'Uma senha e uma tela para cada sistema.',
      'Decisões tomadas sem a visão do todo.',
      'Ferramentas de IA soltas, sem ligação com a operação real.',
    ],
    oQueFaz: [
      { titulo: 'Login único', texto: 'Todos os seus agentes e painéis num só acesso.' },
      { titulo: 'Converse sobre a empresa', texto: 'Pergunte sobre vendas, agenda, atendimento ou estoque, em português, como falaria com um gerente.' },
      { titulo: 'Coloque os agentes para agir', texto: 'Da pergunta à ação: pedir um relatório, ajustar o site, preparar uma campanha.' },
      { titulo: 'Sob medida', texto: 'Ligado aos seus sistemas e aos seus processos, não a um modelo genérico.' },
    ],
    conexao:
      'O Cockpit reúne todos os outros: cada agente novo aparece ali, e a conversa passa a saber mais sobre a sua empresa.',
  },
];

export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug);
