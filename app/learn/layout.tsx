import { Navbar } from '@/components/ui/Navbar';
import '../globals.css';
import { Footer } from '@/components/ui/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E8E8E8] flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto py-8 mt-20">{children}</main>
      <footer className='mt-12'>
      <Footer/>
      </footer>
    </div>
  );
}