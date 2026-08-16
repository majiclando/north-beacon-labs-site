import { site } from '@/lib/site';

export const metadata = { title: 'LifeCase Privacy Policy' };

export default function LifeCasePrivacyPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">Privacy Policy</div>
        <h1>LifeCase Privacy Policy</h1>
        <p>Effective date: August 16, 2026.</p>
      </section>

      <section className="card soft">
        <h2>Overview</h2>
        <p>LifeCase is a North Beacon Labs app that helps users organize records into private timelines and prepare Case Package PDFs. LifeCase 0.5.0 Build 7 is local-first.</p>
        <p>This policy describes the current Build 7 behavior. It does not describe future features that may handle information differently.</p>
      </section>

      <section className="card">
        <h2>Information LifeCase stores or handles locally</h2>
        <p>Users may choose to add information such as:</p>
        <ul>
          <li>Cases, case titles, and case types</li>
          <li>Records, titles, dates, notes, and descriptions</li>
          <li>Tags, people labels, places, source labels, and other context</li>
          <li>Attachment names and references</li>
          <li>Export selections and related state</li>
        </ul>
        <p>LifeCase uses this information locally to display timelines, help users find records, and generate Case Package PDFs.</p>
      </section>

      <section className="card">
        <h2>Information LifeCase does not currently send to North Beacon Labs</h2>
        <p>Build 7 does not include LifeCase accounts, cloud sync, LifeCase server storage or upload, OCR, AI processing, subscriptions, advertising, or advertising tracking.</p>
        <p>The app does not currently transmit LifeCase cases, records, notes, attachment references, export selections, or source documents to North Beacon Labs servers.</p>
      </section>

      <section className="card">
        <h2>Support communications</h2>
        <p>If a user voluntarily emails North Beacon Labs at <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>, North Beacon Labs receives the sender's email address, message body, and any information or attachments the user chooses to send.</p>
        <p>North Beacon Labs uses that information to review and respond to the support request. Users should avoid sending sensitive records or source documents unless they are truly necessary.</p>
      </section>

      <section className="card">
        <h2>Photos, screenshots, documents, and attachment references</h2>
        <p>LifeCase accesses only photos, screenshots, or documents a user chooses through the device picker. Build 7 stores attachment names and references for timeline and export context.</p>
        <p>Original attachments remain separate from generated Case Package PDFs. LifeCase does not promise permanent preservation, backup, or recovery of original source files.</p>
      </section>

      <section className="card">
        <h2>Case Package PDFs</h2>
        <p>Users can select records and generate a Case Package PDF locally. An export may contain user-entered notes, dates, tags, labels, places, attachment names, and other context chosen for inclusion.</p>
        <p>A Case Package PDF can include a cover page, disclaimer and notes, a timeline, and a Record Index. Original attachments remain separate from the generated PDF.</p>
      </section>

      <section className="card">
        <h2>Sharing and export boundary</h2>
        <p>When a user invokes the iOS share or save interface, the user chooses where the exported PDF goes. That choice may move the PDF outside LifeCase.</p>
        <p>External apps, services, and storage destinations govern exported information under their own storage, security, and privacy practices.</p>
      </section>

      <section className="card">
        <h2>Accounts, cloud, AI, and OCR status</h2>
        <ul>
          <li>No user accounts or sign-in</li>
          <li>No LifeCase cloud sync or server upload</li>
          <li>No OCR</li>
          <li>No AI processing</li>
          <li>No subscriptions</li>
          <li>No advertising or advertising tracking</li>
        </ul>
        <p>If a future version changes how information is processed, North Beacon Labs should update this policy and the relevant disclosures before releasing that behavior.</p>
      </section>

      <section className="card">
        <h2>User choices</h2>
        <ul>
          <li>Choose which cases and records to create</li>
          <li>Choose which photos, screenshots, and documents to select</li>
          <li>Edit record details and export selections</li>
          <li>Choose whether to generate a Case Package PDF</li>
          <li>Choose an external destination through the iOS share or save interface</li>
          <li>Choose what non-sensitive information to include in a support request</li>
        </ul>
      </section>

      <section className="card">
        <h2>Device storage and deletion considerations</h2>
        <p>Data stored locally by Build 7 is device-specific. Users should not rely on LifeCase as backup storage for original files.</p>
        <p>LifeCase does not provide its own cloud synchronization, backup service, or cross-device recovery in this build. Apple device or iCloud backup behavior may separately affect whether app data can be restored. LifeCase does not control or guarantee restoration from those backups.</p>
      </section>

      <section className="card">
        <h2>Retention and deletion</h2>
        <ul>
          <li>Case and record data remains in local app storage unless it is changed through available app controls or removed through device or operating-system actions.</li>
          <li>Build 7 allows users to delete individual records. It does not provide case deletion or an app-level delete-all/reset control.</li>
          <li>Users can clear an attachment reference from a record. Clearing a reference or deleting a record removes that reference from LifeCase data but does not delete the original photo or document.</li>
          <li>Documents selected through the picker and generated Case Package PDFs may use app cache storage. Build 7 does not provide a user-facing control for deleting those cached files.</li>
          <li>LifeCase stores no app content on North Beacon Labs servers in this build, so North Beacon Labs has no server copy of LifeCase cases or records to delete.</li>
          <li>Support emails and voluntarily supplied attachments are separate from LifeCase app content. North Beacon Labs does not promise an automatic deletion schedule for support communications.</li>
          <li>Copies held in Apple device or iCloud backups, or in destinations selected through the iOS share or save interface, are outside LifeCase's direct control.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Security</h2>
        <p>LifeCase limits current data handling by keeping the documented Build 7 workflow local to the device. Device settings, access controls, backups, and any destination selected for an export can affect the privacy of information.</p>
        <p>No app, device, storage system, or sharing destination can be guaranteed to be completely secure or permanently recoverable.</p>
      </section>

      <section className="card">
        <h2>Product boundaries</h2>
        <p>LifeCase is not a law firm and does not provide legal, medical, financial, or other professional advice. It does not prepare court filings, verify evidence, rank records, or predict outcomes.</p>
      </section>

      <section className="card">
        <h2>Policy updates</h2>
        <p>North Beacon Labs may update this policy as LifeCase changes. Material changes should be reflected in the policy and effective date before or when the relevant app behavior is released.</p>
      </section>

      <section className="card soft">
        <h2>Contact</h2>
        <p>Questions about this policy or LifeCase privacy may be sent to North Beacon Labs.</p>
        <p>Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
      </section>
    </div>
  );
}
