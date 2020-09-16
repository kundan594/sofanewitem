import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Table from '../table/Table'


const Layout = () => {
    useEffect(() => {
       
    },)
    return (
        <div>                      
            <Header></Header>      
            <div>
 

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
      News Items
      </h1>
      <button
    class="rounded-full text-gray-900"
    id=""
    aria-label="User menu"
    aria-haspopup="true"
    >
    Fetch  News Items
    </button>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">  
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
           <Table></Table>
        </div>
        
      </div>
      
     
    </div>
  </main>
</div>
              
        </div>
    )
}

export default Layout