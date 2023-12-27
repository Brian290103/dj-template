import React from 'react';

const Navbar = () => {
    return (
        <nav className={"bg-black/60 z-40 text-white fixed top-0 left-0 right-0"}>
            <div className="h-20 w-full p-2 flex items-center md:justify-around justify-between max-w-7xl mx-auto">
                <div className="">
                    <h1 style={{"fontFamily":"Rockville Solid Regular"}} className="font-semibold text-2xl font-rockville">Uncestar</h1>
                </div>

                <ul className="md:flex hidden items-center gap-5">
                    <li className="">
                        <a href="/" className="">Home</a>
                    </li>
                    <li className="">
                        <a href="/latest" className="">Latest Releases</a>
                    </li>
                    <li className="">
                        <a href="/archive" className="">Archive</a>
                    </li>
                    <li className="">
                        <a href="/contact-me" className="">Contact Me</a>
                    </li>
                </ul>

                <ul className="lg:flex hidden items-center gap-2">
                    <li className="">
                        <a href="" className="">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>

                <button id="mobile_navbar_tigger" className="w-20 md:hidden h-20 flex items-center justify-center">
                    <i className="fa fa-bars text-xl"></i>
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
