import type { Metadata } from "next";

const policyInfo = {
  appName: "YOUR_APP_NAME",
  companyName: "YOUR_COMPANY_OR_DEVELOPER_NAME",
  lastUpdated: "YYYY-MM-DD",
  contactEmail: "support@example.com",
};

export const metadata: Metadata = {
  title: `Privacy Policy – ${policyInfo.appName}`,
  description: `Privacy Policy for ${policyInfo.appName} iOS application.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container">
      <header className="header">
        <h1>Privacy Policy</h1>
        <p className="subtitle">
          for <strong>{policyInfo.appName}</strong>
        </p>
        <p className="meta">
          Last updated: <span>{policyInfo.lastUpdated}</span>
        </p>
      </header>

      <section className="card">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how <strong>{policyInfo.companyName}</strong> (“we”, “us”, or “our”) collects,
          uses, and protects your information when you use the <strong>{policyInfo.appName}</strong> iOS application (“the
          App”).
        </p>
        <p>By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
      </section>

      <section className="card">
        <h2>2. Information We Collect</h2>
        <p>
          <strong>{policyInfo.appName}</strong> is designed to operate as a <em>LOCAL-ONLY / OFFLINE</em> application. This
          means:
        </p>
        <ul>
          <li>We do <strong>not</strong> collect, store, or process any personal data on our own servers.</li>
          <li>All data you enter into the App is stored locally on your device.</li>
        </ul>

        <h3>2.1 Data You Provide in the App</h3>
        <p>Depending on how you use the App, you may enter information such as:</p>
        <ul>
          <li>Financial records, expenses, income, or budget information</li>
          <li>Notes or other personal data you manually input</li>
        </ul>
        <p>This information is stored <strong>only on your device</strong> and is not transmitted to us.</p>

        <h3>2.2 Automatically Collected Information</h3>
        <p>We do <strong>not</strong> collect analytics, usage data, or other telemetry by default.</p>
        <p>
          If you enable any optional analytics or crash reporting service in the future (for example, via Apple or a
          third-party provider), this will be clearly indicated within the App, and you will be given the relevant privacy
          details at that time.
        </p>
      </section>

      <section className="card">
        <h2>3. How We Use Your Information</h2>
        <p>
          Because we do not receive or store your personal data on our own servers, we do not use your information for
          advertising, tracking, or profiling.
        </p>
        <p>
          Any data you enter into the App is used solely to provide the features and functionality of <strong>{policyInfo.appName}</strong> on
          your device (for example, to calculate budgets, track expenses, or display historical records).
        </p>
      </section>

      <section className="card">
        <h2>4. Data Storage and Security</h2>
        <p>All data is stored locally on your device using the storage mechanisms provided by iOS.</p>
        <p>We recommend that you:</p>
        <ul>
          <li>Use a device passcode, Face ID, or Touch ID to protect access to your device.</li>
          <li>Regularly update iOS to the latest version to benefit from the latest security updates.</li>
        </ul>
        <p>
          If you choose to back up your device via iCloud or another backup service, your App data may be included in those
          backups and will be subject to the backup provider’s privacy policy.
        </p>
      </section>

      <section className="card">
        <h2>5. Third-Party Services</h2>
        <p>
          <strong>{policyInfo.appName}</strong> does not require an account or login and does not directly share your data with third parties.
        </p>
        <p>However, the App may use services provided by Apple or the iOS operating system, such as:</p>
        <ul>
          <li>
            <strong>Notifications:</strong> If you enable notifications, iOS may process notification delivery as part of the
            operating system.
          </li>
          <li>
            <strong>System Backup:</strong> Your App data may be included in device backups.
          </li>
        </ul>
        <p>For more information about how Apple handles your data, please refer to Apple’s privacy policy.</p>
      </section>

      <section className="card">
        <h2>6. Children’s Privacy</h2>
        <p>The App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
        <p>
          If you believe that a child has provided us with personal information, please contact us using the details below, and we will take steps to address the issue.
        </p>
      </section>

      <section className="card">
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the “Last Updated” date at the top of
          this page. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
        </p>
      </section>

      <section className="card contact">
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href={`mailto:${policyInfo.contactEmail}`}>{policyInfo.contactEmail}</a>.
        </p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} {policyInfo.companyName}. All rights reserved.</footer>
    </main>
  );
}
