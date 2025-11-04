import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - ProtoVerse",
}

export default function PrivacyPage() {
  return (
    <>
  <Navbar />

  {/* spacer to offset fixed navbar so content isn't hidden beneath it */}
  {/* give spacer a white background so the top doesn't show the site's grey body background */}
  <div aria-hidden="true" className="h-20 md:h-24 bg-white" />

  <main className="min-h-[60vh] bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-[#081849]">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-6 text-lg text-[#5a5759]">
            ProtoVerse takes the protection of personal data very seriously. This policy describes how we collect, use,
            and protect your personal information when you use our website, in compliance with the General Data
            Protection Regulation (GDPR – EU Regulation 2016/679).
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Collection of personal information</h2>
            <p className="mb-2">We may collect the following personal information through our contact or registration forms:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Any other information you choose to provide to us</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Use of personal data</h2>
            <p className="mb-2">Your personal data is used exclusively to:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>Respond to your requests or questions</li>
              <li>Provide the services you request</li>
              <li>Send you information about our services</li>
            </ul>
            <p className="mt-2">ProtoVerse undertakes not to sell, rent, or transmit your personal information to third parties without your express consent.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Protection of personal data</h2>
            <p>We implement all necessary technical and organizational security measures to ensure the confidentiality and protection of your personal data against loss, unauthorized access, misuse, alteration, or destruction.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Data retention period</h2>
            <p>Personal data is retained only for the period necessary to achieve the purposes for which it was collected, and in accordance with applicable European legislation.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Your rights regarding your personal data</h2>
            <p className="mb-2">Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>Right of access</li>
              <li>Right of rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to object to processing</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at: <a href="mailto:privacy@protoverse.online" className="text-[#b64198] underline">privacy@protoverse.online</a></p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
            <p>We use cookies to improve your user experience. You can disable cookies by changing your browser settings. However, this may limit access to certain features of the site.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. Changes to the Privacy Policy</h2>
            <p>ProtoVerse reserves the right to modify this policy at any time. Any changes will be immediately posted on this page. We encourage you to regularly review this policy for updates.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
            <p>If you have any questions regarding this Privacy Policy, you can contact us at:</p>
            <p className="mt-2 text-[#081849] font-medium">📧 <a href="mailto:privacy@protoverse.online" className="text-[#b64198] underline">privacy@protoverse.online</a></p>
            <p className="mt-4 text-sm text-[#5a5759]">Last updated: November 4, 2025</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
