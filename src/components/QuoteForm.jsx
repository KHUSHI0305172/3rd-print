'use client';
import { useState } from 'react';
import { waLink, expertise, quoteMaterials } from '@/data/site';

export default function QuoteForm() {
  const [f, setF] = useState({ name: '', phone: '', service: expertise[0].title, material: 'Not sure', qty: '1', link: '', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const t = `Hi, I am ${f.name} (${f.phone}). Quote request:\nService: ${f.service}\nMaterial: ${f.material}\nQuantity: ${f.qty}\nFile / link: ${f.link || '-'}\nDetails: ${f.msg || '-'}`;
    window.open(waLink(t), '_blank');
  };
  return (
    <section className="alt">
      <div className="wrap">
        <div className="contact">
          <form onSubmit={submit}>
            <input placeholder="Your name" required value={f.name} onChange={set('name')} />
            <input placeholder="Phone number" inputMode="tel" required value={f.phone} onChange={set('phone')} />
            <select value={f.service} onChange={set('service')}>{expertise.map((x) => <option key={x.title}>{x.title}</option>)}</select>
            <select value={f.material} onChange={set('material')}>
              <option>Not sure</option>
              {quoteMaterials.map((m) => <option key={m}>{m}</option>)}
            </select>
            <input type="number" min="1" placeholder="Quantity" value={f.qty} onChange={set('qty')} />
            <input placeholder="Link to your 3D file (Drive, WeTransfer etc.), optional" value={f.link} onChange={set('link')} />
            <textarea rows={4} placeholder="Size, colour, use of the part, deadline..." value={f.msg} onChange={set('msg')} />
            <button className="btn" type="submit">Request Quote on WhatsApp</button>
          </form>
          <div className="card">
            <h3 style={{ marginBottom: 14 }}>What to share</h3>
            <ul className="ticks">
              <li><b>Your 3D file</b> – STL or OBJ works best</li>
              <li><b>No file?</b> A sketch, photo or sample is fine</li>
              <li><b>Quantity</b> – single piece or bulk</li>
              <li><b>Use of the part</b> – so we can suggest the right material</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
