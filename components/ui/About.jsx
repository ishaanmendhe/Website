import Image from 'next/image';
export function About() {
    return (
        <div className="md:px-12 p-20 max-w-screen-2xl mx-auto mt-24 text-[#E8E8E8]" id="about ">
            <div className="bg-[#334155] rounded-2xl rounded-br-[80px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                        <Image src="/pngwing.png" width={350} height={300} />
                    </div>
                    <div className="md:w-3/5">
                        <h2 className="md:text-5xl font-ibm text-4xl font-bold  mb-6 leading-relaxed">Learn Linux To Go head For your Career</h2>
                        <p className=" text-xl mb-8 font-mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at dicta atque aspernatur obcaecati voluptas cumque ipsa ipsum temporibus perferendis asperiores voluptates illo! Incidunt, molestiae.</p>
                        <div className="space-y-5">
                            <div className="border-2 border-white rounded-md p-4">
                                <h1 className="text-2xl font-ibm ">Our Mission</h1>
                                <p className='font-mont'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, reiciendis!</p>
                            </div>
                            <div className="border-2 border-white rounded-md p-4">
                                <h1 className="text-2xl font-ibm">Our Vision</h1>
                                <p className='font-mont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, porro?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


