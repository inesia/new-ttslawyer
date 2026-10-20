import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | TTS Law Firm – Timotius & Partners',
  description: 'Insights and legal briefings from TTS Law Firm.',
}

export default function InsightsPage() {
  return <main className="min-h-screen bg-background" aria-label="Insights" />
}
