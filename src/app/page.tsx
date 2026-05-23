import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Philosophy } from '@/components/sections/Philosophy'
import { Services } from '@/components/sections/Services'
import { Cases } from '@/components/sections/Cases'
import { Process } from '@/components/sections/Process'
import { Technology } from '@/components/sections/Technology'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Cases />
        <Process />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
