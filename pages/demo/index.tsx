import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';

const Demo = () => {

    return (
        <>
            <div className="max-w-7xl mx-auto">

                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-40 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-4/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-68">
                                <img className="h-full w-full md:w-1/5  object-cover rounded-lg rounded-r-none pb-5/6"
                                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag" />
                                <div className="w-full md:w-4/5 px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>

                                    </div>
                                    <p className="text-sm text-gray-700 mt-4">
                                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore
                                        commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis
                                        ipsam
                                        reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-40 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-4/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-68">
                                <img className="h-full w-full md:w-1/5  object-cover rounded-lg rounded-r-none pb-5/6"
                                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag" />
                                <div className="w-full md:w-4/5 px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>

                                    </div>
                                    <p className="text-sm text-gray-700 mt-4">
                                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore
                                        commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis
                                        ipsam
                                        reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-40 w-1 mx-auto">
                                {/* <button
                                    className="h-20 w-20 my-10 bg-indigo-400 hover:bg-indigo-600 text-white font-bold rounded-full -ml-10">Day
                                #2</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-4/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-68">
                                <img className="h-full w-full md:w-1/5  object-cover rounded-lg rounded-r-none pb-5/6"
                                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag" />
                                <div className="w-full md:w-4/5 px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>

                                    </div>
                                    <p className="text-sm text-gray-700 mt-4">
                                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore
                                        commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis
                                        ipsam
                                        reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-40 w-1 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo