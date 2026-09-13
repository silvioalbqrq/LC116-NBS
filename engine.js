(function (global) {
  'use strict';

  // ============================================================
  // engine.js — Motor de correlação LC 116 ↔ NBS
  // TF-IDF cosine + expansão de sinônimos + suporte a crosswalk.
  // Funciona no navegador (window.Engine) e no Node (module.exports).
  // ============================================================

  var STOP = new Set(
    ('a,ainda,ao,aos,as,at,e,em,entre,no,na,nos,nas,ou,o,os,para,por,que,' +
      'se,seja,sem,sobre,sob,com,de,do,das,natureza,qualquer,servico,servicos,' +
      'prestacao,prestacoes,prestados,prestador,prestadores,congeneres,da,dos,' +
      'um,uma,si,ja,nao,mais,todos,em,meio,toda,todo,consiste,mediante,' +
      'diversa,diversas,inclusive,quando,embora,ser,for,tem,ter,seu,sua,seus,' +
      'suas,outras,outros,outro,outra,este,esta,esses,essas,nesses,nessas,' +
      'ate,alem,conforme,segundo,face,vista,ex,extra,assim,seguinte,' +
      'seguintes,item,subitem,desdobro,inciso,parte,devido,pessoa,pessoas,' +
      'le,lei,lc,artigo,art').split(','))

  // Dicionário de sinônimos: termo canônico (pós-stemming) -> termos relacionados.
  // Aplicados tanto na indexação quanto na consulta para capturar vocabulários
  // divergentes entre LC 116 (redação legal) e NBS (redação estatística).
  var SYNONYMS = {
    'informatica': ['informacao', 'tecnologia', 'computador', 'software', 'dado', 'digital'],
    'computador': ['computacao', 'software', 'informatica', 'programa'],
    'software': ['programa', 'informatica', 'computador', 'aplicativo', 'maquina'],
    'programa': ['software', 'aplicativo', 'computador', 'informatica'],
    'sistema': ['informacao', 'aplicativo', 'software', 'plataforma', 'infraestrutura', 'rede'],
    'aplicativo': ['software', 'programa', 'sistema', 'aplicacao'],
    'aplicacao': ['aplicativo', 'software', 'sistema'],
    'desenvolvimento': ['projeto', 'sistema', 'software', 'programacao'],
    'programacao': ['desenvolvimento', 'programa', 'software', 'processamento'],
    'processamento': ['programacao', 'dado', 'tratamento', 'informatica'],
    'dado': ['informacao', 'processamento', 'banco', 'digital', 'registro'],
    'informacao': ['dado', 'sistema', 'informatica', 'conteudo', 'conhecimento'],
    'conteudo': ['informacao', 'dado', 'midia', 'digital', 'publicacao'],
    'pagina': ['eletronic', 'web', 'site', 'internet', 'online'],
    'internet': ['web', 'online', 'rede', 'eletronico', 'digital'],
    'web': ['internet', 'online', 'site', 'pagina', 'virtual'],
    'online': ['internet', 'web', 'site', 'virtual', 'digital'],
    'hospedagem': ['disponibilizacao', 'armazenamento', 'nuvem', 'infraestrutura', 'acomod'],
    'disponibilizacao': ['hospedagem', 'fornecimento', 'acesso', 'liberacao'],
    'nuvem': ['cloud', 'hospedagem', 'infraestrutura', 'online'],
    'armazenamento': ['armazenagem', 'deposito', 'guard', 'hospedagem', 'estoque'],
    'licenciamento': ['licenca', 'cesao', 'direito', 'uso', 'concessao', 'cessao'],
    'cesao': ['licenca', 'direito', 'concessao', 'uso', 'transferencia'],
    'direito': ['licenca', 'cesao', 'uso', 'concessao', 'autor'],
    'uso': ['utilizacao', 'direito', 'locacao', 'arrendamento', 'exploracao'],
    'concessao': ['permissao', 'autorizacao', 'licenca', 'cesao'],
    'obra': ['construcao', 'edificacao', 'civil', 'engenharia', 'execucao'],
    'construcao': ['obra', 'edificacao', 'civil', 'engenharia', 'erigir'],
    'edificacao': ['construcao', 'obra', 'imovel', 'predio', 'edificio'],
    'edificio': ['predio', 'edificacao', 'construcao', 'imovel'],
    'predio': ['edificio', 'edificacao', 'construcao'],
    'engenharia': ['construcao', 'obra', 'projeto', 'civil', 'tecnica'],
    'execucao': ['realizacao', 'construcao', 'obra', 'prestacao'],
    'realizacao': ['execucao', 'producao', 'organizacao'],
    'terreno': ['solo', 'subsolo', 'terra', 'lote', 'imovel'],
    'terraplenagem': ['terreno', 'solo', 'escavacao', 'movimento', 'obra'],
    'escavacao': ['terreno', 'solo', 'escavar', 'cova'],
    'solo': ['terreno', 'subsolo', 'terra', 'compactacao'],
    'compactacao': ['solo', 'compactar', 'terreno', 'obra'],
    'vestigacao': ['investigacao', 'perfuraco', 'solo', 'geotecnia', 'terreno'],
    'medicina': ['saude', 'medico', 'clinica', 'hospitalar', 'biomedicina'],
    'medico': ['medicina', 'saude', 'clinica', 'hospitalar', 'atendimento'],
    'saude': ['medico', 'medicina', 'clinica', 'hospitalar', 'assistencia'],
    'clinica': ['medico', 'saude', 'hospitalar', 'atendimento', 'laboratorio'],
    'hospital': ['hospitalar', 'clinica', 'saude', 'medico', 'internacao'],
    'biomedicina': ['medicina', 'medico', 'saude', 'biologia'],
    'enfermagem': ['saude', 'medico', 'cuidado', 'assistencia'],
    'odontologia': ['dentaria', 'dentista', 'saude', 'bucal'],
    'cirurgia': ['cirurgico', 'operacao', 'medico', 'procedimento'],
    'terapia': ['tratamento', 'reabilitacao', 'terapeutico', 'saude', 'ocupacional'],
    'reabilitacao': ['terapia', 'tratamento', 'fisioterapia', 'saude'],
    'fisioterapia': ['reabilitacao', 'terapeutico', 'saude', 'fisica'],
    'laboratorio': ['analise', 'clinica', 'exame', 'patologia', 'teste'],
    'analise': ['laboratorio', 'exame', 'clinica', 'teste', 'avaliacao'],
    'exame': ['analise', 'laboratorio', 'clinica', 'teste', 'avaliacao'],
    'patologia': ['analise', 'laboratorio', 'clinica', 'doenca'],
    'diagnostico': ['exame', 'imagem', 'clinica', 'avaliacao'],
    'veterinaria': ['animal', 'animal', 'pecuaria', 'saude', 'veterinario'],
    'animal': ['veterinaria', 'pecuaria', 'semovente', 'criacao'],
    'pecuaria': ['veterinaria', 'animal', 'semovente', 'agropecuaria', 'criacao'],
    'semovente': ['animal', 'criacao', 'pecuaria', 'rebanho'],
    'seguranca': ['vigilancia', 'monitoramento', 'protecao', 'guard', 'seguro'],
    'vigilancia': ['seguranca', 'monitoramento', 'guard', 'protecao', 'vigia'],
    'monitoramento': ['vigilancia', 'seguranca', 'rastreamento', 'controle'],
    'rastreamento': ['monitoramento', 'localizacao', 'gps', 'seguranca', 'frota'],
    'guard': ['armazenagem', 'armazenamento', 'deposito', 'estacionamento', 'vigilancia', 'custodia'],
    'deposito': ['armazenagem', 'armazenamento', 'guard', 'estoque'],
    'armazenagem': ['armazenamento', 'deposito', 'guard', 'estoque'],
    'estacionamento': ['guard', 'veiculo', 'parque', 'garagem'],
    'veiculo': ['transporte', 'automove', 'carga', 'locomocao', 'estacionamento'],
    'transporte': ['passageiro', 'carga', 'municipal', 'translacao', 'veiculo'],
    'passageiro': ['transporte', 'translacao', 'pessoa', 'locomocao'],
    'transporte_carga': ['transporte', 'carga', 'frete', 'mercadoria', 'remessa'],
    'carga': ['mercadoria', 'frete', 'transporte', 'movimentacao', 'descarga'],
    'descarga': ['carga', 'movimentacao', 'manuseio', 'transbordo'],
    'movimentacao': ['carga', 'descarga', 'manuseio', 'transporte', 'transbordo'],
    'manuseio': ['movimentacao', 'carga', 'descarga', 'arrumacao'],
    'guindaste': ['içamento', 'elevacao', 'carga', 'guincho', 'movimentacao'],
    'guincho': ['guindaste', 'içamento', 'carga', 'reboqu', 'movimentacao'],
    'içamento': ['guindaste', 'guincho', 'elevacao', 'carga'],
    'elevacao': ['guindaste', 'içamento', 'elevador', 'carga'],
    'limpeza': ['conservacao', 'higienizacao', 'saneamento', 'lavagem', 'manutencao'],
    'conservacao': ['manutencao', 'limpeza', 'preservacao', 'restauracao'],
    'manutencao': ['conservacao', 'reparacao', 'reforma', 'limpeza', 'restauracao'],
    'reparacao': ['manutencao', 'reforma', 'restauracao', 'conserto'],
    'reforma': ['reparacao', 'manutencao', 'remodelacao', 'construcao', 'edificacao'],
    'restauracao': ['conservacao', 'manutencao', 'reparacao', 'reforma'],
    'diversao': ['entretenimento', 'lazer', 'recreacao', 'espetaculo', 'cultura'],
    'entretenimento': ['diversao', 'lazer', 'recreacao', 'espetaculo', 'cultura'],
    'lazer': ['diversao', 'entretenimento', 'recreacao', 'esporte', 'cultura'],
    'recreacao': ['recreacional', 'lazer', 'diversao', 'entretenimento', 'esporte'],
    'recreacional': ['recreacao', 'lazer', 'diversao', 'esporte'],
    'espetaculo': ['apresentacao', 'artistico', 'cultura', 'show', 'diversao'],
    'apresentacao': ['espetaculo', 'show', 'artistico', 'atracao'],
    'cultura': ['artistico', 'arte', 'museu', 'biblioteca', 'cultural'],
    'artistico': ['arte', 'artista', 'espetaculo', 'cultura'],
    'esporte': ['desportivo', 'atleta', 'ginastica', 'recreacao', 'fisico'],
    'desportivo': ['esporte', 'atleta', 'ginastica', 'recreacao'],
    'atleta': ['esporte', 'desportivo', 'artista', 'competicao'],
    'fisico': ['esporte', 'atividade', 'recreacao', 'corporal', 'condicionamento'],
    'beleza': ['estetica', 'bem', 'fisico', 'cuidado', 'pessoal'],
    'estetica': ['beleza', 'bem', 'fisico', 'cuidado', 'tratamento'],
    'coleta': ['lixo', 'residuo', 'transporte', 'remessa', 'destinacao'],
    'lixo': ['residuo', 'coleta', 'destinacao', 'tratamento', 'reciclagem'],
    'residuo': ['lixo', 'coleta', 'destinacao', 'tratamento', 'reciclagem', 'rejeito'],
    'rejeito': ['residuo', 'lixo', 'coleta', 'destinacao'],
    'reciclagem': ['residuo', 'reaproveitamento', 'tratamento', 'destinacao'],
    'tratamento': ['destinacao', 'eliminacao', 'remediacao', 'descontaminacao'],
    'destinacao': ['eliminacao', 'tratamento', 'disposicao', 'final'],
    'eliminacao': ['destinacao', 'tratamento', 'disposicao'],
    'esgoto': ['efluente', 'saneamento', 'tratamento', 'agua', 'fossa'],
    'efluente': ['esgoto', 'saneamento', 'tratamento', 'agua'],
    'saneamento': ['esgoto', 'efluente', 'agua', 'limpeza', 'tratamento'],
    'agua': ['hidrico', 'esgoto', 'saneamento', 'distribuicao', 'recurso'],
    'fossa': ['esgoto', 'septico', 'saneamento', 'tratamento'],
    'dragagem': ['limpeza', 'rio', 'porto', 'canal', 'aprofundamento'],
    'florestamento': ['reflorestamento', 'floresta', 'silvicultura', 'plantio'],
    'reflorestamento': ['florestamento', 'floresta', 'silvicultura', 'plantio'],
    'silvicultura': ['florestamento', 'reflorestamento', 'floresta', 'plantio'],
    'floresta': ['florestamento', 'reflorestamento', 'silvicultura', 'plantio'],
    'agricultura': ['agropecuaria', 'plantio', 'cultivo', 'rural', 'colheita'],
    'agropecuaria': ['agricultura', 'pecuaria', 'animal', 'rural', 'criacao'],
    'plantio': ['semeadura', 'colheita', 'agricultura', 'silvicultura', 'plantilha'],
    'colheita': ['plantio', 'semeadura', 'agricultura', 'florestal', 'safra'],
    'semeadura': ['plantio', 'colheita', 'agricultura', 'semente'],
    'portuario': ['porto', 'maritimo', 'navegacao', 'terminal', 'carga'],
    'porto': ['portuario', 'maritimo', 'navegacao', 'terminal', 'carga'],
    'maritimo': ['mar', 'navegacao', 'portuario', 'agua', 'embarcacao'],
    'navegacao': ['maritimo', 'embarcacao', 'fluvial', 'portuario', 'transporte'],
    'embarcacao': ['navegacao', 'maritimo', 'fluvial', 'barco'],
    'aeroportuario': ['aeroporto', 'aviacao', 'aero', 'pista', 'passageiro'],
    'aeroporto': ['aeroportuario', 'aviacao', 'aero', 'infraestrutura', 'pouso'],
    'aviacao': ['aeroportuario', 'aero', 'aereo', 'voo', 'aeronave'],
    'rodoviario': ['rodovia', 'estrada', 'terminal', 'transporte', 'pedagio'],
    'ferroviario': ['ferrovia', 'trem', 'linha', 'metroviario', 'transporte'],
    'metroviario': ['metro', 'ferroviario', 'transporte', 'trem'],
    'terminal': ['aeroportuario', 'rodoviario', 'ferroviario', 'portuario', 'metroviario'],
    'pedagio': ['rodovia', 'concessao', 'estrada', 'exploracao'],
    'exploracao': ['extracao', 'pesquisa', 'uso', 'pedagio', 'rodovia'],
    'fotografia': ['fotografico', 'video', 'imagem', 'filmagem', 'produção'],
    'video': ['audiovisual', 'fotografia', 'imagem', 'filmagem', 'producao'],
    'audiovisual': ['video', 'cinema', 'radio', 'televisao', 'filme'],
    'cinema': ['audiovisual', 'filme', 'exibicao', 'producao', 'cultura'],
    'filme': ['cinema', 'audiovisual', 'producao', 'video'],
    'grafica': ['impressao', 'reprografia', 'composicao', 'edicao', 'tipografia'],
    'impressao': ['grafica', 'editoracao', 'reproducao', 'copias', 'impressos'],
    'reprografia': ['grafica', 'copias', 'impressao', 'fotocopia'],
    'editoracao': ['editorial', 'publicacao', 'impressao', 'livro'],
    'publicacao': ['editorial', 'impressao', 'livro', 'jornal', 'periodico'],
    'livro': ['editoracao', 'publicacao', 'impresso', 'jornal', 'periodico'],
    'turismo': ['viagem', 'agencia', 'operadora', 'roteiro', 'guia'],
    'viagem': ['turismo', 'agencia', 'passagem', 'roteiro', 'hospedagem'],
    'operadora': ['turismo', 'plano', 'telefonia', 'viagem', 'saude'],
    'plano': ['planos', 'saude', 'previdencia', 'operadora', 'medicina'],
    'hotel': ['hospedagem', 'pousada', 'alojamento', 'acomodacao', 'turismo'],
    'alimentacao': ['refeicao', 'restaurante', 'catering', 'alimento', 'fornecimento'],
    'refeicao': ['alimentacao', 'restaurante', 'catering', 'fornecimento'],
    'juridico': ['advocacia', 'direito', 'juridica', 'advogado', 'justica'],
    'advocacia': ['juridico', 'direito', 'advogado', 'patrono'],
    'contabilidade': ['contabil', 'escrituracao', 'contador', 'fiscal'],
    'contabil': ['contabilidade', 'escrituracao', 'contador'],
    'escrituracao': ['contabilidade', 'contabil', 'livro', 'registro'],
    'auditoria': ['auditor', 'contabil', 'fiscal', 'exame', 'verificacao'],
    'publicidade': ['propaganda', 'marketing', 'anuncio', 'comunicacao', 'midia'],
    'propaganda': ['publicidade', 'marketing', 'anuncio', 'divulgacao', 'comunicacao'],
    'marketing': ['publicidade', 'propaganda', 'comercial'],
    'comunicacao': ['publicidade', 'propaganda', 'telecomunicacao', 'midia', 'media'],
    'midia': ['comunicacao', 'publicidade', 'imprensa', 'digital', 'conteudo'],
    'telecomunicacao': ['comunicacao', 'telefonia', 'rede', 'transmissao', 'dado'],
    'telefonia': ['telecomunicacao', 'fixa', 'movel', 'rede', 'telefone'],
    'telefone': ['telefonia', 'fixa', 'comunicacao', 'rede'],
    'transmissao': ['comunicacao', 'dado', 'telecomunicacao', 'televisao', 'radio'],
    'radio': ['radiodifusao', 'telecomunicacao', 'comunicacao', 'audio', 'transmissao'],
    'televisao': ['tv', 'radiodifusao', 'audiovisual', 'transmissao', 'comunicacao'],
    'corretagem': ['comissao', 'intermediacao', 'corretor', 'imobiliario', 'comercial'],
    'intermediacao': ['corretagem', 'mediacao', 'agenciamento', 'representacao', 'comissao'],
    'mediacao': ['intermediacao', 'agenciamento', 'representacao', 'conciliacao'],
    'agenciamento': ['intermediacao', 'mediacao', 'representacao', 'agencia'],
    'representacao': ['intermediacao', 'agenciamento', 'comercial', 'representante'],
    'imobiliario': ['imovel', 'corretagem', 'locacao', 'comissao', 'venda'],
    'imovel': ['imobiliario', 'predio', 'edificacao', 'terreno', 'locacao'],
    'locacao': ['arrendamento', 'aluguel', 'cesao', 'uso', 'comodato'],
    'arrendamento': ['locacao', 'aluguel', 'leasing', 'uso', 'mercantil'],
    'bancario': ['financeiro', 'banco', 'instituicao', 'credito', 'deposito'],
    'financeiro': ['bancario', 'banco', 'credito', 'investimento', 'fundo'],
    'credito': ['financeiro', 'bancario', 'cartao', 'emprestimo', 'limite'],
    'cartao': ['credito', 'debito', 'financeiro', 'bancario', 'pagamento'],
    'debito': ['cartao', 'credito', 'pagamento', 'cobranca'],
    'leasing': ['arrendamento', 'mercantil', 'locacao', 'financeiro'],
    'mercantil': ['leasing', 'arrendamento', 'comercial'],
    'fundo': ['investimento', 'administracao', 'consorcio', 'financeiro', 'valor'],
    'consorcio': ['fundo', 'administracao', 'financeiro', 'grupo', 'credito'],
    'investimento': ['fundo', 'financeiro', 'banco', 'aplicacao', 'titulo'],
    'seguro': ['seguradora', 'previdencia', 'risco', 'sinistro', 'protecao'],
    'sinistro': ['seguro', 'perda', 'reclamacao', 'dano', 'avaria'],
    'segurado': ['seguro', 'seguradora', 'risco', 'apolice'],
    'educacao': ['ensino', 'curso', 'treinamento', 'instrucao', 'pedagogico', 'escola'],
    'ensino': ['educacao', 'curso', 'treinamento', 'escola', 'instrucao'],
    'treinamento': ['educacao', 'curso', 'capacitacao', 'instrucao', 'formacao'],
    'instrucao': ['educacao', 'ensino', 'treinamento', 'curso'],
    'evento': ['feira', 'exposicao', 'congresso', 'organizacao', 'festival'],
    'feira': ['evento', 'exposicao', 'congresso', 'mostra'],
    'exposicao': ['feira', 'evento', 'mostra', 'exibicao'],
    'congresso': ['evento', 'conferencia', 'seminario', 'feira', 'convencao'],
    'organizacao': ['administracao', 'gestao', 'evento', 'planejamento'],
    'administracao': ['gestao', 'organizacao', 'gerencia', 'administrativo'],
    'gestao': ['administracao', 'gerencia', 'organizacao', 'consultoria'],
    'consultoria': ['assessoria', 'aconselhamento', 'especializado', 'gestao'],
    'assessoria': ['consultoria', 'aconselhamento', 'apoio', 'auxilio'],
    'suporte': ['apoio', 'auxilio', 'assistencia', 'tecnico', 'manutencao'],
    'mao': ['obra', 'fornecimento', 'pessoal', 'terceirizacao', 'trabalhador'],
    'terceirizacao': ['mao', 'obra', 'fornecimento', 'pessoal', 'temporario'],
    'pessoal': ['fornecimento', 'mao', 'obra', 'recrutamento', 'selecao'],
    'recrutamento': ['selecao', 'pessoal', 'fornecimento', 'colocacao'],
    'selecao': ['pessoal', 'recrutamento', 'escolha', 'colocacao'],
    'colocacao': ['selecao', 'pessoal', 'emprego', 'recrutamento'],
    'trabalhador': ['pessoa', 'pessoal', 'empregado', 'funcionario', 'temporario'],
    'temporario': ['trabalhador', 'pessoa', 'avulso', 'substituto', 'eventual'],
    'avulso': ['temporario', 'trabalhador', 'pessoa', 'eventual'],
    'fornecimento': ['pessoal', 'mao', 'obra', 'selecao', 'aluguel'],
    'apoio': ['assistencia', 'auxilio', 'suporte', 'complementar', 'atendimento'],
    'auxiliar': ['auxilio', 'apoio', 'suporte', 'complementar'],
    'notario': ['cartorio', 'registro', 'notarial', 'tabelionato', 'escrivao'],
    'cartorio': ['notario', 'registro', 'notarial', 'tabelionato'],
    'registro': ['cartorio', 'notario', 'registral', 'documento'],
    'documento': ['registro', 'cartorio', 'certificacao', 'autenticacao'],
    'certificacao': ['documento', 'certificado', 'autenticacao', 'digital'],
    'digital': ['certificacao', 'certificado', 'informatica', 'eletronico', 'online'],
    'investigacao': ['deteive', 'particular', 'seguranca', 'vigilancia'],
    'meteorologia': ['clima', 'previsao', 'atmosferico', 'tempo', 'observacao'],
    'museu': ['museologia', 'cultura', 'preservacao', 'exposicao', 'colecao'],
    'museologia': ['museu', 'cultura', 'preservacao', 'colecao'],
    'biblioteca': ['biblioteconomia', 'arquivo', 'livro', 'documento', 'informacao'],
    'biblioteconomia': ['biblioteca', 'arquivo', 'informacao', 'documento'],
    'arquivo': ['biblioteca', 'documento', 'gestao', 'digital'],
    'avaliacao': ['pericia', 'vistoria', 'laudo', 'afericao', 'inspecao'],
    'pericia': ['avaliacao', 'vistoria', 'laudo', 'exame'],
    'vistoria': ['avaliacao', 'pericia', 'inspecao', 'laudo'],
    'laudo': ['pericia', 'avaliacao', 'vistoria', 'relatorio'],
    'inspecao': ['vistoria', 'avaliacao', 'fiscalizacao', 'tecnica'],
    'fiscalizacao': ['inspecao', 'vistoria', 'controle', 'auditoria'],
    'desembaraco': ['aduaneiro', 'importacao', 'exportacao', 'alfandega', 'despachante'],
    'aduaneiro': ['desembaraco', 'importacao', 'exportacao', 'alfandega'],
    'despachante': ['aduaneiro', 'desembaraco', 'importacao', 'exportacao'],
    'ourivesaria': ['joia', 'metais', 'precioso', 'lapidacao', 'arte'],
    'lapidacao': ['ourivesaria', 'joia', 'gema', 'cristal'],
    'funerario': ['enterramento', 'cremacao', 'cemiterio', 'funeral', 'exequias'],
    'correspondencia': ['correio', 'encomenda', 'entrega', 'remessa', 'documento'],
    'correio': ['correspondencia', 'encomenda', 'entrega', 'remessa'],
    'entrega': ['correspondencia', 'encomenda', 'remessa', 'coleta', 'logistica'],
    'logistica': ['entrega', 'transporte', 'coleta', 'armazenagem', 'distribuicao'],
    'distribuicao': ['logistica', 'entrega', 'transporte', 'comercializacao'],
    'pesquisa': ['desenvolvimento', 'experimentacao', 'estudo', 'ciencia', 'investigacao'],
    'biologia': ['biotecnologia', 'ciencias', 'vida', 'organismo', 'biomedicina'],
    'biotecnologia': ['biologia', 'genetica', 'tecnologia', 'quimico'],
    'quimica': ['quimico', 'biotecnologia', 'substancia', 'laboratorio'],
    'tecnicos': ['tecnica', 'especializado', 'instalacao', 'equipamento'],
    'teste': ['ens -est', 'exame', 'avaliacao', 'experimento', 'verificacao'],
    'arquitetura': ['projeto', 'urbanismo', 'edificacao', 'construcao', 'design'],
    'urbanismo': ['urbano', 'planejamento', 'cidade', 'arquitetura', 'projeto'],
    'paisagismo': ['jardinagem', 'jardim', 'verde', 'projeto', 'paisagem'],
    'jardinagem': ['paisagismo', 'jardim', 'poda', 'verde'],
    'desenho': ['design', 'projeto', 'tecnico', 'grafico', 'industrial'],
    'design': ['desenho', 'projeto', 'grafico', 'industrial', 'visual'],
    'eletrica': ['eletricista', 'eletrico', 'instalacao', 'eletronica', 'eletrotecnica'],
    'eletronica': ['eletrica', 'eletrotecnica', 'eletronic', 'instalacao'],
    'eletrotecnica': ['eletrica', 'eletronica', 'instalacao', 'eletrico'],
    'mecanica': ['maquina', 'equipamento', 'mecanico', 'instalacao'],
    'hidraulica': ['agua', 'instalacao', 'encanamento', 'hidraulico', 'predial'],
    'predial': ['edificio', 'predio', 'instalacao', 'tecnica'],
    'escoramento': ['contencao', 'encosta', 'estabilizacao', 'solo', 'obra'],
    'contencao': ['escoramento', 'encosta', 'estabilizacao', 'solo', 'barreira'],
    'encosta': ['contencao', 'escoramento', 'estabilizacao', 'declive'],
    'florestal': ['florestamento', 'silvicultura', 'floresta', 'colheita', 'exploracao']
  };

  // ---------- Normalização ----------
  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9.\s-]/g, ' ')
      .replace(/[\s-]+/g, ' ')
      .trim();
  }

  // Redução de plural simples (apenas quando seguro): remove 's' final se len>4.
  function stem(t) {
    if (t.length > 4 && t.endsWith('s') && !t.endsWith('ss') && !t.endsWith('us')) return t.slice(0, -1);
    return t;
  }

  function tokenize(s) {
    return norm(s).split(' ').filter(function (t) {
      return t.length > 2 && !STOP.has(t);
    }).map(stem);
  }

  function expandTokens(toks) {
    var out = [];
    var seen = {};
    toks.forEach(function (t) {
      if (!seen[t]) { seen[t] = 1; out.push(t); }
      var syns = SYNONYMS[t];
      if (syns) syns.forEach(function (s) {
        if (!seen[s]) { seen[s] = 1; out.push(s); }
      });
    });
    return out;
  }

  // ---------- Índice TF-IDF (postings) ----------
  function buildIndex(nbsList) {
    var docs = nbsList.map(function (d) {
      return {
        code: String(d.codigo || ''),
        desc: String(d.descricao || ''),
        tokens: tokenize(d.descricao)
      };
    });
    var N = docs.length;
    var df = {};
    var postings = {};
    docs.forEach(function (d, i) {
      var uniq = {};
      d.tokens.forEach(function (t) {
        if (!uniq[t]) {
          uniq[t] = 1;
          df[t] = (df[t] || 0) + 1;
          (postings[t] = postings[t] || []).push(i);
        }
      });
    });
    function idf(t) { return Math.log((N + 1) / ((df[t] || 0) + 1)) + 1; }
    return { docs: docs, idf: idf, postings: postings, N: N, df: df };
  }

  // ---------- Similaridade (cosine com pesos idf) ----------
  function similarity(qTokens, idf, doc) {
    var q = {};
    var qNorm = 0;
    qTokens.forEach(function (t) {
      var w = idf(t) || 1;
      q[t] = w;
      qNorm += w * w;
    });
    qNorm = Math.sqrt(qNorm) || 1;

    var dot = 0;
    var matched = [];
    var docSet = {};
    doc.tokens.forEach(function (t) { docSet[t] = (docSet[t] || 0) + 1; });
    for (var t in q) {
      if (docSet[t]) {
        var w2 = (idf(t) || 1);
        dot += w2 * w2;
        matched.push(t);
      }
    }

    var dNorm = 0;
    for (var j = 0; j < doc.tokens.length; j++) {
      var w3 = idf(doc.tokens[j]) || 1;
      dNorm += w3 * w3;
    }
    dNorm = Math.sqrt(dNorm) || 1;
    return { score: dot / (qNorm * dNorm), matched: matched };
  }

  // ---------- Correlação ----------
  function getCorrelations(lcTokens, opts) {
    opts = opts || {};
    var minScore = opts.minScore || 0.05;
    var maxResults = opts.maxResults || 14;
    var index = getIndex();

    var qTokens = expandTokens(lcTokens);

    var scored = [];
    var seen = {};
    var i, j;
    for (i = 0; i < qTokens.length; i++) {
      var list = index.postings[qTokens[i]] || [];
      for (j = 0; j < list.length; j++) {
        seen[list[j]] = 1;
      }
    }
    // candidatos = união dos postings; calcula similaridade real
    var docIds = Object.keys(seen).map(Number);
    // Ordena candidatos pelo número de termos compartilhados com o postings da query
    // (heurística para reduzir pior caso; N=1.2k é pequeno).
    for (i = 0; i < docIds.length; i++) {
      var r = similarity(qTokens, index.idf, index.docs[docIds[i]]);
      if (r.score > minScore) scored.push({ i: docIds[i], s: r.score, m: r.matched });
    }
    // Caso existam docIds não cobertos (query sem nenhum termo conhecido), varre tudo.
    if (!docIds.length) {
      for (i = 0; i < index.N; i++) {
        var r2 = similarity(qTokens, index.idf, index.docs[i]);
        if (r2.score > minScore) scored.push({ i: i, s: r2.score, m: r2.matched });
      }
    }
    scored.sort(function (a, b) { return b.s - a.s; });
    if (scored.length > maxResults) scored = scored.slice(0, maxResults);

    return scored.map(function (r) {
      var d = index.docs[r.i];
      return {
        code: d.code,
        descricao: d.desc,
        score: Math.round(r.s * 1000) / 1000,
        matchedTokens: r.m
      };
    });
  }

  var _index = null;
  function getIndex() {
    if (!_index) {
      var nbs = (global.NBS_DATA) || [];
      _index = buildIndex(nbs);
    }
    return _index;
  }

  var Engine = {
    norm: norm,
    stem: stem,
    tokenize: tokenize,
    expandTokens: expandTokens,
    buildIndex: buildIndex,
    similarity: similarity,
    getCorrelations: getCorrelations,
    _setData: function (nbs) {
      _index = buildIndex(nbs);
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = Engine;
  else global.Engine = Engine;
})(typeof window !== 'undefined' ? window : globalThis);