import React from 'react';

const LatestReleases = () => {
    return (
        <div className="pt-24">
            <nav className="flex items-center gap-2 max-w-7xl mx-auto p-3 h-16">
                <div className="flex items-center gap-3 border-e-2 pe-2">
                    <i className="fa fa-home text-black"></i>
                    <span className="text-black">Home</span>
                </div>
                <span className="text-gray-400">Latest Releases</span>
            </nav>

            <div className="h-16 flex items-center justify-center py-10">
                <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="text-5xl md:text-7xl font-rockville">Latest Releases</h1>
            </div>

            <div className="max-w-7xl mx-auto px-3 py-10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                            <div
                                className="bg-black/40 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                        </div>
                        <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                    </li>
                    <li className="flex flex-col gap-5 group cursor-pointer">
                        <div className="w-full relative">
                            <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
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
        </div>
    );
};

export default LatestReleases;
