// Correlação LC 116 × NBS — Anexo VIII (IBSCBS) — Resolução/Bases IBSCBS V1.0
// Extraído de AnexoVIII-CorrelacaoItemNBSIndOpCClassTrib_IBSCBS_V1.00.00.md
// cClassTrib: código IBSCBS de 6 dígitos (ex: 000001, 200038, 400001).
// cluster = grupo de códigos NBS que compartilham o mesmo cClassTrib/INDOP do anexo.

window.CORRELACAO = {
  "1.01": {
    descricao: "Análise E Desenvolvimento De Sistemas.",
    id: "1.01",
    clusters: ["1.1502.10.00,1.1502.20.00,1.1502.40.00,1.1502.50.00,1.1502.90.00","1.1503.00.00,1.1504.00.00,1.1505.00.00,1.1507.10.00,1.1507.20.00,1.1507.90.00"],
    nbs: {
      "1.1502.10.00": {
        descricao: "Serviços de projeto, desenvolvimento e instalação de aplicativos e programas não personalizados (não customizados)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1502.20.00": {
        descricao: "Serviços de projeto e desenvolvimento, adaptação e instalação de aplicativos e programas personalizados (customizados)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1502.40.00": {
        descricao: "Serviços de projeto e desenvolvimento de estruturas e conteúdo de bancos de dados",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1502.50.00": {
        descricao: "Serviços de integração de sistemas em tecnologia da informação (TI)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1502.90.00": {
        descricao: "Serviços de projeto e desenvolvimento de aplicativos e programas em tecnologia da informação (TI) não classificados em subposições anteriores",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1503.00.00": {
        descricao: "Serviços de projeto e desenvolvimento de redes em tecnologia da informação (TI)",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1504.00.00": {
        descricao: "Serviços de projeto e desenvolvimento de topografias de circuitos integrados",
      },
      "1.1505.00.00": {
        descricao: "Serviços de projeto de circuitos integrados",
      },
      "1.1507.10.00": {
        descricao: "Serviços de gerenciamento de redes em tecnologia da informação (TI)",
      },
      "1.1507.20.00": {
        descricao: "Serviços de gerenciamento de sistemas computacionais",
      },
      "1.1507.90.00": {
        descricao: "Serviços de gerenciamento de infraestrutura em tecnologia da informação (TI) não classificados em subposições anteriores",
      },
    },
  },
  "1.02": {
    descricao: "Programação.",
    id: "1.02",
    clusters: ["1.1502.10.00,1.1502.20.00,1.1502.90.00"],
    nbs: {
      "1.1502.10.00": {
        descricao: "Serviços de projeto, desenvolvimento e instalação de aplicativos e programas não personalizados (não customizados)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1502.20.00": {
        descricao: "Serviços de projeto e desenvolvimento, adaptação e instalação de aplicativos e programas personalizados (customizados)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1502.90.00": {
        descricao: "Serviços de projeto e desenvolvimento de aplicativos e programas em tecnologia da informação (TI) não classificados em subposições anteriores",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
    },
  },
  "1.03": {
    descricao: "Processamento, Armazenamento Ou Hospedagem De Dados, Textos, Imagens, Vídeos, Páginas Eletrônicas, Aplicativos E Sistemas De Informação, Entre Outros Formatos, E Congêneres. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "1.03",
    clusters: ["1.1506.10.00,1.1506.21.00,1.1506.22.00,1.1506.23.00,1.1506.29.00,1.1506.90.00,1.1509.00.00"],
    nbs: {
      "1.1506.10.00": {
        descricao: "Serviços de hospedagem de sítios eletrônicos na rede mundial de computadores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1506.21.00": {
        descricao: "Serviços de hospedagem de aplicativos e programas software como serviço (SaaS)",
      },
      "1.1506.22.00": {
        descricao: "Serviços de fornecimento de infraestrutura como serviço (IaaS)",
      },
      "1.1506.23.00": {
        descricao: "Serviços de fornecimento de plataformas como serviço (PaaS)",
      },
      "1.1506.29.00": {
        descricao: "Serviços de hospedagem de aplicativos e programas não classificados em subposições anteriores",
      },
      "1.1506.90.00": {
        descricao: "Serviços de hospedagem e de disponibilização de infraestrutura em tecnologia da informação (TI) não classificados em subposições anteriores",
      },
      "1.1509.00.00": {
        descricao: "Serviços de processamento de dados",
      },
    },
  },
  "1.04": {
    descricao: "Elaboração De Programas De Computadores, Inclusive De Jogos Eletrônicos, Independentemente Da Arquitetura Construtiva Da Máquina Em Que O Programa Será Executado, Incluindo Tablets, Smartphones E Congêneres. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "1.04",
    clusters: ["1.1502.10.00,1.1502.20.00,1.1502.90.00"],
    nbs: {
      "1.1502.10.00": {
        descricao: "Serviços de projeto, desenvolvimento e instalação de aplicativos e programas não personalizados (não customizados)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1502.20.00": {
        descricao: "Serviços de projeto e desenvolvimento, adaptação e instalação de aplicativos e programas personalizados (customizados)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1502.90.00": {
        descricao: "Serviços de projeto e desenvolvimento de aplicativos e programas em tecnologia da informação (TI) não classificados em subposições anteriores",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
    },
  },
  "1.05": {
    descricao: "Licenciamento Ou Cessão De Direito De Uso De Programas De Computação.",
    id: "1.05",
    clusters: ["1.1103.21.00,1.1103.22.00,1.1103.23.00,1.1103.29.00,1.1106.20.00,1.1107.20.00"],
    nbs: {
      "1.1103.21.00": {
        descricao: "Licenciamento de direitos de produção, distribuição ou comercialização de programas de computador (software)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100501.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1103.22.00": {
        descricao: "Licenciamento de direitos de uso de programas de computador (software)",
      },
      "1.1103.23.00": {
        descricao: "Licenciamento de direitos sobre bancos de dados",
      },
      "1.1103.29.00": {
        descricao: "Licenciamento de direitos sobre programas de computador (software) e bancos de dados não classificado em subposições anteriores",
      },
      "1.1106.20.00": {
        descricao: "Cessão temporária de direitos sobre programas de computador (software)",
      },
      "1.1107.20.00": {
        descricao: "Cessão definitiva de direitos sobre programas de computador (software)",
      },
    },
  },
  "1.06": {
    descricao: "Assessoria E Consultoria Em Informática.",
    id: "1.06",
    clusters: ["1.1501.10.00,1.1501.20.00","1.1507.10.00,1.1507.20.00,1.1507.90.00,1.1510.00.00"],
    nbs: {
      "1.1501.10.00": {
        descricao: "Serviços de consultoria em tecnologia da informação (TI)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1501.20.00": {
        descricao: "Serviços de segurança em tecnologia da informação (TI)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1507.10.00": {
        descricao: "Serviços de gerenciamento de redes em tecnologia da informação (TI)",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1507.20.00": {
        descricao: "Serviços de gerenciamento de sistemas computacionais",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1507.90.00": {
        descricao: "Serviços de gerenciamento de infraestrutura em tecnologia da informação (TI) não classificados em subposições anteriores",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.1510.00.00": {
        descricao: "Serviços de tecnologia da informação (TI) não classificados em subposições anteriores",
        cClassTrib: {
          "200043": "Fornecimento à administração pública dos serviços e dos bens relativos à soberania (Anexo XI)",
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
    },
  },
  "1.07": {
    descricao: "Suporte Técnico Em Informática, Inclusive Instalação, Configuração E Manutenção De Programas De Computação E Bancos De Dados.",
    id: "1.07",
    clusters: ["1.1501.30.00,1.1508.00.00,1.1502.10.00,1.1502.20.00"],
    nbs: {
      "1.1501.30.00": {
        descricao: "Serviços de suporte em tecnologia da informação (TI)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1502.10.00": {
        descricao: "Serviços de projeto, desenvolvimento e instalação de aplicativos e programas não personalizados (não customizados)",
      },
      "1.1502.20.00": {
        descricao: "Serviços de projeto e desenvolvimento, adaptação e instalação de aplicativos e programas personalizados (customizados)",
      },
      "1.1508.00.00": {
        descricao: "Serviços de manutenção de aplicativos e programas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "1.08": {
    descricao: "Planejamento, Confecção, Manutenção E Atualização De Páginas Eletrônicas.",
    id: "1.08",
    clusters: ["1.1502.30.00"],
    nbs: {
      "1.1502.30.00": {
        descricao: "Serviços de projeto e desenvolvimento de estruturas e conteúdo de páginas eletrônicas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200040": "Fornecimento de serviços de comunicação institucional à administração pública",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "1.09": {
    descricao: "Disponibilização, Sem Cessão Definitiva, De Conteúdos De Áudio, Vídeo, Imagem E Texto Por Meio Da Internet, Respeitada A Imunidade De Livros, Jornais E Periódicos (Exceto A Distribuição De Conteúdos Pelas Prestadoras De Serviço De Acesso Condicionado, De Que Trata A Lei No 12.485, De 12 De Setembro De 2011, Sujeita Ao ICMS). (Incluído Pela Lei Complementar Nº 157, De 2016)",
    id: "1.09",
    clusters: ["1.1703.10.00,1.1703.21.00,1.1703.22.00,1.1703.31.00,1.1703.32.00,1.1703.91.00,1.1703.92.00,1.1703.99.00"],
    nbs: {
      "1.1703.10.00": {
        descricao: "Serviços de oferta de livros, jornais, periódicos, diretórios e malas diretas de acesso imediato (on-line)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1703.21.00": {
        descricao: "Serviços de oferta de áudio para download",
      },
      "1.1703.22.00": {
        descricao: "Serviços de oferta de áudio de conteúdo contínuo (streaming)",
      },
      "1.1703.31.00": {
        descricao: "Serviços de oferta de arquivos contendo filmes e vídeos para download",
      },
      "1.1703.32.00": {
        descricao: "Serviços de oferta de filmes e vídeos de conteúdo contínuo (streaming)",
      },
      "1.1703.91.00": {
        descricao: "Serviços de oferta de jogos de acesso imediato (on-line)",
      },
      "1.1703.92.00": {
        descricao: "Serviços de oferta de conteúdo de portais de busca na rede mundial de computadores",
      },
      "1.1703.99.00": {
        descricao: "Serviços de oferta de outros conteúdos de acesso imediato (on-line) não classificados em subposições anteriores",
      },
    },
  },
  "2.01": {
    descricao: "Serviços De Pesquisas E Desenvolvimento De Qualquer Natureza.",
    id: "2.01",
    clusters: ["1.1201.11.00","1.1201.12.00","1.1201.19.00","1.1201.20.00","1.1201.31.00","1.1201.32.00","1.1201.33.00","1.1201.34.00","1.1201.39.00","1.1201.40.00","1.1201.50.00","1.1201.90.00","1.1202.10.00","1.1202.20.00","1.1202.30.00","1.1202.40.00","1.1202.90.00","1.1203.00.00"],
    nbs: {
      "1.1201.11.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências físicas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.12.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em química e biologia",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.19.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências não classificadas em subposições anteriores",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.20.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em biotecnologia",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.31.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em Tecnologia da Informação e Comunicação (TIC)",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.32.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em nanotecnologia",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.33.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em engenharia e tecnologia nucleares",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.34.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em engenharia e tecnologia em micro-ondas de potência",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.39.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em engenharia e tecnologia não classificados em subposições anteriores",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.40.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências médicas, odontológicas e farmacêuticas",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.50.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências agrárias",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1201.90.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências, engenharia e tecnologia não classificados em subposições anteriores",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1202.10.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em psicologia",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1202.20.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências econômicas",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1202.30.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em direito",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1202.40.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em línguas e literatura",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1202.90.00": {
        descricao: "Serviços de pesquisa e desenvolvimento em ciências sociais e humanidades não classificadas em subposições anteriores",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1203.00.00": {
        descricao: "Serviços de pesquisa e desenvolvimento interdisciplinar",
        cClassTrib: {
          "200016": "Prestação de serviços de pesquisa e desenvolvimento por Instituição Científica, Tecnológica e de Inovação (ICT)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "3.02": {
    descricao: "Cessão De Direito De Uso De Marcas E De Sinais De Propaganda.",
    id: "3.02",
    clusters: ["1.1103.33.00,1.1104.20.00,1.1106.33.00,1.1107.33.00,1.1108.20.00"],
    nbs: {
      "1.1103.33.00": {
        descricao: "Licenciamento de direitos de autor de obras publicitárias",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100501.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1104.20.00": {
        descricao: "Licenciamento de direitos sobre marcas",
      },
      "1.1106.33.00": {
        descricao: "Cessão temporária de direitos de autor de obras publicitárias",
      },
      "1.1107.33.00": {
        descricao: "Cessão definitiva de direitos de obras publicitárias",
      },
      "1.1108.20.00": {
        descricao: "Cessão definitiva de direitos sobre marcas",
      },
    },
  },
  "3.03": {
    descricao: "Exploração De Salões De Festas, Centro De Convenções, Escritórios Virtuais, Stands, Quadras Esportivas, Estádios, Ginásios, Auditórios, Casas De Espetáculos, Parques De Diversões, Canchas E Congêneres, Para Realização De Eventos Ou Negócios De Qualquer Natureza.",
    id: "3.03",
    clusters: ["1.1805.31.00,1.1806.61.00,1.1806.62.00,1.1806.63.00,1.2508.00.00"],
    nbs: {
      "1.1805.31.00": {
        descricao: "Serviços de reservas para centros de convenções, auditórios e salas de exposições",
        indops: [
          { codigo: "20101.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200027": "Operações de locação, cessão onerosa e arrendamento de bens imóveis",
        },
      },
      "1.1806.61.00": {
        descricao: "Serviços de assistência e organização de convenções",
      },
      "1.1806.62.00": {
        descricao: "Serviços de assistência e organização de feiras de negócios",
      },
      "1.1806.63.00": {
        descricao: "Serviços de assistência e organização de exposições e outros eventos",
      },
      "1.2508.00.00": {
        descricao: "Serviços recreativos, culturais e desportivos não classificados em posições anteriores",
      },
    },
  },
  "3.04": {
    descricao: "Locação, Sublocação, Arrendamento, Direito De Passagem Ou Permissão De Uso, Compartilhado Ou Não, De Ferrovia, Rodovia, Postes, Cabos, Dutos E Condutos De Qualquer Natureza.",
    id: "3.04",
    clusters: ["1.1001.12.10"],
    nbs: {
      "1.1001.12.10": {
        descricao: "Serviços de administração e locação, sublocação, arrendamento, direito de passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e condutos de qualquer natureza",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200027": "Operações de locação, cessão onerosa e arrendamento de bens imóveis",
        },
      },
    },
  },
  "3.05": {
    descricao: "Cessão De Andaimes, Palcos, Coberturas E Outras Estruturas De Uso Temporário.",
    id: "3.05",
    clusters: ["1.0105.70.00,1.0105.50.00"],
    nbs: {
      "1.0105.50.00": {
        descricao: "Serviços de montagem de estruturas de aço",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0105.70.00": {
        descricao: "Serviços de andaimes",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "4.01": {
    descricao: "Medicina E Biomedicina.",
    id: "4.01",
    clusters: ["1.2301.22.00"],
    nbs: {
      "1.2301.22.00": {
        descricao: "Serviços médicos especializados",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200029": "Fornecimento dos serviços de saúde humana (Anexo III)",
        },
      },
    },
  },
  "4.02": {
    descricao: "Análises Clínicas, Patologia, Eletricidade Médica, Radioterapia, Quimioterapia, Ultra-Sonografia, Ressonância Magnética, Radiologia, Tomografia E Congêneres.",
    id: "4.02",
    clusters: ["1.2301.93.00,1.2301.94.00"],
    nbs: {
      "1.2301.93.00": {
        descricao: "Serviços laboratoriais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
      "1.2301.94.00": {
        descricao: "Serviços de diagnóstico por imagem",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "4.03": {
    descricao: "Hospitais, Clínicas, Laboratórios, Sanatórios, Manicômios, Casas De Saúde, Prontos-Socorros, Ambulatórios E Congêneres.",
    id: "4.03",
    clusters: ["1.2301.11.00,1.2301.12.00,1.2301.13.00,1.2301.14.00,1.2301.15.00,1.2301.19.00,1.2301.21.00,1.2301.93.00"],
    nbs: {
      "1.2301.11.00": {
        descricao: "Serviços cirúrgicos",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.12.00": {
        descricao: "Serviços ginecológicos e obstétricos",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.13.00": {
        descricao: "Serviços psiquiátricos",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.14.00": {
        descricao: "Serviços prestados em Unidades de Terapia Intensiva",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.15.00": {
        descricao: "Serviços de atendimento de urgência",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.19.00": {
        descricao: "Serviços hospitalares não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.21.00": {
        descricao: "Serviços de clínica médica",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.93.00": {
        descricao: "Serviços laboratoriais",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.04": {
    descricao: "Instrumentação Cirúrgica.",
    id: "4.04",
    clusters: ["1.2301.11.00"],
    nbs: {
      "1.2301.11.00": {
        descricao: "Serviços cirúrgicos",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.05": {
    descricao: "Acupuntura.",
    id: "4.05",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.06": {
    descricao: "Enfermagem, Inclusive Serviços Auxiliares.",
    id: "4.06",
    clusters: ["1.2301.91.00,1.2301.97.00"],
    nbs: {
      "1.2301.91.00": {
        descricao: "Serviços de enfermagem",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.97.00": {
        descricao: "Serviços de assistência ao parto e pós-parto",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.07": {
    descricao: "Serviços farmacêuticos",
    id: "4.07",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "4.08": {
    descricao: "Terapia Ocupacional, Fisioterapia E Fonoaudiologia.",
    id: "4.08",
    clusters: ["1.2301.92.00,1.2301.99.00"],
    nbs: {
      "1.2301.92.00": {
        descricao: "Serviços de fisioterapia",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.09": {
    descricao: "Terapias De Qualquer Espécie Destinadas Ao Tratamento Físico, Orgânico E Mental.",
    id: "4.09",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.10": {
    descricao: "Nutrição.",
    id: "4.10",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "4.11": {
    descricao: "Obstetrícia.",
    id: "4.11",
    clusters: ["1.2301.12.00,1.2301.97.00"],
    nbs: {
      "1.2301.12.00": {
        descricao: "Serviços ginecológicos e obstétricos",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2301.97.00": {
        descricao: "Serviços de assistência ao parto e pós-parto",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.12": {
    descricao: "Odontologia.",
    id: "4.12",
    clusters: ["1.2301.23.00"],
    nbs: {
      "1.2301.23.00": {
        descricao: "Serviços odontológicos",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.13": {
    descricao: "Ortóptica.",
    id: "4.13",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.14": {
    descricao: "Próteses Sob Encomenda.",
    id: "4.14",
    clusters: ["1.2301.99.00"],
    nbs: {
      "1.2301.99.00": {
        descricao: "Outros serviços de saúde humana não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "4.15": {
    descricao: "Psicanálise.",
    id: "4.15",
    clusters: ["1.2301.22.00"],
    nbs: {
      "1.2301.22.00": {
        descricao: "Serviços médicos especializados",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.16": {
    descricao: "Psicologia.",
    id: "4.16",
    clusters: ["1.2301.98.00"],
    nbs: {
      "1.2301.98.00": {
        descricao: "Serviços de psicologia",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "4.17": {
    descricao: "Casas De Repouso E De Recuperação, Creches, Asilos E Congêneres.",
    id: "4.17",
    clusters: ["1.2201.11.00,1.2302.10.00,1.2302.21.00,1.2302.22.00,1.2302.23.00,1.2303.00.00"],
    nbs: {
      "1.2201.11.00": {
        descricao: "Serviços de creche ou entidade equivalente",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
        ],
      },
      "1.2302.10.00": {
        descricao: "Serviços de cuidado em saúde em unidades de acolhimento",
      },
      "1.2302.21.00": {
        descricao: "Serviços de assistência a idosos em unidades de acolhimento",
      },
      "1.2302.22.00": {
        descricao: "Serviços de assistência a crianças e adolescentes com deficiência em unidades de acolhimento",
      },
      "1.2302.23.00": {
        descricao: "Serviços de assistência a adultos com deficiência em unidades de acolhimento",
      },
      "1.2303.00.00": {
        descricao: "Serviços de assistência social com acomodação",
      },
    },
  },
  "4.18": {
    descricao: "Inseminação Artificial, Fertilização In Vitro E Congêneres.",
    id: "4.18",
    clusters: ["1.2301.21.00"],
    nbs: {
      "1.2301.21.00": {
        descricao: "Serviços de clínica médica",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.19": {
    descricao: "Bancos De Sangue, Leite, Pele, Olhos, Óvulos, Sêmen E Congêneres.",
    id: "4.19",
    clusters: ["1.2301.95.00"],
    nbs: {
      "1.2301.95.00": {
        descricao: "Serviços de bancos de material biológico humano",
        indops: [
          { codigo: "301001.0", local: "local da prestação" },
        ],
      },
    },
  },
  "4.20": {
    descricao: "Coleta De Sangue, Leite, Tecidos, Sêmen, Órgãos E Materiais Biológicos De Qualquer Espécie.",
    id: "4.20",
    clusters: ["1.2301.95.00"],
    nbs: {
      "1.2301.95.00": {
        descricao: "Serviços de bancos de material biológico humano",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.21": {
    descricao: "Unidade De Atendimento, Assistência Ou Tratamento Móvel E Congêneres.",
    id: "4.21",
    clusters: ["1.2301.96.00"],
    nbs: {
      "1.2301.96.00": {
        descricao: "Serviços de ambulância",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "4.22": {
    descricao: "Planos De Medicina De Grupo Ou Individual E Convênios Para Prestação De Assistência Médica, Hospitalar, Odontológica E Congêneres.",
    id: "4.22",
    clusters: ["1.0910.10.00,1.0910.90.00"],
    nbs: {
      "1.0910.10.00": {
        descricao: "Serviços de planos privados de assistência à saúde",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "011002": "Planos de assistência à saúde",
        },
      },
      "1.0910.90.00": {
        descricao: "Serviços de planos privados de assistência à saúde e serviços relacionados não classificados em subposições anteriores",
      },
    },
  },
  "4.23": {
    descricao: "Outros Planos De Saúde Que Se Cumpram Através De Serviços De Terceiros Contratados, Credenciados, Cooperados Ou Apenas Pagos Pelo Operador Do Plano Mediante Indicação Do Beneficiário.",
    id: "4.23",
    clusters: ["1.0910.10.00,1.0910.90.00"],
    nbs: {
      "1.0910.10.00": {
        descricao: "Serviços de planos privados de assistência à saúde",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "011002": "Planos de assistência à saúde",
        },
      },
      "1.0910.90.00": {
        descricao: "Serviços de planos privados de assistência à saúde e serviços relacionados não classificados em subposições anteriores",
      },
    },
  },
  "5.01": {
    descricao: "Medicina Veterinária E Zootecnia.",
    id: "5.01",
    clusters: ["1.1405.12.00","1.1405.22.00","1.1405.90.00"],
    nbs: {
      "1.1405.12.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais domésticos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1405.22.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais de corte",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
      "1.1405.90.00": {
        descricao: "Serviços veterinários não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
    },
  },
  "5.02": {
    descricao: "Hospitais, Clínicas, Ambulatórios, Prontos-Socorros E Congêneres, Na Área Veterinária.",
    id: "5.02",
    clusters: ["1.1405.11.00,1.1405.12.00","1.1405.21.00,1.1405.22.00"],
    nbs: {
      "1.1405.11.00": {
        descricao: "Serviços hospitalares, com ou sem internação, para animais domésticos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1405.12.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais domésticos",
      },
      "1.1405.21.00": {
        descricao: "Serviços hospitalares, com ou sem internação, para animais de corte",
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
      "1.1405.22.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais de corte",
      },
    },
  },
  "5.03": {
    descricao: "Laboratórios De Análise Na Área Veterinária.",
    id: "5.03",
    clusters: ["1.1405.90.00"],
    nbs: {
      "1.1405.90.00": {
        descricao: "Serviços veterinários não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "5.04": {
    descricao: "Inseminação Artificial, Fertilização In Vitro E Congêneres.",
    id: "5.04",
    clusters: ["1.1405.90.00"],
    nbs: {
      "1.1405.90.00": {
        descricao: "Serviços veterinários não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "5.05": {
    descricao: "Bancos De Sangue E De Órgãos E Congêneres.",
    id: "5.05",
    clusters: ["1.1405.40.00"],
    nbs: {
      "1.1405.40.00": {
        descricao: "Serviços de bancos de órgãos, sangue, sêmen, tecidos, óvulos e outros materiais biológicos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "5.06": {
    descricao: "Coleta De Sangue, Leite, Tecidos, Sêmen, Órgãos E Materiais Biológicos De Qualquer Espécie.",
    id: "5.06",
    clusters: ["1.1405.40.00"],
    nbs: {
      "1.1405.40.00": {
        descricao: "Serviços de bancos de órgãos, sangue, sêmen, tecidos, óvulos e outros materiais biológicos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "5.07": {
    descricao: "Unidade De Atendimento, Assistência Ou Tratamento Móvel E Congêneres.",
    id: "5.07",
    clusters: ["1.1405.12.00","1.1405.22.00"],
    nbs: {
      "1.1405.12.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais domésticos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1405.22.00": {
        descricao: "Serviços de atendimento, assistência ou tratamento para animais de corte",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
    },
  },
  "5.08": {
    descricao: "Guarda, Tratamento, Amestramento, Embelezamento, Alojamento E Congêneres.",
    id: "5.08",
    clusters: ["1.1405.60.00"],
    nbs: {
      "1.1405.60.00": {
        descricao: "Serviços de guarda, adestramento, embelezamento e alojamento",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "5.09": {
    descricao: "Planos De Atendimento E Assistência Médico-Veterinária.",
    id: "5.09",
    clusters: ["1.1405.50.00"],
    nbs: {
      "1.1405.50.00": {
        descricao: "Planos de atendimento e assistência médico-veterinária",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "011005": "Planos de assistência à saúde de animais domésticos",
        },
      },
    },
  },
  "6.01": {
    descricao: "Barbearia, Cabeleireiros, Manicuros, Pedicuros E Congêneres.",
    id: "6.01",
    clusters: ["1.2602.10.00,1.2602.20.00"],
    nbs: {
      "1.2602.10.00": {
        descricao: "Serviços de cabeleireiros e barbeiros",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2602.20.00": {
        descricao: "Serviços de manicure, pedicure e tratamento cosmético",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "6.02": {
    descricao: "Esteticistas, Tratamento De Pele, Depilação E Congêneres.",
    id: "6.02",
    clusters: ["1.2602.20.00,1.2602.30.00,1.2602.90.00"],
    nbs: {
      "1.2602.20.00": {
        descricao: "Serviços de manicure, pedicure e tratamento cosmético",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2602.30.00": {
        descricao: "Serviços de bem-estar físico",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2602.90.00": {
        descricao: "Serviços de tratamento de beleza e bem-estar físico não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "6.03": {
    descricao: "Banhos, Duchas, Sauna, Massagens E Congêneres.",
    id: "6.03",
    clusters: ["1.2602.30.00"],
    nbs: {
      "1.2602.30.00": {
        descricao: "Serviços de bem-estar físico",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "6.04": {
    descricao: "Ginástica, Dança, Esportes, Natação, Artes Marciais E Demais Atividades Físicas.",
    id: "6.04",
    clusters: ["1.2205.12.00","1.2505.90.00"],
    nbs: {
      "1.2205.12.00": {
        descricao: "Serviços de educação desportiva e recreacional",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200041": "Fornecimento de serviço de educação desportiva (art. 141. I)",
        },
      },
      "1.2505.90.00": {
        descricao: "Serviços desportivos e recreacionais desportivos não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "6.05": {
    descricao: "Centros De Emagrecimento, Spa E Congêneres.",
    id: "6.05",
    clusters: ["1.2602.30.00,1.2602.90.00"],
    nbs: {
      "1.2602.30.00": {
        descricao: "Serviços de bem-estar físico",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2602.90.00": {
        descricao: "Serviços de tratamento de beleza e bem-estar físico não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "6.06": {
    descricao: "Aplicação De Tatuagens, Piercings E Congêneres.",
    id: "6.06",
    clusters: ["1.2602.90.00"],
    nbs: {
      "1.2602.90.00": {
        descricao: "Serviços de tratamento de beleza e bem-estar físico não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.01": {
    descricao: "Engenharia, Agronomia, Agrimensura, Arquitetura, Geologia, Urbanismo, Paisagismo E Congêneres.",
    id: "7.01",
    clusters: ["1.1402.11.00,1.1402.12.00,1.1402.13.00,1.1402.14.00,1.1402.21.00,1.1402.22.00","1.1402.31.00,1.1402.32.00","1.1402.90.00","1.1403.10.00","1.1403.21.10,1.1403.21.20,1.1403.22.11,1.1403.22.12,1.1403.22.13,1.1403.22.14,1.1403.22.21,1.1403.22.22,1.1403.22.23,1.1403.22.90,1.1403.23.00,1.1403.24.00,1.1403.25.00,1.1403.26.00,1.1403.27.00","1.1403.29.00","1.1403.30.00,1.1403.90.00","1.1404.11.00,1.1404.12.00,1.1404.13.00,1.1404.14.00,1.1404.19.00"],
    nbs: {
      "1.1402.11.00": {
        descricao: "Serviços de consultoria em arquitetura",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1402.12.00": {
        descricao: "Serviços de arquitetura para projetos de construções residenciais",
      },
      "1.1402.13.00": {
        descricao: "Serviços de arquitetura para projetos de construções não residenciais",
      },
      "1.1402.14.00": {
        descricao: "Serviços de arquitetura para restauração de prédios históricos",
      },
      "1.1402.21.00": {
        descricao: "Serviços de planejamento urbano",
      },
      "1.1402.22.00": {
        descricao: "Serviços de planejamento de áreas rurais",
      },
      "1.1402.31.00": {
        descricao: "Serviços de consultoria em paisagismo",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1402.32.00": {
        descricao: "Serviços de paisagismo, exceto consultoria",
      },
      "1.1402.90.00": {
        descricao: "Serviços de arquitetura, de planejamento urbano e de áreas rurais e de paisagismo não classificados em subposições anteriores",
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.10.00": {
        descricao: "Serviços de consultoria em engenharia",
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
      "1.1403.21.10": {
        descricao: "Serviços de engenharia para projetos de construção residencial",
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.21.20": {
        descricao: "Serviços de engenharia para projetos de construção não residencial",
      },
      "1.1403.22.11": {
        descricao: "Serviços de engenharia para projetos de exploração de minerais",
      },
      "1.1403.22.12": {
        descricao: "Serviços de engenharia para projetos de exploração de petróleo e gás",
      },
      "1.1403.22.13": {
        descricao: "Serviços de engenharia para projetos de refino de petróleo e petroquímica",
      },
      "1.1403.22.14": {
        descricao: "Serviços de engenharia para projetos de unidades de produção de biocombustíveis",
      },
      "1.1403.22.21": {
        descricao: "Serviços de engenharia para projetos de veículos terrestres",
      },
      "1.1403.22.22": {
        descricao: "Serviços de engenharia para projetos de embarcações",
      },
      "1.1403.22.23": {
        descricao: "Serviços de engenharia para projetos de veículos aéreos e aeroespaciais",
      },
      "1.1403.22.90": {
        descricao: "Serviços de engenharia para outros projetos industriais e de fabricação, exceto para projetos de energia",
      },
      "1.1403.23.00": {
        descricao: "Serviços de engenharia para projetos de infraestrutura de transportes",
      },
      "1.1403.24.00": {
        descricao: "Serviços de engenharia para projetos de energia",
      },
      "1.1403.25.00": {
        descricao: "Serviços de engenharia para projetos de telecomunicações, radiodifusão e televisão",
      },
      "1.1403.26.00": {
        descricao: "Serviços de engenharia para projetos de gerenciamento de resíduos (perigosos e não perigosos)",
      },
      "1.1403.27.00": {
        descricao: "Serviços de engenharia para projetos de distribuição de água e rede de esgoto",
      },
      "1.1403.29.00": {
        descricao: "Serviços de engenharia para outros projetos",
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
      "1.1403.30.00": {
        descricao: "Serviços de gerenciamento de projetos de construção",
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.90.00": {
        descricao: "Serviços de engenharia não classificados em subposições anteriores",
      },
      "1.1404.11.00": {
        descricao: "Serviços de consultoria geológica e geofísica",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1404.12.00": {
        descricao: "Serviços geofísicos",
      },
      "1.1404.13.00": {
        descricao: "Serviços geoquímicos",
      },
      "1.1404.14.00": {
        descricao: "Serviços de informações para avaliação e exploração de recursos naturais",
      },
      "1.1404.19.00": {
        descricao: "Serviços geológicos, geofísicos e outros de prospecção não classificados em subposições anteriores",
      },
    },
  },
  "7.02": {
    descricao: "Execução, Por Administração, Empreitada Ou Subempreitada, De Obras De Construção Civil, Hidráulica Ou Elétrica E De Outras Obras Semelhantes, Inclusive Sondagem, Perfuração De Poços, Escavação, Drenagem E Irrigação, Terraplanagem, Pavimentação, Concretagem E A Instalação E Montagem De Produtos, Peças E Equipamentos (Exceto O Fornecimento De Mercadorias Produzidas Pelo Prestador De Serviços Fora Do Local Da Prestação Dos Serviços, Que Fica Sujeito Ao ICMS).",
    id: "7.02",
    clusters: ["1.0101.11.00","1.0101.12.00","1.0101.21.00","1.0101.22.00","1.0101.29.00","1.0101.30.00","1.0102.11.00","1.0102.12.00","1.0102.13.00","1.0102.20.00","1.0102.31.00","1.0102.32.00","1.0102.33.00","1.0102.34.00","1.0102.35.10","1.0102.35.20","1.0102.35.30","1.0102.41.10,1.0102.41.20,1.0102.41.90,1.0102.42.10,1.0102.42.20","1.0102.51.00","1.0102.52.10","1.0102.52.20","1.0102.53.10","1.0102.53.20","1.0102.61.00","1.0102.69.00","1.0102.70.00","1.0102.80.00","1.0102.90.00","1.0103.20.00","1.0103.30.00","1.0103.41.00","1.0103.42.00","1.0104.00.00","1.0105.11.00","1.0105.12.00","1.0105.21.00","1.0105.22.00","1.0105.30.00","1.0105.40.00","1.0105.50.00","1.0105.60.00","1.0105.90.00","1.0106.11.00","1.0106.19.00","1.0106.21.00","1.0106.22.00","1.0106.60.00","1.0107.30.00","1.0107.40.00","1.0106.32.00","1.0106.40.00"],
    nbs: {
      "1.0101.11.00": {
        descricao: "Serviços de construção de edificações residenciais de um e dois pavimentos",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.12.00": {
        descricao: "Serviços de construção de edificações residenciais com mais de dois pavimentos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.21.00": {
        descricao: "Serviços de construção de edificações industriais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.22.00": {
        descricao: "Serviços de construção de edificações comerciais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.29.00": {
        descricao: "Serviços de construção de edificações não residenciais não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.30.00": {
        descricao: "Serviços de construção de edificações de uso misto (residencial e não residencial)",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.11.00": {
        descricao: "Serviços de construção de autoestradas (exceto autoestradas elevadas), ruas e estradas",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.12.00": {
        descricao: "Serviços de construção de ferrovias",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.13.00": {
        descricao: "Serviços de construção de pistas de pouso e decolagem em aeroportos e de infraestrutura aeroportuária",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.20.00": {
        descricao: "Serviços de construção de pontes, autoestradas elevadas e túneis",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.31.00": {
        descricao: "Serviços de construção de infraestrutura de proteção e acesso aquaviário",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.32.00": {
        descricao: "Serviços de construção de infraestrutura de acostagem aquaviária",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.33.00": {
        descricao: "Serviços de construção de infraestrutura terrestre e de obras de engenharia afins nos portos",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.34.00": {
        descricao: "Serviços de construção de barragens",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.10": {
        descricao: "Serviços de construção de adutoras em conduto livre",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.20": {
        descricao: "Serviços de construção de sistemas de irrigação",
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.30": {
        descricao: "Serviços de construção relacionada ao controle dos cursos de água, inclusive canalização",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.41.10": {
        descricao: "Serviços de construção de dutos de longo curso para o transporte de petróleo, seus derivados, e gás",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.41.20": {
        descricao: "Serviços de construção de dutos de longo curso para o transporte e escoamento de águas",
      },
      "1.0102.41.90": {
        descricao: "Serviços de construção de dutos de longo curso não classificados em subposições anteriores",
      },
      "1.0102.42.10": {
        descricao: "Serviços de construção de linhas de comunicação de longo curso",
      },
      "1.0102.42.20": {
        descricao: "Serviços de construção de linhas de transmissão de alta tensão",
      },
      "1.0102.51.00": {
        descricao: "Serviços de construção de dutos locais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.52.10": {
        descricao: "Serviços de construção de linhas locais de comunicação",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.52.20": {
        descricao: "Serviços de construção de linhas locais de transmissão de baixa e média tensão",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.53.10": {
        descricao: "Serviços de construção de sistemas de esgotos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.53.20": {
        descricao: "Serviços de construção de sistemas de estações para elevação, tratamento e purificação de água",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.61.00": {
        descricao: "Serviços de construção de usinas de geração de energia",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.69.00": {
        descricao: "Serviços de construção de instalações industriais não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.70.00": {
        descricao: "Serviços de construção de minas e suas unidades industriais",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.80.00": {
        descricao: "Serviços de construção de instalações para recreação e atividades desportivas ao ar livre",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.90.00": {
        descricao: "Serviços de construção de obras de engenharia civil não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0103.20.00": {
        descricao: "Serviços de preparação de terrenos e de canteiros de obras",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0103.30.00": {
        descricao: "Serviços de escavação e remoção de terra",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0103.41.00": {
        descricao: "Serviços de perfuração de poços de água",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0103.42.00": {
        descricao: "Serviços de instalação de sistemas sépticos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0104.00.00": {
        descricao: "Serviços de montagem e de edificação de construções pré-fabricadas",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.11.00": {
        descricao: "Serviços de estaqueamento",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.12.00": {
        descricao: "Serviços de fundação",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.21.00": {
        descricao: "Serviços de construção de estruturas de edificações",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.22.00": {
        descricao: "Serviços de construção de estruturas de telhados e coberturas",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.30.00": {
        descricao: "Serviços de construção de telhados e coberturas e serviços de impermeabilização",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.40.00": {
        descricao: "Serviços de concretagem",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.50.00": {
        descricao: "Serviços de montagem de estruturas de aço",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.60.00": {
        descricao: "Serviços de alvenaria",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0105.90.00": {
        descricao: "Serviços especializados de construção não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.11.00": {
        descricao: "Serviços de instalação de fiação elétrica e componentes",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.19.00": {
        descricao: "Serviços de instalação elétrica não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.21.00": {
        descricao: "Serviços de instalação de tubulação para fornecimento de água",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.22.00": {
        descricao: "Serviços de instalação de tubulação para escoamento de água",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.32.00": {
        descricao: "Serviços de instalação de equipamentos de ventilação e de ar condicionado",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.40.00": {
        descricao: "Serviços de instalação de gás",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0106.60.00": {
        descricao: "Serviços de instalação de elevadores, esteiras e escadas rolantes",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.30.00": {
        descricao: "Serviços de pintura",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.40.00": {
        descricao: "Serviços de revestimento de pisos e de paredes",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.03": {
    descricao: "Elaboração De Planos Diretores, Estudos De Viabilidade, Estudos Organizacionais E Outros, Relacionados Com Obras E Serviços De Engenharia; Elaboração De Anteprojetos, Projetos Básicos E Projetos Executivos Para Trabalhos De Engenharia.",
    id: "7.03",
    clusters: ["1.1402.11.00","1.1403.10.00","1.1402.21.00","1.1402.22.00"],
    nbs: {
      "1.1402.11.00": {
        descricao: "Serviços de consultoria em arquitetura",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1402.21.00": {
        descricao: "Serviços de planejamento urbano",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1402.22.00": {
        descricao: "Serviços de planejamento de áreas rurais",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1403.10.00": {
        descricao: "Serviços de consultoria em engenharia",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.04": {
    descricao: "Demolição.",
    id: "7.04",
    clusters: ["1.0103.10.00"],
    nbs: {
      "1.0103.10.00": {
        descricao: "Serviços de demolição",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.05": {
    descricao: "Reparação, Conservação E Reforma De Edifícios, Estradas, Pontes, Portos E Congêneres (Exceto O Fornecimento De Mercadorias Produzidas Pelo Prestador Dos Serviços, Fora Do Local Da Prestação Dos Serviços, Que Fica Sujeito Ao ICMS).",
    id: "7.05",
    clusters: ["1.0101.11.00","1.0101.12.00","1.0101.21.00","1.0101.22.00","1.0101.29.00","1.0101.30.00","1.0102.11.00","1.0102.12.00","1.0102.13.00","1.0102.20.00","1.0102.31.00","1.0102.32.00","1.0102.33.00","1.0102.34.00","1.0102.35.10","1.0102.35.20","1.0102.35.30","1.0102.41.10","1.0102.41.20","1.0102.41.90","1.0102.42.10","1.0102.42.20","1.0102.51.00","1.0102.52.10","1.0102.52.20","1.0102.53.10","1.0102.53.20","1.0102.61.00","1.0102.69.00","1.0102.70.00","1.0102.80.00","1.0102.90.00","1.0107.30.00"],
    nbs: {
      "1.0101.11.00": {
        descricao: "Serviços de construção de edificações residenciais de um e dois pavimentos",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.12.00": {
        descricao: "Serviços de construção de edificações residenciais com mais de dois pavimentos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.21.00": {
        descricao: "Serviços de construção de edificações industriais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.22.00": {
        descricao: "Serviços de construção de edificações comerciais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.29.00": {
        descricao: "Serviços de construção de edificações não residenciais não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0101.30.00": {
        descricao: "Serviços de construção de edificações de uso misto (residencial e não residencial)",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.11.00": {
        descricao: "Serviços de construção de autoestradas (exceto autoestradas elevadas), ruas e estradas",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.12.00": {
        descricao: "Serviços de construção de ferrovias",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.13.00": {
        descricao: "Serviços de construção de pistas de pouso e decolagem em aeroportos e de infraestrutura aeroportuária",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.20.00": {
        descricao: "Serviços de construção de pontes, autoestradas elevadas e túneis",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.31.00": {
        descricao: "Serviços de construção de infraestrutura de proteção e acesso aquaviário",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.32.00": {
        descricao: "Serviços de construção de infraestrutura de acostagem aquaviária",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.33.00": {
        descricao: "Serviços de construção de infraestrutura terrestre e de obras de engenharia afins nos portos",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.34.00": {
        descricao: "Serviços de construção de barragens",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.10": {
        descricao: "Serviços de construção de adutoras em conduto livre",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.20": {
        descricao: "Serviços de construção de sistemas de irrigação",
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.35.30": {
        descricao: "Serviços de construção relacionada ao controle dos cursos de água, inclusive canalização",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.41.10": {
        descricao: "Serviços de construção de dutos de longo curso para o transporte de petróleo, seus derivados, e gás",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.41.20": {
        descricao: "Serviços de construção de dutos de longo curso para o transporte e escoamento de águas",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.41.90": {
        descricao: "Serviços de construção de dutos de longo curso não classificados em subposições anteriores",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.42.10": {
        descricao: "Serviços de construção de linhas de comunicação de longo curso",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.42.20": {
        descricao: "Serviços de construção de linhas de transmissão de alta tensão",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.51.00": {
        descricao: "Serviços de construção de dutos locais",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.52.10": {
        descricao: "Serviços de construção de linhas locais de comunicação",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.52.20": {
        descricao: "Serviços de construção de linhas locais de transmissão de baixa e média tensão",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.53.10": {
        descricao: "Serviços de construção de sistemas de esgotos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.53.20": {
        descricao: "Serviços de construção de sistemas de estações para elevação, tratamento e purificação de água",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.61.00": {
        descricao: "Serviços de construção de usinas de geração de energia",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.69.00": {
        descricao: "Serviços de construção de instalações industriais não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.70.00": {
        descricao: "Serviços de construção de minas e suas unidades industriais",
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.80.00": {
        descricao: "Serviços de construção de instalações para recreação e atividades desportivas ao ar livre",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0102.90.00": {
        descricao: "Serviços de construção de obras de engenharia civil não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.30.00": {
        descricao: "Serviços de pintura",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.06": {
    descricao: "Colocação E Instalação De Tapetes, Carpetes, Assoalhos, Cortinas, Revestimentos De Parede, Vidros, Divisórias, Placas De Gesso E Congêneres, Com Material Fornecido Pelo Tomador Do Serviço.",
    id: "7.06",
    clusters: ["1.0106.50.00","1.0107.10.00","1.0107.20.00","1.0107.40.00"],
    nbs: {
      "1.0106.50.00": {
        descricao: "Serviços de instalação de isolamentos",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.10.00": {
        descricao: "Serviços de vidraçaria",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.20.00": {
        descricao: "Serviços de gesso e de estuque",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
      "1.0107.40.00": {
        descricao: "Serviços de revestimento de pisos e de paredes",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.07": {
    descricao: "Recuperação, Raspagem, Polimento E Lustração De Pisos E Congêneres.",
    id: "7.07",
    clusters: ["1.0107.40.00"],
    nbs: {
      "1.0107.40.00": {
        descricao: "Serviços de revestimento de pisos e de paredes",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.08": {
    descricao: "Calafetação.",
    id: "7.08",
    clusters: ["1.0107.90.00"],
    nbs: {
      "1.0107.90.00": {
        descricao: "Serviços de acabamento não classificados em subposições anteriores",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.09": {
    descricao: "Varrição, Coleta, Remoção, Incineração, Tratamento, Reciclagem, Separação E Destinação Final De Lixo, Rejeitos E Outros Resíduos Quaisquer.",
    id: "7.09",
    clusters: ["1.2406.10.00,1.2402.20.00,1.2403.11.00,1.2403.12.00,1.2403.19.00,1.2403.21.00,1.2403.22.00,1.2403.31.00,1.2403.32.00,1.2404.11.00,1.2404.12.00,1.2404.13.00,1.2404.19.00,1.2404.33.00"],
    nbs: {
      "1.2402.20.00": {
        descricao: "Serviços de esvaziamento e limpeza de fossas sépticas",
      },
      "1.2403.11.00": {
        descricao: "Serviços de coleta de resíduos de serviços de saúde e outros resíduos biológicos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.12.00": {
        descricao: "Serviços de coleta de resíduos perigosos industriais, exceto resíduos de serviços de saúde e outros resíduos biológicos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.19.00": {
        descricao: "Serviços de coleta de outros resíduos perigosos não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.21.00": {
        descricao: "Serviços de coleta de resíduos recicláveis, não perigosos, de origem doméstica",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.22.00": {
        descricao: "Serviços de coleta de resíduos recicláveis, não perigosos, exceto de origem doméstica",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.31.00": {
        descricao: "Serviços de coleta de resíduos gerais de origem doméstica",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2403.32.00": {
        descricao: "Serviços de coleta de resíduos gerais, exceto de origem doméstica",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2404.11.00": {
        descricao: "Serviços de triagem, preparação, consolidação e estocagem de resíduos perigosos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2404.12.00": {
        descricao: "Serviços de demolição e desmantelamento de embarcações, veículos e outros bens",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2404.13.00": {
        descricao: "Serviços de triagem, preparação, consolidação e estocagem de resíduos recicláveis não perigosos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2404.19.00": {
        descricao: "Serviços de triagem, preparação, consolidação e estocagem de resíduos não perigosos, exceto os recicláveis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2404.33.00": {
        descricao: "Serviços de incineração de resíduos não perigosos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2406.10.00": {
        descricao: "Serviços de varrição de vias e áreas públicas",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.10": {
    descricao: "Limpeza, Manutenção E Conservação De Vias E Logradouros Públicos, Imóveis, Chaminés, Piscinas, Parques, Jardins E Congêneres.",
    id: "7.10",
    clusters: ["1.1803.10.00","1.1803.22.00","1.1803.29.00","1.2405.14.00","1.2406.90.00","1.2407.00.00"],
    nbs: {
      "1.1803.10.00": {
        descricao: "Serviços gerais de limpeza",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1803.22.00": {
        descricao: "Serviços de limpeza de janelas",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1803.29.00": {
        descricao: "Serviços especializados de limpeza não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2405.14.00": {
        descricao: "Serviços de remediação em edificações",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2406.90.00": {
        descricao: "Serviços de limpeza urbana e similares não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2407.00.00": {
        descricao: "Serviços de proteção ambiental não classificados em posições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.11": {
    descricao: "Decoração E Jardinagem, Inclusive Corte E Poda De Árvores.",
    id: "7.11",
    clusters: ["1.1409.11.00,1.1409.12.00,1.1806.70.00"],
    nbs: {
      "1.1409.11.00": {
        descricao: "Serviços de design de interiores para espaços comerciais e públicos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1409.12.00": {
        descricao: "Serviços de design de interiores para espaços residenciais",
      },
      "1.1806.70.00": {
        descricao: "Serviços de jardinagem",
      },
    },
  },
  "7.12": {
    descricao: "Controle E Tratamento De Efluentes De Qualquer Natureza E De Agentes Físicos, Químicos E Biológicos.",
    id: "7.12",
    clusters: ["1.2404.21.00,1.2404.22.00,1.2404.31.00,1.2404.32.00,1.2404.39.00,1.2405.11.00,1.2405.12.00,1.2405.13.00,1.2405.20.00,1.2405.90.00"],
    nbs: {
      "1.2404.21.00": {
        descricao: "Serviços de tratamento de resíduos perigosos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2404.22.00": {
        descricao: "Serviços de eliminação de resíduos perigosos",
      },
      "1.2404.31.00": {
        descricao: "Serviços de tratamento e eliminação de resíduos não perigosos em aterros sanitários",
      },
      "1.2404.32.00": {
        descricao: "Serviços de tratamento e eliminação de resíduos não perigosos em aterros, exceto os sanitários",
      },
      "1.2404.39.00": {
        descricao: "Serviços de tratamento e eliminação de resíduos não perigosos não classificados em subposições anteriores",
      },
      "1.2405.11.00": {
        descricao: "Serviços de remediação e limpeza do ar",
      },
      "1.2405.12.00": {
        descricao: "Serviços de remediação e limpeza de águas de superfície",
      },
      "1.2405.13.00": {
        descricao: "Serviços de remediação e limpeza do solo e de águas subterrâneas",
      },
      "1.2405.20.00": {
        descricao: "Serviços de contenção, controle e monitoramento de áreas contaminadas",
      },
      "1.2405.90.00": {
        descricao: "Serviços de remediação não classificados em subposições anteriores",
      },
    },
  },
  "7.13": {
    descricao: "Dedetização, Desinfecção, Desinsetização, Imunização, Higienização, Desratização, Pulverização E Congêneres.",
    id: "7.13",
    clusters: ["1.1803.21.00"],
    nbs: {
      "1.1803.21.00": {
        descricao: "Serviços de desinfecção e extermínio de pragas",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.16": {
    descricao: "Florestamento, Reflorestamento, Semeadura, Adubação, Reparação De Solo, Plantio, Silagem, Colheita, Corte E Descascamento De Árvores, Silvicultura, Exploração Florestal E Dos Serviços Congêneres Indissociáveis Da Formação, Manutenção E Colheita De Florestas, Para Quaisquer Fins E Por Quaisquer Meios. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "7.16",
    clusters: ["1.1105.41.00","1.1901.10.00,1.1901.30.00,1.0602.31.00"],
    nbs: {
      "1.0602.31.00": {
        descricao: "Serviços de armazenagem de granéis sólidos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
          { codigo: "20201.0", local: "local do imóvel" },
        ],
      },
      "1.1105.41.00": {
        descricao: "Exploração de recursos vegetais, inclusive florestais",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1901.10.00": {
        descricao: "Serviços de apoio à agricultura",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
        },
      },
      "1.1901.30.00": {
        descricao: "Serviços de apoio à produção florestal (silvicultura)",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
      },
    },
  },
  "7.17": {
    descricao: "Escoramento, Contenção De Encostas E Serviços Congêneres.",
    id: "7.17",
    clusters: ["1.0105.11.00"],
    nbs: {
      "1.0105.11.00": {
        descricao: "Serviços de estaqueamento",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200046": "Operações com bens imóveis",
        },
      },
    },
  },
  "7.18": {
    descricao: "Limpeza E Dragagem De Rios, Portos, Canais, Baías, Lagos, Lagoas, Represas, Açudes E Congêneres.",
    id: "7.18",
    clusters: ["1.2406.90.00"],
    nbs: {
      "1.2406.90.00": {
        descricao: "Serviços de limpeza urbana e similares não classificados em subposições anteriores",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.19": {
    descricao: "Acompanhamento E Fiscalização Da Execução De Obras De Engenharia, Arquitetura E Urbanismo.",
    id: "7.19",
    clusters: ["1.1402.15.00","1.1403.21.10","1.1403.21.20","1.1403.30.00"],
    nbs: {
      "1.1402.15.00": {
        descricao: "Serviços de arquitetura relativos ao acompanhamento e fiscalização da execução de projetos arquitetônicos e urbanísticos",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.21.10": {
        descricao: "Serviços de engenharia para projetos de construção residencial",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.21.20": {
        descricao: "Serviços de engenharia para projetos de construção não residencial",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1403.30.00": {
        descricao: "Serviços de gerenciamento de projetos de construção",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
    },
  },
  "7.20": {
    descricao: "Aerofotogrametria (Inclusive Interpretação), Cartografia, Mapeamento, Levantamentos Topográficos, Batimétricos, Geográficos, Geodésicos, Geológicos, Geofísicos E Congêneres.",
    id: "7.20",
    clusters: ["1.1404.21.00","1.1404.22.00","1.1404.19.00"],
    nbs: {
      "1.1404.19.00": {
        descricao: "Serviços geológicos, geofísicos e outros de prospecção não classificados em subposições anteriores",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1404.21.00": {
        descricao: "Serviços topográficos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1404.22.00": {
        descricao: "Serviços cartográficos",
        cClassTrib: {
          "200045": "Operações relacionadas a projetos de reabilitação urbana de zonas históricas e de áreas críticas de recuperação e reconversão urbanística",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "7.21": {
    descricao: "Pesquisa, Perfuração, Cimentação, Mergulho, Perfilagem, Concretação, Testemunhagem, Pescaria, Estimulação E Outros Serviços Relacionados Com A Exploração E Explotação De Petróleo, Gás Natural E De Outros Recursos Minerais.",
    id: "7.21",
    clusters: ["1.1404.19.00,1.1902.10.00,1.1902.90.00"],
    nbs: {
      "1.1404.19.00": {
        descricao: "Serviços geológicos, geofísicos e outros de prospecção não classificados em subposições anteriores",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1902.10.00": {
        descricao: "Serviços de apoio à extração de petróleo e gás",
      },
      "1.1902.90.00": {
        descricao: "Serviços de apoio à mineração não classificados em subposições anteriores",
      },
    },
  },
  "7.22": {
    descricao: "Nucleação E Bombardeamento De Nuvens E Congêneres.",
    id: "7.22",
    clusters: ["1.1901.10.00"],
    nbs: {
      "1.1901.10.00": {
        descricao: "Serviços de apoio à agricultura",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "8.01": {
    descricao: "Ensino Regular Pré-Escolar, Fundamental, Médio E Superior.",
    id: "8.01",
    clusters: ["1.2201.11.00,1.2201.12.00,1.2201.19.00,1.2201.20.00,1.2201.30.00,1.2202.00.00,1.2203.10.00,1.2203.20.00,1.2204.10.00","1.2204.20.00,1.2204.30.00,1.2204.40.00"],
    nbs: {
      "1.2201.11.00": {
        descricao: "Serviços de creche ou entidade equivalente",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
          "200028": "Fornecimento dos serviços de educação (Anexo II)",
        },
      },
      "1.2201.12.00": {
        descricao: "Serviços de pré-escola",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2201.19.00": {
        descricao: "Serviços de educação infantil não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2201.20.00": {
        descricao: "Serviços de ensino fundamental",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2201.30.00": {
        descricao: "Serviços de ensino médio",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2202.00.00": {
        descricao: "Serviços de educação técnica de nível médio",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2203.10.00": {
        descricao: "Serviços de ensino fundamental de jovens e adultos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2203.20.00": {
        descricao: "Serviços de ensino médio de jovens e adultos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2204.10.00": {
        descricao: "Serviços educacionais de graduação",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2204.20.00": {
        descricao: "Serviços educacionais de pós-graduação",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
          "200028": "Fornecimento dos serviços de educação (Anexo II)",
        },
      },
      "1.2204.30.00": {
        descricao: "Serviços educacionais de extensão",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
      "1.2204.40.00": {
        descricao: "Serviços educacionais de cursos sequenciais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200025": "Fornecimento dos serviços de educação relacionados ao Programa Universidade para Todos (Prouni)",
        },
      },
    },
  },
  "8.02": {
    descricao: "Instrução, Treinamento, Orientação Pedagógica E Educacional, Avaliação De Conhecimentos De Qualquer Natureza.",
    id: "8.02",
    clusters: ["1.2205.11.00","1.2205.13.00,1.2205.19.00,1.2205.20.00"],
    nbs: {
      "1.2205.11.00": {
        descricao: "Serviços de educação com enfoque cultural",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2205.13.00": {
        descricao: "Serviços de educação em línguas estrangeiras e de sinais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200028": "Fornecimento dos serviços de educação (Anexo II)",
        },
      },
      "1.2205.19.00": {
        descricao: "Serviços de educação, inclusive treinamento não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
      "1.2205.20.00": {
        descricao: "Serviços de apoio aos serviços educacionais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "9.01": {
    descricao: "Hospedagem De Qualquer Natureza Em Hotéis, Apart-Service Condominiais, Flat, Apart-Hotéis, Hotéis Residência, Residence-Service, Suite Service, Hotelaria Marítima, Motéis, Pensões E Congêneres; Ocupação Por Temporada Com Fornecimento De Serviço (O Valor Da Alimentação E Gorjeta, Quando Incluído No Preço Da Diária, Fica Sujeito Ao Imposto Sobre Serviços).",
    id: "9.01",
    clusters: ["1.0303.11.00,1.0303.12.00,1.0303.13.00,1.0303.14.00,1.0303.20.00,1.0303.90.00,1.0304.10.00,1.0304.20.00,1.0304.90.00"],
    nbs: {
      "1.0303.11.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para visitantes, com serviços diários de faxina",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "200048": "Hotelaria, Parques de Diversão e Parques Temáticos",
        },
      },
      "1.0303.12.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para visitantes, sem serviços diários de faxina",
      },
      "1.0303.13.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para visitantes, em propriedades partilhadas",
      },
      "1.0303.14.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para visitantes, em quartos de múltipla ocupação",
      },
      "1.0303.20.00": {
        descricao: "Serviços de acampamentos turísticos (camping)",
      },
      "1.0303.90.00": {
        descricao: "Serviços de hospedagem para visitantes não classificados em subposições anteriores",
      },
      "1.0304.10.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para estudantes em residências estudantis",
      },
      "1.0304.20.00": {
        descricao: "Serviços de hospedagem em quartos ou unidades de hospedagem para trabalhadores em hotéis ou campos",
      },
      "1.0304.90.00": {
        descricao: "Serviços de hospedagem, exceto para visitantes não classificados em subposições anteriores",
      },
    },
  },
  "9.02": {
    descricao: "Agenciamento, Organização, Promoção, Intermediação E Execução De Programas De Turismo, Passeios, Viagens, Excursões, Hospedagens E Congêneres.",
    id: "9.02",
    clusters: ["1.0401.17.10,1.0401.17.20,1.0401.17.90,1.0401.23.00,1.0401.43.00,1.0402.13.20","1.1805.40.00,1.1805.11.00,1.1805.12.00,1.1805.13.00,1.1805.14.00,1.1805.19.00,1.1805.21.00,1.1805.22.00,1.1805.23.00,1.1805.24.00","1.1805.31.00,1.1805.32.00,1.1805.39.00","1.1805.61.00","1.1805.62.00"],
    nbs: {
      "1.0401.17.10": {
        descricao: "Serviços de transporte rodoviário para passeios turísticos (sightseeing)",
        indops: [
          { codigo: "60101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0401.17.20": {
        descricao: "Serviços de transporte ferroviário para passeios turísticos (sightseeing)",
      },
      "1.0401.17.90": {
        descricao: "Serviços de transporte terrestre para passeios turísticos (sightseeing) não classificados em itens anteriores",
      },
      "1.0401.23.00": {
        descricao: "Serviços de transporte aquaviário para passeios turísticos (sightseeing)",
      },
      "1.0401.43.00": {
        descricao: "Serviços de transporte aéreo para passeios turísticos (sightseeing)",
      },
      "1.0402.13.20": {
        descricao: "Serviços de fretamento eventual ou turístico, nacional, exceto local",
      },
      "1.1805.11.00": {
        descricao: "Serviços de reservas para transporte aéreo de passageiros",
      },
      "1.1805.12.00": {
        descricao: "Serviços de reservas para transporte ferroviário de passageiros",
      },
      "1.1805.13.00": {
        descricao: "Serviços de reservas para transporte rodoviário de passageiros",
      },
      "1.1805.14.00": {
        descricao: "Serviços de reservas de carros de aluguel",
      },
      "1.1805.19.00": {
        descricao: "Serviços de reservas para transporte de passageiros não classificados em subposições anteriores",
      },
      "1.1805.21.00": {
        descricao: "Serviços de reservas de hospedagem, exceto em unidades compartilhadas",
      },
      "1.1805.22.00": {
        descricao: "Serviços de reservas e intercâmbio de unidades compartilhadas (time-share)",
      },
      "1.1805.23.00": {
        descricao: "Serviços de reservas em cruzeiros",
      },
      "1.1805.24.00": {
        descricao: "Serviços de reservas de pacotes turísticos",
      },
      "1.1805.31.00": {
        descricao: "Serviços de reservas para centros de convenções, auditórios e salas de exposições",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1805.32.00": {
        descricao: "Serviços de reservas de ingressos para eventos de entretenimento e recreativos",
      },
      "1.1805.39.00": {
        descricao: "Serviços de reservas não classificados em subposições anteriores",
      },
      "1.1805.40.00": {
        descricao: "Serviços de operadoras de turismo",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200051": "Agências de Turismo",
        },
      },
      "1.1805.61.00": {
        descricao: "Serviços de promoção turística",
        cClassTrib: {
          "200051": "Agências de Turismo",
        },
      },
      "1.1805.62.00": {
        descricao: "Serviços de informação a visitantes",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "9.03": {
    descricao: "Guias De Turismo.",
    id: "9.03",
    clusters: ["1.1805.50.00"],
    nbs: {
      "1.1805.50.00": {
        descricao: "Serviços de guias turísticos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200051": "Agências de Turismo",
        },
      },
    },
  },
  "10.01": {
    descricao: "Agenciamento, Corretagem Ou Intermediação De Câmbio, De Seguros, De Cartões De Crédito, De Planos De Saúde E De Planos De Previdência Privada.",
    id: "10.01",
    clusters: ["1.0906.11.00","1.0906.12.00,1.0910.20.00","1.0905.90.00"],
    nbs: {
      "1.0905.90.00": {
        descricao: "Serviços auxiliares aos serviços financeiros não classificados em subposições anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0906.11.00": {
        descricao: "Serviços de agenciamento e corretagem de seguros, resseguros e previdência complementar, exceto de seguros saúde",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0906.12.00": {
        descricao: "Serviços de corretagem de seguros saúde",
        cClassTrib: {
          "011003": "Intermediação de planos de assistência à saúde",
        },
      },
      "1.0910.20.00": {
        descricao: "Serviços de corretagem de planos privados de assistência à saúde",
      },
    },
  },
  "10.02": {
    descricao: "Agenciamento, Corretagem Ou Intermediação De Títulos Em Geral, Valores Mobiliários E Contratos Quaisquer.",
    id: "10.02",
    clusters: ["1.0607.00.00,1.0905.11.00,1.0905.12.00"],
    nbs: {
      "1.0607.00.00": {
        descricao: "Serviços de agenciamento de transporte de cargas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0905.11.00": {
        descricao: "Serviços de corretagem de títulos",
      },
      "1.0905.12.00": {
        descricao: "Serviços de corretagem de derivativos e commodities",
      },
    },
  },
  "10.03": {
    descricao: "Agenciamento, Corretagem Ou Intermediação De Direitos De Propriedade Industrial, Artística Ou Literária.",
    id: "10.03",
    clusters: ["1.2501.40.00,1.0905.11.00"],
    nbs: {
      "1.0905.11.00": {
        descricao: "Serviços de corretagem de títulos",
      },
      "1.2501.40.00": {
        descricao: "Serviços de agenciamento para a comercialização de obras audiovisuais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "10.04": {
    descricao: "Agenciamento, Corretagem Ou Intermediação De Contratos De Arrendamento Mercantil (Leasing), De Franquia (Franchising) E De Faturização (Factoring).",
    id: "10.04",
    clusters: ["1.0905.90.00"],
    nbs: {
      "1.0905.90.00": {
        descricao: "Serviços auxiliares aos serviços financeiros não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "10.05": {
    descricao: "Agenciamento, Corretagem Ou Intermediação De Bens Móveis Ou Imóveis, Não Abrangidos Em Outros Itens Ou Subitens, Inclusive Aqueles Realizados No Âmbito De Bolsas De Mercadorias E Futuros, Por Quaisquer Meios.",
    id: "10.05",
    clusters: ["1.1001.21.00,1.1001.22.00","1.0201.00.00,1.0205.00.00,1.0905.12.00"],
    nbs: {
      "1.0201.00.00": {
        descricao: "Serviços de intermediação na distribuição de mercadorias",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0205.00.00": {
        descricao: "Serviços de intermediação na comercialização de energia elétrica",
      },
      "1.0905.12.00": {
        descricao: "Serviços de corretagem de derivativos e commodities",
      },
      "1.1001.21.00": {
        descricao: "Serviços de intermediação na compra e venda de imóveis residenciais",
        indops: [
          { codigo: "20301.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.1001.22.00": {
        descricao: "Serviços de intermediação na compra e venda de imóveis não residenciais",
      },
    },
  },
  "10.06": {
    descricao: "Agenciamento Marítimo.",
    id: "10.06",
    clusters: ["1.0502.29.00,1.0607.00.00"],
    nbs: {
      "1.0502.29.00": {
        descricao: "Serviços de transportes aquaviário costeiro de cargas não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0607.00.00": {
        descricao: "Serviços de agenciamento de transporte de cargas",
      },
    },
  },
  "10.07": {
    descricao: "Agenciamento De Notícias.",
    id: "10.07",
    clusters: ["1.1704.10.00,1.1704.20.00"],
    nbs: {
      "1.1704.10.00": {
        descricao: "Serviços de agências de notícias para jornais e periódicos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1704.20.00": {
        descricao: "Serviços de agências de notícias para mídia audiovisual",
      },
    },
  },
  "10.08": {
    descricao: "Agenciamento De Publicidade E Propaganda, Inclusive O Agenciamento De Veiculação Por Quaisquer Meios.",
    id: "10.08",
    clusters: ["1.1406.20.00"],
    nbs: {
      "1.1406.20.00": {
        descricao: "Aquisição ou venda de espaço ou tempo para propaganda, sob comissão",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "10.09": {
    descricao: "Representação De Qualquer Natureza, Inclusive Comercial.",
    id: "10.09",
    clusters: ["1.0201.00.00"],
    nbs: {
      "1.0201.00.00": {
        descricao: "Serviços de intermediação na distribuição de mercadorias",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "10.10": {
    descricao: "Distribuição De Bens De Terceiros.",
    id: "10.10",
    clusters: ["1.0201.00.00"],
    nbs: {
      "1.0201.00.00": {
        descricao: "Serviços de intermediação na distribuição de mercadorias",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "11.01": {
    descricao: "Guarda E Estacionamento De Veículos Terrestres Automotores, De Aeronaves E De Embarcações.",
    id: "11.01",
    clusters: ["1.0604.30.00,1.0605.90.00,1.0606.19.00"],
    nbs: {
      "1.0604.30.00": {
        descricao: "Serviços de estacionamento",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0605.90.00": {
        descricao: "Serviços de apoio ao transporte aquaviário não classificados em subposições anteriores",
      },
      "1.0606.19.00": {
        descricao: "Serviços de apoio ao transporte aéreo não classificados em subposições anteriores",
      },
    },
  },
  "11.02": {
    descricao: "Vigilância, Segurança Ou Monitoramento De Bens E Pessoas.",
    id: "11.02",
    clusters: ["1.1802.50.00,1.1802.20.00,1.1802.30.00,1.1802.90.00"],
    nbs: {
      "1.1802.20.00": {
        descricao: "Serviços de consultoria em segurança",
      },
      "1.1802.30.00": {
        descricao: "Serviços de sistemas de segurança",
      },
      "1.1802.50.00": {
        descricao: "Serviços de guarda e escolta armada",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1802.90.00": {
        descricao: "Serviços de segurança não classificados em subposições anteriores",
      },
    },
  },
  "11.03": {
    descricao: "Escolta, Inclusive De Veículos E Cargas.",
    id: "11.03",
    clusters: ["1.1802.50.00"],
    nbs: {
      "1.1802.50.00": {
        descricao: "Serviços de guarda e escolta armada",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "11.04": {
    descricao: "Armazenamento, Depósito, Carga, Descarga, Arrumação E Guarda De Bens De Qualquer Espécie.",
    id: "11.04",
    clusters: ["1.0601.10.00,1.0601.90.00,1.0602.10.00,1.0602.21.00,1.0602.22.00,1.0602.23.00,1.0602.29.00,1.0602.31.00,1.0602.32.00,1.0602.33.00,1.0602.90.00,1.0608.20.00,1.0608.30.00"],
    nbs: {
      "1.0601.10.00": {
        descricao: "Serviços de manuseio de contêineres",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0601.90.00": {
        descricao: "Serviços de manuseio de cargas não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.10.00": {
        descricao: "Serviços de armazenagem frigorificada",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.21.00": {
        descricao: "Serviços de armazenagem de petróleo e seus derivados",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.22.00": {
        descricao: "Serviços de armazenagem de combustíveis, lubrificantes e GLP, inclusive apresentado em botijões metálicos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.23.00": {
        descricao: "Serviços de armazenagem de produtos químicos perigosos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.29.00": {
        descricao: "Serviços de armazenagem de produtos perigosos não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.31.00": {
        descricao: "Serviços de armazenagem de granéis sólidos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.32.00": {
        descricao: "Serviços de armazenagem de granéis líquidos ou liquefeitos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.33.00": {
        descricao: "Serviços de armazenagem de granéis gasosos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0602.90.00": {
        descricao: "Serviços de armazenagem não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0608.20.00": {
        descricao: "Serviços de unitização ou desunitização de cargas no transporte multimodal",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0608.30.00": {
        descricao: "Serviços de movimentação de cargas no transporte multimodal",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "11.05": {
    descricao: "Vigilância, Segurança Ou Monitoramento De Bens, Pessoas E Semoventes. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "11.05",
    clusters: ["1.1802.30.00"],
    nbs: {
      "1.1802.30.00": {
        descricao: "Serviços de sistemas de segurança",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.01": {
    descricao: "Espetáculos Teatrais.",
    id: "12.01",
    clusters: ["1.2502.20.00"],
    nbs: {
      "1.2502.20.00": {
        descricao: "Serviços de produção e apresentação de atuações artísticas ao vivo",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.02": {
    descricao: "Exibições Cinematográficas.",
    id: "12.02",
    clusters: ["1.2501.50.00"],
    nbs: {
      "1.2501.50.00": {
        descricao: "Serviços de projeção de filmes",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
    },
  },
  "12.03": {
    descricao: "Espetáculos Circenses.",
    id: "12.03",
    clusters: ["1.2502.20.00"],
    nbs: {
      "1.2502.20.00": {
        descricao: "Serviços de produção e apresentação de atuações artísticas ao vivo",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.04": {
    descricao: "Programas De Auditório.",
    id: "12.04",
    clusters: ["1.2502.90.00"],
    nbs: {
      "1.2502.90.00": {
        descricao: "Serviços de apresentação e promoção de atuações artísticas e outros serviços de entretenimento ao vivo não classificados em subposições anteriores",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.05": {
    descricao: "Parques De Diversões, Centros De Lazer E Congêneres.",
    id: "12.05",
    clusters: ["1.2504.21.00,1.2504.22.00,1.2507.10.00,1.2507.90.00"],
    nbs: {
      "1.2504.21.00": {
        descricao: "Serviços de jardins botânico e zoológico",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "200048": "Hotelaria, Parques de Diversão e Parques Temáticos",
        },
      },
      "1.2504.22.00": {
        descricao: "Serviços de reserva natural, incluindo preservação de vida selvagem",
      },
      "1.2507.10.00": {
        descricao: "Serviços de parques temáticos de diversão",
      },
      "1.2507.90.00": {
        descricao: "Serviços de parques de diversão e atrações similares não classificados em subposições anteriores",
      },
    },
  },
  "12.06": {
    descricao: "Boates, taxi-dancing e congêneres.",
    id: "12.06",
    clusters: ["1.2508.00.00"],
    nbs: {
      "1.2508.00.00": {
        descricao: "Serviços recreativos, culturais e desportivos não classificados em posições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.07": {
    descricao: "Shows, ballet, danças, desfiles, bailes, óperas, concertos, recitais, festivais e congêneres.",
    id: "12.07",
    clusters: ["1.2502.20.00","1.2502.90.00"],
    nbs: {
      "1.2502.20.00": {
        descricao: "Serviços de produção e apresentação de atuações artísticas ao vivo",
        indops: [
          { codigo: "40101.0", local: "local do Evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.90.00": {
        descricao: "Serviços de apresentação e promoção de atuações artísticas e outros serviços de entretenimento ao vivo não classificados em subposições anteriores",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.08": {
    descricao: "Feiras, exposições, congressos e congêneres.",
    id: "12.08",
    clusters: ["1.1806.61.00","1.1806.62.00","1.1806.63.00"],
    nbs: {
      "1.1806.61.00": {
        descricao: "Serviços de assistência e organização de convenções",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.62.00": {
        descricao: "Serviços de assistência e organização de feiras de negócios",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.63.00": {
        descricao: "Serviços de assistência e organização de exposições e outros eventos",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.09": {
    descricao: "Bilhares, boliches e diversões eletrônicas ou não.",
    id: "12.09",
    clusters: ["1.2505.90.00,1.2508.00.00"],
    nbs: {
      "1.2505.90.00": {
        descricao: "Serviços desportivos e recreacionais desportivos não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2508.00.00": {
        descricao: "Serviços recreativos, culturais e desportivos não classificados em posições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "12.10": {
    descricao: "Corridas e competições de animais.",
    id: "12.10",
    clusters: ["1.2508.00.00,1.2505.10.00"],
    nbs: {
      "1.2505.10.00": {
        descricao: "Serviços de organização e promoção de eventos desportivos e recreacionais desportivos",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2508.00.00": {
        descricao: "Serviços recreativos, culturais e desportivos não classificados em posições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.11": {
    descricao: "Competições esportivas ou de destreza física ou intelectual, com ou sem a participação do espectador.",
    id: "12.11",
    clusters: ["1.2505.20.00,1.2505.90.00,1.2505.10.00"],
    nbs: {
      "1.2505.10.00": {
        descricao: "Serviços de organização e promoção de eventos desportivos e recreacionais desportivos",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2505.20.00": {
        descricao: "Serviços de clubes desportivos",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2505.90.00": {
        descricao: "Serviços desportivos e recreacionais desportivos não classificados em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
    },
  },
  "12.12": {
    descricao: "Execução de música.",
    id: "12.12",
    clusters: ["1.2503.10.00"],
    nbs: {
      "1.2503.10.00": {
        descricao: "Serviços de atuação artística",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
    },
  },
  "12.13": {
    descricao: "Produção, mediante ou sem encomenda prévia, de eventos, espetáculos, entrevistas, shows, ballet , danças, desfiles, bailes, teatros, óperas, concertos, recitais, festivais e congêneres, inclusive programas de televisão, matérias jornalísticas ou publicitárias.",
    id: "12.13",
    clusters: ["1.2501.21.00","1.2501.22.00","1.2502.10.00","1.2502.20.00","1.2502.30.00","1.2505.10.00"],
    nbs: {
      "1.2501.21.00": {
        descricao: "Serviços de produção de programas de televisão, videoteipes e filmes",
        indops: [
          { codigo: "40101.0", local: "local evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.22.00": {
        descricao: "Serviços de produção de programas de rádio",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.10.00": {
        descricao: "Serviços de organização e promoção de atuações artísticas ao vivo",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.20.00": {
        descricao: "Serviços de produção e apresentação de atuações artísticas ao vivo",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.30.00": {
        descricao: "Serviços de apoio para atuações artísticas ao vivo",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2505.10.00": {
        descricao: "Serviços de organização e promoção de eventos desportivos e recreacionais desportivos",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.14": {
    descricao: "Fornecimento de música para ambientes fechados ou não, mediante transmissão por qualquer processo.",
    id: "12.14",
    clusters: ["1.2502.90.00"],
    nbs: {
      "1.2502.90.00": {
        descricao: "Serviços de apresentação e promoção de atuações artísticas e outros serviços de entretenimento ao vivo não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
    },
  },
  "12.15": {
    descricao: "Desfiles de blocos carnavalescos ou folclóricos, trios elétricos e congêneres.",
    id: "12.15",
    clusters: ["1.2502.90.00","1.2502.20.00"],
    nbs: {
      "1.2502.20.00": {
        descricao: "Serviços de produção e apresentação de atuações artísticas ao vivo",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.90.00": {
        descricao: "Serviços de apresentação e promoção de atuações artísticas e outros serviços de entretenimento ao vivo não classificados em subposições anteriores",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.16": {
    descricao: "Exibição de filmes, entrevistas, musicais, espetáculos, shows, concertos, desfiles, óperas, competições esportivas, de destreza intelectual ou congêneres.",
    id: "12.16",
    clusters: ["1.2501.50.00","1.2502.90.00","1.2505.10.00"],
    nbs: {
      "1.2501.50.00": {
        descricao: "Serviços de projeção de filmes",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2502.90.00": {
        descricao: "Serviços de apresentação e promoção de atuações artísticas e outros serviços de entretenimento ao vivo não classificados em subposições anteriores",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2505.10.00": {
        descricao: "Serviços de organização e promoção de eventos desportivos e recreacionais desportivos",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "12.17": {
    descricao: "Recreação e animação, inclusive em festas e eventos de qualquer natureza.",
    id: "12.17",
    clusters: ["1.2508.00.00"],
    nbs: {
      "1.2508.00.00": {
        descricao: "Serviços recreativos, culturais e desportivos não classificados em posições anteriores",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "13.02": {
    descricao: "Fonografia ou gravação de sons, inclusive trucagem, dublagem, mixagem e congêneres.",
    id: "13.02",
    clusters: ["1.2501.11.00","1.2501.12.00","1.2501.36.00","1.2501.37.00","1.2501.39.00"],
    nbs: {
      "1.2501.11.00": {
        descricao: "Serviços de gravação de som em estúdio",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.12.00": {
        descricao: "Serviços de gravação de som ao vivo",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.36.00": {
        descricao: "Serviços de legendas, títulos e dublagem em obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.37.00": {
        descricao: "Serviços de projeto e edição de som em obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.39.00": {
        descricao: "Serviços de pós-produção de obras audiovisuais não classificados em subposições anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "13.03": {
    descricao: "Fotografia e cinematografia, inclusive revelação, ampliação, cópia, reprodução, trucagem e congêneres.",
    id: "13.03",
    clusters: ["1.1408.11.00,1.1408.12.00,1.1408.13.00,1.1408.14.00,1.1408.15.00,1.1408.19.00,1.1408.20.00,1.2101.23.00","1.2501.31.00","1.2501.32.00","1.2501.33.00","1.2501.34.00","1.2501.35.00","1.2501.36.00","1.2501.39.00","1.2501.90.00"],
    nbs: {
      "1.1408.11.00": {
        descricao: "Serviços fotográficos de retratos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1408.12.00": {
        descricao: "Serviços fotográficos e videográficos para propaganda",
      },
      "1.1408.13.00": {
        descricao: "Serviços fotográficos e videográficos de eventos",
      },
      "1.1408.14.00": {
        descricao: "Serviços fotográficos especiais",
      },
      "1.1408.15.00": {
        descricao: "Serviços de restauração e retoque de fotografias",
      },
      "1.1408.19.00": {
        descricao: "Serviços fotográficos e videográficos não classificados em subposições anteriores",
      },
      "1.1408.20.00": {
        descricao: "Serviços de processamento de fotografias",
      },
      "1.2101.23.00": {
        descricao: "Serviços de reprodução de mídia gravada",
      },
      "1.2501.31.00": {
        descricao: "Serviços de edição de obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.32.00": {
        descricao: "Serviços de duplicação e transferência de obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.33.00": {
        descricao: "Serviços de correção de cor e restauração digital de obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.34.00": {
        descricao: "Serviços de efeitos visuais em obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.35.00": {
        descricao: "Serviços de animação",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.36.00": {
        descricao: "Serviços de legendas, títulos e dublagem em obras audiovisuais",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.39.00": {
        descricao: "Serviços de pós-produção de obras audiovisuais não classificados em subposições anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2501.90.00": {
        descricao: "Serviços de produção audiovisual, de apoio e relacionados não classificados em subposições anteriores",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "13.04": {
    descricao: "Reprografia, microfilmagem e digitalização.",
    id: "13.04",
    clusters: ["1.1806.51.00"],
    nbs: {
      "1.1806.51.00": {
        descricao: "Serviços de fotocópias e outros serviços de reprodução de documentos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "13.05": {
    descricao: "Composição Gráfica, Inclusive Confecção De Impressos Gráficos, Fotocomposição, Clicheria, Zincografia, Litografia E Fotolitografia, Exceto Se Destinados A Posterior Operação De Comercialização Ou Industrialização, Ainda Que Incorporados, De Qualquer Forma, A Outra Mercadoria Que Deva Ser Objeto De Posterior Circulação, Tais Como Bulas, Rótulos, Etiquetas, Caixas, Cartuchos, Embalagens E Manuais Técnicos E De Instrução, Quando Ficarão Sujeitos Ao ICMS.",
    id: "13.05",
    clusters: ["1.2101.10.00,1.2101.21.00,1.2101.22.00"],
    nbs: {
      "1.2101.10.00": {
        descricao: "Serviços de editoração",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2101.21.00": {
        descricao: "Serviços de impressão",
      },
      "1.2101.22.00": {
        descricao: "Serviços relacionados à impressão",
      },
    },
  },
  "14.01": {
    descricao: "Lubrificação, limpeza, lustração, revisão, carga e recarga, conserto, restauração, blindagem, manutenção e conservação de máquinas, veículos, aparelhos, equipamentos, motores, elevadores ou de qualquer objeto (exceto peças e partes empregadas, que ficam sujeitas ao ICMS).",
    id: "14.01",
    clusters: ["1.2001.10.00,1.2001.20.00,1.2001.31.10,1.2001.31.20,1.2001.32.00,1.2001.33.00,1.2001.34.10,1.2001.34.20,1.2001.34.30","1.2001.35.00","1.2001.39.00,1.2001.40.00,1.2001.50.00,1.2001.60.00,1.2001.70.00,1.2001.81.00,1.2001.82.00","1.2001.83.00","1.2001.89.00,1.2002.10.00,1.2002.20.00,1.2002.30.00,1.2002.40.00,1.2002.90.00,1.1803.29.00"],
    nbs: {
      "1.1803.29.00": {
        descricao: "Serviços especializados de limpeza não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.10.00": {
        descricao: "Serviços de manutenção e reparação de produtos metálicos, exceto maquinários e equipamentos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2001.20.00": {
        descricao: "Serviços de manutenção e reparação de computadores e seus periféricos e de maquinário para escritório",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.31.10": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários motorizados",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.31.20": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários não motorizados",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.32.00": {
        descricao: "Serviços de manutenção e reparação de veículos sobre trilhos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.33.00": {
        descricao: "Serviços de manutenção e reparação de veículos aquaviários",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.10": {
        descricao: "Serviços de manutenção e reparação de aeronaves, exceto de motores, turborreatores e turbopropulsores aeronáuticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.20": {
        descricao: "Serviços de manutenção e reparação de motores, turborreatores e turbopropulsores aeronáuticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.30": {
        descricao: "Serviços de manutenção e reparação de foguetes e equipamentos aeroespaciais",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.35.00": {
        descricao: "Serviços de manutenção e reparação de veículos militares",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.2001.39.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de transporte não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2001.40.00": {
        descricao: "Serviços de manutenção e reparação de plataformas, inclusive navios-plataforma, para extração de petróleo e gás",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.50.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de uso industrial",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.60.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de uso comercial",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.70.00": {
        descricao: "Serviços de manutenção e reparação de equipamentos e aparelhos de telecomunicações",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.81.00": {
        descricao: "Serviços de manutenção e reparação de aparelhos eletroeletrônicos domésticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.82.00": {
        descricao: "Serviços de manutenção e reparação de instrumentos e equipamentos médico-hospitalares, odontológicos, óticos e de precisão",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.83.00": {
        descricao: "Serviços de manutenção e reparação de equipamentos militares",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.2001.89.00": {
        descricao: "Serviços de manutenção e reparação de outros maquinários e equipamentos não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2002.10.00": {
        descricao: "Serviços de manutenção e reparação de produtos de couro, calçados, malas e bolsas",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.20.00": {
        descricao: "Serviços de manutenção e reparação de relógios e joias",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.30.00": {
        descricao: "Serviços de manutenção e reparação de móveis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.40.00": {
        descricao: "Serviços de manutenção de roupas e outros produtos têxteis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.90.00": {
        descricao: "Serviços de manutenção e reparação de outros bens de consumo não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "14.02": {
    descricao: "Assistência técnica.",
    id: "14.02",
    clusters: ["1.2001.10.00,1.2001.20.00,1.2001.31.10,1.2001.31.20,1.2001.32.00,1.2001.33.00,1.2001.34.10,1.2001.34.20,1.2001.34.30","1.2001.35.00","1.2001.39.00,1.2001.40.00,1.2001.50.00,1.2001.60.00,1.2001.70.00,1.2001.81.00,1.2001.82.00","1.2001.83.00","1.2001.89.00,1.2002.10.00,1.2002.20.00,1.2002.30.00,1.2002.40.00,1.2002.90.00"],
    nbs: {
      "1.2001.10.00": {
        descricao: "Serviços de manutenção e reparação de produtos metálicos, exceto maquinários e equipamentos",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2001.20.00": {
        descricao: "Serviços de manutenção e reparação de computadores e seus periféricos e de maquinário para escritório",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.31.10": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários motorizados",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.31.20": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários não motorizados",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.32.00": {
        descricao: "Serviços de manutenção e reparação de veículos sobre trilhos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.33.00": {
        descricao: "Serviços de manutenção e reparação de veículos aquaviários",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.10": {
        descricao: "Serviços de manutenção e reparação de aeronaves, exceto de motores, turborreatores e turbopropulsores aeronáuticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.20": {
        descricao: "Serviços de manutenção e reparação de motores, turborreatores e turbopropulsores aeronáuticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.34.30": {
        descricao: "Serviços de manutenção e reparação de foguetes e equipamentos aeroespaciais",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.35.00": {
        descricao: "Serviços de manutenção e reparação de veículos militares",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.2001.39.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de transporte não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2001.40.00": {
        descricao: "Serviços de manutenção e reparação de plataformas, inclusive navios-plataforma, para extração de petróleo e gás",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.50.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de uso industrial",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.60.00": {
        descricao: "Serviços de manutenção e reparação de maquinários e equipamentos de uso comercial",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.70.00": {
        descricao: "Serviços de manutenção e reparação de equipamentos e aparelhos de telecomunicações",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.81.00": {
        descricao: "Serviços de manutenção e reparação de aparelhos eletroeletrônicos domésticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.82.00": {
        descricao: "Serviços de manutenção e reparação de instrumentos e equipamentos médico-hospitalares, odontológicos, óticos e de precisão",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2001.83.00": {
        descricao: "Serviços de manutenção e reparação de equipamentos militares",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "200044": "Operações e prestações de serviços de segurança da informação e segurança cibernética desenvolvidos por sociedade que tenha sócio brasileiro (Anexo XI)",
        },
      },
      "1.2001.89.00": {
        descricao: "Serviços de manutenção e reparação de outros maquinários e equipamentos não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2002.10.00": {
        descricao: "Serviços de manutenção e reparação de produtos de couro, calçados, malas e bolsas",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.20.00": {
        descricao: "Serviços de manutenção e reparação de relógios e joias",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.30.00": {
        descricao: "Serviços de manutenção e reparação de móveis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.40.00": {
        descricao: "Serviços de manutenção de roupas e outros produtos têxteis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2002.90.00": {
        descricao: "Serviços de manutenção e reparação de outros bens de consumo não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "14.03": {
    descricao: "Recondicionamento de motores (exceto peças e partes empregadas, que ficam sujeitas ao ICMS).",
    id: "14.03",
    clusters: ["1.2001.31.10"],
    nbs: {
      "1.2001.31.10": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários motorizados",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.04": {
    descricao: "Recauchutagem ou regeneração de pneus.",
    id: "14.04",
    clusters: ["1.2002.90.00"],
    nbs: {
      "1.2002.90.00": {
        descricao: "Serviços de manutenção e reparação de outros bens de consumo não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.05": {
    descricao: "Restauração, Recondicionamento, Acondicionamento, Pintura, Beneficiamento, Lavagem, Secagem, Tingimento, Galvanoplastia, Anodização, Corte, Recorte, Plastificação, Costura, Acabamento, Polimento E Congêneres De Objetos Quaisquer. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "14.05",
    clusters: ["1.1804.00.00,1.2002.90.00"],
    nbs: {
      "1.1804.00.00": {
        descricao: "Serviços de acondicionamento e empacotamento",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2002.90.00": {
        descricao: "Serviços de manutenção e reparação de outros bens de consumo não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "14.06": {
    descricao: "Instalação E Montagem De Aparelhos, Máquinas E Equipamentos, Inclusive Montagem Industrial, Prestados Ao Usuário Final, Exclusivamente Com Material Por Ele Fornecido.",
    id: "14.06",
    clusters: ["1.0106.12.00,1.0106.13.00,1.0106.14.00,1.0106.31.00,1.0106.32.00,1.0106.40.00,1.0106.90.00,1.0107.60.00,1.2003.10.00,1.2003.21.10,1.2003.21.90,1.2003.22.00,1.2003.23.00,1.2003.24.00,1.2003.25.10,1.2003.25.20,1.2003.26.10,1.2003.26.90,1.2003.29.00,1.0106.19.00,1.0106.60.00"],
    nbs: {
      "1.0106.12.00": {
        descricao: "Serviços de instalação de alarmes contra incêndio",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0106.13.00": {
        descricao: "Serviços de instalação de sistemas de alarmes antifurto",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.14.00": {
        descricao: "Serviços de instalação de antenas residenciais",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.19.00": {
        descricao: "Serviços de instalação elétrica não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.31.00": {
        descricao: "Serviços de instalação de equipamentos de aquecimento",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.32.00": {
        descricao: "Serviços de instalação de equipamentos de ventilação e de ar condicionado",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.40.00": {
        descricao: "Serviços de instalação de gás",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.60.00": {
        descricao: "Serviços de instalação de elevadores, esteiras e escadas rolantes",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0106.90.00": {
        descricao: "Serviços de instalação não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0107.60.00": {
        descricao: "Serviços de instalação de cercas e grades",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.10.00": {
        descricao: "Serviços de instalação de produtos metálicos, exceto maquinário e equipamentos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.21.10": {
        descricao: "Serviços de montagem sob encomenda de turbinas industriais",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.21.90": {
        descricao: "Serviços de instalação de maquinários, aparelhos e equipamentos industriais não classificados em itens anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.22.00": {
        descricao: "Serviços de instalação de computadores e seus periféricos e maquinário de escritório",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.23.00": {
        descricao: "Serviços de instalação de equipamentos e aparelhos de comunicação, incluindo de rádio e de televisão",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.24.00": {
        descricao: "Serviços de instalação de maquinários, equipamentos, instrumentos e aparelhos médico-hospitalares, óticos e de precisão",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.25.10": {
        descricao: "Serviços de instalação de sensores e sistemas de armas",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.25.20": {
        descricao: "Serviços de instalação de maquinários, aparelhos e equipamentos de emprego militar",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.26.10": {
        descricao: "Serviços de montagem sob encomenda de motores, turborreatores e turbopropulsores aeronáuticos",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.26.90": {
        descricao: "Serviços de instalação de maquinários e equipamentos de transporte não classificados em itens anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2003.29.00": {
        descricao: "Serviços de instalação de maquinários, aparelhos e equipamentos não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "14.07": {
    descricao: "Colocação de molduras e congêneres.",
    id: "14.07",
    clusters: ["1.2606.00.00"],
    nbs: {
      "1.2606.00.00": {
        descricao: "Serviços pessoais não classificados em posições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.08": {
    descricao: "Encadernação, gravação e douração de livros, revistas e congêneres.",
    id: "14.08",
    clusters: ["1.2101.22.00"],
    nbs: {
      "1.2101.22.00": {
        descricao: "Serviços relacionados à impressão",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.09": {
    descricao: "Alfaiataria e costura, quando o material for fornecido pelo usuário final, exceto aviamento.",
    id: "14.09",
    clusters: ["1.2604.00.00,1.2002.40.00"],
    nbs: {
      "1.2002.40.00": {
        descricao: "Serviços de manutenção de roupas e outros produtos têxteis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2604.00.00": {
        descricao: "Serviços de confecção de roupas e outros artigos têxteis",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.10": {
    descricao: "Tinturaria e lavanderia.",
    id: "14.10",
    clusters: ["1.2601.10.00,1.2601.20.00,1.2601.30.00,1.2601.40.00,1.2601.90.00"],
    nbs: {
      "1.2601.10.00": {
        descricao: "Serviços de limpeza de têxteis, exceto quando realizados a seco",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2601.20.00": {
        descricao: "Serviços de limpeza a seco",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2601.30.00": {
        descricao: "Serviços de tinturaria",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2601.40.00": {
        descricao: "Serviços de passadoria de roupas e outros artigos têxteis",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.2601.90.00": {
        descricao: "Serviços de lavanderia não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
    },
  },
  "14.11": {
    descricao: "Tapeçaria e reforma de estofamentos em geral.",
    id: "14.11",
    clusters: ["1.2002.40.00"],
    nbs: {
      "1.2002.40.00": {
        descricao: "Serviços de manutenção de roupas e outros produtos têxteis",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.12": {
    descricao: "Funilaria e lanternagem.",
    id: "14.12",
    clusters: ["1.2001.31.10"],
    nbs: {
      "1.2001.31.10": {
        descricao: "Serviços de manutenção e reparação de veículos rodoviários motorizados",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.13": {
    descricao: "Carpintaria e serralheria.",
    id: "14.13",
    clusters: ["1.0107.50.00"],
    nbs: {
      "1.0107.50.00": {
        descricao: "Serviços de carpintaria e de serralharia",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "14.14": {
    descricao: "Guincho Intramunicipal, Guindaste E Içamento. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "14.14",
    clusters: ["1.0604.40.00,1.0601.90.00"],
    nbs: {
      "1.0601.90.00": {
        descricao: "Serviços de manuseio de cargas não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
      },
      "1.0604.40.00": {
        descricao: "Serviços de reboque para veículos particulares e comerciais",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.01": {
    descricao: "Administração De Fundos Quaisquer, De Consórcio, De Cartão De Crédito Ou Débito E Congêneres, De Carteira De Clientes, De Cheques Pré-Datados E Congêneres.",
    id: "15.01",
    clusters: ["1.0901.40.00,1.0905.21.00,1.0905.22.00,1.0905.23.00,1.0905.40.00,1.0906.40.00"],
    nbs: {
      "1.0901.40.00": {
        descricao: "Serviços de cartão de crédito",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "010002": "Operações do serviço financeiro",
        },
      },
      "1.0905.21.00": {
        descricao: "Serviços de gestão e administração de carteiras de ativos, exceto fundos de pensão",
      },
      "1.0905.22.00": {
        descricao: "Serviços de administração fundos de investimento e fundos de pensão",
      },
      "1.0905.23.00": {
        descricao: "Serviços de gestão e administração de trust",
      },
      "1.0905.40.00": {
        descricao: "Serviços relacionados à administração de mercados financeiros",
      },
      "1.0906.40.00": {
        descricao: "Serviços de gestão de fundos de previdência complementar",
      },
    },
  },
  "15.02": {
    descricao: "Abertura De Contas Em Geral, Inclusive Conta-Corrente, Conta De Investimentos E Aplicação E Caderneta De Poupança, No País E No Exterior, Bem Como A Manutenção Das Referidas Contas Ativas E Inativas.",
    id: "15.02",
    clusters: ["1.0901.21.00,1.0901.22.00,1.0901.29.00"],
    nbs: {
      "1.0901.21.00": {
        descricao: "Serviços de depósito para pessoas jurídicas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0901.22.00": {
        descricao: "Serviços de depósito para pessoas físicas",
      },
      "1.0901.29.00": {
        descricao: "Serviços de depósito para outros depositantes",
      },
    },
  },
  "15.03": {
    descricao: "Locação E Manutenção De Cofres Particulares, De Terminais Eletrônicos, De Terminais De Atendimento E De Bens E Equipamentos Em Geral.",
    id: "15.03",
    clusters: ["1.1101.90.00,1.2001.89.00"],
    nbs: {
      "1.1101.90.00": {
        descricao: "Arrendamento mercantil operacional ou locação de máquinas e equipamentos, sem operador, não classificado em subposições anteriores",
        indops: [
          { codigo: "10100.0", local: "local da entrega ou disponibilização" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2001.89.00": {
        descricao: "Serviços de manutenção e reparação de outros maquinários e equipamentos não classificados em subposições anteriores",
        indops: [
          { codigo: "50100.0", local: "local da prestação" },
        ],
      },
    },
  },
  "15.04": {
    descricao: "Fornecimento Ou Emissão De Atestados Em Geral, Inclusive Atestado De Idoneidade, Atestado De Capacidade Financeira E Congêneres.",
    id: "15.04",
    clusters: ["1.1301.30.00,1.1806.10.00"],
    nbs: {
      "1.1301.30.00": {
        descricao: "Serviços de documentação e certificação, exceto os serviços notariais e de registro",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.10.00": {
        descricao: "Serviços de informação cadastral e análise de crédito",
      },
    },
  },
  "15.05": {
    descricao: "Cadastro, Elaboração De Ficha Cadastral, Renovação Cadastral E Congêneres, Inclusão Ou Exclusão No Cadastro De Emitentes De Cheques Sem Fundos",
    id: "15.05",
    clusters: ["1.1806.10.00"],
    nbs: {
      "1.1806.10.00": {
        descricao: "Serviços de informação cadastral e análise de crédito",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.06": {
    descricao: "Emissão, Reemissão E Fornecimento De Avisos, Comprovantes E Documentos Em Geral; Abono De Firmas; Coleta E Entrega De Documentos, Bens E Valores; Comunicação Com Outra Agência Ou Com A Administração Central; Licenciamento Eletrônico De Veículos; Transferência De Veículos; Agenciamento Fiduciário Ou Depositário; Devolução De Bens Em Custódia.",
    id: "15.06",
    clusters: ["1.1301.30.00,1.0702.00.00"],
    nbs: {
      "1.0702.00.00": {
        descricao: "Serviços de coleta, transporte, remessa ou entrega de documentos ou encomendas, exceto remessas expressas",
      },
      "1.1301.30.00": {
        descricao: "Serviços de documentação e certificação, exceto os serviços notariais e de registro",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.07": {
    descricao: "Acesso, Movimentação, Atendimento E Consulta A Contas Em Geral, Por Qualquer Meio Ou Processo, Inclusive Por Telefone, Fac-Símile, Internet E Telex, Acesso A Terminais De Atendimento, Inclusive Vinte E Quatro Horas; Acesso A Outro Banco E A Rede Compartilhada; Fornecimento De Saldo, Extrato E Demais Informações Relativas A Contas Em Geral, Por Qualquer Meio Ou Processo.",
    id: "15.07",
    clusters: ["1.0901.90.00,1.1806.31.00"],
    nbs: {
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.31.00": {
        descricao: "Serviços de call center",
      },
    },
  },
  "15.08": {
    descricao: "Emissão, Reemissão, Alteração, Cessão, Substituição, Cancelamento E Registro De Contrato De Crédito; Estudo, Análise E Avaliação De Operações De Crédito; Emissão, Concessão, Alteração Ou Contratação De Aval, Fiança, Anuência E Congêneres; Serviços Relativos A Abertura De Crédito, Para Quaisquer Fins.",
    id: "15.08",
    clusters: ["1.0901.33.00,1.0901.34.00,1.0901.35.00,1.0901.36.00,1.0901.39.00,1.0905.50.00"],
    nbs: {
      "1.0901.33.00": {
        descricao: "Serviços de empréstimos e financiamentos pessoais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0901.34.00": {
        descricao: "Serviços de empréstimos e financiamentos comerciais",
      },
      "1.0901.35.00": {
        descricao: "Serviços de empréstimos e financiamentos industriais",
      },
      "1.0901.36.00": {
        descricao: "Serviços de empréstimos e financiamentos agropecuários",
      },
      "1.0901.39.00": {
        descricao: "Serviços de concessão de crédito não classificados em subposições anteriores",
      },
      "1.0905.50.00": {
        descricao: "Serviços de consultoria financeira",
      },
    },
  },
  "15.09": {
    descricao: "Arrendamento Mercantil (Leasing) De Quaisquer Bens, Inclusive Cessão De Direitos E Obrigações, Substituição De Garantia, Alteração, Cancelamento E Registro De Contrato, E Demais Serviços Relacionados Ao Arrendamento Mercantil (Leasing).",
    id: "15.09",
    clusters: ["1.0901.51.11,1.0901.51.12,1.0901.51.13,1.0901.51.14,1.0901.51.15,1.0901.51.16,1.0901.51.17,1.0901.51.21,1.0901.51.22,1.0901.51.23,1.0901.51.24,1.0901.51.25,1.0901.51.29,1.0901.52.10,1.0901.52.20,1.0901.52.30,1.0901.52.40,1.0901.52.50,1.0901.52.90,1.1101.11.00,1.1101.12.00,1.1101.13.00,1.1101.14.00,1.1101.15.00,1.1101.16.00,1.1101.17.00,1.1101.20.00,1.1101.30.00,1.1101.40.00,1.1101.50.00,1.1101.60.00,1.1101.90.00,1.1102.10.00,1.1102.20.00,1.1102.30.00,1.1102.40.00,1.1102.50.00,1.1102.60.00,1.1102.90.00"],
    nbs: {
      "1.0901.51.11": {
        descricao: "Arrendamento mercantil financeiro de veículos rodoviários automotores para o transporte de passageiros",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "010002": "Operações do serviço financeiro",
        },
      },
      "1.0901.51.12": {
        descricao: "Arrendamento mercantil financeiro de veículos rodoviários automotores para o transporte de mercadorias",
      },
      "1.0901.51.13": {
        descricao: "Arrendamento mercantil financeiro de veículos e equipamentos ferroviários",
      },
      "1.0901.51.14": {
        descricao: "Arrendamento mercantil financeiro de outros equipamentos de transporte terrestre, inclusive de veículos de uso misto",
      },
      "1.0901.51.15": {
        descricao: "Arrendamento mercantil financeiro de navios e outras embarcações",
      },
      "1.0901.51.16": {
        descricao: "Arrendamento mercantil financeiro de aeronaves",
      },
      "1.0901.51.17": {
        descricao: "Arrendamento mercantil financeiro de contêineres",
      },
      "1.0901.51.21": {
        descricao: "Arrendamento mercantil financeiro de máquinas e equipamentos agrícolas",
      },
      "1.0901.51.22": {
        descricao: "Arrendamento mercantil financeiro de máquinas e equipamentos de construção",
      },
      "1.0901.51.23": {
        descricao: "Arrendamento mercantil financeiro de máquinas e equipamentos para escritórios, exceto computadores",
      },
      "1.0901.51.24": {
        descricao: "Arrendamento mercantil financeiro de computadores",
      },
      "1.0901.51.25": {
        descricao: "Arrendamento mercantil financeiro de equipamentos de telecomunicação",
      },
      "1.0901.51.29": {
        descricao: "Arrendamento mercantil financeiro de outras máquinas e equipamentos não classificado em subposições anteriores",
      },
      "1.0901.52.10": {
        descricao: "Arrendamento mercantil financeiro de televisões e outros eletroeletrônicos domésticos, bem como seus acessórios",
      },
      "1.0901.52.20": {
        descricao: "Arrendamento mercantil financeiro de mídias gravadas",
      },
      "1.0901.52.30": {
        descricao: "Arrendamento mercantil financeiro de móveis e eletrodomésticos",
      },
      "1.0901.52.40": {
        descricao: "Arrendamento mercantil financeiro de equipamentos para diversão e lazer",
      },
      "1.0901.52.50": {
        descricao: "Arrendamento mercantil financeiro de artigos de cama, mesa e banho",
      },
      "1.0901.52.90": {
        descricao: "Arrendamento mercantil financeiro de outras mercadorias não classificado em subposições anteriores",
      },
      "1.1101.11.00": {
        descricao: "Arrendamento mercantil operacional ou locação de veículos rodoviários automotores para o transporte de até oito passageiros, sem operador",
      },
      "1.1101.12.00": {
        descricao: "Arrendamento mercantil operacional ou locação de veículos rodoviários automotores para o transporte de cargas, sem operador",
      },
      "1.1101.13.00": {
        descricao: "Arrendamento mercantil operacional ou locação de veículos e equipamentos de transporte ferroviário, sem operador",
      },
      "1.1101.14.00": {
        descricao: "Arrendamento mercantil operacional ou locação de outros equipamentos de transporte terrestre, inclusive de veículos de uso misto, sem operador",
      },
      "1.1101.15.00": {
        descricao: "Arrendamento mercantil operacional ou locação de navios e outras embarcações, sem tripulação",
      },
      "1.1101.16.00": {
        descricao: "Arrendamento mercantil operacional ou locação de aeronaves, sem tripulação",
      },
      "1.1101.17.00": {
        descricao: "Arrendamento mercantil operacional ou locação de contêineres",
      },
      "1.1101.20.00": {
        descricao: "Arrendamento mercantil operacional ou locação de máquinas e equipamentos agrícolas, sem operador",
      },
      "1.1101.30.00": {
        descricao: "Arrendamento mercantil operacional ou locação de máquinas e equipamentos de construção, sem operador",
      },
      "1.1101.40.00": {
        descricao: "Arrendamento mercantil operacional ou locação de máquinas e equipamentos para escritórios, exceto computadores, sem operador",
      },
      "1.1101.50.00": {
        descricao: "Arrendamento mercantil operacional ou locação de computadores, sem operador",
      },
      "1.1101.60.00": {
        descricao: "Arrendamento mercantil operacional ou locação de equipamentos de telecomunicação, sem operador",
      },
      "1.1101.90.00": {
        descricao: "Arrendamento mercantil operacional ou locação de máquinas e equipamentos, sem operador, não classificado em subposições anteriores",
      },
      "1.1102.10.00": {
        descricao: "Arrendamento mercantil operacional ou locação de televisão e outros eletroeletrônicos, bem como seus acessórios",
      },
      "1.1102.20.00": {
        descricao: "Arrendamento mercantil operacional ou locação de mídias gravadas",
      },
      "1.1102.30.00": {
        descricao: "Arrendamento mercantil operacional ou locação de móveis e eletrodomésticos",
      },
      "1.1102.40.00": {
        descricao: "Arrendamento mercantil operacional ou locação de equipamentos para diversão e lazer",
      },
      "1.1102.50.00": {
        descricao: "Arrendamento mercantil operacional ou locação de artigos de cama, mesa e banho",
      },
      "1.1102.60.00": {
        descricao: "Arrendamento mercantil operacional ou locação de roupas e calçados",
      },
      "1.1102.90.00": {
        descricao: "Arrendamento mercantil operacional ou locação de outras mercadorias não classificado em subposições anteriores",
      },
    },
  },
  "15.10": {
    descricao: "Serviços Relacionados A Cobranças, Recebimentos Ou Pagamentos Em Geral, De Títulos Quaisquer, De Contas Ou Carnês, De Câmbio, De Tributos E Por Conta De Terceiros, Inclusive Os Efetuados Por Meio Eletrônico, Automático Ou Por Máquinas De Atendimento; Fornecimento De Posição De Cobrança, Recebimento Ou Pagamento; Emissão De Carnês, Fichas De Compensação, Impressos E Documentos Em Geral.",
    id: "15.10",
    clusters: ["1.1806.20.00,1.0901.90.00"],
    nbs: {
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
      },
      "1.1806.20.00": {
        descricao: "Serviços de cobrança",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.11": {
    descricao: "Devolução De Títulos, Protesto De Títulos, Sustação De Protesto, Manutenção De Títulos, Reapresentação De Títulos, E Demais Serviços A Eles Relacionados.",
    id: "15.11",
    clusters: ["1.0901.90.00"],
    nbs: {
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.12": {
    descricao: "Custódia Em Geral, Inclusive De Títulos E Valores Mobiliários.",
    id: "15.12",
    clusters: ["1.0905.30.00"],
    nbs: {
      "1.0905.30.00": {
        descricao: "Serviços de guarda e custódia",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.13": {
    descricao: "Serviços Relacionados A Operações De Câmbio Em Geral, Edição, Alteração, Prorrogação, Cancelamento E Baixa De Contrato De Câmbio; Emissão De Registro De Exportação Ou De Crédito; Cobrança Ou Depósito No Exterior; Emissão, Fornecimento E Cancelamento De Cheques De Viagem; Fornecimento, Transferência, Cancelamento E Demais Serviços Relativos A Carta De Crédito De Importação, Exportação E Garantias Recebidas; Envio E Recebimento De Mensagens Em Geral Relacionadas A Operações De Câmbio.",
    id: "15.13",
    clusters: ["1.0905.60.00"],
    nbs: {
      "1.0905.60.00": {
        descricao: "Serviços de câmbio",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.14": {
    descricao: "Fornecimento, Emissão, Reemissão, Renovação E Manutenção De Cartão Magnético, Cartão De Crédito, Cartão De Débito, Cartão Salário E Congêneres.",
    id: "15.14",
    clusters: ["1.0901.40.00,1.0901.90.00"],
    nbs: {
      "1.0901.40.00": {
        descricao: "Serviços de cartão de crédito",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
      },
    },
  },
  "15.15": {
    descricao: "Compensação De Cheques E Títulos Quaisquer; Serviços Relacionados A Depósito, Inclusive Depósito Identificado, A Saque De Contas Quaisquer, Por Qualquer Meio Ou Processo, Inclusive Em Terminais Eletrônicos E De Atendimento.",
    id: "15.15",
    clusters: ["1.0901.21.00,1.0901.22.00,1.0901.29.00,1.0905.13.00"],
    nbs: {
      "1.0901.21.00": {
        descricao: "Serviços de depósito para pessoas jurídicas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0901.22.00": {
        descricao: "Serviços de depósito para pessoas físicas",
      },
      "1.0901.29.00": {
        descricao: "Serviços de depósito para outros depositantes",
      },
      "1.0905.13.00": {
        descricao: "Serviços de compensação de transações financeiras, inclusive com ativos financeiros (clearinghouse)",
      },
    },
  },
  "15.16": {
    descricao: "Emissão, Reemissão, Liquidação, Alteração, Cancelamento E Baixa De Ordens De Pagamento, Ordens De Crédito E Similares, Por Qualquer Meio Ou Processo; Serviços Relacionados À Transferência De Valores, Dados, Fundos, Pagamentos E Similares, Inclusive Entre Contas Em Geral.",
    id: "15.16",
    clusters: ["1.0901.90.00"],
    nbs: {
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.17": {
    descricao: "Emissão, Fornecimento, Devolução, Sustação, Cancelamento E Oposição De Cheques Quaisquer, Avulso Ou Por Talão.",
    id: "15.17",
    clusters: ["1.0901.90.00"],
    nbs: {
      "1.0901.90.00": {
        descricao: "Serviços financeiros, exceto bancos de investimento, serviços de seguros e previdência complementar não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "15.18": {
    descricao: "Serviços Relacionados A Crédito Imobiliário, Avaliação E Vistoria De Imóvel Ou Obra, Análise Técnica E Jurídica, Emissão, Reemissão, Alteração, Transferência E Renegociação De Contrato, Emissão E Reemissão Do Termo De Quitação E Demais Serviços Relacionados A Crédito Imobiliário.",
    id: "15.18",
    clusters: ["1.0901.31.00,1.0901.32.00,1.1001.30.00"],
    nbs: {
      "1.0901.31.00": {
        descricao: "Serviços de financiamentos imobiliários residenciais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0901.32.00": {
        descricao: "Serviços de financiamentos imobiliários não residenciais",
      },
      "1.1001.30.00": {
        descricao: "Serviços de avaliação de imóveis",
      },
    },
  },
  "16.01": {
    descricao: "Serviços De Transporte Coletivo Municipal Rodoviário, Metroviário, Ferroviário E Aquaviário De Passageiros. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "16.01",
    clusters: ["1.0401.11.19","1.0401.16.10","1.0401.16.20","1.0401.16.90","1.0401.21.10","1.0401.21.90","1.0401.30.00"],
    nbs: {
      "1.0401.11.19": {
        descricao: "Serviços de transporte rodoviário local regular de passageiros, exceto em áreas metropolitanas não classificados em subitens anteriores",
        indops: [
          { codigo: "60101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "400001": "Fornecimento de serviços de transporte público coletivo de passageiros rodoviário e metroviário",
        },
      },
      "1.0401.16.10": {
        descricao: "Serviços de transporte ferroviário local de passageiros",
        cClassTrib: {
          "200021": "Serviços de transporte público coletivo de passageiros ferroviário e hidroviário",
        },
      },
      "1.0401.16.20": {
        descricao: "Serviços de transporte metroviário (metrô) local de passageiros",
        cClassTrib: {
          "400001": "Fornecimento de serviços de transporte público coletivo de passageiros rodoviário e metroviário",
        },
      },
      "1.0401.16.90": {
        descricao: "Serviços de transporte local de passageiros por veículos sobre trilhos não classificados em itens anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0401.21.10": {
        descricao: "Serviços de transporte aquaviário local de passageiros, por navegação interior, em embarcações para travessia",
        cClassTrib: {
          "200021": "Serviços de transporte público coletivo de passageiros ferroviário e hidroviário",
        },
      },
      "1.0401.21.90": {
        descricao: "Serviços de transporte aquaviário local de passageiros, por navegação interior não classificados em itens anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0401.30.00": {
        descricao: "Serviços de transporte integrado local de passageiros",
        cClassTrib: {
          "400001": "Fornecimento de serviços de transporte público coletivo de passageiros rodoviário e metroviário",
        },
      },
    },
  },
  "16.02": {
    descricao: "Outros Serviços De Transporte De Natureza Municipal. (Incluído Pela Lei Complementar Nº 157, De 2016)",
    id: "16.02",
    clusters: ["1.0401.21.90,1.0401.11.11,1.0401.12.10,1.0401.12.20,1.0401.12.90,1.0401.13.00,1.0401.14.00,1.0401.15.10,1.0401.15.20,1.0401.19.00,1.0401.21.20,1.0401.22.00,1.0401.29.00,1.0401.41.00,1.0401.42.00,1.0401.49.00,1.0401.90.00,1.0404.10.00,1.0404.20.00,1.0404.30.00,1.0405.00.00,1.0501.11.10,1.0501.11.20,1.0501.11.30,1.0501.12.10,1.0501.12.20,1.0501.12.30,1.0501.13.10,1.0501.13.20,1.0501.14.10,1.0501.14.20,1.0501.14.30,1.0501.14.40,1.0501.14.51,1.0501.14.52,1.0501.14.59,1.0501.15.00,1.0501.19.00,1.0502.11.10,1.0502.11.20,1.0502.11.30,1.0502.12.10,1.0502.12.20,1.0502.12.30,1.0502.13.10,1.0502.13.20,1.0502.14.10,1.0502.14.20,1.0502.14.30,1.0502.14.40,1.0502.14.51,1.0502.14.52,1.0502.14.59,1.0502.14.90,1.0502.19.00,1.0502.21.10,1.0502.21.20,1.0502.21.30,1.0502.22.10,1.0502.22.20,1.0502.22.30,1.0502.23.10,1.0502.23.20,1.0502.24.10,1.0502.24.20,1.0502.24.30,1.0502.24.40,1.0502.24.51,1.0502.24.52,1.0502.24.59,1.0502.29.00,1.0505.10.00,1.0505.20.00,1.0505.30.00"],
    nbs: {
      "1.0401.11.11": {
        descricao: "Serviços de transporte rodoviário local prestados exclusivamente por meio de ônibus",
      },
      "1.0401.12.10": {
        descricao: "Serviços de transporte escolar",
      },
      "1.0401.12.20": {
        descricao: "Serviços de transporte para aeroportos (shuttle)",
      },
      "1.0401.12.90": {
        descricao: "Serviços especiais de transporte rodoviário local regular de passageiros não classificados em itens anteriores",
      },
      "1.0401.13.00": {
        descricao: "Serviços de táxi",
      },
      "1.0401.14.00": {
        descricao: "Serviços de carro com motorista, exceto táxi",
      },
      "1.0401.15.10": {
        descricao: "Serviços de fretamento contínuo, local",
      },
      "1.0401.15.20": {
        descricao: "Serviços de fretamento eventual ou turístico, local",
      },
      "1.0401.19.00": {
        descricao: "Serviços de transporte terrestre local de passageiros não classificados em subposições anteriores",
      },
      "1.0401.21.20": {
        descricao: "Serviços de transporte aquaviário local de passageiros, por navegação interior, em embarcações para cruzeiros",
      },
      "1.0401.21.90": {
        descricao: "Serviços de transporte aquaviário local de passageiros, por navegação interior não classificados em itens anteriores",
        indops: [
          { codigo: "60101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0401.22.00": {
        descricao: "Serviços de transporte aquaviário local de passageiros por fretamento",
      },
      "1.0401.29.00": {
        descricao: "Serviços de transporte aquaviário local de passageiros não classificados em subposições anteriores",
      },
      "1.0401.41.00": {
        descricao: "Serviços de táxi aéreo local",
      },
      "1.0401.42.00": {
        descricao: "Serviços de transporte aéreo local de passageiros por fretamento",
      },
      "1.0401.49.00": {
        descricao: "Serviços de transporte aéreo local de passageiros não classificados em subposições anteriores",
      },
      "1.0401.90.00": {
        descricao: "Serviços de transporte local de passageiros não classificados não classificados em subposições anteriores",
      },
      "1.0404.10.00": {
        descricao: "Locação de veículos rodoviários de passageiros com motorista",
      },
      "1.0404.20.00": {
        descricao: "Locação de embarcações de passageiros com tripulação",
      },
      "1.0404.30.00": {
        descricao: "Locação de aeronaves de passageiros com tripulação",
      },
      "1.0405.00.00": {
        descricao: "Afretamento de embarcações de passageiros por tempo",
      },
      "1.0501.11.10": {
        descricao: "Serviços de transporte rodoviário de cargas sólidas a granel",
        indops: [
          { codigo: "70100.0", local: "local da prestação" },
        ],
      },
      "1.0501.11.20": {
        descricao: "Serviços de transporte rodoviário de cargas líquidas, ou liquefeitas, a granel",
      },
      "1.0501.11.30": {
        descricao: "Serviços de transporte rodoviário de cargas gasosas a granel",
      },
      "1.0501.12.10": {
        descricao: "Serviços de transporte rodoviário de carga solta, não unitizada",
      },
      "1.0501.12.20": {
        descricao: "Serviços de transporte rodoviário de carga unitizada",
      },
      "1.0501.12.30": {
        descricao: "Serviços de transporte rodoviário de carga frigorificada ou climatizada",
      },
      "1.0501.13.10": {
        descricao: "Serviços de transporte rodoviário de cargas em contêineres frigorificados ou climatizados",
      },
      "1.0501.13.20": {
        descricao: "Serviços de transporte rodoviário de cargas em contêineres não frigorificados ou climatizados",
      },
      "1.0501.14.10": {
        descricao: "Serviços de transporte rodoviário de cargas vivas",
      },
      "1.0501.14.20": {
        descricao: "Serviços de transporte rodoviário de mudanças domésticas e de mobília e outros objetos de escritório",
      },
      "1.0501.14.30": {
        descricao: "Serviços de transporte rodoviário de cargas de grande porte",
      },
      "1.0501.14.40": {
        descricao: "Serviços de transporte rodoviário de veículos",
      },
      "1.0501.14.51": {
        descricao: "Serviços de transporte rodoviário de combustíveis, lubrificantes e GLP, inclusive apresentados em botijões metálicos",
      },
      "1.0501.14.52": {
        descricao: "Serviços de transporte rodoviário de produtos químicos perigosos, exceto lubrificantes e GLP",
      },
      "1.0501.14.59": {
        descricao: "Serviços de transporte rodoviário de produtos perigosos não classificados em subitens anteriores",
      },
      "1.0501.15.00": {
        descricao: "Serviços de transporte rodoviário de cargas postais e malotes",
      },
      "1.0501.19.00": {
        descricao: "Serviços de transporte rodoviário de cargas não classificados em subposições anteriores",
      },
      "1.0502.11.10": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas sólidas, a granel",
      },
      "1.0502.11.20": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas líquidas, ou liquefeitas, a granel",
      },
      "1.0502.11.30": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas gasosas a granel",
      },
      "1.0502.12.10": {
        descricao: "Serviços de transporte aquaviário por navegação interior de carga solta, não unitizada",
      },
      "1.0502.12.20": {
        descricao: "Serviços de transporte aquaviário por navegação interior de carga unitizada",
      },
      "1.0502.12.30": {
        descricao: "Serviços de transporte aquaviário por navegação interior de carga frigorificada ou climatizada",
      },
      "1.0502.13.10": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas em contêineres frigorificados ou climatizados",
      },
      "1.0502.13.20": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas em contêineres não frigorificados ou climatizados",
      },
      "1.0502.14.10": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas vivas",
      },
      "1.0502.14.20": {
        descricao: "Serviços de transporte aquaviário por navegação interior de mudanças domésticas e de mobília e outros objetos de escritório",
      },
      "1.0502.14.30": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas de grande porte",
      },
      "1.0502.14.40": {
        descricao: "Serviços de transporte aquaviário por navegação interior de veículos",
      },
      "1.0502.14.51": {
        descricao: "Serviços de transporte aquaviário por navegação interior de combustíveis, lubrificantes e GLP, inclusive apresentado em botijões metálicos",
      },
      "1.0502.14.52": {
        descricao: "Serviços de transporte aquaviário por navegação interior de produtos químicos perigosos, exceto lubrificantes e GLP",
      },
      "1.0502.14.59": {
        descricao: "Serviços de transporte aquaviário por navegação interior de produtos perigosos não classificados em subposições anteriores",
      },
      "1.0502.14.90": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas especiais não classificados em subposições anteriores",
      },
      "1.0502.19.00": {
        descricao: "Serviços de transporte aquaviário por navegação interior de cargas não classificados em subposições anteriores",
      },
      "1.0502.21.10": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas sólidas a granel",
      },
      "1.0502.21.20": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas líquidas ou liquefeitas, a granel",
      },
      "1.0502.21.30": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas gasosas a granel",
      },
      "1.0502.22.10": {
        descricao: "Serviços de transporte aquaviário costeiro de carga solta, não unitizada",
      },
      "1.0502.22.20": {
        descricao: "Serviços de transporte aquaviário costeiro de carga unitizada",
      },
      "1.0502.22.30": {
        descricao: "Serviços de transporte aquaviário costeiro de carga frigorificada ou climatizada",
      },
      "1.0502.23.10": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas em contêineres frigorificados ou climatizados",
      },
      "1.0502.23.20": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas em contêineres não classificados em subposições anteriores",
      },
      "1.0502.24.10": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas vivas",
      },
      "1.0502.24.20": {
        descricao: "Serviços de transporte aquaviário costeiro de mudanças domésticas e de mobília e outros objetos de escritório",
      },
      "1.0502.24.30": {
        descricao: "Serviços de transporte aquaviário costeiro de cargas de grande porte",
      },
      "1.0502.24.40": {
        descricao: "Serviços de transporte aquaviário costeiro de veículos",
      },
      "1.0502.24.51": {
        descricao: "Serviços de transporte aquaviário costeiro de combustíveis, lubrificantes e GLP, inclusive apresentado em botijões metálicos",
      },
      "1.0502.24.52": {
        descricao: "Serviços de transporte aquaviário costeiro de produtos químicos perigosos, exceto lubrificantes e GLP",
      },
      "1.0502.24.59": {
        descricao: "Serviços de transporte aquaviário costeiro de produtos perigosos não classificados em subposições anteriores",
      },
      "1.0502.29.00": {
        descricao: "Serviços de transportes aquaviário costeiro de cargas não classificados em subposições anteriores",
      },
      "1.0505.10.00": {
        descricao: "Locação de veículos rodoviários de carga com operador",
      },
      "1.0505.20.00": {
        descricao: "Locação de embarcações de carga com tripulação",
      },
      "1.0505.30.00": {
        descricao: "Locação de aeronaves de carga com tripulação",
      },
    },
  },
  "17.01": {
    descricao: "Assessoria Ou Consultoria De Qualquer Natureza, Não Contida Em Outros Itens Desta Lista; Análise, Exame, Pesquisa, Coleta, Compilação E Fornecimento De Dados E Informações De Qualquer Natureza, Inclusive Cadastro E Similares.",
    id: "17.01",
    clusters: ["1.0608.40.00,1.1001.40.00,1.1001.50.00,1.1001.90.00,1.1301.30.00,1.1303.10.00,1.1303.20.00,1.1401.11.00,1.1401.13.00,1.1401.14.00,1.1401.15.00,1.1401.16.00,1.1401.17.00,1.1401.18.00,1.1401.19.00,1.1401.39.00,1.1410.10.00,1.1410.90.00,1.1412.00.00,1.1413.00.00,1.1414.00.00,1.1407.00.00,1.1806.10.00"],
    nbs: {
      "1.0608.40.00": {
        descricao: "Serviços de consolidação ou desconsolidação documental de cargas no transporte multimodal",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1001.40.00": {
        descricao: "Serviços de consultoria imobiliária",
      },
      "1.1001.50.00": {
        descricao: "Serviços de assessoria de gestão condominial",
      },
      "1.1001.90.00": {
        descricao: "Serviços imobiliários não classificados em subposições anteriores",
      },
      "1.1301.30.00": {
        descricao: "Serviços de documentação e certificação, exceto os serviços notariais e de registro",
      },
      "1.1303.10.00": {
        descricao: "Serviços de consultoria tributária para pessoas jurídicas",
      },
      "1.1303.20.00": {
        descricao: "Serviços de consultoria tributária para pessoas físicas",
      },
      "1.1401.11.00": {
        descricao: "Serviços de consultoria em gestão estratégica",
      },
      "1.1401.13.00": {
        descricao: "Serviços de consultoria em gestão de recursos humanos",
      },
      "1.1401.14.00": {
        descricao: "Serviços de consultoria em gestão de marketing",
      },
      "1.1401.15.00": {
        descricao: "Serviços de consultoria em gestão operacional",
      },
      "1.1401.16.00": {
        descricao: "Serviços de consultoria em gestão energética",
      },
      "1.1401.17.00": {
        descricao: "Serviços de consultoria em gestão de cadeia logística",
      },
      "1.1401.18.00": {
        descricao: "Serviços de consultoria em gestão hospitalar",
      },
      "1.1401.19.00": {
        descricao: "Serviços de consultoria em gestão empresarial não classificados em subposições anteriores",
      },
      "1.1401.39.00": {
        descricao: "Serviços de assessoria empresarial não classificados em subposições anteriores",
      },
      "1.1407.00.00": {
        descricao: "Pesquisas de mercado e serviços de pesquisa de opinião pública",
      },
      "1.1410.10.00": {
        descricao: "Serviços de consultoria ambiental",
      },
      "1.1410.90.00": {
        descricao: "Serviços de consultoria técnica e científica não classificados em subposições anteriores",
      },
      "1.1412.00.00": {
        descricao: "Serviços para registros de marcas comerciais e de franquias empresariais, exceto as licenças de uso de direito",
      },
      "1.1413.00.00": {
        descricao: "Serviços de prospecção de clientes",
      },
      "1.1414.00.00": {
        descricao: "Serviços de prospecção de fornecedores",
      },
      "1.1806.10.00": {
        descricao: "Serviços de informação cadastral e análise de crédito",
      },
    },
  },
  "17.02": {
    descricao: "Datilografia, Digitação, Estenografia, Expediente, Secretaria Em Geral, Resposta Audível, Redação, Edição, Interpretação, Revisão, Tradução, Apoio E Infra-Estrutura Administrativa E Congêneres.",
    id: "17.02",
    clusters: ["1.1411.00.00,1.1806.31.00,1.1806.39.00,1.1806.40.00,1.1806.52.00,1.1806.53.00,1.1806.59.00"],
    nbs: {
      "1.1411.00.00": {
        descricao: "Serviços de tradução e de intérpretes",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.31.00": {
        descricao: "Serviços de call center",
      },
      "1.1806.39.00": {
        descricao: "Serviços de apoio às atividades empresariais por meio de telefone não classificados em subposições anteriores",
      },
      "1.1806.40.00": {
        descricao: "Serviços combinados de escritório e apoio administrativo",
      },
      "1.1806.52.00": {
        descricao: "Serviços de execução e envio de mala direta e de elaboração de listas de endereços",
      },
      "1.1806.53.00": {
        descricao: "Serviços de preparação de documentos",
      },
      "1.1806.59.00": {
        descricao: "Serviços especializados de apoio a escritório não classificados em subposições anteriores",
      },
    },
  },
  "17.03": {
    descricao: "Planejamento, Coordenação, Programação Ou Organização Técnica, Financeira Ou Administrativa.",
    id: "17.03",
    clusters: ["1.1401.29.00,1.1401.39.00"],
    nbs: {
      "1.1401.29.00": {
        descricao: "Serviços de gestão não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1401.39.00": {
        descricao: "Serviços de assessoria empresarial não classificados em subposições anteriores",
      },
    },
  },
  "17.04": {
    descricao: "Recrutamento, Agenciamento, Seleção E Colocação De Mão-De-Obra.",
    id: "17.04",
    clusters: ["1.1801.11.00,1.1801.12.00"],
    nbs: {
      "1.1801.11.00": {
        descricao: "Serviço de recrutamento e seleção de profissionais executivos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1801.12.00": {
        descricao: "Serviço de recrutamento e seleção de profissionais, exceto executivos",
      },
    },
  },
  "17.05": {
    descricao: "Fornecimento De Mão-De-Obra, Mesmo Em Caráter Temporário, Inclusive De Empregados Ou Trabalhadores, Avulsos Ou Temporários, Contratados Pelo Prestador De Serviço.",
    id: "17.05",
    clusters: ["1.1801.21.00,1.1801.22.00,1.1801.29.00"],
    nbs: {
      "1.1801.21.00": {
        descricao: "Serviços de fornecimento de mão de obra terceirizada, exceto temporária",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1801.22.00": {
        descricao: "Serviços de fornecimento de mão de obra temporária",
      },
      "1.1801.29.00": {
        descricao: "Serviços de fornecimento de mão de obra não classificados em subposições anteriores",
      },
    },
  },
  "17.06": {
    descricao: "Propaganda E Publicidade, Inclusive Promoção De Vendas, Planejamento De Campanhas Ou Sistemas De Publicidade, Elaboração De Desenhos, Textos E Demais Materiais Publicitários.",
    id: "17.06",
    clusters: ["1.1406.11.00,1.1406.12.00,1.1406.19.00,1.1407.00.00"],
    nbs: {
      "1.1406.11.00": {
        descricao: "Serviços de campanhas publicitárias",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1406.12.00": {
        descricao: "Serviços de marketing direto e mala direta",
      },
      "1.1406.19.00": {
        descricao: "Serviços de propaganda não classificados em subposições anteriores",
      },
      "1.1407.00.00": {
        descricao: "Pesquisas de mercado e serviços de pesquisa de opinião pública",
      },
    },
  },
  "17.08": {
    descricao: "Franquia (Franchising).",
    id: "17.08",
    clusters: ["1.1110.00.00"],
    nbs: {
      "1.1110.00.00": {
        descricao: "Franquia",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.09": {
    descricao: "Perícias, Laudos, Exames Técnicos E Análises Técnicas.",
    id: "17.09",
    clusters: ["1.1404.41.00","1.1404.41.00,1.1404.42.00,1.1404.43.00,1.1404.44.00,1.1404.49.00"],
    nbs: {
      "1.1404.41.00": {
        descricao: "Serviços de análise e de exames técnicos sobre pureza e composição",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200038": "Fornecimento dos insumos agropecuários e aquícolas (Anexo IX)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1404.42.00": {
        descricao: "Serviços de análise e de exames técnicos de propriedades físicas",
      },
      "1.1404.43.00": {
        descricao: "Serviços de análise e de exames técnicos de sistemas elétricos e mecânicos",
      },
      "1.1404.44.00": {
        descricao: "Serviços de inspeção técnica de veículos de transporte rodoviário",
      },
      "1.1404.49.00": {
        descricao: "Serviços de análise e de exames técnicos não classificados em subposições anteriores",
      },
    },
  },
  "17.10": {
    descricao: "Planejamento, Organização E Administração De Feiras, Exposições, Congressos E Congêneres.",
    id: "17.10",
    clusters: ["1.1806.61.00,1.1806.62.00,1.1806.63.00"],
    nbs: {
      "1.1806.61.00": {
        descricao: "Serviços de assistência e organização de convenções",
        indops: [
          { codigo: "40101.0", local: "local do evento" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.62.00": {
        descricao: "Serviços de assistência e organização de feiras de negócios",
      },
      "1.1806.63.00": {
        descricao: "Serviços de assistência e organização de exposições e outros eventos",
      },
    },
  },
  "17.11": {
    descricao: "Organização De Festas E Recepções; Bufê (Exceto O Fornecimento De Alimentação E Bebidas, Que Fica Sujeito Ao ICMS).",
    id: "17.11",
    clusters: ["1.1806.63.00,1.0301.10.00,1.0301.31.00,1.0301.39.00"],
    nbs: {
      "1.0301.10.00": {
        descricao: "Fornecimento de refeições acompanhado de serviços de restaurante",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.0301.31.00": {
        descricao: "Fornecimento de alimentação para eventos",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.0301.39.00": {
        descricao: "Fornecimento de alimentação, incluindo refeições, sob contrato não classificado em subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.1806.63.00": {
        descricao: "Serviços de assistência e organização de exposições e outros eventos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.12": {
    descricao: "Administração Em Geral, Inclusive De Bens E Negócios De Terceiros.",
    id: "17.12",
    clusters: ["1.1001.11.00,1.1001.12.90","1.1401.21.00,1.1401.22.00"],
    nbs: {
      "1.1001.11.00": {
        descricao: "Serviços de administração e locação de imóveis residenciais",
        indops: [
          { codigo: "20301.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "200046": "Operações com bens imóveis",
        },
      },
      "1.1001.12.90": {
        descricao: "Serviços de administração e locação de outros imóveis não residenciais",
      },
      "1.1401.21.00": {
        descricao: "Serviços de gestão em processos de negócios",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1401.22.00": {
        descricao: "Serviços de gestão hospitalar",
      },
    },
  },
  "17.13": {
    descricao: "Leilão E Congêneres.",
    id: "17.13",
    clusters: ["1.1806.90.00"],
    nbs: {
      "1.1806.90.00": {
        descricao: "Serviços de apoio não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.14": {
    descricao: "Advocacia.",
    id: "17.14",
    clusters: ["1.1301.10.00,1.1301.20.00,1.1301.90.00"],
    nbs: {
      "1.1301.10.00": {
        descricao: "Serviços de representação e consultoria jurídica criminal",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1301.20.00": {
        descricao: "Serviços de representação e consultoria jurídica em outras áreas do direito, exceto consultoria tributária",
      },
      "1.1301.90.00": {
        descricao: "Serviços jurídicos não classificados em subposições anteriores",
      },
    },
  },
  "17.15": {
    descricao: "Arbitragem De Qualquer Espécie, Inclusive Jurídica.",
    id: "17.15",
    clusters: ["1.1301.40.00"],
    nbs: {
      "1.1301.40.00": {
        descricao: "Serviços de arbitragem, conciliação e mediação",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.16": {
    descricao: "Auditoria.",
    id: "17.16",
    clusters: ["1.1302.11.00","1.1302.19.00"],
    nbs: {
      "1.1302.11.00": {
        descricao: "Serviços de auditoria contábil",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1302.19.00": {
        descricao: "Serviços de auditoria não classificados em subposições anteriores",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.17": {
    descricao: "Análise De Organização E Métodos.",
    id: "17.17",
    clusters: ["1.1806.90.00"],
    nbs: {
      "1.1806.90.00": {
        descricao: "Serviços de apoio não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.18": {
    descricao: "Atuária E Cálculos Técnicos De Qualquer Natureza.",
    id: "17.18",
    clusters: ["1.0906.30.00"],
    nbs: {
      "1.0906.30.00": {
        descricao: "Serviços atuariais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.19": {
    descricao: "Contabilidade, Inclusive Serviços Técnicos E Auxiliares.",
    id: "17.19",
    clusters: ["1.1302.21.00,1.1302.22.00,1.1302.23.00"],
    nbs: {
      "1.1302.21.00": {
        descricao: "Serviços de contabilidade",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1302.22.00": {
        descricao: "Serviços de escrituração mercantil",
      },
      "1.1302.23.00": {
        descricao: "Serviços de folha de pagamento",
      },
    },
  },
  "17.20": {
    descricao: "Consultoria E Assessoria Econômica Ou Financeira.",
    id: "17.20",
    clusters: ["1.0905.50.00,1.0905.70.00,1.0905.80.00,1.1401.12.00"],
    nbs: {
      "1.0905.50.00": {
        descricao: "Serviços de consultoria financeira",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.0905.70.00": {
        descricao: "Serviços de classificação de risco (rating)",
      },
      "1.0905.80.00": {
        descricao: "Serviços fiduciários",
      },
      "1.1401.12.00": {
        descricao: "Serviços de consultoria em gestão financeira",
      },
    },
  },
  "17.21": {
    descricao: "Estatística.",
    id: "17.21",
    clusters: ["1.1415.00.00"],
    nbs: {
      "1.1415.00.00": {
        descricao: "Serviços profissionais, técnicos e gerenciais não classificados em posições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
    },
  },
  "17.22": {
    descricao: "Cobrança Em Geral.",
    id: "17.22",
    clusters: ["1.1806.20.00"],
    nbs: {
      "1.1806.20.00": {
        descricao: "Serviços de cobrança",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.23": {
    descricao: "Assessoria, Análise, Avaliação, Atendimento, Consulta, Cadastro, Seleção, Gerenciamento De Informações, Administração De Contas A Receber Ou A Pagar E Em Geral, Relacionados A Operações De Faturização (Factoring).",
    id: "17.23",
    clusters: ["1.0908.00.00"],
    nbs: {
      "1.0908.00.00": {
        descricao: "Fomento comercial (factoring)",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.24": {
    descricao: "Apresentação De Palestras, Conferências, Seminários E Congêneres.",
    id: "17.24",
    clusters: ["1.2205.14.00"],
    nbs: {
      "1.2205.14.00": {
        descricao: "Serviços de palestras e conferências",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "17.25": {
    descricao: "Inserção De Textos, Desenhos E Outros Materiais De Propaganda E Publicidade, Em Qualquer Meio (Exceto Em Livros, Jornais, Periódicos E Nas Modalidades De Serviços De Radiodifusão Sonora E De Sons E Imagens De Recepção Livre E Gratuita).(Incluído Pela Lei Complementar Nº 157, De 2016)",
    id: "17.25",
    clusters: ["1.1406.33.00,1.1406.34.00,1.1406.39.00"],
    nbs: {
      "1.1406.33.00": {
        descricao: "Venda de espaço para propaganda na rede mundial de computadores, exceto sob comissão",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100101.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1406.34.00": {
        descricao: "Venda de espaço para propaganda em mídia exterior, exceto sob comissão",
      },
      "1.1406.39.00": {
        descricao: "Venda de espaço ou tempo para propaganda, exceto sob comissão não classificados em subposições anteriores",
      },
    },
  },
  "18.01": {
    descricao: "Serviços De Regulação De Sinistros Vinculados A Contratos De Seguros; Inspeção E Avaliação De Riscos Para Cobertura De Contratos De Seguros; Prevenção E Gerência De Riscos Seguráveis E Congêneres.",
    id: "18.01",
    clusters: ["1.0906.20.00"],
    nbs: {
      "1.0906.20.00": {
        descricao: "Serviços de perícia e avaliação de seguros e resseguros",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "19.01": {
    descricao: "Serviços De Distribuição E Venda De Bilhetes E Demais Produtos De Loteria, Bingos, Cartões, Pules Ou Cupons De Apostas, Sorteios, Prêmios, Inclusive Os Decorrentes De Títulos De Capitalização E Congêneres.",
    id: "19.01",
    clusters: ["1.0905.11.00"],
    nbs: {
      "1.0905.11.00": {
        descricao: "Serviços de corretagem de títulos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "20.01": {
    descricao: "Serviços Portuários, Ferroportuários, Utilização De Porto, Movimentação De Passageiros, Reboque De Embarcações, Rebocador Escoteiro, Atracação, Desatracação, Serviços De Praticagem, Capatazia, Armazenagem De Qualquer Natureza, Serviços Acessórios, Movimentação De Mercadorias, Serviços De Apoio Marítimo, De Movimentação Ao Largo, Serviços De Armadores, Estiva, Conferência, Logística E Congêneres.",
    id: "20.01",
    clusters: ["1.0401.21.20,1.0601.10.00,1.0601.90.00,1.0605.10.00,1.0605.20.00,1.0605.30.00,1.0605.40.00,1.0605.90.00,1.0602.10.00,1.0602.21.00,1.0602.22.00,1.0602.23.00,1.0602.29.00,1.0602.31.00,1.0602.32.00,1.0602.33.00,1.0602.90.00"],
    nbs: {
      "1.0401.21.20": {
        descricao: "Serviços de transporte aquaviário local de passageiros, por navegação interior, em embarcações para cruzeiros",
        indops: [
          { codigo: "50201.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0601.10.00": {
        descricao: "Serviços de manuseio de contêineres",
      },
      "1.0601.90.00": {
        descricao: "Serviços de manuseio de cargas não classificados em subposições anteriores",
      },
      "1.0602.10.00": {
        descricao: "Serviços de armazenagem frigorificada",
      },
      "1.0602.21.00": {
        descricao: "Serviços de armazenagem de petróleo e seus derivados",
      },
      "1.0602.22.00": {
        descricao: "Serviços de armazenagem de combustíveis, lubrificantes e GLP, inclusive apresentado em botijões metálicos",
      },
      "1.0602.23.00": {
        descricao: "Serviços de armazenagem de produtos químicos perigosos",
      },
      "1.0602.29.00": {
        descricao: "Serviços de armazenagem de produtos perigosos não classificados em subposições anteriores",
      },
      "1.0602.31.00": {
        descricao: "Serviços de armazenagem de granéis sólidos",
      },
      "1.0602.32.00": {
        descricao: "Serviços de armazenagem de granéis líquidos ou liquefeitos",
      },
      "1.0602.33.00": {
        descricao: "Serviços de armazenagem de granéis gasosos",
      },
      "1.0602.90.00": {
        descricao: "Serviços de armazenagem não classificados em subposições anteriores",
      },
      "1.0605.10.00": {
        descricao: "Serviços de operação de portos e canais, exceto manuseio de cargas",
      },
      "1.0605.20.00": {
        descricao: "Serviços de praticagem e de atracação",
      },
      "1.0605.30.00": {
        descricao: "Serviços de salvamento de embarcações",
      },
      "1.0605.40.00": {
        descricao: "Serviços de navegação de apoio",
      },
      "1.0605.90.00": {
        descricao: "Serviços de apoio ao transporte aquaviário não classificados em subposições anteriores",
      },
    },
  },
  "20.02": {
    descricao: "Serviços Aeroportuários, Utilização De Aeroporto, Movimentação De Passageiros, Armazenagem De Qualquer Natureza, Capatazia, Movimentação De Aeronaves, Serviços De Apoio Aeroportuários, Serviços Acessórios, Movimentação De Mercadorias, Logística E Congêneres.",
    id: "20.02",
    clusters: ["1.0601.90.00,1.0602.90.00,1.0606.11.00,1.0606.12.00,1.0606.19.00,1.0606.20.00"],
    nbs: {
      "1.0601.90.00": {
        descricao: "Serviços de manuseio de cargas não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0602.90.00": {
        descricao: "Serviços de armazenagem não classificados em subposições anteriores",
      },
      "1.0606.11.00": {
        descricao: "Serviços de operação aeroportuária, exceto manuseio de cargas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
      "1.0606.12.00": {
        descricao: "Serviços de controle de tráfego aéreo",
      },
      "1.0606.19.00": {
        descricao: "Serviços de apoio ao transporte aéreo não classificados em subposições anteriores",
      },
      "1.0606.20.00": {
        descricao: "Serviços de apoio ao transporte aeroespacial",
      },
    },
  },
  "20.03": {
    descricao: "Serviços De Terminais Rodoviários, Ferroviários, Metroviários, Movimentação De Passageiros, Mercadorias, Inclusive Suas Operações, Logística E Congêneres.",
    id: "20.03",
    clusters: ["1.0601.90.00,1.0603.00.00,1.0604.10.00,1.0604.90.00"],
    nbs: {
      "1.0601.90.00": {
        descricao: "Serviços de manuseio de cargas não classificados em subposições anteriores",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0603.00.00": {
        descricao: "Serviços de apoio ao transporte ferroviário",
        psOnerosa: "s",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
      "1.0604.10.00": {
        descricao: "Serviços de estações rodoviárias",
      },
      "1.0604.90.00": {
        descricao: "Serviços de apoio ao transporte rodoviário não classificados em subposições anteriores",
      },
    },
  },
  "21.01": {
    descricao: "Serviços De Registros Públicos, Cartorários E Notariais.",
    id: "21.01",
    clusters: ["1.1304.00.00"],
    nbs: {
      "1.1304.00.00": {
        descricao: "Serviços notariais e de registro",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "22.01": {
    descricao: "Serviços De Exploração De Rodovia Mediante Cobrança De Preço Ou Pedágio Dos Usuários, Envolvendo Execução De Serviços De Conservação, Manutenção, Melhoramentos Para Adequação De Capacidade E Segurança De Trânsito, Operação, Monitoração, Assistência Aos Usuários E Outros Serviços Definidos Em Contratos, Atos De Concessão Ou De Permissão Ou Em Normas Oficiais.",
    id: "22.01",
    clusters: ["1.0604.21.00,1.0604.22.00"],
    nbs: {
      "1.0604.21.00": {
        descricao: "Serviços de operação de rodovias",
        indops: [
          { codigo: "80101.0", local: "via explorada" },
        ],
        cClassTrib: {
          "000002": "Exploração de via",
        },
      },
      "1.0604.22.00": {
        descricao: "Serviços de operação de pontes e túneis",
      },
    },
  },
  "23.01": {
    descricao: "Serviços De Programação E Comunicação Visual, Desenho Industrial E Congêneres.",
    id: "23.01",
    clusters: ["1.1409.21.00,1.1409.22.00,1.1409.23.00,1.1409.24.00,1.1409.25.00,1.1409.29.00,1.1409.30.00,1.1409.90.00"],
    nbs: {
      "1.1409.21.00": {
        descricao: "Serviços de desenho industrial de embalagens, expositores de loja e objetos promocionais para comunicação e vendas",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1409.22.00": {
        descricao: "Serviços de desenho industrial de produtos, utensílios, equipamentos, vestuário, calçados, ornamentos, joias e objetos pessoais",
      },
      "1.1409.23.00": {
        descricao: "Serviços de desenho industrial de máquinas, equipamentos, acessórios e objetos de uso industrial de qualquer natureza",
      },
      "1.1409.24.00": {
        descricao: "Serviços de desenho industrial de mobiliários e itens de decoração",
      },
      "1.1409.25.00": {
        descricao: "Serviços de desenho industrial de utensílios e equipamentos eletrodomésticos e eletroeletrônicos",
      },
      "1.1409.29.00": {
        descricao: "Serviços de desenho industrial não classificados em subposições anteriores",
      },
      "1.1409.30.00": {
        descricao: "Serviços de design de marcas, imagens, objetos gráficos e digitais",
      },
      "1.1409.90.00": {
        descricao: "Serviços especializados de design não classificados em subposições anteriores",
      },
    },
  },
  "24.01": {
    descricao: "Serviços De Chaveiros, Confecção De Carimbos, Placas, Sinalização Visual, Banners, Adesivos E Congêneres.",
    id: "24.01",
    clusters: ["1.2606.00.00"],
    nbs: {
      "1.2606.00.00": {
        descricao: "Serviços pessoais não classificados em posições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "25.01": {
    descricao: "Funerais, Inclusive Fornecimento De Caixão, Urna Ou Esquifes; Aluguel De Capela; Transporte Do Corpo Cadavérico; Fornecimento De Flores, Coroas E Outros Paramentos; Desembaraço De Certidão De Óbito; Fornecimento De Véu, Essa E Outros Adornos; Embalsamento, Embelezamento, Conservação Ou Restauração De Cadáveres.",
    id: "25.01",
    clusters: ["1.1405.30.00","1.2603.00.00"],
    nbs: {
      "1.1405.30.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento de animais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2603.00.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento",
        cClassTrib: {
          "200029": "Fornecimento dos serviços de saúde humana (Anexo III)",
        },
      },
    },
  },
  "25.02": {
    descricao: "Translado Intramunicipal E Cremação De Corpos E Partes De Corpos Cadavéricos. (Redação Dada Pela Lei Complementar Nº 157, De 2016)",
    id: "25.02",
    clusters: ["1.1405.30.00","1.2603.00.00"],
    nbs: {
      "1.1405.30.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento de animais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2603.00.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento",
        cClassTrib: {
          "200029": "Fornecimento dos serviços de saúde humana (Anexo III)",
        },
      },
    },
  },
  "25.03": {
    descricao: "Planos Ou Convênio Funerários.",
    id: "25.03",
    clusters: ["1.2603.00.00"],
    nbs: {
      "1.2603.00.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "011001": "Planos de assistência funerária.",
        },
      },
    },
  },
  "25.04": {
    descricao: "Manutenção E Conservação De Jazigos E Cemitérios.",
    id: "25.04",
    clusters: ["1.2603.00.00"],
    nbs: {
      "1.2603.00.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento",
        indops: [
          { codigo: "20201.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "25.05": {
    descricao: "Cessão De Uso De Espaços Em Cemitérios Para Sepultamento. (Incluído Pela Lei Complementar Nº 157, De 2016)",
    id: "25.05",
    clusters: ["1.2603.00.00"],
    nbs: {
      "1.2603.00.00": {
        descricao: "Serviços funerários, de cremação e de embalsamamento",
        indops: [
          { codigo: "20101.0", local: "local do imóvel" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "26.01": {
    descricao: "Serviços De Coleta, Remessa Ou Entrega De Correspondências, Documentos, Objetos, Bens Ou Valores, Inclusive Pelos Correios E Suas Agências Franqueadas; Courrier E Congêneres.",
    id: "26.01",
    clusters: ["1.0501.15.00,1.0608.10.00,1.0701.00.00,1.0702.00.00,1.0703.00.00,1.1802.40.00"],
    nbs: {
      "1.0501.15.00": {
        descricao: "Serviços de transporte rodoviário de cargas postais e malotes",
        indops: [
          { codigo: "70100.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.0608.10.00": {
        descricao: "Serviços de coleta e entrega de cargas no transporte multimodal",
      },
      "1.0701.00.00": {
        descricao: "Serviços postais e de telegrama",
      },
      "1.0702.00.00": {
        descricao: "Serviços de coleta, transporte, remessa ou entrega de documentos ou encomendas, exceto remessas expressas",
      },
      "1.0703.00.00": {
        descricao: "Serviços de remessas expressas",
      },
      "1.1802.40.00": {
        descricao: "Serviços de carro-forte",
      },
    },
  },
  "27.01": {
    descricao: "Serviços De Assistência Social.",
    id: "27.01",
    clusters: ["1.2304.11.00,1.2304.12.00,1.2304.19.00,1.2304.20.00,1.2304.90.00"],
    nbs: {
      "1.2304.11.00": {
        descricao: "Serviços de reabilitação vocacional para pessoas com deficiência",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.2304.12.00": {
        descricao: "Serviços de reabilitação vocacional para desempregados",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2304.19.00": {
        descricao: "Serviço de reabilitação vocacional não classificados nas subposições anteriores",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2304.20.00": {
        descricao: "Serviços de orientação e aconselhamento relacionados a crianças e adolescentes",
        indops: [
          { codigo: "30101.0", local: "" },
          { codigo: "30102.0", local: "" },
          { codigo: "30103.0", local: "" },
          { codigo: "30104.0", local: "" },
        ],
      },
      "1.2304.90.00": {
        descricao: "Serviços de assistência social sem acomodação não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
      },
    },
  },
  "28.01": {
    descricao: "Serviços De Avaliação De Bens E Serviços De Qualquer Natureza.",
    id: "28.01",
    clusters: ["1.1404.14.00,1.1001.30.00,1.0902.10.00"],
    nbs: {
      "1.0902.10.00": {
        descricao: "Serviços de valoração de ativos",
      },
      "1.1001.30.00": {
        descricao: "Serviços de avaliação de imóveis",
      },
      "1.1404.14.00": {
        descricao: "Serviços de informações para avaliação e exploração de recursos naturais",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "29.01": {
    descricao: "Serviços De Biblioteconomia.",
    id: "29.01",
    clusters: ["1.1705.10.00,1.1705.20.00"],
    nbs: {
      "1.1705.10.00": {
        descricao: "Serviços de biblioteca",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1705.20.00": {
        descricao: "Serviços de arquivo",
      },
    },
  },
  "30.01": {
    descricao: "Serviços De Biologia, Biotecnologia E Química.",
    id: "30.01",
    clusters: ["1.1415.00.00"],
    nbs: {
      "1.1415.00.00": {
        descricao: "Serviços profissionais, técnicos e gerenciais não classificados em posições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
    },
  },
  "31.01": {
    descricao: "Serviços Técnicos Em Edificações, Eletrônica, Eletrotécnica, Mecânica, Telecomunicações E Congêneres.",
    id: "31.01",
    clusters: ["1.1415.00.00"],
    nbs: {
      "1.1415.00.00": {
        descricao: "Serviços profissionais, técnicos e gerenciais não classificados em posições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
    },
  },
  "32.01": {
    descricao: "Serviços De Desenhos Técnicos.",
    id: "32.01",
    clusters: ["1.1409.90.00"],
    nbs: {
      "1.1409.90.00": {
        descricao: "Serviços especializados de design não classificados em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "33.01": {
    descricao: "Serviços De Desembaraço Aduaneiro, Comissários, Despachantes E Congêneres.",
    id: "33.01",
    clusters: ["1.0204.00.00,1.2606.00.00"],
    nbs: {
      "1.0204.00.00": {
        descricao: "Serviços de despacho aduaneiro",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2606.00.00": {
        descricao: "Serviços pessoais não classificados em posições anteriores",
      },
    },
  },
  "34.01": {
    descricao: "Serviços De Investigações Particulares, Detetives E Congêneres.",
    id: "34.01",
    clusters: ["1.1802.10.00"],
    nbs: {
      "1.1802.10.00": {
        descricao: "Serviços de investigação",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "35.01": {
    descricao: "Serviços De Reportagem, Assessoria De Imprensa, Jornalismo E Relações Públicas.",
    id: "35.01",
    clusters: ["1.1401.31.00","1.1401.32.00","1.1704.10.00,1.1704.20.00"],
    nbs: {
      "1.1401.31.00": {
        descricao: "Serviços de assessoria de imprensa",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200040": "Fornecimento de serviços de comunicação institucional à administração pública",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1401.32.00": {
        descricao: "Serviços de relações públicas",
        cClassTrib: {
          "200040": "Fornecimento de serviços de comunicação institucional à administração pública",
          "200052": "Prestação de serviços de profissões intelectuais",
        },
      },
      "1.1704.10.00": {
        descricao: "Serviços de agências de notícias para jornais e periódicos",
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1704.20.00": {
        descricao: "Serviços de agências de notícias para mídia audiovisual",
      },
    },
  },
  "36.01": {
    descricao: "Serviços De Meteorologia.",
    id: "36.01",
    clusters: ["1.1404.30.00"],
    nbs: {
      "1.1404.30.00": {
        descricao: "Serviços meteorológicos e de previsão do tempo",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "37.01": {
    descricao: "Serviços De Artistas, Atletas, Modelos E Manequins.",
    id: "37.01",
    clusters: ["1.1806.81.00,1.1806.82.00,1.1806.83.00,1.2506.00.00,1.2503.10.00"],
    nbs: {
      "1.1806.81.00": {
        descricao: "Serviços de agenciamento de modelos",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.1806.82.00": {
        descricao: "Serviços de agenciamento de artistas",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
      "1.1806.83.00": {
        descricao: "Serviços de agenciamento de atletas",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
      "1.2503.10.00": {
        descricao: "Serviços de atuação artística",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
      "1.2506.00.00": {
        descricao: "Serviços fornecidos por atletas e desportistas, por conta própria, e serviços de apoio relacionados com desportes e recreação desportiva",
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
        },
      },
    },
  },
  "38.01": {
    descricao: "Serviços De Museologia",
    id: "38.01",
    clusters: ["1.2504.11.00,1.2504.12.00"],
    nbs: {
      "1.2504.11.00": {
        descricao: "Serviços de museus",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
        ],
        cClassTrib: {
          "200039": "Fornecimento dos serviços e o licenciamento ou cessão dos direitos destinados às produções nacionais artísticas (Anexo X)",
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2504.12.00": {
        descricao: "Serviços de preservação e operação de locais e construções históricas",
        indops: [
          { codigo: "30101.0", local: "local da prestação" },
          { codigo: "20201.0", local: "local do imóvel" },
        ],
      },
    },
  },
  "39.01": {
    descricao: "Serviços De Ourivesaria E Lapidação (Quando O Material For Fornecido Pelo Tomador Do Serviço).",
    id: "39.01",
    clusters: ["1.2002.20.00"],
    nbs: {
      "1.2002.20.00": {
        descricao: "Serviços de manutenção e reparação de relógios e joias",
        indops: [
          { codigo: "50101.0", local: "local da prestação" },
          { codigo: "50102.0", local: "" },
          { codigo: "50103.0", local: "" },
          { codigo: "50104.0", local: "" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
    },
  },
  "40.01": {
    descricao: "Obras De Arte Sob Encomenda.",
    id: "40.01",
    clusters: ["1.1109.90.00,1.2503.20.00"],
    nbs: {
      "1.1109.90.00": {
        descricao: "Cessão definitiva de outros direitos não classificada em subposições anteriores",
        psOnerosa: "S",
        adqExterior: "N",
        indops: [
          { codigo: "100301.0", local: "Domicílio principal do adquirente" },
        ],
        cClassTrib: {
          "000001": "Situações tributadas integralmente pelo IBS e CBS.",
        },
      },
      "1.2503.20.00": {
        descricao: "Serviços de autores, compositores, escultores, pintores e outros artistas, exceto os de atuação artística",
      },
    },
  },
};
