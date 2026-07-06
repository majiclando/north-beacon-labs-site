import Link from 'next/link';

export const metadata = { title: 'ChargeDrop' };

export default function ChargeDropPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">ChargeDrop</div>
        <h1>Compare EV charging options before you plug in.</h1>
        <p>
          ChargeDrop helps EV drivers compare nearby charging options, review reported charging prices, and submit price reports from a calm, local-first mobile app experience.
        </p>
        <div className="button-row">
          <Link className="button" href="/chargedrop/support">Support</Link>
          <Link className="button secondary" href="/chargedrop/privacy">Privacy policy</Link>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Nearby context</h2>
          <p>ChargeDrop may request foreground location access to estimate nearby charging options and distance.</p>
        </article>
        <article className="card">
          <h2>Community reports</h2>
          <p>Users can submit charging price reports to improve charging price context for other users.</p>
        </article>
        <article className="card">
          <h2>No ads or accounts</h2>
          <p>The current public posture does not require accounts, payments, ads, or third-party analytics SDKs.</p>
        </article>
      </section>

      <section className="card notice">
        <h2>Charging price disclaimer</h2>
        <p>
          ChargeDrop helps compare charging information, but final prices, fees, charger availability, and charging session terms are controlled by the charging provider or station operator.
        </p>
      </section>
    </div>
  );
}