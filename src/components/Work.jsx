'use client';
import { useState } from 'react';
import Link from 'next/link';
import SectionHead from './SectionHead';
import PrintCard from './PrintCard';
import { prints } from '@/data/site';

const filters = [['all','All'],['prototype','Prototypes'],['gift','Gifts'],['part','Spare parts'],['model','Models']];

// limit: show only the first N items (used on Home). filter / head can be turned off.
export default function Work({ limit, filter = true, head = true }) {
  const [f, setF] = useState('all');
  const list = prints.filter((p) => f === 'all' || p.cat === f).slice(0, limit || 99);
  return (
    <section className="alt" id="work">
      <div className="wrap">
        {head && <SectionHead eyebrow="Projects" title="Recent prints" sub="A few things we have made for clients." />}
        {filter && (
          <div className="flt rv">
            {filters.map(([k, label]) => (
              <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{label}</button>
            ))}
          </div>
        )}
        <div className="port">{list.map((p) => <PrintCard key={p.title} p={p} />)}</div>
        {limit && <div style={{ textAlign: 'center', marginTop: 36 }}><Link className="btn ghost" href="/projects">View all projects</Link></div>}
      </div>
    </section>
  );
}
