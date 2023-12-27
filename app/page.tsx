import Image from 'next/image'
import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import SingleAudio from "@/components/single-audio";

export default function Home() {
    return (
        <>

            <header className="h-screen overflow-hidden w-full bg-no-repeat bg-center bg-cover">
                <div className="w-full pb-10 h-full flex items-center flex-col justify-end gap-5 bg-black/60">
                    <h1 style={{"fontFamily": "Rockville Solid Regular"}}
                        className="text-6xl sm:text-8xl md:text-9xl text-center text-white">
                        Feel the heart beats
                    </h1>

                    <p className="max-w-3xl text-center w-full text-white mx-auto p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <i className="fa fa-arrow-down text-3xl text-white mt-5 animate-bounce"></i>
                </div>
            </header>

            <main className="">
                <section className="pt-10">
                    <div className="w-full h-16 px-3 flex items-center justify-between max-w-7xl mx-auto">
                        <h1 className="font-semibold text-xl">Latest Mixes</h1>

                        <ul className="flex items-center gap-1">
                            <li className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full">
                                <i className="fa fa-caret-left"></i>
                            </li>
                            <li className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full">
                                <i className="fa fa-caret-right"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-7xl mx-auto py-3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                            <li className="flex flex-col gap-5 group cursor-pointer">
                                <div className="w-full relative">
                                    <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                    <div
                                        className="bg-black/60 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                                </div>
                                <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                            </li>
                            <li className="sm:flex hidden flex-col gap-5 group cursor-pointer">
                                <div className="w-full relative">
                                    <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                    <div
                                        className="bg-black/60 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                                </div>
                                <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                            </li>
                            <li className="md:flex hidden flex-col gap-5 group cursor-pointer">
                                <div className="w-full relative">
                                    <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                    <div
                                        className="bg-black/60 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                                </div>
                                <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                            </li>
                            <li className="lg:flex hidden flex-col gap-5 group cursor-pointer">
                                <div className="w-full relative">
                                    <img src="/mix1.jpg" alt="Mix 1" className="rounded-md w-full h-80 object-cover"/>
                                    <div
                                        className="bg-black/60 absolute group-hover:h-80 duration-300 h-5 rounded-md top-0 border-0 right-0 left-0"></div>
                                </div>
                                <h1 className="font-semibold ps-5 duration-300 group-hover:text-purple-600">Afropiano</h1>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="grid mb-10 md:grid-cols-2 p-3 max-w-7xl mx-auto items-center gap-10 mt-12">
                    <div id="banner1" className="h-[80vh] rounded-md bg-cover w-full overflow-hidden">
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 style={{"fontFamily": "Rockville Solid Regular"}}
                            className=" text-7xl text-purple-700 font-rockville">Dj Uncestar</h1>
                        <p className="text-center mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>

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
                </section>

                <section className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2">
                    <div id="banner2" className="h-full min-h-screen bg-cover w-full overflow-hidden">
                    </div>
                    <ul className="bg-purple-700 min-h-[80vh] grid sm:grid-cols-2 h-full">
                        <li className="">
                            <div className="w-full h-full bg-purple-600 p-10 gap-3 flex flex-col justify-center">
                                <i className="fa fa-heart text-5xl text-white"></i>
                                <h1 className="text-xl text-white">Wedding</h1>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="w-full h-full bg-purple-700 p-10 gap-3 flex flex-col justify-center">
                                <i className="fa fa-champagne-glasses text-5xl text-white"></i>
                                <h1 className="text-xl text-white">Clubs and bar</h1>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div
                                className="w-full h-full sm:bg-purple-700 bg-purple-600 p-10 gap-3 flex flex-col justify-center">
                                <i className="fa fa-birthday-cake text-5xl text-white"></i>
                                <h1 className="text-xl text-white">Birthday</h1>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div
                                className="w-full h-full sm:bg-purple-600 bg-purple-700 p-10 gap-3 flex flex-col justify-center">
                                <i className="fa fa-school text-5xl text-white"></i>
                                <h1 className="text-xl text-white">Corporate events</h1>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </li>
                    </ul>

                </section>

                <section className="min-h-[calc(100vh-5rem)] py-10 p-3">
                    <div className="mx-auto max-w-7xl mb-10 flex items-center justify-between gap-2 py-5">
                        <h1 className="font-semibold text-xl">Hot Mixes</h1>

                        <div className="flex items-center justify-ends md:justify-start">
                            <a href="/contact-me" className="group relative rounded-xl  bg-purple-700 py-3 px-5 ">
                                <div
                                    className="bg-purple-600 w-3 duration-300 group-hover:w-full rounded-xl absolute top-0 left-0 h-full">
                                </div>
                                <span className="relative text-white tracking-wider font-semibold">
                                    View All Mixes
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto py-3 max-w-7xl items-center flex lg:flex-row flex-col">
                        <ul className="h-full w-full flex flex-col gap-5 md:pe-12">
                            <SingleAudio/>
                            <SingleAudio/>
                            <SingleAudio/>
                            <SingleAudio/>
                            <SingleAudio/>
                        </ul>
                        <div className="flex items-center justify-center py-10 px-0 md:px-3">
                            <div className="relative w-full">
                                <img src="/banner2.jpg" alt="Banner image"
                                     className="z-10 relative w-full h-[400px] md:h-[600px] object-cover"/>
                                <div
                                    className="w-full -left-10 -bottom-10 h-[400px] md:h-[600px] absolute bg-purple-700/30"></div>
                            </div>
                        </div>


                    </div>

                </section>

            </main>

        </>
    )
}
