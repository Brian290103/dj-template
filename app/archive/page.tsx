import React from 'react';
import Image from "next/image";

const Archive = () => {
    return (
        <div className="pt-24">
            <nav className="flex items-center gap-2 max-w-7xl mx-auto p-3 h-16">
                <div className="flex items-center gap-3 border-e-2 pe-2">
                    <i className="fa fa-home text-black"></i>
                    <span className="text-black">Home</span>
                </div>
                <span className="text-gray-400">My Archive</span>
            </nav>

            <div className="h-16 flex items-center justify-center py-10">
                <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="text-7xl font-rockville">My Archive</h1>
            </div>

            <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 sm:grid-cols-8 gap-3">
                <div className="md:col-span-6 sm:col-span-5 sm:order-1 order-2">
                    <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                        <li className="flex flex-col gap-5 group cursor-pointer">
                            <div className="w-full relative">
                                <Image width={1000} height={1000} src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                <div
                                    className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                            </div>
                            <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                        </li>
                    </ul>
                    <div className="flex w-full items-center justify-center py-8">
                        <div className="flex items-center gap-2">
                            <ul className="grid grid-cols-3 items-center gap-2">
                                <li className=" group hover:bg-purple-700 duration-300 cursor-pointer bg-slate-100 w-12 h-12 flex items-center justify-center">
                                    <h1 className="text-black group-hover:text-white duration-300 ">1</h1>
                                </li>
                                <li className=" group hover:bg-purple-700 duration-300 cursor-pointer bg-slate-100 w-12 h-12 flex items-center justify-center">
                                    <h1 className="text-black group-hover:text-white duration-300 ">2</h1>
                                </li>
                                <li className=" group hover:bg-purple-700 duration-300 cursor-pointer bg-slate-100 w-12 h-12 flex items-center justify-center">
                                    <h1 className="text-black group-hover:text-white duration-300 ">3</h1>
                                </li>
                            </ul>

                            <div className=" cursor-pointer group hover:bg-purple-700 duration-300 bg-slate-200 w-24 h-12 flex items-center justify-center">
                                <h1 className="text-black group-hover:text-white duration-300" >Next</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 sm:col-span-3 sm:order-2 py-10 md:py-0 order-1">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold">Search</h1>
                        <input type="text" className="w-full p-3 outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-purple-700 rounded-md" placeholder="Search Here ..."/>
                        <button className="bg-purple-700 text-white rounded-md p-3 w-full">Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Archive;
