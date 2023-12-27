import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-no-repeat bg-cover items-baselines">
            <div className="max-w-7xl p-3 mx-auto min-h-[500px] grid grid-cols-1 md:grid-cols-3 items-end pb-10 gap-3">
                <div className="border-0 md:border-e pt-20 md:pt-0">
                    <ul className="flex flex-col items-center md:items-start gap-4">
                        <li className="flex items-center gap-2">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                <i className="fa fa-phone text-purple-700"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Phone</span>
                                <span className="text-white">+254 712 122 122</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-2">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                <i className="fa fa-envelope text-purple-700"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Email</span>
                                <span className="text-white">info@djuncestar.co.ke</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="border-0 md:border-e flex items-center">
                    <div className="flex flex-col gap-5 w-full items-center">
                        <h1 style={{"fontFamily": "Rockville Solid Regular"}}
                            className=" text-4xl font-rockville text-white">Uncestar
                        </h1>
                        <ul className="flex gap-2">
                            <li className="">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fab fa-facebook text-purple-700"></i>
                                </div>
                            </li>
                            <li className="">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fab fa-x-twitter text-purple-700"></i>
                                </div>
                            </li>
                            <li className="">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fab fa-instagram text-purple-700"></i>
                                </div>
                            </li>
                            <li className="">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fa fa-envelope text-purple-700"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center md:justify-start">
                        <a href="/contact-me" className="group relative rounded-xl  bg-purple-700 py-3 px-5 ">
                            <div
                                className="bg-purple-600 w-3 duration-300 group-hover:w-full rounded-xl absolute top-0 left-0 h-full">
                            </div>
                            <span className="relative text-white tracking-wider font-semibold">
                                    Contact Me
                                </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pb-20 border-t mt-10 pt-10">
                <p className="text-center text-white">
                    &copy; 2023, Dj Uncestar - All Rights Reserved
                </p>
            </div>
        </footer>

    );
};

export default Footer;
