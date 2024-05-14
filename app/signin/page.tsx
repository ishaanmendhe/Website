import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import Link from "next/link";

function Signin() {
    return (
        <>
            <Navbar />
            <div className="pt-12 mt-24 w-full md:w-[35rem] px-6 md:px-10 py-8 flex flex-col justify-center items-center mx-auto min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
                <div className="w-full h-44 bg-[#1E293B] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-semibold">Welcome Back!</h1>
                        <p className="text-sm md:text-base">Continue Learning Linux with us</p>
                    </div>
                </div>
                <div className="w-full mt-8 space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm md:text-base">Email</label>
                        <input type="email" id="email" name="email" placeholder="" className="border-2 w-full p-2" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm md:text-base">Password</label>
                        <input type="password" id="password" name="password" placeholder="" className="border-2 w-full p-2" />
                    </div>
                </div>
                <div className="mt-5 w-full text-center space-y-2">
                    <button className="bg-[#3A506B] w-full p-2 rounded-lg hover:bg-slate-500 transition-colors duration-300">Log In</button>
                    <p className="text-xs md:text-sm">Forgot Your Password?</p>
                </div>
                <div className="mt-3 text-sm md:text-base">
                    <Link href="/signup" className="text-[#748AA1] hover:text-[#E8E8E8]">Don't have an account? Register now</Link>
                </div>
            </div>
        </>
    );
}

export default Signin;
