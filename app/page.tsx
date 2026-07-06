import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">North Beacon Labs</div>
        <h1>Calm software for practical decisions.</h1>
        <p>
          North Beacon Labs builds focused utility apps that help people compare information, organize records, and act with more confidence without unnecessary accounts, ads, or clutter.
        </p>
        <div className="button-row">
          <Link className="button" href="/chargedrop">View ChargeDrop</Link>
          <Link className="button secondary" href="/support">Contact support</Link>
        </div>
      </section>

      <section className="grid" aria-label="Products">
        <article className="card soft">
          <h2>ChargeDrop</h2>
          <p>Compare nearby EV charging options, review charging price context, and submit community price reports.</p>
          <Link href="/chargedrop">Learn about ChargeDrop</Link>
        </article>
        <article className="card">
          <h2>LifeCase</h2>
          <p>Private record timelines for situations that need clear proof. Full public page planned later.</p>
        </article>
        <article className="card">
          <h2>QuietGuard and Wayly</h2>
          <p>Future safety and arrival utilities. Product pages will be added after the initial ChargeDrop launch pages.</p>
        </article>
      </section>
    </>
  );
}