'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language'

/* ─────────────────────────── DATA ─────────────────────────── */

const practiceAreas = [
  { id: '01', title: 'National and International Business Agreement' },
  { id: '02', title: 'Banking & Finance' },
  { id: '03', title: 'Stock Exchange' },
  { id: '04', title: 'Joint Venture' },
  { id: '05', title: 'State Owned Enterprises' },
  { id: '06', title: 'Bankruptcy & Suspension of Debt Payment Obligation' },
  { id: '07', title: 'Cross Border Insolvency' },
  { id: '08', title: 'Merger & Acquisition' },
  { id: '09', title: 'Shipping & Maritime' },
  { id: '10', title: 'Arbitration & Commercial Litigation' },
]


const methodology = [
  {
    step: '01',
    title: 'Identification & Classification',
    desc: 'Precise identification and classification of the legal issues presented.',
  },
  {
    step: '02',
    title: 'Planning & Formulation',
    desc: 'Careful planning and formulation of the optimal strategic course of action.',
  },
  {
    step: '03',
    title: 'Management & Resolution',
    desc: 'Disciplined management, handling, and resolution of the matter with the best solution.',
  },
  {
    step: '04',
    title: 'Timely Execution',
    desc: 'Precise and timely execution of all agreed steps and deliverables.',
  },
]

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function HomeContent() {
  const { language } = useLanguage()
  const id = language === 'id'

  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO SECTION — Full-bleed image (client request)
      ══════════════════════════════════════ */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-border">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpeg"
            alt="TTS Law Firm — With Law, Your Business is Secured"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient overlays for readability of bottom content */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/30 to-transparent" />
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Bottom overlay content — CTA and brief info */}
        <div className="relative z-10 px-5 pb-0 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-8 pb-8 lg:grid-cols-[1fr_auto] lg:pb-10">

              {/* Left — supporting text + CTAs */}
              <div>
                <h1 className="sr-only">
                  {id ? 'TTS Law Firm — Dengan Hukum, Bisnis Anda Terlindungi' : 'TTS Law Firm — With Law, Your Business is Secured'}
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                  {id
                    ? 'Penasihat hukum strategis bagi institusi dalam mengambil keputusan penting — mulai dari M&A lintas negara dan pembentukan modal hingga restrukturisasi utang PKPU yang kompleks.'
                    : 'Strategic counsel for institutions navigating consequential decisions — from cross-border M&A and capital formation to intricate PKPU debt restructuring.'}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0a1628] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-white/90"
                  >
                    {id ? 'Diskusikan perkara Anda' : 'Discuss your matter'} <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="/expertise"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/50"
                  >
                    {id ? 'Jelajahi keahlian' : 'Explore expertise'} <ChevronDown size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — Credential badge */}
              <div className="hidden lg:inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md shadow-lg">
                <span className="grid size-9 place-items-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  TT
                </span>
                <div>
                  <p className="text-xs font-serif font-semibold text-white leading-tight">Dr. (Commerce) Timotius Tumbur Simbolon, SH., MH.</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">{id ? 'Pendiri & Managing Partner' : 'Founder & Managing Partner'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Credential Bar */}
        <div className="relative z-10 border-t border-white/15 bg-[#0a1628]/70 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 lg:px-8">
            <div>
              <strong className="font-serif text-2xl text-white">Est. 1997</strong>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">{id ? 'Didirikan di Jakarta' : 'Founded in Jakarta'}</p>
            </div>
            <div className="sm:text-center">
              <strong className="font-serif text-2xl text-white">INSOL International</strong>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">Member Firm</p>
            </div>
            <div className="sm:text-right">
              <strong className="font-serif text-2xl text-white">National &amp; International</strong>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">{id ? 'Cakupan Praktik' : 'Practice Scope'}</p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl border-t border-white/10 px-5 lg:px-8">
            <div className="grid gap-2 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:grid-cols-3">
              <span>Advokat · Kurator Nasional</span>
              <span className="sm:text-center">INSOL International Member</span>
              <span className="sm:text-right">{id ? 'Korporasi · Transaksi · Litigasi' : 'Corporate · Transactional · Litigation'}</span>
            </div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          END HERO SECTION
      ══════════════════════════════════════ */}


      {/* ══════════════════════════════════════
          SECTION 1 — FIRM INTRODUCTION
      ══════════════════════════════════════ */}
      <section id="firm" aria-labelledby="firm-heading" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28">

          {/* Eyebrow */}
          <div className="mb-10 flex items-center gap-4 lg:mb-16">
            <span className="eyebrow">{id ? '01 / Tentang Firma' : '01 / The Firm'}</span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          {/* Main editorial grid */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* Left — title and introduction */}
            <div className="lg:sticky lg:top-28">
              <h2
                id="firm-heading"
                className="max-w-xl font-serif text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.08] tracking-tight text-foreground"
              >
                {id ? <>Pernyataan Prinsip, Filosofi, dan <em className="text-accent italic">Warisan Profesional.</em></> : <>A Statement of Principle, Philosophy, and <em className="text-accent italic">Professional Heritage.</em></>}
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground lg:mt-8">
                {id ? 'TTS Law Firm – Timotius & Partners lebih dari sekadar profil firma. Ini adalah pernyataan jiwa, filosofi, dan warisan Pendiri serta Partner—sebuah institusi yang mengabdikan diri pada esensi konsultasi hukum, perjanjian, dan litigasi pada standar praktik tertinggi.' : 'TTS Law Firm – Timotius & Partners is more than a corporate document. It is a declaration of the soul, the philosophy, and the legacy of its Founder and Partners — an institution devoted to the essence of legal counsel, agreements, and litigation at the highest levels of practice.'}
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-accent"
              >
                {id ? 'Profil lengkap firma' : 'Full firm profile'} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — supporting narrative */}
            <div className="divide-y divide-border border-y border-border">
              <p className="py-7 font-serif text-xl leading-relaxed text-foreground sm:py-9 lg:text-2xl">
                {id ? 'Pendiri dan Partner TTS Law Firm memiliki kualifikasi Profesor dan Doktor di bidang hukum, dengan studi hukum komparatif di berbagai yurisdiksi maju.' : 'The Founder and Partners of TTS Law Firm hold the qualifications of Professor and Doctor in the field of law, with comparative legal studies conducted across advanced international jurisdictions.'}
              </p>

              <div className="py-6 sm:py-7">
                <p className="text-base leading-7 text-muted-foreground">
                  {id ? 'Penguasaan teori dan praktik hukum tersebut berpijak pada komitmen teguh terhadap supremasi hukum, kepastian hukum, dan keadilan—nilai yang mendasari setiap penugasan firma.' : 'Their mastery encompasses both the theory and practice of law, underpinned by an unwavering commitment to the supremacy of law, legal certainty, and justice — values that define every engagement this firm undertakes.'}
                </p>
              </div>

              <div className="py-6 sm:py-7">
                <p className="text-base leading-7 text-muted-foreground">
                  {id ? 'Firma memiliki visi mendalam terhadap perkembangan kerangka hukum nasional dan internasional, khususnya hukum korporasi, transaksi bisnis, dan kompleksitas lintas negara.' : 'The firm maintains a commanding vision of the evolution of both national and international legal frameworks, positioning it at the forefront of corporate law, business transactions, and cross-border legal complexity.'}
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-accent"
                >
                  Full firm profile <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          SECTION 2 — PURPOSE & PHILOSOPHY
      ══════════════════════════════════════ */}
      <section
        id="purpose"
        aria-labelledby="purpose-heading"
        className="bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">

          {/* Eyebrow */}
          <div className="mb-9 flex items-center gap-4 lg:mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/50">
              {id ? '02 / Tujuan &amp; Filosofi' : '02 / Purpose &amp; Philosophy'}
            </span>
            <span className="h-px flex-1 bg-primary-foreground/15" aria-hidden />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Purpose */}
            <div>
              <h2
                id="purpose-heading"
                className="font-serif text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6"
              >
                {id ? 'Tujuan' : 'Purpose'}
              </h2>
              <p className="font-serif text-2xl leading-snug text-primary-foreground lg:text-3xl">
                {id ? 'Menjadi firma hukum terkemuka di Indonesia dan mitra utama dalam penyusunan perjanjian bisnis nasional maupun internasional, termasuk penyelesaian perkara korporasi nasional, asing, dan multinasional.' : 'To be a leading law firm in Indonesia and an integral partner in the drafting of national and international business agreements — including the resolution of national, foreign, and multinational corporate matters.'}
              </p>
            </div>

            {/* Philosophy */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h2 className="font-serif text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                  {id ? 'Filosofi' : 'Philosophy'}
                </h2>

                {/* Core philosophical statement */}
                <blockquote className="border-l-2 border-accent pl-6">
                  <p className="font-serif text-3xl italic leading-tight text-primary-foreground lg:text-4xl">
                    &ldquo;With Law, Your Business is Secured.&rdquo;
                  </p>
                </blockquote>

                <p className="mt-6 text-sm leading-7 text-primary-foreground/65 pl-8">
                  <em>Dengan Hukum, Bisnis Anda Aman.</em>
                </p>
              </div>

              <div className="border-t border-primary-foreground/15 pt-8">
                <p className="text-sm leading-7 text-primary-foreground/65">
                  {id ? 'Filosofi ini bukan sekadar slogan. Ini adalah komitmen firma kepada setiap klien: bahwa penerapan nasihat hukum yang tepat merupakan landasan bagi usaha yang mantap dan berkelanjutan.' : 'This philosophy is not a slogan. It is the covenant the firm makes with every client — that the application of sound legal counsel is the surest foundation for confident and sustainable business.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          SECTION 3 — FOUNDER'S EXPERIENCE
      ══════════════════════════════════════ */}
      <section
        id="founders-experience"
        aria-labelledby="founder-heading"
        className="border-b border-border bg-background"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">

          {/* Eyebrow */}
          <div className="mb-9 flex items-center gap-4 lg:mb-10">
            <span className="eyebrow">03 / Founder&apos;s Experience</span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">

            {/* Left — editorial statement */}
            <div>
              <h2
                id="founder-heading"
                className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.08] tracking-tight text-foreground"
              >
                The value of expert legal counsel is measured not in cost — but in the outcomes it makes possible.
              </h2>

              <div className="mt-10 border-l-2 border-accent pl-6">
                <p className="font-serif text-lg leading-relaxed text-foreground italic lg:text-xl">
                  &ldquo;The comparison between the legal fees paid by clients and the results obtained provides benefits hundreds to thousands of times over — owing to calm, wise, and experienced control, exercised with precision and sharp judgment.&rdquo;
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  — Dr. (Commerce) Timotius Tumbur Simbolon, S.H., M.H.
                </p>
                <p className="text-xs text-muted-foreground tracking-wide">Founder &amp; Managing Partner, TTS Law Firm</p>
              </div>
            </div>

            {/* Right — contextual support */}
            <div className="space-y-6 lg:border-l lg:border-border lg:pl-12">
              <p className="text-sm leading-7 text-muted-foreground">
                The Founder brings to each engagement a depth of experience that transforms legal representation into strategic advantage. His approach is characterized by deliberate, composed, and authoritative judgment — qualities refined across decades of navigating complex business, transactional, and dispute matters at the national and international level.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Clients who retain TTS Law Firm access not merely a legal service, but the accumulated wisdom and measured strategic acuity of its Founder — a counsel whose analysis consistently delivers disproportionate value relative to investment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          SECTION 4 — METHODOLOGY & COLLABORATION
      ══════════════════════════════════════ */}
      <section
        id="methodology"
        aria-labelledby="method-heading"
        className="bg-secondary border-b border-border"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">

          {/* Eyebrow */}
          <div className="mb-9 flex items-center gap-4 lg:mb-10">
            <span className="eyebrow">04 / Methodology &amp; Collaboration</span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* Left — Four-step methodology */}
            <div>
              <h2
                id="method-heading"
                className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-foreground mb-10"
              >
                A structured, proven approach to every legal matter.
              </h2>

              <ol className="space-y-0" role="list">
                {methodology.map((item, idx) => (
                  <li
                    key={item.step}
                    className={`flex gap-6 py-7 ${idx < methodology.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    {/* Step number */}
                    <div className="shrink-0 pt-0.5">
                      <span className="font-mono text-xs font-bold text-accent tracking-widest">
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — Collaboration model */}
            <div className="lg:border-l lg:border-border lg:pl-12 flex flex-col justify-center">
              <div className="bg-primary text-primary-foreground rounded-xl p-8 lg:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent mb-5">
                  Network &amp; Collaboration
                </p>
                <h3 className="font-serif text-2xl leading-snug text-primary-foreground">
                  A network of like-minded advocates, united by shared purpose.
                </h3>
                <div className="mt-6 border-t border-primary-foreground/15 pt-6">
                  <p className="text-sm leading-7 text-primary-foreground/75">
                    TTS Law Firm collaborates with expert Advocates from other law firms across Indonesia and internationally — operating as satellites who share the same mindset, the same struggle, and the same professional spirit.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
                    This collaborative model extends the firm&apos;s reach while preserving the consistency of its standards and the coherence of its strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          SECTION 6 — CORE PRACTICE AREAS PREVIEW
      ══════════════════════════════════════ */}
      <section
        id="practice-areas"
        aria-labelledby="practice-heading"
        className="bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

          {/* Header row */}
          <div className="flex items-center gap-4 mb-14">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/50">
              06 / Core Practice Areas
            </span>
            <span className="h-px flex-1 bg-primary-foreground/15" aria-hidden />
            <Link
              href="/expertise"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:underline shrink-0"
            >
              View expertise <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-20 items-start">

            {/* Left heading */}
            <div>
              <h2
                id="practice-heading"
                className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-tight tracking-tight text-primary-foreground"
              >
                Ten&nbsp;disciplines. One integrated practice.
              </h2>
              <p className="mt-6 text-sm leading-7 text-primary-foreground/65">
                The firm operates across ten core practice areas, each reflecting decades of cultivated expertise in national and international legal work.
              </p>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent hover:underline sm:hidden"
              >
                Full expertise overview <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right — two-column editorial list */}
            <div>
              <div className="grid sm:grid-cols-2 gap-0">
                {practiceAreas.map((area, idx) => (
                  <Link
                    key={area.id}
                    href="/expertise"
                    className={`group flex items-start gap-4 py-5 transition-colors hover:bg-primary-foreground/[0.04]
                      ${idx % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:border-l sm:border-primary-foreground/15'}
                      ${idx < practiceAreas.length - 2 ? 'border-b border-primary-foreground/10' : ''}
                      ${idx === practiceAreas.length - 1 && practiceAreas.length % 2 !== 0 ? 'sm:col-span-2' : ''}
                    `}
                  >
                    <span className="font-mono text-[10px] font-bold text-accent shrink-0 pt-0.5 w-5">
                      {area.id}
                    </span>
                    <span className="font-serif text-base leading-snug text-primary-foreground group-hover:text-accent transition-colors">
                      {area.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          SECTION 8 — CLOSING STATEMENT / CONTACT TRANSITION
      ══════════════════════════════════════ */}
      <section
        id="close"
        aria-labelledby="close-heading"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="eyebrow">Let&apos;s work together · Jakarta, Indonesia</p>
              <h2
                id="close-heading"
                className="mt-4 max-w-3xl font-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] tracking-tight text-foreground"
              >
                Experienced counsel for matters that matter.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md lg:min-w-52"
            >
              Contact the Firm <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
