import type { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
  title: 'About The Firm | Timotius & Partners Law Firm',
  description: 'Learn about TTS Law Firm – Timotius & Partners, founded in 1997 with 40 years of legal experience dating back to 1986.',
}

export default function AboutPage() {
  return <AboutContent />
}
