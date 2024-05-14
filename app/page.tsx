import { Navbar } from '@/components/ui/Navbar'
import { About } from '@/components/ui/About'
import { Home } from '@/components/ui/Home'
import { Features } from '@/components/ui/Features'
import { Footer } from '@/components/ui/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Footer />
    </>
  );
}
