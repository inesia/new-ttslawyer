'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Clock, Mail, MapPin, Phone, AlertCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How does Timotius & Partners perform conflict of interest checks?',
    a: 'Before accepting any new instruction or reviewing sensitive corporate disclosures, our compliance team conducts a rigorous formal conflict clearance check against all active firm mandates, past representations, and adverse parties. Clearance is typically completed within 4 business hours.',
  },
  {
    q: 'Are preliminary discussions covered by confidentiality?',
    a: 'Yes. All preliminary communications, exploratory consultations, and submitted matter briefs are held in strict legal confidence in accordance with Indonesian Advocate Ethics Codes (Kode Etik Advokat Indonesia) and international attorney-client privilege protocols.',
  },
  {
    q: 'What formats are available for preliminary consultations?',
    a: 'We accommodate in-person conferences at our executive offices in Equity Tower SCBD Jakarta, on-site visits to client headquarters for urgent restructuring matters, as well as secure virtual conferences (Zoom, Microsoft Teams) for international cross-border syndicates.',
  },
  {
    q: 'What fee structures does the firm accommodate?',
    a: 'Depending on the nature and velocity of the matter, we provide tailored fee structures including traditional hourly partner rates, milestone-based retainers for transactional M&A and capital market issuances, capped phase fees for PKPU proceedings, and special project arrangements.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-border bg-[#f6efe4] pt-32 pb-16 lg:pt-36 lg:pb-24">
              <div aria-hidden className="absolute inset-0 -z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-25" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6efe4]/95 via-[#f6efe4]/85 to-[#f6efe4]/55" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Engagement &amp; Inquiry</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.05]">
              Let&apos;s discuss <br />
              <em className="text-accent italic">what is at stake.</em>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground font-serif">
              Our partners are prepared to confer on complex corporate transactions, debt reorganizations, and urgent dispute situations.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA & Office Details */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Direct WhatsApp contact */}
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm lg:p-12">
              <span className="text-xs font-mono font-bold text-accent">DIRECT CONTACT</span>
              <h2 className="mt-2 font-serif text-3xl font-semibold">Start a conversation</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Contact our team directly on WhatsApp to discuss your inquiry. Please avoid sending sensitive or confidential documents before an initial conflict check.
              </p>
              <a
                href="https://wa.me/6218212345678?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20legal%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Chat via WhatsApp <ArrowUpRight size={16} />
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">+62 182 123 45678</p>
            </div>

            {/* Office Information & Executive Desk */}
            <div className="space-y-8">
              {/* Head Office Card */}
              <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
                <span className="text-xs font-mono font-bold text-accent">HEADQUARTERS</span>
                <h3 className="font-serif text-2xl font-semibold mt-1">Jakarta Office</h3>
                
                <div className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent size-5 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Equity Tower</strong>, 28th Floor<br />
                      Sudirman Central Business District (SCBD)<br />
                      Jl. Jend. Sudirman Kav. 52-53<br />
                      Jakarta Selatan 12190, Indonesia
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-accent size-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Main Switchboard: <strong className="text-foreground">+62 21 515 9898</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-accent size-5 shrink-0" />
                    <span className="text-muted-foreground">
                      General Counsel Inquiries: <a href="mailto:contact@ttslawyers.com" className="text-foreground font-semibold hover:underline">contact@ttslawyers.com</a>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="text-accent size-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Office Hours: Monday – Friday, 08:30 – 18:00 WIB
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgent Desk Banner */}
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 flex items-start gap-4">
                <AlertCircle className="text-accent size-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground">
                    Urgent PKPU &amp; Injunction Desk
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    For urgent inquiries, contact our team directly on WhatsApp at <a href="https://wa.me/6218212345678" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2">+62 182 123 45678</a>.
                  </p>
                </div>
              </div>

              {/* Location Map Visual Card */}
              <div className="rounded-xl border border-border bg-[#efe8dc] p-6 text-center space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location Landmark</span>
                <p className="font-serif text-lg text-foreground font-medium">Located in the Heart of SCBD Jakarta</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Direct access from MRT Istora Mandiri and Pacific Place Jakarta. Dedicated visitor parking &amp; helipad reception available at Equity Tower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-secondary py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow">Client Engagement FAQ</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Essential information on retaining Timotius &amp; Partners for corporate legal representations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-background overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left font-serif text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-accent shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground border-t border-border/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
