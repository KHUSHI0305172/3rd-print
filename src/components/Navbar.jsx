'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Aqua 3D">
          <img className="mk" src="/logo-mark.png" alt="" />
          <img className="wd" src="/logo-word.png" alt="Aqua 3D" />
        </Link>
        <nav className={'links' + (open ? ' open' : '')} onClick={(e) => e.target.tagName === 'A' && setOpen(false)}>
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className={path === href ? 'act' : ''}>{label}</Link>
          ))}
          <Link className="btn" href="/quote">Get Instant Quote</Link>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
    </header>
  );
}
