import Head from 'next/head'
import FormContainer  from '../../containers/FormContainer'
import Link from "next/link";
import Router from "next/router";



export default function Newentry() {
  return (
    <div>
        <div className="col-md-6">        
        <div class="mt-2 md:flex md:items-center md:justify-between">
          <div class="flex-2 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Create News Item
            </h2>
          </div>
          <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <span class="ml-3 shadow-sm rounded-md">
            <Link href="/">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
              >
               Fetch Data
              </button>
              </Link>
            </span>
          </div>
        </div>
        <FormContainer />
        </div>
     
    </div>
  )
}
