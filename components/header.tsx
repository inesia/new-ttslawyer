'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language'

const navLinks = [
  { name: 'Home', nameId: 'Beranda', href: '/' },
  { name: 'About', nameId: 'Tentang Kami', href: '/about' },
  { name: 'Expertise', nameId: 'Keahlian', href: '/expertise' },
  { name: 'Partners', nameId: 'Partner', href: '/partners' },
  { name: 'Insights', nameId: 'Wawasan', href: '/insights' },
  { name: 'Contact', nameId: 'Kontak', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const isIndonesian = language === 'id'

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90" onClick={() => setMenuOpen(false)}>
          <Image src="/logo-tts.png" alt="TTS Law Firm – Timotius & Partners" width={180} height={52} priority className="h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] md:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href)
            return (
              <Link key={item.name} href={item.href} className={`relative py-1 transition-colors duration-200 ${active ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'}`}>
                {isIndonesian ? item.nameId : item.name}
                {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-1 rounded-full border border-border p-1 md:flex" aria-label="Select language">
          {(['id', 'en'] as const).map((option) => (
            <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase transition ${language === option ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              {option}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow">
            {isIndonesian ? 'Mulai percakapan' : 'Start a conversation'} <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={() => setLanguage(isIndonesian ? 'en' : 'id')} className="rounded-full border border-border px-2.5 py-1.5 text-[10px] font-bold uppercase" aria-label="Toggle language">
            {isIndonesian ? 'EN' : 'ID'}
          </button>
          <button type="button" aria-label={isIndonesian ? 'Buka navigasi' : 'Toggle navigation'} className="rounded-full border border-border p-2 text-foreground transition hover:bg-muted" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] shadow-lg md:hidden">
          {navLinks.map((item) => {
            const active = isActive(item.href)
            return (
              <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between py-2 transition-colors ${active ? 'font-bold text-accent' : 'text-foreground hover:text-accent'}`}>
                <span>{isIndonesian ? item.nameId : item.name}</span>
                {active && <span className="size-1.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {isIndonesian ? 'Mulai percakapan' : 'Start a conversation'} <ArrowUpRight size={14} />
          </Link>
        </nav>
      )}
    </header>
  )
}
