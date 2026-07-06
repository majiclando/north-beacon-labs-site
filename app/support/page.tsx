import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">Support</div>
        <h1>How to reach North Beacon Labs.</h1>
        <p>For app support or privacy questions, email us and include the app name and a short description of the issue.</p>
      </section>

      <section className="card soft">
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
        <p>General contact: <a href={`mailto:${site.helloEmail}`}>{site.helloEmail}</a></p>
        <p>Expected response time: typically within 3-5 business days.</p>
      </section>

      <section className="card">
        <h2>ChargeDrop support</h2>
        <p>For ChargeDrop-specific questions, use the dedicated support page.</p>
        <Link href="/chargedrop/support">Open ChargeDrop support</Link>
      </section>
    </div>
  );
}