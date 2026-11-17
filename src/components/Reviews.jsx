'use client';
import { useEffect, useState } from 'react';
import SectionHead from './SectionHead';
import { reviews } from '@/data/site';

export default function Reviews() {
  const n = reviews.length;
  const [ix, setIx] = useState(0);
  const go = (i) => setIx((i + n) % n);

  useEffect(() => {
    const t = setInterval(() => setIx((i) => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [ix, n]);

  return (
    <section className="alt">
      <div className="wrap">
        <SectionHead eyebrow="Reviews" title="What clients say" />
        <div className="rvw rv">
          <div className="rsum">
            <b>4.9</b>
            <div className="stars">★★★★★</div>
            <p>Average rating from 120+ happy clients</p>
            <div className="bars">
              {[['5★','92%'],['4★','7%'],['3★','1%']].map(([l, w]) => (
                <div key={l}><span>{l}</span><i style={{ '--w': w }}></i></div>
              ))}
            </div>
          </div>
          <div className="car">
            <div className="trk" style={{ transform: `translateX(-${ix * 100}%)` }}>
              {reviews.map((r) => (
                <div className="sl" key={r.name}>
                  <div className="stars">★★★★★</div>
                  <div className="q">“</div>
                  <p>{r.text}</p>
                  <div className="who">
                    <span className="av">{r.ini}</span>
                    <div><b>{r.name}</b><small>{r.role}</small></div>
                    <span className="pt">{r.tag}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ctl">
              <button onClick={() => go(ix - 1)} aria-label="Previous">←</button>
              <div className="dots">{reviews.map((r, i) => <i key={r.name} className={i === ix ? 'on' : ''} onClick={() => go(i)} />)}</div>
              <button onClick={() => go(ix + 1)} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
