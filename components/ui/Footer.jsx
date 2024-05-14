import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

export function Footer() {
    return (
        <div className="bg-[#1E293B] md:p-20 p-20 max-screen-2xl mx-auto text-[#E8E8E8]">
            <div className="my-12 flex">
                <div className="md:w-1/2 space-y-8">
                    <div className="space-y-3 text-[#E8E8E8]">
                        <h1 className="text-5xl">Linux</h1>
                        <p className="md:w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus at excepturi fuga voluptatibus saepe maiores!</p>
                        {/* <div>
                            <input type="Email" name="email" id="email" placeholder="Your Email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus-outline:none" />
                            <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursur-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
                        </div> */}
                    </div>
                </div>
                {/* Footer Navigation */}
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-end gap-8 items-end">

                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contact</h4>

                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Change log</h4>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mt-4">
                <p className="text-gray-600">@XYZ 20XX --- 20XX. ALL rights reserved</p>
                <p className="">Privacy Policy</p>
                <p className="">Terms and Conditions</p>
                <div className="flex space-x-3">
                    <a href="" className="text-2xl"><FaSquareInstagram /></a>
                    <a href="" className="text-2xl"><FaSquareFacebook /></a>
                    <a href="" className="text-2xl"><FaGoogle /></a>
                </div>
            </div>
        </div>
    );
};