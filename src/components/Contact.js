import React from "react";
import { FaHome } from "react-icons/fa";
import { MdWifiCalling } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";

export const Contact = () => {
    return (
        <>
            <div className="w-full flex justify-between p-10 mt-20 mb-40">
                <div className="w-1/2 flex flex-col gap-8">
                    <p className="text-lg font-semibold">Contact Us</p>
                    <h1 className="text-3xl font-bold">GET IN TOUCH WITH US</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                        minim veniam quis nostrud exercitation ullamco
                    </p>

                    <div className="w-full flex flex-col gap-6">
                        <div className="w-full">
                            <div className="w-full flex  gap-8 items-center">
                                <p className="text-3xl">
                                    <FaHome className="text-gray-600" />
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold">Our Location</h3>
                                    <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex gap-8 items-center">
                                <p className="text-3xl">
                                    <MdWifiCalling className="text-gray-600" />
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold">Phone Number</h3>
                                    <p>(+62)81 414 257 9980</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex  gap-8 items-center">
                                <p className="text-3xl">
                                    <MdMarkEmailUnread className="text-gray-600" />
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold">Email Address</h3>
                                    <p>info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-1/2 flex flex-col gap-2  ">

                    <div className="w-full flex justify-end">
                        <p>
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fillRule="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    // fillRule="evenodd"
                                    fill="blue"
                                    clipRule="evenodd"
                                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                    fillRule="#3056D3"
                                ></path>
                            </svg>
                        </p>
                    </div>

                    <div className="w-10/12 top-8 absolute flex justify-start items-center flex-col gap-4 ml-10 bg-white drop-shadow-2xl p-10 pl-10 rounded-md">

                        <div className="w-full">
                            <input type="text" placeholder="Your Name" className="w-10/12 h-10 border outline-none px-4" />
                        </div>

                        <div className="w-full">
                            <input type="email" placeholder="Your Email" className="w-10/12 h-10 border outline-none px-4" />
                        </div>

                        <div className="w-full">
                            <input type="number" min={0} placeholder="Your Phone" className="w-10/12 h-10 border outline-none px-4" />
                        </div>

                        <div className="w-full ">
                            <textarea placeholder="Your Message" className="w-10/12 h-48 border outline-none px-4 py-3" />
                        </div>

                        <div className="w-full">
                            <button className="w-10/12 h-10 bg-blue-500 rounded-md text-white text-lg cursor-pointer active:bg-blue-800">Save</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};
