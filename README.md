# TaxReform | LC 116 × NBS

Consulta estratégica de serviços do **Anexo da LC 116/2003 (ISSQN)** com correlação à **Nomenclatura Brasileira de Serviços – NBS 2.0**, incluindo o **local de incidência do ISS**.

Paleta e identidade visual alinhadas ao simulador *IBSCBS-SimplesNacional* (TaxReform).

---

## Objetivo

Apoiar empresas do Simples Nacional e profissionais de contabilidade/tributário na transição da Reforma Tributária (IBS/CBS), permitindo:

1. Consultar qualquer serviço da lista anexa à **LC 116/2003**.
2. Identificar o **local onde o ISS é devido** (regra geral ou exceções do art. 3º).
3. Visualizar **serviços correlatos na NBS 2.0** (por similaridade de descrição).

---

## Como usar

1. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge, Firefox, Safari).
2. Não é necessário servidor — os dados estão embutidos em `nbs.js` e `lc116.js`.
3. Na caixa de busca, digite código (ex.: `7.02`, `4.22`) ou palavras da descrição.
4. Use os filtros por item (Informática, Saúde, Engenharia etc.).
5. Clique em um resultado da LC 116.
6. O painel inferior exibe:
   - Serviço selecionado
   - **Local de incidência do ISS**
   - Lista de serviços NBS correlatos (com percentual de similaridade)

---

## Local de incidência do ISS (art. 3º LC 116/2003)

| Tipo | Quando se aplica | Onde o imposto é devido |
|------|------------------|-------------------------|
| **Regra geral** | Todos os serviços não listados nas exceções | Local do **estabelecimento prestador** (ou domicílio do prestador) |
| **Exceção – Prestação** | Obras (7.02, 7.05, 7.19…), demolição, limpeza, varrição, estruturas temporárias (3.05), etc. | Local da **execução / prestação** do serviço |
| **Exceção – Tomador** | Planos de saúde (4.22, 4.23), planos veterinários (5.09), cartões (15.01), leasing (15.09), mão-de-obra (17.05) | **Domicílio / estabelecimento do tomador** |

Fontes principais: LC 116/2003, LC 157/2016, LC 175/2020 e LC 218/2025.

---

## Estrutura dos arquivos

```
site/
├── index.html          # Aplicação completa (UI + lógica)
├── nbs.js              # Dados NBS 2.0 (~1.200 códigos)
├── lc116.js            # Dados Lista de Serviços LC 116 (~577 itens)
├── local_map.json      # Mapa auxiliar de exceções de local (referência)
└── README.md           # Este arquivo
```

---

## Fontes dos dados

- **LISTA.SERV.NAC** — Anexo da LC 116/2003 (códigos de tributação nacional / item / subitem / desdobro).
- **LISTA.NBS_v2.0** — Nomenclatura Brasileira de Serviços, versão 2.0 (desde construção de edificações até serviços de beleza e bem-estar físico).

A correlação entre LC 116 e NBS é **heurística** (similaridade de tokens nas descrições). Não substitui tabela oficial de correspondência nem consulta à legislação municipal.

---

## Contexto da Reforma Tributária

- **Janela de opção do CGSN**: 01 a 30 de setembro de 2026 (efeitos a partir do 1º semestre de 2027).
- Referências: Resolução CGSN 186/2026 e LC 214/2025.
- O site é ferramenta de apoio à decisão sobre IBS/CBS no âmbito do Simples Nacional.

---

## Avisos importantes

- Uso **informativo**.
- O local de incidência pode ser impactado por regras municipais, convênios e jurisprudência (STF/STJ).
- Sempre confira a legislação vigente do município e orientações da RFB / CGSN.
- A similaridade NBS não garante enquadramento fiscal definitivo.

---

## Requisitos técnicos

- Navegador com suporte a ES6+ (qualquer navegador atual).
- Não requer instalação de dependências nem backend.

---

*TaxReform | IBSCBS-SimplesNacional*
