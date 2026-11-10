/* GeoVista — Map dashboard (geomap.js). Self-contained: add  <script src="geomap.js"></script>  AFTER script.js. Nothing else to edit.
   It injects the section between Skills and Projects, adds "Map" to the menu, and loads Leaflet and Chart.js itself.
   Imagery: Google satellite tiles from the supplied OnlineImagery.lyr layer.
   Project locations, comparisons, and images are read from each DATA.projects record. GEO is only a fallback for legacy records. */
const GEO = [
  { n: 'LST time series', c: [31.42, 73.08], h: .30, w: .36, ct: 'Mean LST by season', t: 'bar', u: '°C', a: '2019', b: '2024', l: ['Winter', 'Spring', 'Summer', 'Autumn'], A: [15.2, 29.8, 41.5, 28.1], B: [16.1, 31.4, 43.2, 29.0] },
  { n: 'LULC change', c: [31.45, 73.14], h: .12, w: .15, ct: 'Land cover share', t: 'bar', u: '% area', a: '2015', b: '2024', l: ['Built-up', 'Vegetation', 'Water', 'Bare soil'], A: [18, 56, 2, 24], B: [27, 50, 2, 21] },
  { n: 'Forest SAR change', c: [33.90, 73.40], h: .18, w: .22, ct: 'Mean VV backscatter', t: 'bar', u: 'dB', a: '2022', b: '2024', l: ['Dense canopy', 'Open canopy', 'Disturbed edge'], A: [-7.8, -9.4, -12.1], B: [-8.1, -10.2, -14.3] },
  { n: 'Agri & climate', c: [30.97, 72.48], h: .22, w: .28, ct: 'Monthly mean NDVI', t: 'line', u: 'NDVI', a: '2023', b: '2024', l: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], A: [.35, .48, .62, .45, .30, .28, .42, .55, .52, .40, .33, .34], B: [.33, .46, .57, .40, .27, .25, .38, .50, .49, .38, .31, .32] },
  { n: 'WebGIS field notes', c: [31.52, 74.36], h: .10, w: .13, ct: 'Mapped content', t: 'bar', u: 'count', a: '2023', b: '2025', l: ['Sites', 'Layers', 'Popups'], A: [12, 3, 12], B: [36, 8, 36] }
];

(() => {
  const anchor = document.getElementById('projects'); if (!anchor || document.getElementById('map')) return;
  const $ = (s, r = document) => r.querySelector(s);
  const load = (src, css) => new Promise((ok, no) => { const e = document.createElement(css ? 'link' : 'script'); if (css) e.rel = 'stylesheet'; e[css ? 'href' : 'src'] = src; e.onload = ok; e.onerror = no; document.head.append(e); });

  /* ---------- inject styles, section and menu link ---------- */
  document.head.insertAdjacentHTML('beforeend', `<style>
#map{--ol-base:120}
.geo-frame{border:1px solid var(--ol);background:var(--card);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.geo-head,.geo-bar{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;padding:1.1rem 1.5rem;border-bottom:1px solid var(--line)}
.geo-bar{padding:.8rem 1.5rem}.geo-bar .filters{margin:0}
.geo-head h3{margin:0;font:700 1.6rem var(--display);letter-spacing:-.04em}.geo-head p{margin:.1rem 0 0;color:var(--muted);font-size:.9rem}
.geo-head .r{text-align:right}.geo-head .r b{display:block;font-size:.95rem}.geo-head .r span{color:var(--muted);font:.72rem var(--mono)}
.geo-tools{display:flex;gap:.6rem;flex-wrap:wrap}
#map .btn.ghost{color:var(--ink);border-color:var(--line);background:transparent}
.geo-body{display:grid;grid-template-columns:1fr 340px}
.geo-map{position:relative;z-index:0;isolation:isolate;min-height:600px;background:var(--surface)}
.geo-map.drop{outline:2px dashed var(--lime2);outline-offset:-6px}
.geo-panel{padding:1.2rem;border-left:1px solid var(--line);overflow:auto;max-height:640px}
.geo-panel h4{display:flex;align-items:center;gap:.5rem;margin:0 0 1rem;font:600 1.1rem var(--display)}.geo-panel-label{margin:1rem 0 .5rem;color:var(--lime);font:.66rem var(--mono);letter-spacing:.1em;text-transform:uppercase}.geo-panel-label:first-child{margin-top:0}.project-layer{align-items:flex-start}.project-layer small{display:block;line-height:1.35}.geo-compare-label{display:block;margin:.9rem 0 .35rem;color:var(--muted);font:.72rem var(--mono)}.geo-compare{width:100%;padding:.55rem .6rem;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);font:inherit}
.ly{display:flex;align-items:center;gap:.8rem;width:100%;margin-bottom:.65rem;padding:.75rem 1rem;border:1px solid var(--line);border-radius:14px;background:var(--card);color:var(--ink);text-align:left;font:inherit;transition:border-color .2s,background .2s}
.ly.on{border-color:var(--lime);background:color-mix(in srgb,var(--lime) 13%,transparent)}
.ly i{width:1.5rem;font-style:normal;text-align:center}.ly span{flex:1}.ly b{display:block;font-weight:600}.ly small{color:var(--muted);font-size:.8rem}
.ly em{font-style:normal;color:var(--lime)}.ly:not(.on) em{opacity:.35}
.geo-live{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;margin-top:.9rem}.geo-live input{width:auto;padding:.45rem .6rem;font-size:.85rem}
.geo-live .btn{min-height:36px;padding:.4rem .8rem}
.geo-lower{display:grid;grid-template-columns:1fr 1.3fr;gap:1rem;margin-top:1rem}
.geo-card,.geo-chart{padding:1.2rem;border:1px solid var(--ol);background:var(--card);border-radius:var(--r)}
.geo-chart{position:relative;min-height:280px}
.geo-card h3{margin:.5rem 0 .4rem;font:600 1.1rem/1.25 var(--display);letter-spacing:-.03em}.geo-card p{margin:0;color:var(--muted);font-size:.9rem}
.geo-card .tags{margin:.9rem 0 0}#geoDelta{margin:.8rem 0 0}.geo-images{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem}.geo-images img{width:78px;height:58px;object-fit:cover;border-radius:8px;border:1px solid var(--line)}
.geo-map .leaflet-container{font-family:var(--body);background:var(--surface)}
.geo-map .leaflet-popup-content-wrapper,.geo-map .leaflet-popup-tip,.geo-map .leaflet-tooltip{background:var(--card);color:var(--ink)}
.geo-map .leaflet-popup-content{margin:.8rem 1rem;font:.85rem/1.5 var(--body)}.geo-summary-tooltip{display:block;box-sizing:border-box;width:min(280px,calc(100vw - 2rem));max-width:280px;white-space:normal;overflow:hidden;overflow-wrap:anywhere;line-height:1.45;padding:.65rem .8rem}.geo-summary-tooltip strong{display:block;margin-bottom:.35rem;color:var(--lime)}.geo-summary-tooltip span{color:var(--ink)}
.geo-map .leaflet-bar a{background:var(--card);color:var(--ink);border-color:var(--line)}
.geo-map .leaflet-control-attribution{background:color-mix(in srgb,var(--card) 80%,transparent);color:var(--muted)}
.geo-legend{min-width:170px;max-width:230px;padding:.7rem .9rem;border:1px solid var(--line);border-radius:12px;background:var(--card);color:var(--ink);box-shadow:var(--shadow);font:.74rem/1.7 var(--body)}
.geo-legend h5{margin:.5rem 0 .25rem;color:var(--lime);font:500 .64rem var(--mono);letter-spacing:.1em;text-transform:uppercase}.geo-legend h5:first-child{margin-top:0}
.lg-row{display:flex;align-items:center;gap:.5rem}.lg-sw{flex:none;width:13px;height:13px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.25)}
.lg-sw.sq{border-radius:3px;box-shadow:none}.lg-sw.am{border:2px dashed #ffc107;background:rgba(255,193,7,.3)}.lg-sw.up{border:2px solid var(--lime);background:color-mix(in srgb,var(--lime) 35%,transparent)}
.lg-ramp{height:8px;margin:.2rem 0;border-radius:99px}.lg-ends{display:flex;justify-content:space-between;color:var(--muted);font:.62rem var(--mono)}
.geo-map .leaflet-tooltip.geo-pic-tooltip{width:190px;padding:0;overflow:hidden;white-space:normal;border-radius:12px;border:1px solid var(--line);box-shadow:var(--shadow)}
.geo-pic-tooltip img,.geo-nopic{display:block;width:100%;height:110px;object-fit:cover}
.geo-nopic{display:grid;place-items:center;color:#fff;font:.65rem var(--mono);letter-spacing:.1em}
.geo-pic-tooltip strong{display:block;padding:.5rem .7rem;font:600 .8rem/1.3 var(--display);color:var(--ink);white-space:normal}
.geo-pop img{display:block;width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:.5rem}
.geo-pop p{margin:.3rem 0 .6rem;color:var(--muted)}
.geo-pop a{color:var(--lime);font-weight:700}
.geo-goal{background:none;border:0}
.geo-goal span{position:relative;display:block;width:34px;height:34px;transition:transform .25s}
.geo-goal i{position:absolute;border-radius:50%;box-sizing:border-box}
.geo-goal i:nth-child(1){inset:0;border:2px solid var(--c);background:color-mix(in srgb,var(--c) 28%,transparent);box-shadow:0 0 0 1px rgba(0,0,0,.35)}
.geo-goal i:nth-child(2){inset:8px;border:2px solid #fff;background:rgba(0,0,0,.2)}
.geo-goal i:nth-child(3){inset:14px;background:var(--c);border:2px solid #fff}
.geo-goal span::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--c);animation:goalPulse 2s ease-out infinite}
.geo-goal.sel span{transform:scale(1.3)}
@keyframes goalPulse{from{transform:scale(1);opacity:.8}to{transform:scale(2.2);opacity:0}}
@media(max-width:900px){.geo-body,.geo-lower{grid-template-columns:1fr}.geo-panel{border-left:0;border-top:1px solid var(--line);max-height:none}.geo-map{min-height:440px}.geo-head .r{text-align:left}}
</style>`);
  anchor.insertAdjacentHTML('beforebegin', `<section id="map" class="section"><div class="shell">
  <div class="heading reveal"><p class="eyebrow">04 / Geospatial dashboard</p><h2>Projects on live satellite imagery.</h2><p class="intro">Use Google satellite imagery and select a project in the Layer panel to reveal its location, summary, and comparison data.</p></div>
  <div class="reveal"><div class="geo-frame">
    <div class="geo-head"><div><h3>Geospatial Map</h3><p>Live satellite mapping · project areas &amp; change</p></div><div class="r"><b>Region: Punjab, Pakistan</b><span>WGS 1984 | <span id="geoClock"></span></span></div></div>
    <div class="geo-body"><div class="geo-map" id="geoMap" role="application" aria-label="Interactive Google satellite map of project areas"></div>
      <aside class="geo-panel"><h4>☰ Layer panel</h4><div id="geoProjects" class="geo-projects" role="group" aria-label="Projects"></div><div id="geoLayers"></div>
        <p class="note" id="geoLive">Google satellite imagery · select a project to show its location.</p></aside></div>
  </div>
  <div class="geo-lower"><div id="geoInfo"></div><div><div class="geo-chart"><canvas id="geoChart" role="img" aria-label="Change comparison chart for the selected project"></canvas></div><div class="tags" id="geoDelta"></div></div></div>
  <p class="note" id="geoNote" role="status">Select a project above to show its location and summary.</p></div>
</div></section>`);
  if (typeof NAV !== 'undefined' && !NAV.includes('map')) NAV.splice(NAV.indexOf('projects'), 0, 'map');   // script.js builds the menu later
  const say = t => { $('#geoNote').textContent = t; };
  const clock = () => { $('#geoClock').textContent = new Date().toISOString().slice(11, 19) + ' UTC'; }; clock(); setInterval(clock, 1000);

  load('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css', 1);
  load('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js')
    .then(() => load('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js').catch(() => 0))
    .then(init, () => say('The map library could not load — check your internet connection.'));

  function init() {
    const P = DATA.projects, COL = { blue: '#2e9fb1', sand: '#c5924c', green: '#3c8d71', lime: '#9dbb42', purple: '#7250a8' };
    const GEO_ROWS = P.map((p, i) => {
      const fallback = { c: [31.3 + i * .08, 73.3 + i * .08], t: 'bar', u: 'value', a: 'Before', b: 'After', l: [], A: [], B: [] };
      const c = p.comparison || {};
      return {
        ...fallback,
        n: p.title,
        c: p.location || fallback.c,
        ct: c.title || fallback.ct || 'Project comparison',
        t: c.type || fallback.t || (c.labels && c.labels.length > 6 ? 'line' : 'bar'),
        u: c.unit || fallback.u || 'value',
        a: c.beforeLabel || fallback.a,
        b: c.afterLabel || fallback.b,
        l: c.labels || fallback.l,
               A: c.before || fallback.A,
        B: c.after || fallback.B,
               S: c.series || null,
        H: !!(c.labels && c.labels.length && (c.series || (c.before && c.after))),   // has its own chart data
        D: !!(c.labels && c.before && c.after)                                        // has before/after values for the change tags
      };
    });
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let cur = null, compareWith = null, chart, activeMarker = null;

    /* ---------- Google imagery from OnlineImagery.lyr ---------- */
   const LY = [
  { k: 'google', n: 'Google Satellite', s: 'Google online imagery', i: '🌍', on: 1,
    l: L.tileLayer('https://mt.google.com/vt/lyrs=s&hl=en&z={z}&x={x}&y={y}', { maxZoom: 20, zIndex: 1, attribution: 'Google satellite imagery' }) },
  { k: 'esri', n: 'Satellite (Esri)', s: 'World Imagery', i: '🛰', on: 0,
    l: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 19, maxZoom: 20, attribution: 'Tiles © Esri' }) },
  { k: 'terrain', n: 'Terrain', s: 'Relief & contours (OpenTopoMap)', i: '⛰', on: 0,
    l: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { subdomains: 'abc', maxNativeZoom: 17, maxZoom: 20, attribution: '© OpenTopoMap, © OpenStreetMap contributors' }) }
];
    const map = L.map('geoMap', { center: [31.3, 73.3], zoom: 7 });
    const projectLocation = L.layerGroup().addTo(map);
    LY.forEach(y => y.on && y.l.addTo(map));
    L.control.scale({ imperial: false }).addTo(map);
    new ResizeObserver(() => map.invalidateSize()).observe($('#geoMap'));

    function drawPanel() {
      $('#geoProjects').innerHTML = `<h5 class="geo-panel-label">Projects</h5>` + P.map((p, i) => `<button type="button" class="ly project-layer${cur === i ? ' on' : ''}" data-gp="${i}"><i style="color:${COL[p.color] || '#2e9fb1'}">●</i><span><b>${esc(GEO_ROWS[i].n)}</b><small>${esc(p.summary)}</small></span></button>`).join('') + `<label class="geo-compare-label" for="geoCompare">Compare selected project with</label><select id="geoCompare" class="geo-compare"><option value="">Its own before / after values</option>${P.map((p, i) => i !== cur ? `<option value="${i}"${compareWith === i ? ' selected' : ''}>${esc(p.title)}</option>` : '').join('')}</select>`;
      $('#geoLayers').innerHTML = `<h5 class="geo-panel-label">Imagery</h5>` + LY.map((y, i) => `<button type="button" class="ly${y.on ? ' on' : ''}" data-ly="${i}" aria-pressed="${!!y.on}"><i>${y.i}</i><span><b>${y.n}</b><small>${y.s}</small></span><em>${y.on ? '◉' : '○'}</em></button>`).join('');
    }
    $('#geoLayers').onclick = e => {
  const b = e.target.closest('[data-ly]'); if (!b) return; const k = +b.dataset.ly;
  LY.forEach((y, j) => { const on = j === k; if (on && !y.on) y.l.addTo(map); if (!on && y.on) map.removeLayer(y.l); y.on = on ? 1 : 0; });
  drawPanel();
};
    $('#geoProjects').onclick = e => { const b = e.target.closest('[data-gp]'); if (b) { compareWith = null; select(+b.dataset.gp, true); } };
    $('#geoProjects').onchange = e => { if (e.target.id === 'geoCompare') { compareWith = e.target.value === '' ? null : +e.target.value; drawChart(); } };

    /* ---------- legend ---------- */
    const legend = L.control({ position: 'bottomleft' });
    legend.onAdd = () => { const d = L.DomUtil.create('div', 'geo-legend'); L.DomEvent.disableClickPropagation(d); return d; }; legend.addTo(map);
    const ramp = (t, g, lo, hi) => `<h5>${t}</h5><div class="lg-ramp" style="background:${g}"></div><div class="lg-ends"><span>${lo}</span><span>${hi}</span></div>`;
   function drawLegend() { legend.getContainer().innerHTML = '<h5>Legend</h5><div class="lg-row"><i class="lg-sw" style="background:#fff;border-color:#2e9fb1"></i>Project location</div><div class="lg-ends"><span>Hover: photo · Click: details</span></div>'; }

const markers = [];
const picOf = p => p.cover || (p.images || []).filter(Boolean)[0] || '';
function drawMarkers() {
  projectLocation.clearLayers(); markers.length = 0;
  P.forEach((p, i) => {
    const g = GEO_ROWS[i]; if (!g || !g.c) return;
    const pic = picOf(p), col = COL[p.color] || '#2e9fb1';
    const img = pic ? `<img src="${esc(pic)}" alt="">` : `<div class="geo-nopic" style="background:${col}">PROJECT / 0${i + 1}</div>`;
    const icon = L.divIcon({ className: 'geo-goal', html: `<span style="--c:${col}"><i></i><i></i><i></i></span>`, iconSize: [34, 34], iconAnchor: [17, 17] });
    markers[i] = L.marker(g.c, { icon, keyboard: true, title: p.title })
      .bindTooltip(`${img}<strong>${esc(p.title)}</strong>`, { direction: 'top', offset: [0, -16], className: 'geo-pic-tooltip', opacity: 1 })
      .bindPopup(`<div class="geo-pop">${pic ? `<img src="${esc(pic)}" alt="">` : ''}<strong>${esc(p.title)}</strong><p>${esc(p.summary)}</p><a href="?project=${i}">Open project ↗</a></div>`, { maxWidth: 260, offset: [0, -12] })
      .on('click', () => select(i, false))
      .addTo(projectLocation);
  });
}
    /* ---------- show only the selected project location ---------- */
    function showProjectLocation(i, shouldZoom = true) {
      const g = GEO_ROWS[i], p = P[i]; if (!g || !p) return;
      projectLocation.clearLayers();
      const summary = `<strong>${esc(p.title)}</strong><br><span>${esc(p.summary)}</span>`;
      activeMarker = L.circleMarker(g.c, { radius: 9, color: '#fff', weight: 2, fillColor: COL[p.color] || '#2e9fb1', fillOpacity: 1 })
        .bindTooltip(summary, { direction: 'top', sticky: true, className: 'geo-summary-tooltip', opacity: .96 })
        .bindPopup(`<strong>${esc(p.title)}</strong><p>${esc(p.summary)}</p>`)
        .addTo(projectLocation);
      if (shouldZoom) map.setView(g.c, 10, { animate: !reduce });
    }

    /* ---------- chart, info card, selection ---------- */
    function drawChart() {
      const g = GEO_ROWS[cur]; if (!window.Chart || !g) return; chart && chart.destroy(); chart = null; if (!g.H) return;
      const cs = getComputedStyle(document.documentElement), tx = cs.getPropertyValue('--muted').trim(), gr = cs.getPropertyValue('--line').trim(), ln = g.t === 'line';
      const ds = (label, data, c) => ({ label, data, backgroundColor: c + (ln ? '' : 'cc'), borderColor: c, borderWidth: 2, borderRadius: ln ? 0 : 6, tension: .35, pointRadius: ln ? 3 : 0, fill: false });
      const other = compareWith !== null ? GEO_ROWS[compareWith] : null;
      const otherData = other && other.B.length === g.B.length ? other.B : g.B;
      const otherLabel = other ? P[compareWith].title : g.b;
            const palette = ['#2e9fb1', '#e0a44a', '#9dbb42', '#e5645b'];
      const datasets = g.S
        ? g.S.map((s, k) => ds(s.label, s.data, s.color || palette[k % palette.length]))
        : [ds(g.a, g.A, '#2e9fb1'), ds(otherLabel, otherData, '#e0a44a')];
      chart = new Chart($('#geoChart'), { type: g.t, data: { labels: g.l, datasets }, options: {
        plugins: { title: { display: true, text: `${g.ct} (${g.u})`, color: tx }, legend: { labels: { color: tx } } }, scales: { x: { ticks: { color: tx }, grid: { color: gr } }, y: { ticks: { color: tx }, grid: { color: gr } } } } });
    }
    const fmt = n => (n > 0 ? '+' : '') + (+n.toFixed(2)), avg = a => a.reduce((s, x) => s + x, 0) / a.length;
    function select(i, fit = true) {
      const g = GEO_ROWS[i], p = P[i]; if (!g || !p) return;
      cur = i;
      drawPanel();
      document.querySelectorAll('#geoProjects [data-gp]').forEach(b => b.classList.toggle('on', +b.dataset.gp === i));
      $('#geoInfo').innerHTML = `<div class="geo-card"><div class="t-meta"><span>${esc(p.cats[0])}</span><span>·</span><span>${esc(p.date)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tags">${p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>${(p.images || []).filter(Boolean).length ? `<div class="geo-images">${p.images.filter(Boolean).map(src => `<img src="${esc(src)}" alt="${esc(p.title)}" loading="lazy">`).join('')}</div>` : ''}<p class="note ok">Location shown for the selected project.${g.H ? ' Project comparison is linked to this record.' : ''}</p></div>`;
      const d = !g.D ? [] : g.l.length > 6 ? [['Mean change', avg(g.B) - avg(g.A)]] : g.l.map((l, k) => [l, g.B[k] - g.A[k]]);
      $('#geoDelta').innerHTML = g.D ? `<span class="tag">${esc(g.a)} → ${esc(g.b)}</span>` + d.map(([l, v]) => `<span class="tag">${esc(l)} ${fmt(v)} ${esc(g.u)}</span>`).join('') : '';
      $('#geoDelta').parentElement.style.display = g.H ? '' : 'none';                       // hide the chart column when there is no chart data
      document.querySelector('.geo-lower').style.gridTemplateColumns = g.H ? '' : '1fr';
      document.querySelectorAll('.geo-compare-label,#geoCompare').forEach(el => { el.style.display = g.H ? '' : 'none'; });
      markers.forEach((m, k) => { const el = m && m.getElement(); el && el.classList.toggle('sel', k === i); });
if (fit) map.setView(g.c, 10, { animate: !reduce });
markers[i] && markers[i].openPopup();
drawChart();
      $('#geoNote').textContent = `Showing the location and summary for “${p.title}”.`;
    }

    /* ---------- wiring ---------- */
    new MutationObserver(() => { if (cur !== null) drawChart(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
   drawPanel(); drawLegend(); drawMarkers();
$('#geoNote').textContent = 'Hover a target for its photo, click it for details, or pick a project in the panel.';
if (GEO_ROWS.length) map.fitBounds(L.latLngBounds(GEO_ROWS.map(g => g.c)).pad(.3), { maxZoom: 9 });
  }
})();
