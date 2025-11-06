"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function BetaSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profileType: "both",
    fieldOfInterest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdmssfkLRf3VqG-8mr_7d3ULI7i6luyr5xPtIAoJni0hJFGWw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: data,
        }
      )
      setSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
    }
  }

  return (
    <section id="beta" className="py-28 px-6 bg-[#cccacc]">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-[#081849] mb-6">
        Register for Beta
      </h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-[#b64198] via-[#ca6ab1] to-[#893172] mx-auto rounded-full mb-6"></div>
      <p className="text-center text-[#5a5759] text-lg max-w-2xl mx-auto mb-6">
        Ready to shape the next generation of 3D printing? Join our Beta program and get early access to ProtoVerse.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#b64198]/8 to-[#893172]/5 rounded-3xl p-12 border border-[#1f3a5f]/50 hover:border-[#b64198]/30 transition duration-500"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ca6ab1]/5 rounded-full blur-3xl -z-10"></div>

          <div className="relative p-12 md:p-16 z-10">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 px-6 py-4 rounded-xl bg-white border-2 border-[#213885] text-[#081849] placeholder-[#5a5759] focus:outline-none focus:border-[#ca6ab1] transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 px-6 py-4 rounded-xl bg-white border-2 border-[#213885] text-[#081849] placeholder-[#5a5759] focus:outline-none focus:border-[#ca6ab1] transition"
                />

                <select
                  name="profileType"
                  value={formData.profileType}
                  onChange={handleChange}
                  className="w-full mb-4 px-6 py-4 rounded-xl bg-white border-2 border-[#213885] text-[#081849] focus:outline-none focus:border-[#ca6ab1] transition"
                >
                  <option value="user">Maker/Creator</option>
                  <option value="partner">Partner/Service Provider</option>
                  <option value="both">Both</option>
                </select>

                <input
                  type="text"
                  name="fieldOfInterest"
                  placeholder="Field of Interest (e.g., Prototyping, Manufacturing, Design)"
                  value={formData.fieldOfInterest}
                  onChange={handleChange}
                  className="w-full mb-4 px-6 py-4 rounded-xl bg-white border-2 border-[#213885] text-[#081849] placeholder-[#5a5759] focus:outline-none focus:border-[#ca6ab1] transition"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project or motivation to join..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mb-4 px-6 py-4 rounded-xl bg-white border-2 border-[#213885] text-[#081849] placeholder-[#5a5759] focus:outline-none focus:border-[#ca6ab1] transition resize-none"
                ></textarea>

                {/* Hidden fields to send data to Google Form */}
                <input type="hidden" name="entry.1441875171" value={formData.fullName} />
                <input type="hidden" name="entry.707814701" value={formData.email} />
                <input type="hidden" name="entry.234731111" value={formData.profileType} />
                <input type="hidden" name="entry.590462611" value={formData.fieldOfInterest} />
                <input type="hidden" name="entry.1218185121" value={formData.message} />

                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-start gap-3">
                    <Checkbox checked={agreeTerms} onCheckedChange={(v) => setAgreeTerms(Boolean(v))} />
                    <label className="text-sm text-[#081849]">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#b64198] underline font-medium">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#b64198] underline font-medium">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!agreeTerms}
                  className="w-full bg-[#ca6ab1] text-white hover:bg-[#b85aa1] rounded-xl py-4 font-bold text-lg shadow-lg shadow-[#ca6ab1]/40 hover:shadow-[#ca6ab1]/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join the Beta →
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ca6ab1]/20 border-2 border-[#ca6ab1] mb-6">
                  <Check className="w-8 h-8 text-[#ca6ab1]" />
                </div>
                <h3 className="text-3xl font-bold text-[#081849] mb-3">
                  Welcome to ProtoVerse!
                </h3>
                <p className="text-[#5a5759] text-lg">
                  Check your email for next steps and early access details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}