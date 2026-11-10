/* GeoVista — Change-over-time comparison (compare.js). Add AFTER geomap.js. */
(() => {
  const mapSec = document.getElementById('map'); if (!mapSec || document.getElementById('compare')) return;
  const $ = (s, r = document) => r.querySelector(s);

  document.head.insertAdjacentHTML('beforeend', `<style>
#compare{--ol-base:60}
.cmp-card{border:1px solid var(--ol);background:var(--card);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.cmp-head{padding:1.1rem 1.5rem;border-bottom:1px solid var(--line)}
.cmp-head h3{margin:0;font:700 1.4rem var(--display);letter-spacing:-.04em}.cmp-head p{margin:.15rem 0 0;color:var(--muted);font:.74rem var(--mono)}
.cmp{position:relative;aspect-ratio:16/9;overflow:hidden;--pos:50%;background:var(--surface);user-select:none;-webkit-user-select:none;touch-action:pan-y;cursor:ew-resize;outline-offset:-4px}
.cmp-layer{position:absolute;inset:0;padding:1rem;background:#fff}
.cmp-layer img,.cmp-empty{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none}
.cmp-before{clip-path:inset(0 calc(100% - var(--pos)) 0 0)}
.cmp-empty{display:grid;place-items:center;color:#fff;font:.74rem var(--mono);letter-spacing:.08em;text-align:center;padding:1rem}
.cmp-after .cmp-empty{filter:hue-rotate(70deg) brightness(.8)}
.cmp-tag{position:absolute;top:1rem;padding:.3rem .7rem;border-radius:99px;background:rgba(4,10,16,.72);color:#fff;font:600 .78rem var(--mono);pointer-events:none}
.cmp-tag.l{left:1rem}.cmp-tag.r{right:1rem}
.cmp-line{position:absolute;top:0;bottom:0;left:var(--pos);width:3px;margin-left:-1.5px;background:#fff;box-shadow:0 0 12px rgba(0,0,0,.5);pointer-events:none}
.cmp-line b{position:absolute;top:50%;left:50%;width:44px;height:44px;transform:translate(-50%,-50%);border-radius:50%;background:#fff;color:#122019;display:grid;place-items:center;font-size:1.1rem;box-shadow:0 4px 16px rgba(0,0,0,.45)}
.cmp-legend{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem 1.4rem;padding:.9rem 1.5rem;border-top:1px solid var(--line);color:var(--muted);font:.76rem var(--mono)}
.cmp-legend h5{margin:0;color:var(--lime);font:500 .66rem var(--mono);letter-spacing:.1em;text-transform:uppercase}
.cmp-lg{display:inline-flex;align-items:center;gap:.45rem;color:var(--ink)}
.cmp-sw{width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.3)}
.cmp-label{margin:2rem 0 .8rem;color:var(--lime);font:.7rem var(--mono);letter-spacing:.12em;text-transform:uppercase}
.cmp-row{display:flex;gap:1rem;overflow-x:auto;padding:.3rem .2rem 1rem;scroll-snap-type:x proximity}
.cmp-pick{flex:0 0 220px;scroll-snap-align:start;padding:0;border:1px solid var(--ol);border-radius:14px;background:var(--card);color:var(--ink);text-align:left;font:inherit;overflow:hidden;transition:border-color .25s,transform .25s}
.cmp-pick:hover{transform:translateY(-3px);border-color:var(--ol-strong)}
.cmp-pick.on{border-color:var(--lime);box-shadow:0 0 0 2px color-mix(in srgb,var(--lime) 45%,transparent)}
.cmp-thumb{display:block;height:100px;background-size:cover;background-position:center}
.cmp-pick b{display:block;padding:.7rem .8rem .2rem;font:600 .86rem/1.3 var(--display)}
.cmp-pick small{display:block;padding:0 .8rem .8rem;color:var(--muted);font:.68rem var(--mono)}
@media(max-width:600px){.cmp{aspect-ratio:4/3}.cmp-pick{flex-basis:180px}}
</style>`);

  mapSec.insertAdjacentHTML('afterend', `<section id="compare" class="section"><div class="shell">
  <div class="heading reveal"><p class="eyebrow">05 / Change over time</p><h2>Drag to see the landscape change.</h2><p class="intro">Slide the handle to compare satellite imagery from two time periods. Pick a project below to load its images.</p></div>
  <div class="reveal">
    <div class="cmp-card">
      <div class="cmp-head"><h3 id="cmpTitle"></h3><p id="cmpSub"></p></div>
      <div class="cmp" id="cmp" tabindex="0" role="slider" aria-label="Before and after imagery slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"></div>
      <div class="cmp-legend" id="cmpLegend"></div>
    </div>
    <p class="cmp-label">Choose a project</p>
    <div class="cmp-row" id="cmpRow" role="group" aria-label="Projects"></div>
  </div>
</div></section>`);

  const P = DATA.projects.filter(p => p.compare && (p.compare.before || p.compare.after)),   // only projects that have comparison images
    box = $('#cmp'); let pos = 50, drag = false, cur = 0;
  const setPos = v => { pos = Math.max(0, Math.min(100, v)); box.style.setProperty('--pos', pos + '%'); box.setAttribute('aria-valuenow', Math.round(pos)); };
  const move = e => { const r = box.getBoundingClientRect(); setPos((e.clientX - r.left) / r.width * 100); };
  box.addEventListener('pointerdown', e => { drag = true; box.setPointerCapture(e.pointerId); move(e); });
  box.addEventListener('pointermove', e => { if (drag) move(e); });
  ['pointerup', 'pointercancel'].forEach(t => box.addEventListener(t, () => { drag = false; }));
  box.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { e.preventDefault(); setPos(pos - 5); } if (e.key === 'ArrowRight') { e.preventDefault(); setPos(pos + 5); } });

  const pair = p => { const c = p.compare || {}, k = p.comparison || {};
    return { b: c.before || '', a: c.after || '', bl: c.beforeLabel || k.beforeLabel || 'Before', al: c.afterLabel || k.afterLabel || 'After', lg: c.legend || [] }; };
  const layer = (src, p, label, side) => src ? `<img src="${esc(src)}" alt="${esc(p.title)} imagery, ${esc(label)}" draggable="false">`
    : `<div class="cmp-empty ${esc(p.color || 'blue')}">${esc(label)}<br>Add compare.${side} image</div>`;

  function select(i) {
    const p = P[i]; if (!p) return; cur = i; const c = pair(p);
    $('#cmpTitle').textContent = p.title; $('#cmpSub').textContent = `${c.bl}  ⇆  ${c.al}  ·  drag the handle or use ← →`;
    box.innerHTML = `<div class="cmp-layer cmp-after">${layer(c.a, p, c.al, 'after')}</div><div class="cmp-layer cmp-before">${layer(c.b, p, c.bl, 'before')}</div>
      <span class="cmp-tag l">${esc(c.bl)}</span><span class="cmp-tag r">${esc(c.al)}</span><span class="cmp-line"><b>⇆</b></span>`;
    setPos(50);
    $('#cmpLegend').innerHTML = `<h5>Legend</h5><span class="cmp-lg"><span class="cmp-sw" style="background:#fff"></span>Left: ${esc(c.bl)}</span><span class="cmp-lg"><span class="cmp-sw" style="background:#2e9fb1"></span>Right: ${esc(c.al)}</span>`
      + c.lg.map(([col, t]) => `<span class="cmp-lg"><span class="cmp-sw" style="background:${esc(col)}"></span>${esc(t)}</span>`).join('');
    $('#cmpRow').querySelectorAll('.cmp-pick').forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-pressed', k === i); });
  }

  $('#cmpRow').innerHTML = P.map((p, i) => { const c = pair(p), src = p.cover || c.a || '';
    return `<button type="button" class="cmp-pick" data-i="${i}" aria-pressed="false"><span class="cmp-thumb ${esc(p.color || 'blue')}"${src ? ` style="background-image:url('${esc(src)}')"` : ''}></span><b>${esc(p.title)}</b><small>${esc(c.bl)} → ${esc(c.al)}</small></button>`; }).join('');
  $('#cmpRow').onclick = e => { const b = e.target.closest('[data-i]'); if (b) select(+b.dataset.i); };
  if (P.length) select(0); else document.getElementById('compare').remove();   // nothing to compare: hide the whole section
})();