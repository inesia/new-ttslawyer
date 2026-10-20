'use client'

import type { Metadata } from 'next'
import { useLanguage } from '@/lib/language'
import { BookOpen, BriefcaseBusiness, Landmark, Scale, Building2, Ship, Gavel, Banknote, Globe2, Handshake, TrendingUp } from 'lucide-react'


const corePracticeAreas = [
  {
    title: 'National and International Business Agreements',
    icon: Handshake,
    description: 'Drafting, reviewing, and negotiating commercial agreements across domestic and cross-border transactions, with attention to risk allocation, enforceable obligations, and the client’s commercial objectives.',
    descriptionId: 'Menyusun, menelaah, dan menegosiasikan perjanjian komersial untuk transaksi domestik maupun lintas negara, dengan memperhatikan alokasi risiko, keberlakuan kewajiban, dan tujuan komersial klien.',
  },
  {
    title: 'Banking & Finance',
    icon: Banknote,
    description: 'Advice on lending, financing arrangements, security documentation, and creditor rights, supporting lenders, borrowers, and investors through the financing lifecycle.',
    descriptionId: 'Memberikan nasihat mengenai pinjaman, pengaturan pembiayaan, dokumentasi jaminan, dan hak kreditur bagi pemberi pinjaman, debitur, serta investor di setiap tahap pembiayaan.',
  },
  {
    title: 'Stock Exchange',
    icon: TrendingUp,
    description: 'Counsel on capital-market matters and public-company requirements, including regulatory compliance, disclosure obligations, and transaction documentation.',
    descriptionId: 'Memberikan pendampingan atas persoalan pasar modal dan kewajiban perusahaan terbuka, termasuk kepatuhan regulasi, kewajiban keterbukaan informasi, dan dokumentasi transaksi.',
  },
  {
    title: 'Joint Venture',
    icon: Handshake,
    description: 'Structuring and documenting joint ventures and strategic collaborations, addressing governance, decision-making, capital contributions, transfer restrictions, and exit rights.',
    descriptionId: 'Menyusun struktur dan dokumentasi usaha patungan serta kerja sama strategis, termasuk tata kelola, pengambilan keputusan, kontribusi modal, pembatasan pengalihan, dan hak keluar.',
  },
  {
    title: 'State Owned Enterprises',
    icon: Landmark,
    description: 'Legal support in corporate, contractual, financing, and dispute matters involving state-owned enterprises, with attention to governance and applicable regulatory frameworks.',
    descriptionId: 'Memberikan dukungan hukum dalam perkara korporasi, kontrak, pembiayaan, dan sengketa yang melibatkan badan usaha milik negara, dengan memperhatikan tata kelola dan kerangka regulasi yang berlaku.',
  },
  {
    title: 'Bankruptcy & Suspension of Debt Payment Obligation',
    icon: Building2,
    description: 'Representation and advice in bankruptcy and PKPU proceedings, including creditor claims, restructuring proposals, negotiations, and court processes, with a focus on stakeholder rights and business continuity.',
    descriptionId: 'Mewakili dan memberikan nasihat dalam proses kepailitan dan PKPU, termasuk pengajuan tagihan kreditur, proposal restrukturisasi, negosiasi, dan proses pengadilan dengan memperhatikan hak para pihak serta kelangsungan usaha.',
  },
  {
    title: 'Cross Border Insolvency',
    icon: Globe2,
    description: 'Advice on insolvency matters involving multiple jurisdictions, including coordination and recognition issues under applicable domestic law and international principles where relevant.',
    descriptionId: 'Memberikan nasihat atas kepailitan yang melibatkan berbagai yurisdiksi, termasuk koordinasi dan pengakuan proses berdasarkan hukum nasional yang berlaku serta prinsip internasional yang relevan.',
  },
  {
    title: 'Merger & Acquisition',
    icon: BriefcaseBusiness,
    description: 'Legal support for mergers, acquisitions, and corporate reorganizations, including transaction structuring, due diligence, negotiation, definitive documentation, and post-completion matters.',
    descriptionId: 'Memberikan dukungan hukum untuk merger, akuisisi, dan reorganisasi korporasi, termasuk struktur transaksi, uji tuntas, negosiasi, dokumentasi definitif, dan urusan pascapenyelesaian.',
  },
  {
    title: 'Shipping & Maritime',
    icon: Ship,
    description: 'Advice on maritime commercial arrangements and disputes, including shipping contracts, financing, asset and operational matters, and claims involving domestic or international parties.',
    descriptionId: 'Memberikan nasihat mengenai pengaturan komersial dan sengketa maritim, termasuk kontrak pelayaran, pembiayaan, aset dan operasional, serta klaim yang melibatkan pihak domestik maupun internasional.',
  },
  {
    title: 'Arbitration & Commercial Litigation',
    icon: Gavel,
    description: 'Strategic representation in commercial disputes before courts and arbitral tribunals, including case strategy, evidence and procedure, claims, settlement, and enforcement options.',
    descriptionId: 'Mewakili klien secara strategis dalam sengketa komersial di pengadilan dan tribunal arbitrase, termasuk strategi perkara, pembuktian dan prosedur, tuntutan, penyelesaian, serta opsi pelaksanaan putusan.',
  },
]

const landmarkMatters = [
  {
    en: 'Representation of a state-owned bank (BUMN) in matters against debtors, all successfully handled.',
    id: 'Mewakili bank BUMN dalam perkara terhadap debitur; seluruh perkara berhasil ditangani.',
  },
  {
    en: 'Representation of a major textile company in Central Java against a large European foreign bank in Indonesia.',
    id: 'Mewakili perusahaan tekstil besar di Jawa Tengah dalam perkara melawan bank asing besar asal Eropa di Indonesia.',
  },
  {
    en: 'Arbitration involving a major corporate group and a state-owned enterprise.',
    id: 'Arbitrase yang melibatkan grup korporasi besar dan badan usaha milik negara.',
  },
  {
    en: 'Out-of-court settlement between a major American geothermal company and an Indonesian company.',
    id: 'Penyelesaian di luar pengadilan antara perusahaan panas bumi besar asal Amerika dan perusahaan Indonesia.',
  },
  {
    en: 'Expeditious settlement between the holding company of the largest dairy industry and its subsidiary.',
    id: 'Penyelesaian cepat antara perusahaan induk dari kelompok industri susu terbesar dan anak perusahaannya.',
  },
]

export default function ExpertisePage() {
  const { language } = useLanguage()
  const id = language === 'id'

  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border bg-[#f6efe4] pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6efe4]/95 via-[#f6efe4]/85 to-[#f6efe4]/55"
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">{id ? 'Keahlian · Pendiri' : 'Expertise · The Founder'}</p>
            <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-foreground lg:text-7xl">
              Dr. (Commerce) Timotius Tumbur Simbolon
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-serif sm:text-xl">
              {id ? 'S.H., M.H. · Dikenal sebagai “Timoti Sim” · Advokat · Kurator/Pengurus · Anggota INSOL International' : 'S.H., M.H. · Also known as “Timoti Sim” · Advocate · Curator/Receiver · Member of INSOL International'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow">{id ? 'Latar Belakang Profesional' : 'Professional Background'}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {id ? 'Pengalaman di bidang bisnis, perbankan, dan hukum.' : 'Experience shaped by business, banking, and law.'}
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              {id ? 'Sebelum mendirikan Firma, Pendiri menjabat sebagai Kepala Bagian Hukum pada perusahaan multinasional ternama dunia yang mayoritas sahamnya dimiliki perusahaan Swiss.' : 'Before establishing the Firm, the Founder served as Head of Legal at a world-renowned multinational corporation majority-owned by a Swiss company.'}
            </p>
            <p>
              {id ? 'Selama lima tahun, ia dipercaya menjabat sebagai Kepala Bagian Hukum di Indonesia-China Business Council (ICBC), sebuah asosiasi pengusaha Indonesia yang menjalankan kegiatan usaha dan investasi dengan pengusaha Tiongkok serta Pemerintah Tiongkok.' : 'For five years, he was entrusted as Head of Legal at the Indonesia-China Business Council (ICBC), an association of Indonesian entrepreneurs conducting business and investment with Chinese entrepreneurs and the Government of China.'}
            </p>
            <p>
              {id ? 'Pendiri memiliki keahlian luas di bidang perbankan, arbitrase nasional dan internasional, serta kepailitan nasional dan internasional, termasuk kepailitan lintas batas berdasarkan Model Law. Sebagai Kurator/Pengurus dan anggota INSOL International—keanggotaan yang hanya dimiliki segelintir praktisi di Indonesia—praktiknya sejalan dengan disertasi doktoralnya, “Keseimbangan Hak-Hak Kreditur dalam Kepailitan,” serta studi komparatif di berbagai yurisdiksi maju.' : 'The Founder possesses extensive expertise in banking, national and international arbitration, and national and international bankruptcy, including cross-border insolvency under the Model Law. As Curator/Receiver and a Member of INSOL International—a distinction held by few in Indonesia—his work is aligned with his doctoral thesis, “Balance of Creditors’ Rights in Bankruptcy,” and comparative studies in numerous advanced jurisdictions.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Scale className="size-5 text-accent" />
              <p className="eyebrow">{id ? 'Konsultasi Hukum' : 'Legal Counsel'}</p>
            </div>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {id ? 'Nasihat hukum yang akurat dan kokoh.' : 'Accurate and robust advice.'}
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {id ? 'Sebagai Konsultan Hukum, Pendiri memberikan nasihat yang dirancang untuk melindungi kepentingan hukum, mendukung kelangsungan usaha, dan membantu meraih keberhasilan di masa depan.' : 'As Legal Consultant, the Founder delivers advice designed to protect legal interests, support business continuity, and contribute to future success.'}
            </p>
            <blockquote className="mt-7 border-l-2 border-accent pl-5 font-serif text-xl italic leading-relaxed text-foreground">
              {id ? '“Peradilan yang adil” dan perjanjian yang terlindungi dengan baik: berfokus pada pokok hukum dan nilai finansial yang dipertaruhkan.' : '“Fair trial” and well-protected agreements: focused on points of law and the financial value at stake.'}
            </blockquote>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {id ? 'Apabila timbul sengketa dari suatu perjanjian, Firma mengandalkan keterampilan dan pengalaman luas untuk menangani proses yang paling berat sekalipun. Tujuannya adalah melindungi posisi klien melalui proses yang adil dan persiapan hukum yang matang, termasuk penyusunan perjanjian untuk menjaga nilai yang mendasarinya.' : 'Where disputes arise from agreements, the Firm brings its extensive skill and experience to even the most difficult proceedings. The objective is to protect the client’s position through fair process and sound legal preparation, including agreements structured to safeguard their underlying value.'}
            </p>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <BriefcaseBusiness className="size-5 text-accent" />
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                {id ? 'Perkara penting atas nasihat Pendiri' : 'Landmark matters on the Founder’s counsel'}
              </h2>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {landmarkMatters.map((matter, index) => (
                <li key={matter.en} className="flex gap-4 py-5">
                  <span className="font-mono text-xs font-bold text-accent">0{index + 1}</span>
                  <p className="text-sm leading-7 text-foreground/80">{id ? matter.id : matter.en}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="size-5 text-accent" />
              <p className="eyebrow">{id ? 'Karya Ilmiah &amp; Kebijakan' : 'Scholarship &amp; Policy'}</p>
            </div>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {id ? 'Berkontribusi pada perkembangan hukum kepailitan.' : 'Contributing to the development of insolvency law.'}
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              {id ? 'Pendiri telah menulis sejumlah buku dengan pendekatan yang berbeda dari literatur kepailitan konvensional. Karya-karyanya mengulas pemikiran para pakar perdagangan dan hukum kepailitan dunia, termasuk Hon. Prof. Elizabeth Warren dan Prof. Jay Lawrence Westbrook dari Amerika Serikat, serta mendukung karya Prof. Kenneth Cork dan Prof. Vanessa Finch dari Inggris mengenai reformasi hak kreditur.' : 'The Founder has authored several books that take a distinct approach from conventional bankruptcy publications, engaging with leading experts in world commerce and bankruptcy law, including Hon. Prof. Elizabeth Warren and Prof. Jay Lawrence Westbrook of the United States, and supporting the work of Prof. Kenneth Cork and Prof. Vanessa Finch of the United Kingdom on creditor-rights reform.'}
            </p>
            <p>
              {id ? 'Ia memberikan saran kepada pemerintah mengenai harmonisasi hukum kepailitan, setidaknya di kawasan ASEAN, berdasarkan asas resiprositas. Hal ini sejalan dengan prinsip yang disampaikan Presiden Republik Indonesia pada KTT ASEAN: “Setidaknya kita memerlukan harmonisasi hukum di suatu kawasan tertentu.”' : 'He advises government on harmonizing bankruptcy law, at least within ASEAN, on the basis of reciprocity. This reflects the principle expressed by the President of the Republic of Indonesia at the ASEAN Summit: “At least we need harmonization of law in a particular region.”'}
            </p>
            <div className="flex items-start gap-3 border-t border-border pt-5 text-foreground">
              <Landmark className="mt-1 size-5 shrink-0 text-accent" />
              <p className="font-serif text-lg leading-relaxed">
                {id ? 'Harmonisasi hukum regional dan kerja sama timbal balik penting untuk menangani perkara kepailitan lintas batas.' : 'Regional legal harmonization and reciprocal cooperation are important to addressing insolvency matters across borders.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="core-practice-heading" className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">{id ? 'Layanan Hukum' : 'Legal Services'}</p>
            <h2 id="core-practice-heading" className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              {id ? 'Bidang Praktik Utama' : 'Core Practice Areas'}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {id ? 'Pendampingan hukum dalam transaksi komersial, perkara keuangan, kepailitan, dan penyelesaian sengketa di Indonesia maupun internasional.' : 'Legal counsel across commercial transactions, financial matters, insolvency, and dispute resolution in Indonesia and internationally.'}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {corePracticeAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <article key={area.title} className="border border-border bg-background p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                      <Icon size={21} />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold text-accent">{String(index + 1).padStart(2, '0')}</p>
                      <h3 className="mt-1 font-serif text-xl font-semibold leading-snug">{id ? ({
                        'National and International Business Agreements': 'Perjanjian Bisnis Nasional dan Internasional',
                        'Banking & Finance': 'Perbankan & Keuangan',
                        'Stock Exchange': 'Bursa Efek',
                        'Joint Venture': 'Usaha Patungan',
                        'State Owned Enterprises': 'Badan Usaha Milik Negara',
                        'Bankruptcy & Suspension of Debt Payment Obligation': 'Kepailitan & Penundaan Kewajiban Pembayaran Utang',
                        'Cross Border Insolvency': 'Kepailitan Lintas Batas',
                        'Merger & Acquisition': 'Merger & Akuisisi',
                        'Shipping & Maritime': 'Pelayaran & Maritim',
                        'Arbitration & Commercial Litigation': 'Arbitrase & Litigasi Komersial',
                      } as Record<string, string>)[area.title] : area.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{id ? area.descriptionId : area.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
