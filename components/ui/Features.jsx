
export function Features() {
    return (
        <div className="my-24 md:px-14 p-20 max-w-screen-2xl mx-auto text-[#E8E8E8]" id="feature ">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

                <div className="lg:w-1/4 space-y-5">
                    <h3 className="text-4xl text-primary font-bold  mb-3 font-ibm">Why We are better than others</h3>
                    <p className="text-base text-tertiary font-mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis minima molestiae earum, repellat iusto!</p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8">
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-6 items-center flex justify-center  hover:translate-y-4 transition-all duration-300 cursor-pointer">
                        <div className="space-y-5 font-ibm">
                            <h1 className="text-2xl text-pink text-[#748AA1]">Quality Education</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam.</p>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 items-center flex justify-center  hover:translate-y-4 transition-all duration-300 cursor-pointer">
                    <div className="space-y-5 font-ibm">
                            <h1 className="text-2xl text-pink text-[#748AA1]">Quality Education</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam.</p>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 items-center flex justify-center  hover:translate-y-4 transition-all duration-300 cursor-pointer">
                    <div className="space-y-5 font-ibm">
                            <h1 className="text-2xl text-pink text-[#748AA1]">Quality Education</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};