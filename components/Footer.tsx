import Link from 'next/link';
import { routes, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>Quiet, practical software for focused everyday utility.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        <a href={`mailto:${site.helloEmail}`}>{site.helloEmail}</a>
        {routes.slice(1).map((route) => (
          <Link href={route.href} key={route.href}>{route.label}</Link>
        ))}
      </nav>
    </footer>
  );
}