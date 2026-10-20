'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/15">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-primary-foreground/15">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-tts-white.png"
                alt="TTS Law Firm – Timotius & Partners"
                width={180}
                height={52}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75 max-w-sm">
              {language === 'id'
                ? 'Pendampingan hukum strategis bagi korporasi, investor institusional, dan pimpinan perusahaan dalam transaksi penting, restrukturisasi PKPU, serta persoalan regulasi yang kompleks.'
                : 'Strategic counsel for corporations, institutional investors, and leadership teams navigating high-stakes transactions, PKPU restructurings, and complex regulatory challenges.'}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <ShieldCheck size={16} /> {language === 'id' ? 'Penasihat hukum tepercaya sejak 1997' : 'Trusted legal counsel since 1997'}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              {language === 'id' ? 'Keahlian' : 'Expertise'}
            </h3>
            <ul className="space-y-2.5 text-xs text-primary-foreground/70">
              <li>
                <Link href="/expertise#insolvency" className="hover:text-primary-foreground transition-colors">
                  Insolvency &amp; Restructuring (PKPU)
                </Link>
              </li>
              <li>
                <Link href="/expertise#capital-markets" className="hover:text-primary-foreground transition-colors">
                  Capital Markets &amp; Securities
                </Link>
              </li>
              <li>
                <Link href="/expertise#corporate-ma" className="hover:text-primary-foreground transition-colors">
                  Corporate &amp; Cross-Border M&amp;A
                </Link>
              </li>
              <li>
                <Link href="/expertise#dispute" className="hover:text-primary-foreground transition-colors">
                  Commercial Litigation &amp; Arbitration
                </Link>
              </li>
              <li>
                <Link href="/expertise#energy" className="hover:text-primary-foreground transition-colors">
                  Energy, Mining &amp; Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              {language === 'id' ? 'Kantor Hukum' : 'The Firm'}
            </h3>
            <ul className="space-y-2.5 text-xs text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  {language === 'id' ? 'Tentang Kantor Hukum' : 'About the Firm'}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-primary-foreground transition-colors">
                  {language === 'id' ? 'Partner &amp; Tim' : 'Partners &amp; Team'}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary-foreground transition-colors">
                  {language === 'id' ? 'Wawasan &amp; Berita Hukum' : 'Legal Insights &amp; Updates'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  {language === 'id' ? 'Kontak &amp; Kantor' : 'Contact &amp; Offices'}
                </Link>
              </li>
              <li>
                <Link href="/about#credentials" className="hover:text-primary-foreground transition-colors">
                  {language === 'id' ? 'Afiliasi &amp; INSOL' : 'Affiliations &amp; INSOL'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              {language === 'id' ? 'Kantor Jakarta' : 'Jakarta Office'}
            </h3>
            <address className="not-italic space-y-3 text-xs text-primary-foreground/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>
                  Equity Tower, 28th Floor<br />
                  SCBD, Jl. Jend. Sudirman Kav. 52-53<br />
                  Jakarta Selatan 12190
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent shrink-0" />
                <span>+62 21 515 9898</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent shrink-0" />
                <a href="mailto:contact@ttslawyers.com" className="hover:text-accent transition-colors">
                  contact@ttslawyers.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Timotius &amp; Partners Law Firm. {language === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}</p>
          <p className="max-w-xl text-center md:text-right">
            {language === 'id'
              ? 'Informasi di situs ini hanya untuk tujuan umum dan bukan merupakan nasihat hukum formal. Hasil sebelumnya tidak menjamin hasil serupa.'
              : 'Information on this website is for general informational purposes only and does not constitute formal legal counsel. Prior results do not guarantee similar outcomes.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
