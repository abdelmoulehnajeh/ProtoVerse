import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions - ProtoVerse",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* spacer to offset fixed navbar so content isn't hidden beneath it */}
      <div aria-hidden="true" className="h-20 md:h-24 bg-white" />

      <main className="min-h-[60vh] bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-[#081849]">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>

          <section className="mb-6">
            <p className="text-lg text-[#5a5759] mb-4">Welcome to Protoverse!</p>
            <p className="mb-4">By accessing and using our website protoverse.online, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">1. Purpose</h2>
            <p>These Terms and Conditions define the rules for using the website Protoverse and the rights and obligations of both the user and Protoverse. By accessing our website, you accept these terms in full. If you do not agree, please do not use the site.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">2. Company Information</h2>
            <p>Company Name: Protoverse</p>
            <p>Website: https://protoverse.online</p>
            <p>Email: contact@protoverse.online</p>
            <p>Project based in: Europe</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">3. Access to the Website</h2>
            <p>The website is accessible 24 hours a day, 7 days a week, except in cases of force majeure or maintenance. Protoverse reserves the right to suspend, interrupt, or modify access to the site without prior notice.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">4. Use of the Website</h2>
            <p>You agree to use the site only for lawful purposes and in accordance with these Terms and Conditions. You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>Use the site for illegal or fraudulent activities.</li>
              <li>Attempt to gain unauthorized access to the site, servers, or databases.</li>
              <li>Interfere with the proper functioning of the site or submit harmful content (malware, spam, etc.).</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">5. Services Provided</h2>
            <p>Protoverse connects creators, users, and partners in the 3D printing ecosystem. Services may include:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>Uploading 3D models.</li>
              <li>Selecting printing services.</li>
              <li>Connecting users with printers or makers.</li>
              <li>Delivery and order tracking.</li>
            </ul>
            <p className="mt-2">Protoverse reserves the right to modify, suspend, or discontinue any part of its services at any time.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
            <p>All content on the website (texts, logos, graphics, images, software, etc.) is the exclusive property of Protoverse or its partners. Any reproduction, distribution, or use without prior written permission is strictly prohibited.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">7. User-Generated Content</h2>
            <p>Users may upload or share 3D models or other materials on the platform. By uploading such content, you declare that:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>You hold all necessary intellectual property rights.</li>
              <li>Your content does not infringe on the rights of others.</li>
              <li>Protoverse is granted a non-exclusive license to display, use, and share your content as part of the platform’s services.</li>
            </ul>
            <p className="mt-2">Protoverse reserves the right to remove any content deemed inappropriate or illegal.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p>Protoverse strives to ensure the accuracy of the information on the site but cannot guarantee it. Protoverse shall not be held responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-[#081849]">
              <li>Direct or indirect damages resulting from the use or inability to use the site.</li>
              <li>Errors, omissions, or interruptions in the services.</li>
              <li>Content or products provided by third parties.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">9. External Links</h2>
            <p>The website may contain links to external sites. Protoverse is not responsible for the content or privacy practices of these third-party websites.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">10. Personal Data</h2>
            <p>The collection and processing of personal data are governed by our Privacy Policy, which you can consult <a href="/privacy" className="text-[#b64198] underline">here</a>.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">11. Cookies</h2>
            <p>The site uses cookies to enhance user experience. For more information, please refer to our Cookie Policy section within the Privacy Policy.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">12. Changes to the Terms</h2>
            <p>Protoverse reserves the right to update or modify these Terms and Conditions at any time. Changes take effect immediately upon publication on this page. We encourage you to check this page regularly.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">13. Governing Law and Jurisdiction</h2>
            <p>These Terms and Conditions are governed by European law. In the event of a dispute, and if no amicable resolution is reached, the competent courts of the company’s registered office shall have jurisdiction.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">14. Contact</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
            <p className="mt-2 text-[#081849] font-medium">📧 <a href="mailto:contact@protoverse.online" className="text-[#b64198] underline">contact@protoverse.online</a></p>
            <p className="mt-4 text-sm text-[#5a5759]">Last updated: November 4, 2025</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
