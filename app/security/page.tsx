import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Security & Data Protection - ProtoVerse",
}

export default function SecurityPage() {
  return (
    <>
      <Navbar />

      {/* spacer to offset fixed navbar so content isn't hidden beneath it */}
      <div aria-hidden="true" className="h-20 md:h-24 bg-white" />

      <main className="min-h-[60vh] bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-[#081849]">
          <h1 className="text-4xl font-bold mb-4">Security and Data Protection</h1>

          <p className="mb-6 text-lg text-[#5a5759]">Protoverse is committed to ensuring the highest level of security for your personal and technical data. We implement appropriate technical and organizational measures to protect your data against:</p>

          <ul className="list-disc list-inside space-y-2 mb-6 text-[#081849]">
            <li>Unauthorized or unlawful access</li>
            <li>Accidental loss, alteration, or destruction</li>
            <li>Disclosure or misuse</li>
          </ul>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Our Security Measures Include</h2>
            <ul className="list-disc list-inside space-y-2 text-[#081849]">
              <li><strong>Data encryption (SSL/TLS):</strong> All communications between your browser and our servers are encrypted.</li>
              <li><strong>Secure authentication:</strong> Strong password protection and user account verification.</li>
              <li><strong>Regular security updates:</strong> Our systems, software, and servers are regularly updated to prevent vulnerabilities.</li>
              <li><strong>Data access control:</strong> Personal data is only accessible to authorized personnel who require it for specific tasks.</li>
              <li><strong>Backup and recovery:</strong> Data is securely backed up and can be restored in case of technical failure.</li>
              <li><strong>Monitoring and prevention:</strong> Continuous monitoring systems to detect suspicious or unauthorized activity.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">User responsibilities</h2>
            <p className="mb-2">Protoverse also encourages users to take responsibility for their account security by:</p>
            <ul className="list-disc list-inside space-y-2 text-[#081849]">
              <li>Using strong, unique passwords</li>
              <li>Logging out after each session</li>
              <li>Not sharing their login credentials with others</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Breach notification</h2>
            <p>Despite our best efforts, no online platform can guarantee 100% security. In the event of a data breach that may affect your personal information, Protoverse will notify you and the relevant data protection authorities as required by the GDPR.</p>
          </section>

          <p className="mt-6 text-sm text-[#5a5759]">Last updated: November 4, 2025</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
