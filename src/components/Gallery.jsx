'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { prints, waLink } from '@/data/site';

const CATS = [['all', 'All'], ['prototype', 'Prototypes'], ['gift', 'Gifts'], ['part', 'Spare parts'], ['model', 'Models']];
const NAME = Object.fromEntries(CATS);

export default function Gallery() {
  const [f, setF] = useState('all');
  const [sel, setSel] = useState(null);
  const list = prints.filter((p) => f === 'all' || p.cat === f);

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setSel(null);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  return (
    <section style={{ paddingTop: 50 }}>
      <div className="wrap">
        <div className="flt">
          {CATS.map(([k, l]) => (
            <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>
              {l} <em>{k === 'all' ? prints.length : prints.filter((p) => p.cat === k).length}</em>
            </button>
          ))}
        </div>
        <div className="gal">
          {list.map((p, i) => (
            <article key={p.title} className={'gt' + (i === 0 && f === 'all' ? ' big' : '')} tabIndex={0}
              style={{ background: `linear-gradient(135deg,${p.bg})` }}
              onClick={() => setSel(p)} onKeyDown={(e) => e.key === 'Enter' && setSel(p)}>
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: p.svg }} />
              <span className="gt-time">⏱ {p.time}</span>
              <div className="gt-ov">
                <span className="gt-cat">{NAME[p.cat]}</span>
                <h3>{p.title}</h3>
                <p>{p.tags.join(' • ')}</p>
                <span className="gt-view">View project →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {sel && (
        <div className="mdl" onClick={() => setSel(null)}>
          <div className="mdl-in" onClick={(e) => e.stopPropagation()}>
            <button className="mdl-x" onClick={() => setSel(null)} aria-label="Close">✕</button>
            <div className="mdl-art" style={{ background: `linear-gradient(135deg,${sel.bg})` }}>
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: sel.svg }} />
            </div>
            <div className="mdl-info">
              <span className="gt-cat dark">{NAME[sel.cat]}</span>
              <h3>{sel.title}</h3>
              <p>{sel.desc}</p>
              <div className="spec">
                <div><small>Material</small><b>{sel.tags[0]}</b></div>
                <div><small>Detail</small><b>{sel.tags[1]}</b></div>
                <div><small>Print time</small><b>{sel.time}</b></div>
              </div>
              <div className="cta-row">
                <Link className="btn" href="/quote">Request a similar project</Link>
                <a className="btn ghost" href={waLink(`Hi, I want a project similar to: ${sel.title}`)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
