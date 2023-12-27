import React from 'react';

const Archive = () => {
    return (
        <div className="pt-24">
            <nav className="flex items-center gap-2 max-w-7xl mx-auto p-3 h-16">
                <div className="flex items-center gap-3 border-e-2 pe-2">
                    <i className="fa fa-home text-black"></i>
                    <span className="text-black">Home</span>
                </div>
                <span className="text-gray-400">Contact Me</span>
            </nav>

            <div className="h-16 flex items-center justify-center py-10">
                <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="text-7xl font-rockville">Contact Me</h1>
            </div>

            <div className="max-w-5xl mx-auto px-3 py-10 grid md:grid-cols-2 gap-3">

                <form action="" className="flex flex-col gap-5">
                    <input type="text" className="w-full p-3 outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-purple-700 rounded-md" required  placeholder="Your Name"/>
                    <input type="email" className="w-full p-3 outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-purple-700 rounded-md" required  placeholder="Your Email"/>
                    <textarea rows={5} className="w-full p-3 outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-purple-700 rounded-md" required  placeholder="Your Message"></textarea>
                    <button className="bg-purple-700 text-white rounded-md p-3 w-full">Submit</button>
                </form>

                <div className="">
                    <ul className="flex flex-col items-start md:items-start gap-4">
                        <li className="flex items-center gap-2">
                            <div className="bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center">
                                <i className="fa fa-phone text-white"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Phone</span>
                                <span className="text-purple-700 font-semibold">+254 712 122 122</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-2">
                            <div className="bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center">
                                <i className="fa fa-envelope text-white"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Email</span>
                                <span className="text-purple-700 font-semibold">info@djuncestar.co.ke</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-2">
                            <div className="bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center">
                                <i className="fa fa-location-pin text-white"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Address</span>
                                <span className="text-purple-700 font-semibold">P.O. Box 123, Nairobi</span>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Archive;
