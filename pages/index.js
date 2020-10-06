import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout'
import Table from "../components/table/Table";
import DisplayInfo  from "../components/cardDisplay/DisplayInfo";
import { PriviewClipData }  from "../components/previewClip/PreviewClipData";
import { messageService,PreviewDataService } from '../pages/api/previewService';


export default function Home() {  
  const [showResults, setshowResults] = useState(false);
  const [clipData, setclipData] = useState();
  useEffect(() => { 
    const subscription2 = PreviewDataService.getData().subscribe(clip => {
      console.log(clip,"clipclipclipclipclip");
        if (clip) {  
          setshowResults(true);
          setclipData(clip);
            console.log(showResults,"showResults") ;  
        } else {          
          setshowResults(false);
        }
    });

    return subscription2.unsubscribe;
}, []);

  return (
    <div>
      <Layout>
        {/* <Table></Table> */}
        {/* <PriviewClipData /> */}
        { showResults ? <button onClick={(e) => setshowResults(false)}>back</button> : null }  
        { showResults ? <PriviewClipData  clipData = {clipData} /> : null }    
        { showResults ? null : <DisplayInfo/> }    
        {/* <DisplayInfo></DisplayInfo> */}
      </Layout>
    </div>
  )
}
