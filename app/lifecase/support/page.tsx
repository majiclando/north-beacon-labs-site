import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'LifeCase Support' };

export default function LifeCaseSupportPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">LifeCase Support</div>
        <h1>LifeCase Support</h1>
        <p>LifeCase is a private, local-first record and timeline app that helps users organize records into LifeCases and prepare Case Package PDFs.</p>
      </section>

      <section className="card soft">
        <h2>Contact support</h2>
        <p>Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
        <p>Expected response time: typically within 3-5 business days.</p>
      </section>

      <section className="card">
        <h2>Help topics</h2>
        <ul>
          <li>Creating or continuing a LifeCase</li>
          <li>Capturing a photo, screenshot, document, note, or conversation</li>
          <li>Event Date questions</li>
          <li>Editing or finding records</li>
          <li>Timeline, Records, or Export questions</li>
          <li>Case Package PDF generation</li>
          <li>Record Index questions</li>
          <li>Local storage and privacy questions</li>
          <li>App bugs or crashes</li>
        </ul>
      </section>

      <section className="card">
        <h2>Bug report checklist</h2>
        <p>When reporting an issue, include the following when available:</p>
        <ul>
          <li>LifeCase version and build</li>
          <li>iPhone model</li>
          <li>iOS version</li>
          <li>What you were trying to do</li>
          <li>What happened</li>
          <li>Steps that reproduce the issue</li>
          <li>A screenshot if it is useful and does not contain sensitive information</li>
        </ul>
      </section>

      <section className="card notice">
        <h2>Protect private information</h2>
        <p>Please do not email sensitive records, private documents, medical information, legal records, financial information, custody records, or other confidential content unless it is truly necessary to resolve your request.</p>
        <p>Do not send your LifeCase database or original source documents by default.</p>
      </section>

      <section className="card">
        <h2>Local storage and original files</h2>
        <p>LifeCase 0.5.0 Build 7 is local-first. It is not backup storage for original files. Original attachments remain separate from generated Case Package PDFs, and local app data is device-specific in this build.</p>
        <p><Link href="/lifecase/privacy">Read the LifeCase Privacy Policy</Link></p>
      </section>
    </div>
  );
}
