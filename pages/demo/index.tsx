import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';

const Demo = () => {

    return (
        <div className="w-full h-full bg-gray-400">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="-ml-2 mr-2 flex items-center md:hidden">
                                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
                                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow logo" />
                            </div>
                            <div className="hidden md:ml-6 md:flex md:items-center">
                                
                            </div>
                        </div>
                        <div className="flex items-center">
                            
                        </div>
                    </div>
                </div>
                <div className="hidden md:hidden">
                    <div className="px-2 pt-2 pb-3 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5 sm:px-6">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-6 text-white">Tom Cook</div>
                                <div className="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
                            </div>
                        </div>
                        <div className="hidden mt-3 px-2 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Your Profile</a>
                            <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Settings</a>
                            <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto">
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-16 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-2/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-16">
                                <div className="w-full px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-4">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-4/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-sm">
                                <img className="h-full w-full md:w-1/6  object-cover rounded-lg rounded-r-none"
                                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag" />
                                <div className="w-full md:w-5/6 px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>

                                    </div>
                                    <p className="text-sm text-gray-700 mt-4">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-indigo-400 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-4/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-sm">
                                <img className="h-full w-full md:w-1/5  object-cover rounded-lg rounded-r-none"
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
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-sm">
                                <img className="h-full w-full md:w-1/5  object-cover rounded-lg rounded-r-none"
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
        </div>
    )
}

export default Demo