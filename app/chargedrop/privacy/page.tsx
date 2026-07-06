import { site } from '@/lib/site';

export const metadata = { title: 'ChargeDrop Privacy Policy' };

export default function ChargeDropPrivacyPage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="eyebrow">Privacy Policy</div>
        <h1>ChargeDrop Privacy Policy</h1>
        <p>Draft date: July 5, 2026. Effective date: to be finalized before public launch.</p>
      </section>

      <section className="card soft">
        <h2>Overview</h2>
        <p>ChargeDrop helps users compare nearby electric vehicle charging options, review estimated pricing context, and submit community price reports so other users can make more informed charging decisions.</p>
        <p>ChargeDrop is designed to limit data collection where practical. The current initial submission posture does not require user accounts, does not collect payment card information, does not show ads, and does not use third-party analytics SDKs.</p>
      </section>

      <section className="card">
        <h2>Information ChargeDrop does not collect</h2>
        <ul>
          <li>User account registration</li>
          <li>Names, email addresses, or passwords inside the app</li>
          <li>Payment card, billing, or financial account information</li>
          <li>Advertising data</li>
          <li>Third-party ad tracking data</li>
          <li>Third-party analytics SDK data</li>
          <li>App-level crash reporting SDK data</li>
        </ul>
      </section>

      <section className="card">
        <h2>Location permission and nearby charging</h2>
        <p>ChargeDrop may request foreground location permission so the app can estimate nearby charging options, distance, or drive-time context. ChargeDrop does not request background location access.</p>
        <p>ChargeDrop uses device location for app functionality and nearby charging context. The app should not store user location on North Beacon Labs servers or sell, share, or use location for advertising or tracking.</p>
      </section>

      <section className="card">
        <h2>Community price reports</h2>
        <p>ChargeDrop allows users to submit charging price reports. A submitted price report may include a charging station identifier, reported charging price, report source or category, confidence or quality indicator, and server-generated timing information.</p>
        <p>ChargeDrop uses Supabase to store, read, and update community price report information. Supabase and related hosting providers may process standard technical metadata necessary to operate, secure, and deliver the service.</p>
      </section>

      <section className="card">
        <h2>Charging station information</h2>
        <p>Station information and charging prices may be incomplete, delayed, estimated, user-submitted, or subject to change. Users should confirm final pricing, station availability, fees, parking rules, membership requirements, and charging terms directly with the charging provider.</p>
      </section>

      <section className="card">
        <h2>Maps and directions</h2>
        <p>ChargeDrop may open Google Maps direction URLs to help users navigate to a selected station. External map services may process information according to their own terms and privacy policies.</p>
      </section>

      <section className="card">
        <h2>Screenshot OCR and image processing</h2>
        <p>The initial App Store submission posture assumes screenshot OCR is disabled, hidden, or not part of the public v1 experience unless confirmed before submission. North Beacon Labs should update this Privacy Policy and App Store privacy answers before releasing a public build that enables screenshot OCR.</p>
      </section>

      <section className="card">
        <h2>How ChargeDrop uses information</h2>
        <ul>
          <li>To provide app functionality</li>
          <li>To estimate nearby charging options and distance context</li>
          <li>To display charging station and price information</li>
          <li>To receive and display community price reports</li>
          <li>To maintain, secure, debug, and improve the service</li>
          <li>To respond to support requests sent to North Beacon Labs</li>
        </ul>
        <p>ChargeDrop does not use collected information for third-party advertising or tracking.</p>
      </section>

      <section className="card">
        <h2>User choices</h2>
        <ul>
          <li>Decline location permission</li>
          <li>Change location permission in iOS Settings</li>
          <li>Choose not to submit community price reports</li>
          <li>Avoid opening external Google Maps direction links</li>
          <li>Contact North Beacon Labs with privacy questions or deletion requests</li>
        </ul>
      </section>

      <section className="card">
        <h2>Children, security, and updates</h2>
        <p>ChargeDrop is not intended for children under 13. North Beacon Labs does not knowingly collect personal information from children under 13.</p>
        <p>North Beacon Labs uses reasonable technical and organizational measures to protect information handled by ChargeDrop. No app, network, or storage system can be guaranteed to be completely secure.</p>
        <p>North Beacon Labs may update this Privacy Policy as ChargeDrop changes. If changes are material, North Beacon Labs should update the effective date and publish the revised policy before or when the relevant app version is released.</p>
      </section>

      <section className="card soft">
        <h2>Contact</h2>
        <p>Questions about this Privacy Policy or ChargeDrop privacy practices may be sent to North Beacon Labs.</p>
        <p>Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
      </section>
    </div>
  );
}