import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'ChargeDrop Support' };

export default function ChargeDropSupportPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">ChargeDrop Support</div>
        <h1>ChargeDrop Support</h1>
        <p>ChargeDrop helps EV drivers compare nearby charging options, review reported charging prices, and submit price reports from a calm, local-first mobile app experience.</p>
      </section>

      <section className="card soft">
        <h2>Contact support</h2>
        <p>Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
        <p>Expected response time: typically within 3-5 business days.</p>
      </section>

      <section className="card">
        <h2>Help topics</h2>
        <ul>
          <li>Charging price questions</li>
          <li>Location or nearby charger issues</li>
          <li>Submitting a price report</li>
          <li>Incorrect station information</li>
          <li>App bugs or crashes</li>
          <li>Privacy questions</li>
        </ul>
      </section>

      <section className="card">
        <h2>Bug report checklist</h2>
        <ul>
          <li>Device model</li>
          <li>iOS version</li>
          <li>ChargeDrop app version/build, if known</li>
          <li>What happened</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshot if helpful, but avoid sending sensitive personal information</li>
        </ul>
      </section>

      <section className="card notice">
        <h2>Charging price disclaimer</h2>
        <p>ChargeDrop helps compare charging information, but final prices, fees, charger availability, and charging session terms are controlled by the charging provider or station operator. Always review the final price and terms shown by the provider or station before starting a charging session.</p>
      </section>

      <section className="card">
        <h2>Location and privacy note</h2>
        <p>ChargeDrop may request foreground location access to estimate nearby charging options and distance.</p>
        <p>ChargeDrop does not use location for ads or tracking.</p>
        <p>Privacy Policy: <Link href="/chargedrop/privacy">northbeaconlabs.dev/chargedrop/privacy</Link></p>
      </section>
    </div>
  );
}