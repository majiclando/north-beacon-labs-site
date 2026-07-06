import Link from 'next/link';
import { routes, site } from '@/lib/site';

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">{site.name}</Link>
      <nav aria-label="Primary navigation">
        {routes.slice(1).map((route) => (
          <Link href={route.href} key={route.href}>{route.label}</Link>
        ))}
      </nav>
    </header>
  );
}