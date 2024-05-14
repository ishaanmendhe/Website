import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <div className="max-w-screen-xl mx-auto rounded-lg py-6 shadow-md">
          {children}
        </div>
      </main>
    </div>
  );
}