import React from 'react';

const SingleAudio = () => {
    return (
        <li className="flex flex-col gap-2 sm:px-2">
            <h1 className="font-semibold text-xl">Vol 1 - Afropiano</h1>
            <div className="flex items-center  justify-between gap-2 py-2">
                <div
                    className="bg-purple-700 w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fa fa-caret-right text-white text-3xl"></i>
                </div>

                <div className="flex items-center gap-2">
                    <span className="">00:00</span>
                    <input type="range" min="1" max="100"
                           value="0" className="bg-purple-700 md:w-[200px]"/>
                    <span className="">00:00</span>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                    <i className="fa fa-volume-up"></i>
                    <input type="range" min="1" max="100"
                           value="0" className="bg-purple-700 w-[100px]"/>
                </div>
            </div>
        </li>
    );
};

export default SingleAudio;
