import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Signin() {
    return (
        <div>
            <Navbar />
            <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
                <div className="my-5 w-96 bg-gray-800 px-10 py-8 flex flex-col justify-center items-center rounded-lg shadow-lg">
                    <Image src="/pngwing.png" width={150} height={100} />
                    <div className='mt-4  flex flex-col  items-center justify-center'>
                        <input type="text" id="username" name="username" placeholder="Username" className="border-2 w-full p-2 rounded-md mb-4" />
                        <input type="password" id="password" name="password" placeholder="Password" className="border-2 w-full p-2 rounded-md mb-4" />
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" className="border-2 w-full p-2 rounded-md mb-4" />
                        <input type="email" id="email" name="email" placeholder="Email" className="border-2 w-full p-2 rounded-md mb-4" />
                        <button className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Sign Up</button>
                        <div className="mt-4 text-gray-300">
                            <p className="mb-2">Have an account? <Link href="/signin"><span className="text-blue-500 hover:underline">Sign In</span></Link></p>
                            <p>Or you can sign in with:</p>
                        </div>
                        <div className="flex mt-4 space-x-4">
                            <button className="border-2 rounded-full p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300"><FaGoogle /></button>
                            <button className="border-2 rounded-full p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300"><FaGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
