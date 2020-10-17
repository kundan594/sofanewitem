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
                            <div className="bg-purple-700 p-1 h-16 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-2/5 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-16">
                                <div className="w-full flex items-center px-4 bg-white rounded-lg">
                                    <div className="flex items-center w-full">
                                        <form className="sm:flex w-full" aria-labelledby="newsletter-headline">
                                            <input aria-label="search box" type="text" required className="appearance-none w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Search by title" />
                                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                                <button className="w-full flex items-center justify-center px-12 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                                    Search
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-purple-700 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-11/12 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-xl">
                                <div className="w-full md:w-1/5 relative z-10">
                                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                                        <div className="flex justify-center transform translate-y-1/2">
                                            <span className="bg-green-400 inline-flex w-full h-10 flex items-center justify-center text-center px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-white">
                                                Pushed To Feed
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-full w-full bg-green-400 rounded-lg rounded-r-none flex items-start">
                                        <img className="h-auto w-full shadow-2xl rounded-lg rounded-r-none rounded-b-none"
                                            src="https://cdn.so.fa.dog/thumbnails-int/76c3923c-0f5f-11eb-8a82-01bf9fcdf51b.jpg_43.jpg" alt="bag" />
                                    </div>

                                </div>
                                <div className="relative w-full h-full md:w-4/5 px-4 py-2 bg-white rounded-r-lg border-r-8 border-green-400">
                                    <div className="mb-4">
                                        <div className="w-full flex justify-end">
                                            <button className="px-2 py-1 bg-red-500 text-white rounded text-xs cursor-pointer">Remove Feed</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <h2 className="text-base text-gray-800 font-medium mr-auto">Illustrations and Animations Designed for Hip Hop Digital artist Ali Graham directs Anderson Paak's new video clip 'Jewelz' in collaboration with Vans jewelz.m4a 73.2 KB Download *pls use the 'digital art' templateSource: IG: lil_ye Visuals: YT:Anderson Paak</h2>
                                    </div>
                                    <div className="w-full mb-4">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>English</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Estonian</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>News Credits</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Visual Credits</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute mb-4 mr-4 bottom-0 inset-x-0">
                                        <div className="w-full space-x-2 flex justify-end">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                Local Estonian Content
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFW
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-purple-700 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-11/12 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-xl">
                                <div className="w-full md:w-1/5 relative z-10">
                                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                                        <div className="flex justify-center transform translate-y-1/2">
                                            <span className="bg-red-400 inline-flex w-full h-10 flex items-center justify-center text-center px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-white">
                                                Pushed To Feed
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-full w-full bg-red-400 rounded-lg rounded-r-none flex items-start">
                                        <img className="h-auto w-full shadow-2xl rounded-lg rounded-r-none rounded-b-none"
                                            src="https://cdn.so.fa.dog/thumbnails-int/76c3923c-0f5f-11eb-8a82-01bf9fcdf51b.jpg_43.jpg" alt="bag" />
                                    </div>

                                </div>
                                <div className="relative w-full h-full md:w-4/5 px-4 py-2 bg-white rounded-r-lg border-r-8 border-red-400">
                                    <div className="mb-4">
                                        <div className="w-full flex justify-end">
                                            <button className="px-2 py-1 bg-red-500 text-white rounded text-xs cursor-pointer">Remove Feed</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <h2 className="text-base text-gray-800 font-medium mr-auto">Illustrations and Animations Designed for Hip Hop Digital artist Ali Graham directs Anderson Paak's new video clip 'Jewelz' in collaboration with Vans jewelz.m4a 73.2 KB Download *pls use the 'digital art' templateSource: IG: lil_ye Visuals: YT:Anderson Paak</h2>
                                    </div>
                                    <div className="w-full mb-4">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>English</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Estonian</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>News Credits</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Visual Credits</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute mb-4 mr-4 bottom-0 inset-x-0">
                                        <div className="w-full space-x-2 flex justify-end">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                Local Estonian Content
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFW
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-purple-700 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-11/12 mx-auto flex-none float-left">
                            <div className="md:flex shadow-lg mx-6 md:mx-auto w-full h-xl">
                                <div className="w-full md:w-1/5 relative z-10">
                                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                                        <div className="flex justify-center transform translate-y-1/2">
                                            <span className="bg-red-400 inline-flex w-full h-10 flex items-center justify-center text-center px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-white shadow-lg">
                                                Pushed To Feed
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-full w-full bg-red-400 rounded-lg rounded-r-none flex items-start">
                                        <img className="h-auto w-full shadow-2xl rounded-lg rounded-r-none rounded-b-none"
                                            src="https://cdn.so.fa.dog/thumbnails-int/76c3923c-0f5f-11eb-8a82-01bf9fcdf51b.jpg_43.jpg" alt="bag" />
                                    </div>

                                </div>
                                <div className="relative w-full h-full md:w-4/5 px-4 py-2 bg-white rounded-r-lg border-r-8 border-red-400">
                                    <div className="py-2">
                                        <div className="w-full flex justify-end">
                                            <button className="px-2 py-1 bg-red-500 text-white rounded text-xs cursor-pointer">Remove Feed</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="w-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-5 text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <textarea id="about" rows={2} className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mb-4">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-2 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>English</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-2 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Estonian</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="p-4 shadow rounded border border-gray-300">
                                            <div className="block">
                                                <div className="border-b border-gray-200">
                                                    <nav className="flex -mb-px">
                                                        <a href="#" className="ml-8 group inline-flex items-center py-2 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700" aria-current="page">
                                                            <span>News Credits</span>
                                                        </a>
                                                        <a href="#" className="ml-8 group inline-flex items-center py-2 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            <span>Visual Credits</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                <div className="mt-4" role="group" aria-labelledby="teams-headline">
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                    <div className="group flex items-center px-3 text-xs leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
                                                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                                                        <span className="truncate">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute mb-4 mr-4 bottom-0 inset-x-0">
                                        <div className="w-full space-x-2 flex justify-end">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                Local Estonian Content
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFW
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                NSFL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-no-wrap justify-center">
                        <div className="w-1/12 mx-auto flex-none float-left">
                            <div className="bg-purple-700 p-1 h-32 w-1 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo