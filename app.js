// app.js — TaxReform | LC 116 × NBS
// Correlação oficial: Anexo VIII (IBSCBS) + local do ISS (art. 3º LC 116) + local IBS (Anexo VIII)
(function () {
  'use strict';

  const NBS = window.NBS_DATA || [];
  const LC = window.LC116_DATA || [];
  const CORRELACAO = window.CORRELACAO || {};
  const LOCAL_RULES = window.LOCAL_RULES || {};
  const ART3_TITULO = window.ART3_TITULO || {};
  const getLocalRule = window.getLocalRule;
  const getCorrelacaoNBS = window.getCorrelacaoNBS;

  // ------------------------- utilitários -------------------------
  function norm(s) {
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9.\s]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }

  function pad2(n) {
    return String(parseInt(n, 10) || 0).padStart(2, '0');
  }

  function lcKey(item) {
    return item.item + '.' + pad2(item.subitem);
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---------- Tributação IBS/CBS por cClassTrib (LC 214/2025) ----------
  var CCLASSTRIB = window.CCLASSTRIB || {};
  var NBS_FALLBACK = window.NBS_CCLASS_FALLBACK || {};

  function normCClass(k) {
    var s = String(k == null ? '' : k).trim();
    if (!s) return '';
    s = s.replace(/\.0+$/, '');
    var m = s.match(/(\d+)/);
    if (m) return m[1].replace(/^0+(\d)/, '$1').padStart(6, '0').slice(-6);
    return s;
  }

  function tribInfo(code) {
    var nk = normCClass(code);
    return CCLASSTRIB[nk] || CCLASSTRIB[String(code)] || null;
  }

  function tribBadge(code, inferida) {
    var info = tribInfo(code);
    var nk = normCClass(code);
    var label, cls;
    if (!info) {
      label = nk + ' · sem tabela cClassTrib';
      cls = 'trib-outra';
    } else if (info.pRedIBS >= 100 && info.pRedCBS >= 100) {
      label = nk + ' · alíquota zero';
      cls = 'trib-zero';
    } else if (info.pRedIBS > 0 || info.pRedCBS > 0) {
      label = nk + ' · redução ' + info.pRedIBS + '% IBS / ' + info.pRedCBS + '% CBS';
      cls = 'trib-reduzida';
    } else if (/^4|^51|^55|^62|^8/.test(info.cst)) {
      label = nk + ' · ' + info.descCST;
      cls = 'trib-outra';
    } else {
      label = nk + ' · integral';
      cls = 'trib-integral';
    }
    return '<span class="trib-badge ' + cls + '">' + esc(label) + '</span>' +
      (inferida ? '<span class="trib-inferida">inferida p/ NBS (Anexo III saúde) — confirmar</span>' : '');
  }

  function efetivaStr(info) {
    if (!info) return '—';
    if (info.pRedIBS >= 100 && info.pRedCBS >= 100) return '0% (zero)';
    if (!info.pRedIBS && !info.pRedCBS) return '100% da referência';
    return (100 - info.pRedIBS) + '% da ref. IBS / ' + (100 - info.pRedCBS) + '% da ref. CBS';
  }

  // cClass efetivas de um NBS: próprias do Anexo VIII (correlacao.js + patch de células mescladas).
  // O Anexo VIII traz a cClass em células mescladas por grupo (ex.: 200029 nas linhas 125–254 da saúde);
  // o correlacao_patch.js preenche esses valores. O fallback abaixo é só rede de segurança.
  function cClassEfetivas(nbsCode, entry) {
    var out = {};
    Object.keys(entry.cClassTrib || {}).forEach(function (k) {
      out[normCClass(k)] = { nome: entry.cClassTrib[k], inferida: false };
    });
    if (!Object.keys(out).length && NBS_FALLBACK[nbsCode]) {
      NBS_FALLBACK[nbsCode].forEach(function (k) {
        var nk = normCClass(k);
        var info = tribInfo(nk);
        out[nk] = { nome: info ? info.nome : 'Fallback Anexo III — saúde humana', inferida: true };
      });
    }
    return out;
  }

  // Filtro por item (apenas subitens reais, ignorando headers "item.00")
  let lcItemFilter = '';
  let q = '';

  function isRealSub(item) {
    return item.subitem !== '0' && item.subitem !== 0;
  }

  function filterLc(query, itemFilter) {
    const nq = norm(query);
    const out = [];
    const seen = {};
    for (const item of LC) {
      if (!isRealSub(item)) continue;
      if (itemFilter && String(item.item) !== String(itemFilter)) continue;
      const key = lcKey(item);
      if (seen[key]) continue; // agrupa por subitem (desdobros compartilham a correlação)
      seen[key] = 1;
      if (!nq) { out.push(item); continue; }
      const code = (item.codigo || '');
      if (norm(code).includes(nq) ||
          norm(item.descricao).includes(nq) ||
          norm(key).includes(nq) ||
          norm(item.item + '.' + item.subitem).includes(nq)) {
        out.push(item);
      }
    }
    return out.slice(0, 201);
  }

  // ------------------------- render lista LC -------------------------
  function renderLc() {
    const list = filterLc(q, lcItemFilter);
    const el = document.getElementById('lcResults');
    document.getElementById('lcCount').textContent = list.length + ' subitens (agrupados por subitem — Anexo VIII)';

    if (!list.length) {
      el.innerHTML = '<div class="empty">Nenhum resultado — refine a busca.</div>';
      return;
    }

    el.innerHTML = list.map(function (item) {
      const code = item.codigo ? item.codigo.replace(/\.0$/, '') : lcKey(item);
      const rule = getLocalRule(item.item, item.subitem);
      const hasDesd = LC.some(function (x) {
        return x.item === item.item && x.subitem === item.subitem && x.desdobro && x.desdobro !== '0';
      });
      const meta = 'Item ' + item.item + ' · subitem ' + item.subitem;
      const badge = hasDesd ? ' · desdobros' : '';
      const uso = 'Agrupado por subitem (mesma correlação do Anexo VIII)';
      return '<div class="result-item" data-key="' + lcKey(item) + '">' +
        '<div class="result-code">' + esc(code) + (rule.inciso && rule.inciso !== 'caput' ? ' <span class="inciso-badge">' + esc(String(rule.inciso)) + '</span>' : '') + '</div>' +
        '<div class="result-desc">' + esc(item.descricao) + '</div>' +
        '<div class="result-meta">' + meta + badge + ' · ' + uso + '</div>' +
        '</div>';
    }).join('');

    Array.prototype.forEach.call(el.querySelectorAll('.result-item'), function (node) {
      node.addEventListener('click', function () {
        selectLc(node.dataset.key);
      });
    });
  }

  // ------------------------- seleção & detalhe -------------------------
  let selectedKey = null;

  function selectLc(key) {
    selectedKey = key;
    Array.prototype.forEach.call(document.querySelectorAll('#lcResults .result-item'), function (n) {
      n.classList.toggle('selected', n.dataset.key === key);
    });
    showDetail(key);
  }

  function showDetail(key) {
    const panel = document.getElementById('detailPanel');
    panel.classList.add('visible');

    const base = LC.find(function (x) { return lcKey(x) === key && isRealSub(x); });
    if (!base) return;

    const rule = getLocalRule(base.item, base.subitem);
    const corr = getCorrelacaoNBS(base.item, base.subitem);
    const titulo = ART3_TITULO[rule.tipo] || ART3_TITULO.prestador;

    // desdobros deste subitem
    const desdros = LC.filter(function (x) {
      return x.item === base.item && x.subitem === base.subitem && x.desdobro && x.desdobro !== '0';
    });

    // ---- box local do ISS (art. 3º) ----
    const boxISS =
      '<div class="local-box ' + titulo.cls + '">' +
      '<div class="label">' + (titulo.icon || '') + ' ' + esc(titulo.label) + ' — Local do ISS no art. 3º da LC 116</div>' +
      '<div class="title">' + (rule.local ? esc(rule.local) : 'Estabelecimento prestador') + '</div>' +
      '<p>' + esc(rule.texto) + '</p>' +
      '<p class="base">Base: ' + esc(rule.base) + (rule.inciso ? ' · Interno: inciso/especificação ' + esc(String(rule.inciso)) : '') + '</p>' +
      '</div>';

    // ---- correlação NBS oficial (Anexo VIII) ----
    let nbsHtml = '';
    let ibsHtml = '';

    if (corr) {
      const codes = Object.keys(corr.nbs).sort();
      nbsHtml = codes.map(function (n) {
        const e = corr.nbs[n];
        const badgePS = e.psOnerosa === 'S' ? '<span class="pill pill-s">Serv. oneroso</span>' : '';
        const badgeADQ = e.adqExterior === 'S' ? '<span class="pill pill-a">Adq. exterior</span>' : '';
        const eff = cClassEfetivas(n, e);
        const keys = Object.keys(eff);
        const tribHtml = keys.length
          ? keys.map(function (k) { return tribBadge(k, eff[k].inferida); }).join('')
          : '<span class="trib-badge trib-outra">sem cClass no Anexo VIII — verificar enquadramento</span>';
        return '<div class="match-item">' +
          '<div><div class="code">' + esc(n) + ' ' + badgePS + badgeADQ + '</div>' +
          '<div class="desc">' + esc(e.descricao || '') + '</div>' +
          '<div style="margin-top:0.3rem;">' + tribHtml + '</div></div>' +
          '</div>';
      }).join('');

      // local IBS (Anexo VIII) + INDOP + classificação tributária
      const locais = {};
      codes.forEach(function (n) {
        const e = corr.nbs[n];
        (e.indops || []).forEach(function (io) {
          const k = (io.local || 'sem inf. de local') + ' (' + io.codigo + ')';
          locais[k] = (locais[k] || 0) + 1;
        });
      });
      const cctribs = {};
      codes.forEach(function (n) {
        const e = corr.nbs[n];
        const eff = cClassEfetivas(n, e);
        Object.keys(eff).forEach(function (k) {
          var nk = normCClass(k);
          if (!cctribs[nk]) cctribs[nk] = { nome: eff[k].nome, inferida: eff[k].inferida, nbs: [] };
          if (cctribs[nk].nbs.indexOf(n) < 0) cctribs[nk].nbs.push(n);
        });
      });

      let locaisHtml = Object.keys(locais).map(function (k) {
        return '<li>' + esc(k) + (locais[k] > 1 ? ' <small>x' + locais[k] + '</small>' : '') + '</li>';
      }).join('');
      if (!locaisHtml) locaisHtml = '<li>Sem local IBS informado no Anexo VIII.</li>';

      let cctHtml = Object.keys(cctribs).sort().map(function (k) {
        var info = tribInfo(k);
        var nome = (cctribs[k] && cctribs[k].nome) || (info && info.nome) || '';
        var cst = info ? ('CST ' + info.cst + ' — ' + info.descCST) : 'sem tabela cClassTrib';
        var red = info ? ('-' + info.pRedIBS + '% IBS / -' + info.pRedCBS + '% CBS') : '—';
        var ef = efetivaStr(info);
        var inf = cctribs[k].inferida ? ' <span class="trib-inferida">inferida</span>' : '';
        var nbsList = '<br><small style="color:var(--muted);">' + cctribs[k].nbs.map(esc).join(', ') + '</small>';
        return '<tr><td><span class="mono">' + esc(k) + '</span>' + inf + nbsList + '</td>' +
          '<td>' + esc(nome) + '<br><small style="color:var(--muted);">' + esc(cst) + '</small></td>' +
          '<td>' + esc(red) + '<br><small style="color:var(--muted);">' + esc(ef) + '</small></td></tr>';
      }).join('');
      if (!cctHtml) cctHtml = '<li>Sem classificação tributária informada.</li>';
      else cctHtml = '<table class="cct-table"><thead><tr><th>cClassTrib</th><th>Enquadramento / CST</th><th>IBS / CBS</th></tr></thead><tbody>' + cctHtml + '</tbody></table>';

      ibsHtml =
        '<div class="ibs-grid">' +
        '<div class="ibs-box"><h4>🌐 Local incidência IBS (Anexo VIII)</h4><ul>' + locaisHtml + '</ul></div>' +
        '<div class="ibs-box" style="grid-column: 1 / -1;"><h4>🏷️ Tributação IBS/CBS por cClassTrib (LC 214/2025)</h4>' + cctHtml +
        '<div class="note" style="border:none;padding:0.4rem 0 0;margin:0.4rem 0 0;">Ex.: 200029 = saúde (Anexo III) com redução de 60% → alíquota efetiva de 40% da referência. 000001 = integral (100%). Fonte: cClassTrib 2026-06-22.</div></div>' +
        '</div>';
    } else {
      nbsHtml = '<div class="empty">Nenhuma correlação oficial no Anexo VIII para este subitem.</div>';
      ibsHtml = '';
    }

    const desdHtml = desdros.length ? '<div class="desdros"><strong>Desdobros cTribNac deste subitem:</strong> ' +
      desdros.map(function (d) { return '<span class="pill pill-code">' + esc(d.codigo.replace(/\.0$/, '')) + '</span>'; }).join(' ') +
      '</div>' : '';

    const corrInfo = corr ? '<div class="correl-origem">📄 Correlação oficial — Anexo VIII (Resolução/Base IBSCBS V1.00.00), ' + Object.keys(corr.nbs).length + ' códigos NBS. cClassTrib por NBS (células mescladas preenchidas) + tabela cClassTrib 2026-06-22.</div>' : '';

    document.getElementById('detailContent').innerHTML =
      '<div class="selected-lc">' +
      '<h3>Serviço selecionado (LC 116 / LISTA.SERV.NAC)</h3>' +
      '<div class="code">' + lcKey(base) + '</div>' +
      '<div class="desc">' + esc(base.descricao) + '</div>' +
      (desdHtml || '<div class="desdros"></div>') +
      '</div>' +

      boxISS +

      '<div class="nbs-matches">' +
      '<h3><span class="icon icon-nbs" style="display:inline-grid;width:20px;height:20px;font-size:11px;border-radius:5px">N</span> Serviços correlatos na NBS (Anexo VIII)</h3>' +
      corrInfo +
      nbsHtml +
      '</div>' +

      (ibsHtml ? '<div class="ibs-section">' + ibsHtml + '</div>' : '') +

      '<div class="note">' +
      '<strong>Nota:</strong> A correlação NBS é a oficial do Anexo VIII (IBSCBS). O local do ISS segue o art. 3º da LC 116/2003, com as alterações da LC 157/2016, LC 175/2020, LC 183/2021 e LC 218/2025. O "local IBS" e a classificação cClassTrib são do Anexo VIII (reforma tributária IBS/CBS). Em caso de dúvida, verifique a legislação municipal e orientações da RFB/CGSN.' +
      '</div>';

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ------------------------- eventos -------------------------
  document.getElementById('lcSearch').addEventListener('input', function () {
    q = this.value;
    renderLc();
  });
  document.getElementById('lcFilters').addEventListener('click', function (e) {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    Array.prototype.forEach.call(document.querySelectorAll('#lcFilters .chip'), function (c) {
      c.classList.remove('active');
    });
    btn.classList.add('active');
    lcItemFilter = btn.dataset.item || '';
    renderLc();
  });

  // ------------------------- init -------------------------
  renderLc();
})();