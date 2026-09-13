# TaxReform | LC 116 × NBS

Consulta estratégica de serviços do **Anexo da LC 116/2003 (ISSQN)** com a **correlação oficial à NBS** (Anexo VIII — IBSCBS V1.00.00), incluindo o **local de incidência do ISS** (art. 3º da LC 116) e o **local IBS/CBS** da reforma tributária.

---

## Objetivo

Apoiar empresas do Simples Nacional e profissionais de contabilidade/tributário na transição da Reforma Tributária (IBS/CBS), permitindo:

1. Consultar qualquer serviço da lista anexa à **LC 116/2003**.
2. Identificar o **local onde o ISS é devido** (regra geral ou exceções do art. 3º).
3. Visualizar os **serviços da NBS subdivididos** a partir de cada subitem da LC 116, conforme a **correlação oficial do Anexo VIII**.

---

## Como usar

1. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge, Firefox, Safari).
2. Não é necessário servidor — os dados estão embutidos em arquivos `.js`.
3. Na caixa de busca, digite código (ex.: `7.02`, `4.22`) ou palavras da descrição.
4. Use os filtros por item (Informática, Saúde, Engenharia etc.).
5. Clique em um resultado da LC 116 (um item por **subitem**, com seus desdobros).
6. O painel inferior exibe:
   - Serviço selecionado + desdobros cTribNac
   - **Local de incidência do ISS** (art. 3º, caput + incisos I–XXV + §§ 1º e 2º)
   - Lista de **serviços NBS correlatos** (correlação oficial do Anexo VIII, com INDOP, classificação cClassTrib e local IBS)

---

## Local de incidência do ISS (art. 3º LC 116/2003)

| Tipo | Quando se aplica | Onde o imposto é devido |
|------|------------------|-------------------------|
| **Regra geral** | Todos os serviços não listados nas exceções | Local do **estabelecimento prestador** (ou domicílio do prestador) |
| **Exceção – Prestação** | Obras (7.02, 7.05, 7.19, 14.14), demolição, limpeza, varrição, estruturas temporárias (3.05), etc. | Local da **execução / prestação** do serviço |
| **Exceção – Tomador** | Planos de saúde (4.22, 4.23), planos veterinários (5.09), cartões (15.01), leasing (15.09), mão-de-obra (17.05) | **Domicílio / estabelecimento do tomador** |
| **Local do evento** | Circulação, diversão, lazer e congêneres (item 12, exceto 12.13), feiras (17.10) | Local do **evento** |
| **Base proporcional** | Extensão de ferrovia/rodovia/dutos/postes (3.04, 22.01) | **Cada Município** com extensão |

Fontes principais: LC 116/2003, LC 157/2016, LC 175/2020, LC 183/2021 e LC 218/2025.

---

## Estrutura dos arquivos

```
site/
├── index.html          # Aplicação (UI + layout)
├── app.js              # Lógica de consulta, filtros e renderização
├── nbs.js              # Dados NBS (descrições de códigos)
├── lc116.js            # Dados Lista de Serviços LC 116 (itens/subitens/desdobros)
├── correlacao.js       # CORRELAÇÃO OFICIAL do Anexo VIII (LC 116 → NBS, INDOP, local IBS, cClassTrib)
├── local_map.js        # Regras do local do ISS — art. 3º LC 116 (incisos I–XXV e §§)
└── README.md           # Este arquivo
```

---

## Fontes dos dados

- **LISTA.SERV.NAC** — Anexo da LC 116/2003 (`lc116.js`): código de tributação nacional / item / subitem / desdobro.
- **NBS 2.0** — Nomenclatura Brasileira de Serviços (`nbs.js`): códigos e descrições.
- **Anexo VIII (IBSCBS V1.00.00)** — tabela oficial de correlação entre os itens da LC 116 e os códigos NBS, com **PS onerosa/ADQ exterior, INDOP, local de incidência IBS e classificação tributária (cClassTrib)**. Foi parseada para `correlacao.js`.

A correlação exibida é **oficial** (Anexo VIII), não heurística. A leitura do art. 3º é feita do texto consolidado da LC 116.

---

## Avisos importantes

- Uso **informativo**.
- O local de incidência pode ser impactado por regras municipais, convênios e jurisprudência (STF/STJ).
- Sempre confira a legislação vigente do município e orientações da RFB / CGSN.
- A correlação do Anexo VIII não substitui o enquadramento fiscal definitivo do contribuinte.

---

## Requisitos técnicos

- Navegador com suporte a ES6+ (qualquer navegador atual).
- Não requer instalação de dependências nem backend.

---

## Regeneração do `correlacao.js`

O arquivo `correlacao.js` pode ser regenerado a partir do Anexo VIII original (markdown) com o script `parse_anexo.js`:

```
node parse_anexo.js
```

O script lê `AnexoVIII-CorrelacaoItemNBSIndOpCClassTrib_IBSCBS_V1.00.00.md`, agrupa os códigos NBS por subitem da LC 116 (tratando as linhas com `NaN` como continuidade do item), e monta os blocos/clusters de classificação tributária do anexo.