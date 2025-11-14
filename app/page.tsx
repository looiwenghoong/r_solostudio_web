import Link from "next/link";
import { Router } from "@/lib/router";

export default function Home() {
  return (
    <main className="home">
      <div>
        <p className="eyebrow">R Solo Studio</p>
        <h1>We build focused tools for independent creators.</h1>
        <p>
          You can review how we protect your information in our dedicated
          privacy policy.
        </p>
        <Link href={Router.path("privacyPolicy")} className="cta">
          View Privacy Policy
        </Link>
      </div>
    </main>
  );
}
