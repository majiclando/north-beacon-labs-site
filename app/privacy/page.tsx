import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">Privacy Hub</div>
        <h1>Privacy at North Beacon Labs.</h1>
        <p>
          This page is the central privacy directory for North Beacon Labs apps, websites, and related product pages.
        </p>
      </section>

      <section className="card soft">
        <h2>Portfolio privacy principle</h2>
        <p>
          North Beacon Labs builds privacy-first utility apps. Products should collect only the information needed to provide the feature, explain data use clearly, avoid advertising-driven tracking, and give users practical control over their information.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>ChargeDrop</h2>
          <p>EV charging utility with an app-specific privacy policy for location permission and community price reports.</p>
          <Link href="/chargedrop/privacy">Read ChargeDrop privacy policy</Link>
        </article>
        <article className="card">
          <h2>LifeCase</h2>
          <p>Local-first record and timeline app with a dedicated pre-publication privacy policy for LifeCase 0.5.0 Build 7.</p>
          <Link href="/lifecase/privacy">Review LifeCase privacy policy</Link>
        </article>
        <article className="card">
          <h2>Support contact</h2>
          <p>Privacy questions can be sent to {site.supportEmail}.</p>
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </article>
        <article className="card">
          <h2>Future apps</h2>
          <p>QuietGuard, Wayly, and EER Documentation Generator privacy pages are planned as those products move toward release.</p>
        </article>
      </section>
    </div>
  );
}
