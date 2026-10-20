'use client'

import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Scale, Award, Globe, Landmark } from 'lucide-react'


const credentials = [
  { name: 'INSOL International', role: 'Member', desc: 'International membership supporting the firm’s insolvency and restructuring practice.' },
  { name: 'Advocate', role: 'Founder qualification', desc: 'Dr. (Commerce) Timotius Tumbur Simbolon is an Advocate.' },
  { name: 'National Curator', role: 'Founder qualification', desc: 'The Founder is a National Curator.' },
  { name: 'Specialized Team', role: 'Qualified personnel', desc: 'Legal services are supported by qualified and specialized personnel.' },
]

export default function AboutPage() {
  const { language } = useLanguage()
  const id = language === 'id'

  return (
    <main className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-border bg-[#f6efe4] pt-32 pb-16 lg:pt-36 lg:pb-24">
              <div aria-hidden className="absolute inset-0 -z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-25" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6efe4]/95 via-[#f6efe4]/85 to-[#f6efe4]/55" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">{id ? 'Pendahuluan &amp; Profil Firma' : 'Introduction &amp; Firm Profile'}</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.05]">
              {id ? <>Pernyataan <br /><em className="text-accent italic">tujuan dan warisan.</em></> : <>A statement of <br /><em className="text-accent italic">purpose and heritage.</em></>}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground font-serif">
              {id ? 'TTS Law Firm – Timotius & Partners didirikan pada 1997 oleh Dr. (Commerce) Timotius Tumbur Simbolon, S.H., M.H., Advokat, Kurator Nasional, dan anggota INSOL International. Firma memiliki pengalaman tepercaya selama 40 tahun, dengan praktik hukum sejak 1986.' : 'TTS Law Firm – Timotius & Partners was founded in 1997 by Dr. (Commerce) Timotius Tumbur Simbolon, S.H., M.H., Advocate, National Curator, and Member of INSOL International. The firm brings 40 years of trusted experience, built through legal practice since 1986.'}
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Philosophy */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">{id ? 'Filosofi Kami' : 'Our Philosophy'}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                {id ? 'Dengan hukum, bisnis Anda aman.' : 'With law, your business is secured.'}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {id ? 'Filosofi yang telah lama kami pegang ini menjadi pedoman kerja dan komitmen kami terhadap supremasi hukum, kepastian hukum, dan keadilan.' : 'This enduring philosophy guides our work and our commitment to the supremacy of law, legal certainty, and justice.'}
              </p>
              <blockquote className="mt-7 border-l-2 border-accent bg-secondary p-6 font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;With Law, Your Business is Secured.&rdquo;
                <span className="mt-3 block font-sans text-xs not-italic text-muted-foreground">Dengan Hukum, Bisnis Anda Aman.</span>
              </blockquote>
            </div>

            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                {id ? 'Profil firma ini mencerminkan jiwa, filosofi, dan warisan Pendiri serta Partner: dedikasi pada konsultasi hukum, perjanjian, litigasi, serta perkembangan hukum nasional dan internasional.' : 'This firm profile reflects the soul, philosophy, and heritage of the Founder and Partners: a dedication to legal counsel, agreements, litigation, and the development of national and international law.'}
              </p>
              <p>
                {id ? 'Pendiri dan Partner memiliki gelar Profesor dan Doktor di bidang hukum serta pengalaman studi komparatif di yurisdiksi maju. Praktik mereka memadukan penguasaan teori hukum dan layanan dengan solusi yang menyeluruh dan akuntabel.' : 'The Founder and Partners hold Professorial and Doctoral degrees in Law, with comparative studies in advanced jurisdictions. Their practice combines mastery of legal theory and service delivery with comprehensive, accountable solutions.'}
              </p>
              <p>
                {id ? 'TTS Law Firm berkomitmen menjunjung supremasi hukum, kepastian hukum, dan keadilan, dengan dukungan tenaga ahli yang berkualifikasi dan terspesialisasi.' : 'TTS Law Firm is committed to upholding the supremacy of law, legal certainty, and justice, supported by qualified and specialized personnel.'}
              </p>
              <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                {[
                  ...(id ? ['Nasihat hukum tepercaya dan akuntabel', 'Perspektif nasional dan internasional', 'Tenaga hukum terspesialisasi', 'Komitmen pada kepastian hukum dan keadilan'] : ['Trusted and accountable counsel', 'National and international perspective', 'Specialized legal personnel', 'Commitment to legal certainty and justice']),
                ].map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-xs font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-20 lg:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">{id ? 'Standar Institusi' : 'Institutional Standards'}</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl tracking-tight">{id ? 'Pilar Utama Kami' : 'Our Guiding Pillars'}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-8 rounded-lg border border-border">
              <ShieldCheck className="text-accent size-10 mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-3">{id ? 'Integritas &amp; Kehati-hatian' : 'Integrity &amp; Discretion'}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {id ? 'Dalam penugasan restrukturisasi dan regulasi yang berdampak besar, kepercayaan klien dan kerahasiaan yang ketat merupakan prinsip yang tidak dapat ditawar.' : 'In high-stakes restructuring and regulatory engagements, client trust and strict confidentiality are non-negotiable fundamentals.'}
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <Scale className="text-accent size-10 mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-3">{id ? 'Penguasaan Peraturan' : 'Statutory Mastery'}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {id ? 'Penguasaan mendalam atas hukum Indonesia, yurisprudensi, serta perkembangan regulasi berdasarkan ketentuan OJK dan BAPEPAM.' : 'Deep command of the Indonesian legal corpus, precedent jurisprudence, and ongoing regulatory evolutions under OJK and BAPEPAM directives.'}
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <Globe className="text-accent size-10 mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-3">{id ? 'Perspektif Global' : 'Global Perspective'}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {id ? 'Perspektif hukum komparatif yang dibentuk oleh studi di yurisdiksi maju dan kolaborasi lintas negara.' : 'Comparative legal perspective informed by studies in advanced jurisdictions and collaboration across national borders.'}
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <Award className="text-accent size-10 mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-3">{id ? 'Pelaksanaan yang Tegas' : 'Decisive Execution'}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {id ? 'Kecepatan dan ketangkasan dalam pengajuan perkara, perundingan, serta penyampaian dokumen kepada regulator saat waktu menentukan hasil.' : 'Speed and agility in court filings, negotiation roundtables, and expedited regulatory submissions when timing determines the outcome.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose, experience & methodology */}
      <section className="border-b border-border bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <p className="eyebrow">{id ? 'Tujuan' : 'Purpose'}</p>
              <h2 className="mt-3 font-serif text-2xl leading-snug">{id ? 'Firma hukum terkemuka dan mitra bisnis utama.' : 'A leading law firm and integral business partner.'}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {id ? 'Menjadi firma hukum terkemuka di Indonesia dan mitra utama dalam penyusunan perjanjian bisnis nasional maupun internasional, termasuk penyelesaian perkara korporasi nasional, asing, dan multinasional.' : 'To become a leading law firm in Indonesia and an integral partner in structuring national and international business agreements, including resolving national, foreign, and multinational corporate matters.'}
              </p>
            </div>
            <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="eyebrow">{id ? 'Pengalaman Pendiri' : 'Founder&apos;s Experience'}</p>
              <p className="mt-3 font-serif text-xl leading-relaxed text-foreground">
                {id ? 'Kendali yang tenang, bijaksana, dan berpengalaman—dilandasi pertimbangan yang arif.' : 'Calm, wise, and experienced control—guided by sagacious judgment.'}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {id ? 'Pendiri mengelola kepentingan hukum klien dengan pertimbangan yang cermat. Pengalaman firma telah berlangsung sejak 1986 dan firma didirikan pada 1997.' : 'The Founder&apos;s approach focuses on managing clients&apos; legal interests with careful judgment. The firm&apos;s stated experience dates to 1986, with its establishment in 1997.'}
              </p>
            </div>
            <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="eyebrow">{id ? 'Metodologi' : 'Methodology'}</p>
              <ol className="mt-4 space-y-3 text-sm text-foreground">
                {[
                  ...(id ? ['Identifikasi dan klasifikasi isu hukum', 'Perencanaan dan perumusan strategi optimal', 'Pengelolaan dan penyelesaian perkara dengan solusi terbaik', 'Pelaksanaan secara tepat waktu'] : ['Identify and classify legal issues', 'Plan and formulate optimal strategies', 'Manage and resolve matters with the best solution', 'Execute in a timely manner']),
                ].map((step, index) => (
                  <li key={step} className="flex gap-3 leading-6">
                    <span className="font-mono text-xs font-bold text-accent">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-sm leading-7 text-muted-foreground">
              <strong className="text-foreground">{id ? 'Kolaborasi:' : 'Collaboration:'}</strong> {id ? 'TTS Law Firm bekerja sama dengan Advokat ahli dari firma lain di Indonesia dan luar negeri—mitra yang memiliki semangat dan tujuan profesional yang sama.' : 'TTS Law Firm works with expert Advocates from other firms in Indonesia and abroad—like-minded partners sharing the same professional spirit.'}
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations & Memberships */}
      <section id="credentials" className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8 border-b border-primary-foreground/20">
            <div>
              <p className="eyebrow text-accent">{id ? 'Kedudukan Profesional' : 'Professional Standing'}</p>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl tracking-tight">{id ? 'Afiliasi &amp; Lisensi' : 'Affiliations &amp; Licenses'}</h2>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-sm">
              {id ? 'Partner kami menjalankan peran kepemimpinan dalam organisasi hukum nasional dan internasional.' : 'Our partners maintain leadership roles in domestic and international legal associations.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="border-t border-primary-foreground/20 pt-6">
                <Landmark className="text-accent size-8 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-primary-foreground">{cred.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{cred.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-primary-foreground/60">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{id ? 'Kenali para ahli hukum yang memimpin firma kami' : 'Meet the legal minds leading our firm'}</h2>
          <p className="mt-4 text-sm text-accent-foreground/80 max-w-xl mx-auto">
            {id ? 'Kenali latar belakang, rekam jejak, dan spesialisasi hukum para partner senior kami.' : 'Discover the backgrounds, track records, and statutory specialties of our senior partnership.'}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
            >
              {id ? 'Lihat Biografi Partner' : 'View Partner Biographies'} <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
