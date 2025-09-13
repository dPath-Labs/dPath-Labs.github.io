'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">∂path</Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/research">Research</Link></li>
          <li><Link href="/publications">Publications</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              🌓
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}