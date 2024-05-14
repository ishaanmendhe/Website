import { Navbar } from '@/components/ui/Navbar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='mt-15'>{children}</div>
    </>
  );
}
