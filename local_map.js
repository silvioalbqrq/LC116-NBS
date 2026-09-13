// Local de incidência do ISS — art. 3º da LC 116/2003 (redação vigente)
// Fontes: LC 157/2016, LC 175/2020, LC 183/2021, LC 218/2025
// Extraído do texto consolidado (Lcp 116.md).
//
// Estrutura:
//   window.LOCAL_RULES  — regras por subitem ("7.02") e por item ("12")
//   window.ART3_ITENS   — relação cruzada item→inciso (ex: item 1 (1.01..1.08) → inciso I)

window.LOCAL_RULES = {
  // ===== Inciso I — serviços do exterior (§1º art.1º) =====
  // Aplica-se ao tomador/intermediário de qualquer serviço que venha do exterior.
  geral: {
    inciso: "caput",
    tipo: "prestador",
    base: "LC 116/2003, art. 3º, caput",
    texto: "O serviço considera-se prestado e o imposto é devido no local do estabelecimento prestador ou, na falta deste, no local do domicílio do prestador.",
    local: "Estabelecimento prestador (ou domicílio do prestador)"
  },
  exterior: {
    inciso: "I",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, I c/c §1º do art. 1º",
    texto: "Serviços provenientes do exterior do País, ou cuja prestação se tenha iniciado no exterior: imposto devido no local do estabelecimento do tomador ou intermediário do serviço, ou, na falta de estabelecimento, onde estiver domiciliado.",
    local: "Estabelecimento do tomador/intermediário"
  },

  // ===== Inciso II =====
  "3.05": {
    inciso: "II",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, II",
    texto: "Serviços de instalação de andaimes, palcos, coberturas e outras estruturas: imposto devido no local da instalação.",
    local: "Local da instalação"
  },

  // ===== Inciso III (LC 218/2025 incluiu 14.14) =====
  "7.02": {
    inciso: "III",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, III (red. LC 218/2025)",
    texto: "Execução, por administração, empreitada ou subempreitada, de obras de construção civil, hidráulicas ou elétricas e de outras obras semelhantes: imposto devido no local da execução da obra.",
    local: "Local da execução da obra"
  },
  "7.19": {
    inciso: "III",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, III (red. LC 218/2025)",
    texto: "Acompanhamento e fiscalização da execução de obras de engenharia, arquitetura e urbanismo: imposto devido no local da execução da obra.",
    local: "Local da execução da obra"
  },
  "14.14": {
    inciso: "III",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, III (incluído pela LC 218/2025)",
    texto: "Guincho intramunicipal, guindaste e içamento de cargas e peças: imposto devido no local da execução da obra.",
    local: "Local da execução"
  },

  // ===== Inciso IV =====
  "7.04": {
    inciso: "IV",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, IV",
    texto: "Demolição: imposto devido no local da demolição.",
    local: "Local da demolição"
  },

  // ===== Inciso V =====
  "7.05": {
    inciso: "V",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, V",
    texto: "Reparação, conservação e reforma de edifícios, estradas, pontes, portos e congêneres (exceto o fornecimento de mercadorias produzidas fora do local): imposto devido no local das edificações em geral.",
    local: "Local das edificações (obra)"
  },

  // ===== Inciso VI =====
  "7.09": {
    inciso: "VI",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, VI",
    texto: "Varrição, coleta, remoção, incineração, tratamento, reciclagem, separação e destinação final de lixo, rejeitos e outros resíduos: imposto devido no local da execução do serviço.",
    local: "Local da execução"
  },

  // ===== Inciso VII =====
  "7.10": {
    inciso: "VII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, VII",
    texto: "Limpeza, manutenção e conservação de vias e logradouros públicos, imóveis, chaminés, piscinas, parques, jardins e congêneres: imposto devido no local da execução.",
    local: "Local da execução"
  },

  // ===== Inciso VIII =====
  "7.11": {
    inciso: "VIII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, VIII",
    texto: "Decoração e jardinagem, corte e poda de árvores: imposto devido no local da execução.",
    local: "Local da execução"
  },

  // ===== Inciso IX =====
  "7.12": {
    inciso: "IX",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, IX",
    texto: "Controle e tratamento do efluente de qualquer natureza e de agentes físicos, químicos e biológicos: imposto devido no local do controle e tratamento.",
    local: "Local do controle/tratamento do efluente"
  },

  // ===== Inciso X e XI — VETADOS =====
  "7.13": { inciso: null, tipo: "prestador", base: "VETADO (incisos X e XI)", texto: "Incisos X e XI foram vetados. Incide a regra geral (caput).", local: "Estabelecimento prestador" },
  "7.14": { inciso: null, tipo: "prestador", base: "VETADO (incisos X e XI)", texto: "Incisos X e XI foram vetados. Incide a regra geral (caput).", local: "Estabelecimento prestador" },
  "7.15": { inciso: null, tipo: "prestador", base: "VETADO (incisos X e XI)", texto: "Incisos X e XI foram vetados. Incide a regra geral (caput).", local: "Estabelecimento prestador" },

  // ===== Inciso XII (red. LC 157/2016) =====
  "7.16": {
    inciso: "XII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XII (red. LC 157/2016)",
    texto: "Florestamento, reflorestamento, semeadura, adubação, reparação de solo, plantio, silagem, colheita, corte, descascamento de árvores, silvicultura, exploração florestal e serviços congêneres: imposto devido no local da execução.",
    local: "Local da execução (florestamento)"
  },

  // ===== Inciso XIII =====
  "7.17": {
    inciso: "XIII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XIII",
    texto: "Escoramento, contenção de encostas e congêneres: imposto devido no local da execução.",
    local: "Local da execução (escoramento)"
  },

  // ===== Inciso XIV =====
  "7.18": {
    inciso: "XIV",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XIV",
    texto: "Limpeza e dragagem de rios, portos, canais, baías, lagos, lagoas, represas, açudes e congêneres: imposto devido no local da execução.",
    local: "Local da execução (limpeza/dragagem)"
  },

  // ===== Inciso XV =====
  "11.01": {
    inciso: "XV",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XV",
    texto: "Guarda e estacionamento de veículos terrestres automotores, de aeronaves e de embarcações: imposto devido no local onde o bem estiver guardado ou estacionado.",
    local: "Local onde o bem está guardado/estacionado"
  },

  // ===== Inciso XVI (red. LC 157/2016) =====
  "11.02": {
    inciso: "XVI",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XVI (red. LC 157/2016)",
    texto: "Vigilância, segurança ou monitoramento de bens, pessoas e semoventes: imposto devido no local dos bens, dos semoventes ou do domicílio das pessoas vigiados, segurados ou monitorados.",
    local: "Local dos bens/semoventes ou domicílio das pessoas monitoradas"
  },

  // ===== Inciso XVII =====
  "11.04": {
    inciso: "XVII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XVII",
    texto: "Guarda-móveis e depósitos, armazenamento, depósito, carga, descarga, arrumação e guarda do bem: imposto devido no local do armazenamento/depósito.",
    local: "Local do armazenamento/guarda do bem"
  },

  // ===== Inciso XVIII — item 12, exceto 12.13 =====
  "12": {
    inciso: "XVIII",
    tipo: "evento",
    base: "LC 116/2003, art. 3º, XVIII",
    exclui: ["12.13"],
    texto: "Serviços de diversão, lazer, entretenimento e congêneres (item 12, exceto 12.13): imposto devido no local da execução do serviço (evento).",
    local: "Local da execução do evento"
  },

  // ===== Inciso XIX (red. LC 157/2016 — todo o item 16) =====
  "16": {
    inciso: "XIX",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XIX (red. LC 157/2016)",
    texto: "Transporte coletivo municipal rodoviário, metroviário, ferroviário e aquaviário (item 16): imposto devido no Município onde está sendo executado o transporte.",
    local: "Município onde executado o transporte"
  },

  // ===== Inciso XX =====
  "17.05": {
    inciso: "XX",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XX",
    texto: "Fornecimento de mão-de-obra, mesmo em caráter temporário, inclusive de empregados ou trabalhadores, avulsos ou temporários, contratados pelo prestador do serviço: imposto devido no local do estabelecimento do tomador da mão-de-obra.",
    local: "Estabelecimento do tomador da mão-de-obra"
  },

  // ===== Inciso XXI =====
  "17.10": {
    inciso: "XXI",
    tipo: "evento",
    base: "LC 116/2003, art. 3º, XXI",
    texto: "Planejamento, organização e administração de feiras, exposições, congressos e congêneres: imposto devido no local da feira, exposição, congresso ou congênere.",
    local: "Local da feira/exposição/congresso"
  },

  // ===== Inciso XXII — item 20 =====
  "20": {
    inciso: "XXII",
    tipo: "prestacao",
    base: "LC 116/2003, art. 3º, XXII",
    texto: "Serviços portuários, aeroportuários, ferroportuários, aeroportos e congestionamento: imposto devido no local do porto, aeroporto, ferroporto, terminal rodoviário, ferroviário ou metroviário.",
    local: "Local do porto/aeroporto/terminal"
  },

  // ===== Inciso XXIII (LC 157/2016) =====
  "4.22": {
    inciso: "XXIII",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XXIII (LC 157/2016)",
    texto: "Planos de medicina de grupo ou individual e convênios para prestação de assistência médica, hospitalar, odontológica e congêneres: imposto devido no domicílio do tomador.",
    local: "Domicílio do tomador"
  },
  "4.23": {
    inciso: "XXIII",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XXIII (LC 157/2016)",
    texto: "Outros planos de saúde que se cumpram através de serviços de terceiros contratados, credenciados, cooperados ou apenas pagos pelo operador: imposto devido no domicílio do tomador.",
    local: "Domicílio do tomador"
  },
  "5.09": {
    inciso: "XXIII",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XXIII (LC 157/2016)",
    texto: "Planos de atendimento e assistência médico-veterinária: imposto devido no domicílio do tomador.",
    local: "Domicílio do tomador"
  },

  // ===== Inciso XXIV (LC 157/2016) =====
  "15.01": {
    inciso: "XXIV",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XXIV (LC 157/2016)",
    texto: "Administração de cartão de crédito ou débito e congêneres: imposto devido no domicílio do tomador.",
    local: "Domicílio do tomador"
  },

  // ===== Inciso XXV (red. LC 175/2020 — retirou 10.04) =====
  "15.09": {
    inciso: "XXV",
    tipo: "tomador",
    base: "LC 116/2003, art. 3º, XXV (red. LC 175/2020)",
    texto: "Arrendamento mercantil (leasing): imposto devido no domicílio do tomador.",
    local: "Domicílio do tomador"
  },

  // ===== § 1º — extensão (item 3.04) =====
  "3.04": {
    inciso: "§ 1º",
    tipo: "proporcional",
    base: "LC 116/2003, art. 3º, § 1º",
    texto: "Locação, sublocação, arrendamento, direito de passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e condutos: devido em cada Município em cujo território haja extensão do objeto.",
    local: "Cada Município com extensão (base proporcional)"
  },

  // ===== § 2º — rodovia (item 22.01) =====
  "22.01": {
    inciso: "§ 2º",
    tipo: "proporcional",
    base: "LC 116/2003, art. 3º, § 2º",
    texto: "Exploração de rodovia mediante cobrança de preço ou pedágio: devido em cada Município em cujo território haja extensão de rodovia explorada.",
    local: "Cada Município com extensão de rodovia"
  }
};

// Inciso I — tomador/intermediário para serviços do exterior.
// Aplica-se a qualquer serviço com origem no exterior (§1º do art.1º).
window.ART3_TITULO = {
  prestador:   { label: "Regra geral", cls: "geral",       icon: "🏢" },
  prestacao:   { label: "Local da prestação", cls: "excecao", icon: "📍" },
  tomador:     { label: "Domicílio do tomador", cls: "tomador", icon: "🏠" },
  evento:      { label: "Local do evento", cls: "excecao", icon: "🎪" },
  proporcional:{ label: "Base proporcional (vários Municípios)", cls: "proporcional", icon: "🧾" }
};

// Índice rápido por chave LC (item.subitem pad 2 dígitos) -> regra.
// Itens de lista (2.01, 4.01...) sem exceção caem na regra geral.
window.getLocalRule = function (item, subitem) {
  const key = item + '.' + String(subitem).padStart(2, '0');
  const keyRaw = item + '.' + subitem;

  if (window.LOCAL_RULES[key]) return window.LOCAL_RULES[key];
  if (window.LOCAL_RULES[keyRaw]) return window.LOCAL_RULES[keyRaw];

  const itemRule = window.LOCAL_RULES[String(item)];
  if (itemRule) {
    const excl = (itemRule.exclui || []).map(function (e) {
      return e === String(item) + '.' + String(subitem) || e === key;
    }).indexOf(true) > -1;
    if (!excl) return itemRule;
  }
  return window.LOCAL_RULES.geral;
};

// Substitui o engine heurístico: agora a correlação é OFICIAL (Anexo VIII).
window.getCorrelacaoNBS = function (item, subitem) {
  const key = item + '.' + String(subitem).padStart(2, '0');
  const keyRaw = item + '.' + subitem;
  if (window.CORRELACAO && window.CORRELACAO[key]) return window.CORRELACAO[key];
  if (window.CORRELACAO && window.CORRELACAO[keyRaw]) return window.CORRELACAO[keyRaw];
  return null;
};