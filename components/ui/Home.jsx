import Image from "next/image";
import Link from "next/link";
export function Home() {
    return (
        <div className="md:px-12 p-20 max-w-screen-2xl mx-auto mt-24"  id="home">
            <div className="bg-[#334155] rounded-[80px]  md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    {/* Banner Image */}
                    <div>
                    <Image src="/pngwing.png" width={350} height={300} />
                    </div>
                    {/* Banner Content */}
                    <div className="md:w-2/5">
                        <div className="ml-20">
                        <h2 className="md:text-4xl font-ibm text-4xl font-bold text-[#E8E8E8] mb-8 leading-relaxed">Develop your Skills without Diligence</h2>
                        <p className="text-[#EBEBEB] font-mont text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at dicta atque aspernatur obcaecati voluptas cumque ipsa ipsum temporibus perferendis asperiores voluptates illo! Incidunt, molestiae.</p>
                        <div className="space-x-5 space-y-4">
                        <button className="bg-[#748AA1] hover:bg-[#E8E8E8] p-3 rounded-lg text-white hover:text-black"><Link href='/signin'>Get Started</Link></button>  
                         </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};