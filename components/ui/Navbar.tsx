import Link from "next/link";

export function Navbar() {
    return (
        <>
            <nav className="bg-[#0F172A] font-ibm md:px-14 p-4 border-b max-w-screen-2xl mx-auto text-[#E8E8E8] fixed top-0 right-0 left-0">
                <div className="text-lg conainter mx-auto flex justify-between item-center">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-[#E8E8E8]">Linux
                        </a>
                    </div>

                    <div className="space-x-14 mt-3 hidden md:block">
                        <Link href='/' className="bg-[#1E293B] py-2 px-4 transition-all duration-300 rounded hover:text-black hover:bg-[#E8E8E8]">Home</Link>
                        <Link href="/learn" className="bg-[#1E293B] py-2 px-4 transition-all duration-300 rounded hover:text-black hover:bg-[#E8E8E8]">Learning Modules</Link>
                        <Link href="" className="bg-[#1E293B] py-2 px-4 transition-all duration-300 rounded hover:text-black hover:bg-[#E8E8E8]">Contact Us</Link>
                    </div>
                    {/* language and signup */}
                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="/" className="hidden lg:flex items-center hover:text-secondary"><span className="mr-2" /><span>Language</span></a>
                        <Link className="bg-[#1E293B] py-2 px-4 transition-all duration-300 rounded hover:text-black hover:bg-yellow-700"
                            href="/signin">Signin</Link>
                    </div>
                    <div className="md:hidden">
                    </div>
                </div>
            </nav>
        </>
    );
}
