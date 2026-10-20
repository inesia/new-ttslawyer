'use client'

import type { Metadata } from 'next'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, Phone, Award, GraduationCap, Briefcase, Landmark, ShieldCheck } from 'lucide-react'


const partners = [
  {
    id: 'timotius',
    photo: '/team/5timotius.jpg',
    initials: 'TT',
    name: 'Timotius Tumbur Simbolon, S.H., LL.M.',
    role: 'Founder & Managing Partner',
    practiceAreas: ['Insolvency & Debt Restructuring (PKPU)', 'Cross-Border M&A', 'Corporate Governance'],
    email: 't.simbolon@ttslawyers.com',
    bio: 'Timotius Tumbur Simbolon founded Timotius & Partners in 1997. Over nearly three decades of active practice, he has established himself as one of Indonesia’s preeminent legal authorities in corporate turnaround, receivership, and court-supervised debt restructuring (PKPU). He frequently acts as lead counsel for major international bank syndicates, multilateral creditors, and troubled industrial conglomerates. His cross-border expertise spans transactions and dispute settlements involving Singapore, London, Hong Kong, and New York jurisdictions.',
    bioId: 'Timotius Tumbur Simbolon mendirikan Timotius & Partners pada 1997. Selama hampir tiga dekade praktik aktif, ia mengembangkan keahlian di bidang pemulihan korporasi, kurator dan pengurusan, serta restrukturisasi utang melalui PKPU. Ia menangani kepentingan kreditur institusional dan perusahaan dalam perkara restrukturisasi serta transaksi dan sengketa lintas negara.',
    education: [
      'Master of Laws (LL.M.) in International Business Law — Leiden University, The Netherlands',
      'Sarjana Hukum (S.H.) — Faculty of Law, Universitas Indonesia',
    ],
    admissions: [
      'PERADI (Indonesian Advocates Association)',
      'Licensed Receiver & Administrator (Kurator dan Pengurus)',
      'INSOL International (Fellow & Active Member)',
    ],
    notableMatters: [
      'Lead counsel in court-ratified PKPU homologation of over USD 420M in syndicated maritime debt.',
      'Advised an international airline consortium in restructuring aircraft lease agreements in Indonesia.',
      'Regular contributor and panelist on Indonesian bankruptcy law reform at international INSOL symposiums.',
    ],
  },
  {
    id: 'tumanggor',
    initials: 'MS',
    name: 'Dr. M.S. Tumanggor, S.H., M.Si.',
    role: 'Senior Partner, Capital Markets & Banking',
    practiceAreas: ['Capital Markets & Securities', 'Banking Regulation', 'OJK Statutory Compliance', 'FinTech'],
    email: 'ms.tumanggor@ttslawyers.com',
    photo: '/team/1.-Prof-tumaggor.jpg',
    bio: 'Before joining the Firm, Prof. Dr. M. S. Tumanggor served for decades as a high official at BAPEPAM RI, later BAPEPAM-LK, and then OJK (Financial Services Authority). Considered a “Grand Master,” he played a pivotal role in the transformation, renewal, and formulation of capital market regulations that enabled companies to go public. He has authored scholarly works on capital markets and lectures at several universities in Indonesia. His guiding thought is: “Progress and prosperity of a nation and state can also be measured by advancement of its capital market in that country.”',
    bioId: 'Sebelum bergabung dengan Firma, Prof. Dr. M. S. Tumanggor mengabdi selama beberapa dekade sebagai pejabat tinggi di BAPEPAM RI, kemudian BAPEPAM-LK, dan OJK. Ia dikenal sebagai “Grand Master” yang berperan penting dalam transformasi, pembaruan, dan perumusan regulasi pasar modal yang memungkinkan perusahaan melakukan penawaran umum. Ia menulis karya ilmiah tentang pasar modal dan mengajar di sejumlah universitas di Indonesia. Gagasannya: “Kemajuan dan kesejahteraan suatu bangsa dan negara juga dapat diukur dari perkembangan pasar modal di negara tersebut.”',
    education: [
      'Doctor of Laws (Dr.) in Economic Law — Universitas Padjadjaran, Bandung',
      'Master of Science (M.Si.) — Universitas Indonesia',
      'Sarjana Hukum (S.H.) — Faculty of Law, Universitas Indonesia',
    ],
    admissions: [
      'Indonesian Capital Market Legal Consultants Association (HKHPM)',
      'Financial Services Authority (OJK) Registered Legal Consultant',
      'PERADI (Indonesian Advocates Association)',
    ],
    notableMatters: [
      'Decades of public service at BAPEPAM RI, BAPEPAM-LK, and OJK.',
      'Contributed to the transformation, renewal, and formulation of capital market regulations enabling companies to go public.',
      'Authored scholarly works on capital markets and lectures at universities in Indonesia.',
    ],
  },
  {
    id: 'sugiharto',
    initials: 'TK',
    name: 'Dr. Tjoe K. Sugiharto, S.H., MBA., D.TH.',
    role: 'Partner, Banking & Business',
    practiceAreas: ['Commercial Litigation', 'PKPU Litigation', 'BANI & SIAC Arbitration', 'Asset Recovery'],
    email: 'tk.sugiharto@ttslawyers.com',
    photo: '/team/3.-TjoeK.jpg',
    bio: 'Business is in Dr. Tjoe K. Sugiharto’s blood: he is a businessman and banker. He served as President Director of PT Bank Mayapada International, Tbk., and is now its Commissioner. With banking as his field of deep experience, he is known for fast and precise analysis and decision-making at top management level. Under his leadership, PT Bank Mayapada International, Tbk. grew through business diversification.',
    bioId: 'Bisnis merupakan bagian dari diri Dr. Tjoe K. Sugiharto: ia adalah pengusaha sekaligus bankir. Ia pernah menjabat sebagai Presiden Direktur PT Bank Mayapada International, Tbk. dan kini menjadi Komisaris. Berbekal pengalaman mendalam di bidang perbankan, ia dikenal mampu menganalisis dan mengambil keputusan secara cepat dan tepat di tingkat manajemen puncak. Di bawah kepemimpinannya, PT Bank Mayapada International, Tbk. berkembang melalui diversifikasi usaha.',
    education: [
      'S.H., MBA., D.TH.',
      'Business and banking leadership experience',
    ],
    admissions: [
      'President Director, PT Bank Mayapada International, Tbk.',
      'Commissioner, PT Bank Mayapada International, Tbk.',
    ],
    notableMatters: [
      'Served as President Director of PT Bank Mayapada International, Tbk.; currently serves as Commissioner.',
      'Led the bank through a period of growth and business diversification.',
    ],
  },
  {
    id: 'roger',
    initials: 'RA',
    name: 'A. Rogarani Ari, S.H. (“Roger”)',
    role: 'Advocate & Corporate Legal Consultant',
    practiceAreas: ['General Corporate', 'Fintech & Compliance', 'Data Protection', 'PSE & PPMSE'],
    email: '',
    photo: '/team/6_roggarani.jpg',
    bio: 'Handles joint venture company formation, OSS licensing, and cooperation agreements. Conducts legal research on the establishment and extension of Electronic System Operators (PSE), Electronic Commerce Operators (PPMSE), data center placement, and data privacy adjustments. Manages LKPM submissions, drafts privacy policies and terms of use for accounting software companies, and supports internal teams on legal due diligence, acquisitions, and corporate actions. Brings strong project management, presentation, research, and relationship skills, including with notaries and legal consultants in Indonesia and abroad. Currently continuing legal studies in Australia.',
    bioId: 'Menangani pendirian perusahaan patungan, perizinan OSS, dan berbagai perjanjian kerja sama. Aktif melakukan riset hukum terkait pendirian dan perpanjangan PSE, PPMSE, penempatan pusat data, serta penyesuaian perlindungan data pribadi. Mengelola dan menyampaikan LKPM, menyusun Kebijakan Privasi dan Ketentuan Penggunaan bagi perusahaan pengembang perangkat lunak akuntansi, serta membantu uji tuntas hukum, akuisisi, dan aksi korporasi. Memiliki kemampuan manajemen proyek, presentasi, riset daring dan lapangan, serta hubungan profesional dengan notaris dan konsultan hukum di Indonesia maupun luar negeri. Saat ini melanjutkan studi hukum di Australia.',
    education: ['Continuing legal studies in Australia'],
    admissions: ['Advocate and Corporate Legal Consultant'],
    notableMatters: ['Joint venture company establishment, OSS licensing, and cooperation agreements.', 'PSE/PPMSE research, LKPM reporting, privacy documentation, legal due diligence, acquisitions, and corporate actions.'],
  },
  {
    id: 'jidin',
    initials: 'JN',
    name: 'Ir. Jidin Napitupulu, M.M.',
    role: 'Client Relationship',
    practiceAreas: ['Client Relations', 'Banking', 'Government & Private Sector Networks'],
    email: '',
    photo: '/team/7jidin.jpg',
    bio: 'A businessman and former staff member of PT Bank Negara Indonesia (Persero) Tbk. and the Indonesian Bank Restructuring Agency (IBRA/BPPN), with short-course training in capital markets. He serves as a key liaison between the Firm and its clients and brings an extensive network across government institutions and the private sector.',
    bioId: 'Seorang pengusaha yang pernah bekerja di PT Bank Negara Indonesia (Persero) Tbk. dan Badan Penyehatan Perbankan Nasional (BPPN/IBRA), serta mengikuti kursus singkat pasar modal. Ia berperan penting sebagai penghubung antara Firma dan klien, dengan jaringan luas di lembaga pemerintah maupun sektor swasta.',
    education: ['Short course in Capital Markets'],
    admissions: ['Former staff member, PT Bank Negara Indonesia (Persero) Tbk.', 'Former staff member, Indonesian Bank Restructuring Agency (IBRA/BPPN)'],
    notableMatters: ['Acts as a key liaison between the Firm and its clients.', 'Maintains an extensive network across government institutions and the private sector.'],
  },
]

export default function PartnersPage() {
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
            <p className="eyebrow mb-4">{id ? 'Para Profesional Kami' : 'Our People'}</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.05]">
              {id ? <>Kemitraan. <br /><em className="text-accent italic">Kedalaman, ketelitian &amp; wibawa.</em></> : <>The Partnership. <br /><em className="text-accent italic">Depth, rigor &amp; stature.</em></>}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground font-serif">
              {id ? 'Para partner memadukan kewenangan regulasi, pengalaman menangani perkara penting, dan kecakapan komersial lintas negara.' : 'Our partners bring together regulatory authority, high-stakes courtroom experience, and cross-border commercial acumen.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Partners Profiles */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-24">
          {partners.map((partner) => (
            <article 
              key={partner.id} 
              id={partner.id} 
              className="scroll-mt-36 border border-border bg-card rounded-xl p-8 lg:p-14 shadow-sm"
            >
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] items-start">
                {/* Left Column: Avatar & Quick Info */}
                <div className="flex flex-col items-start">
                  <div className="relative h-72 w-full max-w-sm overflow-hidden rounded-2xl border-2 border-accent/40 bg-secondary shadow-md sm:h-80 lg:h-[26rem]">
                    <Image
                      src={partner.photo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      className="object-cover object-top"
                    />
                  </div>
                  
                  <h2 className="font-serif text-3xl font-semibold mt-6 text-foreground">
                    {partner.name}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-2">
                    {partner.role}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {partner.practiceAreas.map((p, i) => (
                      <span key={i} className="text-[11px] rounded-full bg-secondary px-3 py-1 font-medium text-foreground">
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border w-full space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-accent shrink-0" />
                      {partner.email ? (
                        <a href={`mailto:${partner.email}`} className="hover:text-foreground transition-colors">
                          {partner.email}
                        </a>
                      ) : (
                        <span>Contact via the Firm</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-accent shrink-0" />
                      <span>+62 21 515 9898</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/contact?attorney=${encodeURIComponent(partner.name)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
                    >
                      Confer with {partner.initials} <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Detailed Bio & Credentials */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      {id ? 'Biografi' : 'Biography'}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {id ? partner.bioId : partner.bio}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                    {/* Education */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3 flex items-center gap-2">
                        <GraduationCap size={15} className="text-accent" /> {id ? 'Pendidikan' : 'Education'}
                      </h3>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {partner.education.map((edu, i) => (
                          <li key={i} className="leading-relaxed">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Admissions */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3 flex items-center gap-2">
                        <Award size={15} className="text-accent" /> {id ? 'Keanggotaan &amp; Lisensi' : 'Admissions &amp; Bar'}
                      </h3>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {partner.admissions.map((adm, i) => (
                          <li key={i} className="leading-relaxed">
                            {adm}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Notable Matters */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3 flex items-center gap-2">
                      <Briefcase size={15} className="text-accent" /> {id ? 'Pengalaman Utama' : 'Key Representative Matters'}
                    </h3>
                    <ul className="space-y-2.5 text-xs text-muted-foreground">
                      {partner.notableMatters.map((mat, i) => (
                        <li key={i} className="border-l-2 border-accent pl-3 leading-relaxed">
                          {mat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* Direct Contact Banner */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-3xl sm:text-4xl">{id ? 'Ingin berkonsultasi dengan partner tertentu?' : 'Require consultation with a specific partner?'}</h2>
          <p className="mt-3 text-sm text-primary-foreground/70">
            {id ? 'Kantor eksekutif kami akan mengoordinasikan ketersediaan partner untuk kebutuhan hukum korporasi Anda.' : 'Our executive office coordinates partner availability for priority corporate instructions.'}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-md hover:brightness-105 transition-all"
            >
              {id ? 'Hubungi Partner' : 'Direct Partner Inquiry'} <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
