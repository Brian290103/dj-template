import React from 'react';

const MobileNavbar = () => {
    return (
        <div id="mobile_navbar" className="z-50 min-h-screen flex flex-col duration-300 absolute top-0 right-0 w-0 bg-purple-700">
           <div className="w-full flex items-center justify-between gap-2 border-b p-3">
               <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="text-2xl font-rockville text-white">Uncestar</h1>
               <button id="mobile_navbar_closer" className="w-10 bg-white rounded-full h-10 flex items-center justify-center">
                   <i className="fa fa-close text-xl"></i>
               </button>
           </div>

            <ul className="w-full flex flex-col py-3 text-white">
                <li className="border-b">
                    <a href="/" className="border-b w-full p-3 flex items-center gap-2">
                        <i className="fa fa-home text-white text-lg"></i>
                        <span className="">Home</span>
                    </a>
                </li>
                <li className="border-b">
                    <a href="/latest" className="border-b w-full p-3 flex items-center gap-2">
                        <i className="fa fa-play text-white text-lg"></i>
                       <span className=""> Latest Releases</span>
                    </a>
                </li>
                <li className="border-b">
                    <a href="/archive" className="border-b w-full p-3 flex items-center gap-2">
                        <i className="fa fa-archive text-white text-lg"></i>
                        <span className="">Archive</span>
                    </a>
                </li>
                <li className="border-b">
                    <a href="/contact-me" className="border-b w-full p-3 flex items-center gap-2">
                        <i className="fa fa-phone text-white text-lg"></i>
                        <span className="">Contact Me</span>
                    </a>
                </li>

            </ul>

            <div className="mt-auto pb-5">
                <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="text-5xl py-10 w-full text-center font-rockville text-white">Dj Uncestar</h1>


                <ul className="flex gap-2 justify-center items-center">
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

                <p className="text-center text-white w-full pt-5">
                    &copy; 2023, Dj Uncestar - All Rights Reserved
                </p>
            </div>

        </div>
    );
};

export default MobileNavbar;
