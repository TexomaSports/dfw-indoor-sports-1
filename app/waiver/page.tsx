import WaiverHero from '@/components/waiver/WaiverHero'
import WaiverDocument from '@/components/waiver/WaiverDocument'

export const metadata = {
  title: 'Waiver',
  description: 'Read and sign the liability waiver for DFW Indoor Sports.',
}

export default function WaiverPage() {
  return (
    <>
      <WaiverHero />
      <WaiverDocument />
    </>
  )
}
