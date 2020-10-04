import Head from "next/head";
import React, { useState, useEffect } from "react";
import { PreviewDataService } from "./api/previewService";
import Link from "next/link";
import Router from "next/router";

const PreviewClip = () => {
  const [clipAll, setclipData] = useState(null);
   let datainfo = '';
   let data ='';
   let clipDataInfo= null;
  useEffect(() => {
   /// PreviewDataService.clearData();
   PreviewDataService.getData().subscribe(message => {

    datainfo  = message.value;
    console.log(datainfo,"datainfo");
    console.log(message.value);
    test();

 });
   
  });

  useEffect(() => {
      if(datainfo !=""){
       // setclipData(datainfo);      
        clipDataInfo  =  datainfo?.clips?.map((item, i) => (
            <>
            <li>
                 <div className="space-y-4">
                   <div className="relative pb-2/3">
                     <img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                   </div>
                 </div>
               </li>
            </>
           ));
    
       console.log(clipDataInfo,"clipDataInfo");
      }
   


  },[datainfo]);

  function test(){
    console.log(clipAll,"clipAll");
  }





 

 



  

  return (

<div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Our Video clips </h2>
        {/* <p className="text-xl leading-7 text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p> */}
      </div>
      <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {/* <li>
          <div className="space-y-4">
            <div className="relative pb-2/3">
              <img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
            </div>
          </div>
        </li>

        <li>
          <div className="space-y-4">
            <div className="relative pb-2/3">
              <img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
            </div>
          </div>
        </li> */}

         {datainfo != "" && (
              datainfo.clips.map((item, i) => (
                <>
                <li>
                     <div className="space-y-4">
                       <div className="relative pb-2/3">lllllllllllllllll
                         <img className="absolute object-cover h-full w-full shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                       </div>
                     </div>
                   </li>
                </>
               ))
         )}

       
      </ul>
    </div>
  </div>
</div>

  );
};

export default PreviewClip;